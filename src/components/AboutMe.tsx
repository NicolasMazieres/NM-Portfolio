import pdf from "../cv-nm-2022.pdf"

function AboutMe({myref}:any) {
    return (
        <section className="about-container" id="about" ref={myref}>
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-item">
                    <h3>Work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="about-item">
                    <img className="portrait-picture" src="./images/nm-photo.jpg" alt="My portrait" />
                    <a href={pdf} className="cv-link" download="CV-NicolasMAZIERES.pdf">Download my CV</a>
                </div>
                <div className="about-item">
                    <h3>Passions</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;