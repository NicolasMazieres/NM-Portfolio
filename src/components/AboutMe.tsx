import pdf from "../cv-nm-2022.pdf";
import { TbChevronUpRight } from "react-icons/tb";
import { TbChevronDownLeft } from "react-icons/tb";

function AboutMe({ myref }: any) {
    return (
        <section className="about-container" id="about" ref={myref}>
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <h3 className="about-work-title">Work</h3>
                <p className="about-work-text">I am coming from a generalist engineering formation. <br /> <br />
                    After 4 yours in Environmental Engineering, I want to explore another domain that I love : Web Development (Front-End).
                    <br/> <br />
                    I work mostly with the following languages or technologies : <br /> HTML, CSS, JavaScript, ReactJS, Git
                    <br /> <br />
                    But I am always curious to learn new things!
                </p>
                <TbChevronUpRight className="logo-up-right" />
                <img className="portrait-picture" src="./images/nm-photo.jpg" alt="My portrait" />
                <a href={pdf} className="cv-link" download="CV-NicolasMAZIERES.pdf">Download my CV</a>
                <h3 className="about-passion-title">Passions</h3>
                <p className="about-passion-text">
                    I am a true sport lover : boardsports (surf, skate, ski), running, climbing and more !
                    <br /> <br />
                    I also love video games and, of course, I spend a lot of time learning web development with multiple projects.
                    <br /> <br />
                    Last but not least, I love cooking (but the true reason why I cook is because I just love food).
                </p>
                <div className="about-passion-logos">
                    <img src="./images/surf.png" alt="Surf" />
                    <img src="./images/skate.png" alt="Skate" />
                    <img src="./images/run.png" alt="Run" />
                    <img src="./images/climb.png" alt="Climb" />
                    <img src="./images/ski.png" alt="Ski" />
                    <img src="./images/food.png" alt="Food" />
                </div>
                <TbChevronDownLeft className="logo-down-left" />
            </div>
        </section>
    );
}

export default AboutMe;