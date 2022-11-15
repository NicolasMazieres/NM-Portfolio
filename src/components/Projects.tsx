function Projects() {
    const projects = [
        {
            name: "ToDo tutorial",
            description: "Premier projet avec react, tutoriel de MDN",
            url: "./logo512.png"
        },
        {
            name: "Project 2",
            description: "Premier projet avec react, tutoriel de MDN",
            url: "./logo512.png"
        },
        {
            name: "Project 3",
            description: "Premier projet avec react, tutoriel de MDN",
            url: "./logo512.png"
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