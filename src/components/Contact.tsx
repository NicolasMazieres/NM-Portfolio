import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Contact() {
    return (
        <section className="contact-container" id="contact">
            <h2 className="section-title">Contact</h2>
            <p>Find me on LinkedIn or Github (links below) !</p>
            <div className="contact-logos-container">
                <a href="https://www.linkedin.com/in/nicolas-mazieres/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="contact-logo" color="#f2fcff" /></a>
                <a href="https://github.com/NicolasMazieres" target="_blank" rel="noopener noreferrer"><FaGithub className="contact-logo" color="#f2fcff" /></a>
            </div>
            <p>
                You can also join me at : <a href="mailto:nicolas.mazieres@outlook.com">nicolas.mazieres@outlook.com</a> !
            </p>
        </section>
    );
}

export default Contact;