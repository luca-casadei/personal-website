export type MailOptions = {
  name: string;
  surname: string;
  company: string;
  text: string;
  subject: string;
  email: string;
};

export async function sendEmail(options: MailOptions): Promise<Response> {
    return await fetch("https://personal-website-apis.azurewebsites.net/send",{
        method: "POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(options),
    }).then((res: Response) => {
        return res;
    })
}
