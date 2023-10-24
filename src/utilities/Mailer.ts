export type MailOptions = {
  name: string;
  surname: string;
  company: string;
  text: string;
  subject: string;
};

export async function sendEmail(options: MailOptions) {
    console.log(options);
    await fetch("https://personal-webiste-apis.azurewebsites.net/",{
        method: "POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(options)
    }).then((res) => {
        console.log(res);
    })
}
