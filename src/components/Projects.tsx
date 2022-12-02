function Projects() {
    const projects = [
        {
            name: "Recipes website",
            description: "This projet is an online adaptation of a family recipe book. The purpose was to create a nice website to bring the cooking recipes everywhere we go. It was also a way to learn many concepts of web development with React.",
            url: "/images/food-project.jpg",
            logos: [
                "/images/html-logo.png",
                "/images/css-logo.png",
                "/images/js-logo.png",
                "/images/react-logo.png"
            ]
        },
        {
            name: "Todo tutorial",
            description: "Premier projet avec react, tutoriel de MDN",
            url: "/images/todo-project.jpg",
            logos: [
                "/images/html-logo.png",
                "/images/css-logo.png",
                "/images/js-logo.png",
                "/images/react-logo.png"
            ]
        },
        {
            name: "Weather App",
            description: "Premier projet avec react, tutoriel de MDN",
            url: "/images/weather-project.jpg",
            logos: [
                "/images/html-logo.png",
                "/images/css-logo.png",
                "/images/ts-logo.png",
                "/images/react-logo.png"
            ]
        },
        {
            name: "Portfolio",
            description: "This is the website you are browsing right now ! It has been made in order to present my work but it was also a good practice project to learn how to make an as nice as posible website.",
            url: "/images/portfolio-project.jpg",
            logos: [
                "/images/html-logo.png",
                "/images/css-logo.png",
                "/images/ts-logo.png",
                "/images/react-logo.png"
            ]
        }
    ];

    const projectsList = projects.map((project, index) => {
        if (index % 2 === 0) {
            return (
                <div className="single-project-container" key={index}>
                    <div className="project-img-even">
                        <img src={`${project.url}`} alt={project.name} />
                    </div>
                    <h3 className="project-title-even">{project.name}</h3>
                    <p className="project-text-even">{project.description}</p>

                    <div className="logos-container">
                        {project.logos.map((logo, index) => {
                            return (
                                <img className="project-logos" src={logo} alt={`Logo n°${index}`} />
                            )
                        })}
                    </div>
                </div>);
        }
        else {
            return (
                <div className="single-project-container" key={index}>
                    <h3 className="project-title-odd">{project.name}</h3>
                    <p className="project-text-odd">{project.description}</p>
                    <div className="project-img-odd">
                        <img src={project.url} alt={project.name} />
                    </div>

                    <div className="logos-container">
                        {project.logos.map((logo, index) => {
                            return (
                                <img className="project-logos" src={logo} alt={`Logo n°${index}`} />
                            )
                        })}
                    </div>
                </div>);
        }
    })

    return (
        <section className="projects-container" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-list">
                {projectsList}
            </div>
        </section>
    );
}

export default Projects;