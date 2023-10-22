import DirectMailer from "../components/ContactPage/DirectMailer";
import MailForm from "../components/ContactPage/MailForm";

export default function Contatti() {
  return (
    <section id="contactPage" className="flex flex-col items-center">
      <div className="md:mt-34 mt-28 md:w-2/3 w-5/6">
        <MailForm />
      </div>
      <div className="md:mt-20 mt-10 md:w-2/3 w-5/6">
        <DirectMailer />
      </div>
    </section>
  );
}
