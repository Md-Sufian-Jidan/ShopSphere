import ContactFAQ from "../ContactFAQ/ContactFAQ";
import ContactFormSection from "../ContactFormSection/ContactFormSection";
import ContactHero from "../ContactHero/ContactHero";
import ContactInfo from "../ContactInfo/ContactInfo";

const Contact = () => {
    return (
        <div>
            <ContactHero />
            <ContactInfo />
            <ContactFormSection />
            <ContactFAQ />
        </div>
    );
};

export default Contact;