function Projects() {
    const projects = [
        {
            name: "Recipes website",
            description: "This projet is an online adaptation of a family recipe book. The purpose was to create a nice website to bring the cooking recipes everywhere we go. It was also a way to learn many concepts of web development with React.",
            url: "/images/food-project.jpg"
        },
        {
            name: "Todo tutorial",
            description: "Premier projet avec react, tutoriel de MDN",
            url: "/images/todo-project.jpg"
        },
        {
            name: "Weather App",
            description: "Premier projet avec react, tutoriel de MDN",
            url: "/images/weather-project.jpg"
        }
    ];

    const projectsList = projects.map((project, index) => {
        if (index % 2 === 0) {
            return (
                <div className="single-project-container" key={index}>
                    <img className="project-img-even" src={`${project.url}`} alt={project.name} />
                    <h3 className="project-title-even">{project.name}</h3>
                    <p className="project-text-even">{project.description}</p>
                </div>);
        }
        else {
            return (
                <div className="single-project-container" key={index}>
                    <h3 className="project-title-odd">{project.name}</h3>
                    <p className="project-text-odd">{project.description}</p>
                    <img className="project-img-odd" src={project.url} alt={project.name} />
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