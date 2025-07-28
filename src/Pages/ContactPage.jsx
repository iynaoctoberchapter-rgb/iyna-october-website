import ContactForm from "../Components/ContactPage/ContactForm";
import HeroComponent from "../Components/ContactPage/HeroCopmonent";

function ContactPage() {
  return (
    <section className="body">
        <div className="body-content has-hero">
            <HeroComponent />
            <ContactForm />
        </div>
    </section>
  );
}

export default ContactPage;