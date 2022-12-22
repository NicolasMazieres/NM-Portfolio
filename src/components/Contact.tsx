import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <section className="contact-container" id="contact">
            <h2 className="section-title">{t("contactSectionTitle")}</h2>
            <p>{t("contactText.part1")}</p>
            <div className="contact-logos-container">
                <a href="https://www.linkedin.com/in/nicolas-mazieres/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="contact-logo" color="#f2fcff" /></a>
                <a href="https://github.com/NicolasMazieres" target="_blank" rel="noopener noreferrer"><FaGithub className="contact-logo" color="#f2fcff" /></a>
            </div>
            <p>
                {t("contactText.part2")} <a href="mailto:nicolas.mazieres@outlook.com">nicolas.mazieres@outlook.com</a> !
            </p>
        </section>
    );
}

export default Contact;