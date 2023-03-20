import { useTranslation } from 'react-i18next';

function Projects() {
    const {t} = useTranslation();

    const projects = [
        {
            name: t("project-1-Title"),
            description: t("project-1-Text"),
            url: "./images/food-project.jpg",
            logos: [
                "./images/html-logo.png",
                "./images/css-logo.png",
                "./images/js-logo.png",
                "./images/react-logo.png"
            ],
            repoName: "Recettes-react"
        },
        {
            name: t("project-2-Title"),
            description: t("project-2-Text"),
            url: "./images/todo-project.jpg",
            logos: [
                "./images/html-logo.png",
                "./images/css-logo.png",
                "./images/js-logo.png",
                "./images/react-logo.png"
            ],
            repoName: "moz-todo-react"
        },
        {
            name: t("project-3-Title"),
            description: t("project-3-Text"),
            url: "./images/weather-project.jpg",
            logos: [
                "./images/html-logo.png",
                "./images/css-logo.png",
                "./images/ts-logo.png",
                "./images/react-logo.png"
            ],
            repoName: "Weather-API"
        },
        {
            name: t("project-4-Title"),
            description: t("project-4-Text"),
            url: "./images/portfolio-project.jpg",
            logos: [
                "./images/html-logo.png",
                "./images/css-logo.png",
                "./images/ts-logo.png",
                "./images/react-logo.png"
            ],
            repoName: "NM-Portfolio"
        },
        {
            name: t("project-5-Title"),
            description: t("project-5-Text"),
            url: "./images/bike-to-work.jpg",
            logos: [
                "./images/html-logo.png",
                "./images/css-logo.png",
                "./images/ts-logo.png",
                "./images/react-logo.png"
            ],
            repoName: "bike-to-work"
        }
    ];

    const projectsList = projects.map((project, index) => {
        if (index % 2 === 0) {
            return (
                <div className="single-project-container" key={index}>
                    <h3 className="project-title-even"><a href={`https://nicolasmazieres.github.io/${project.repoName}/`} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                    <p className="project-text-even">{project.description}</p>
                    <div className="project-img-even">
                        <img src={`${project.url}`} alt={project.name} />
                    </div>

                    <div className="logos-container">
                        {project.logos.map((logo, index) => {
                            return (
                                <img key= {index} className="project-logos" src={logo} alt={`Logo n°${index}`} />
                            )
                        })}
                    </div>
                </div>);
        }
        else {
            return (
                <div className="single-project-container" key={index}>
                    <h3 className="project-title-odd"><a href={`https://nicolasmazieres.github.io/${project.repoName}/`} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                    <p className="project-text-odd">{project.description}</p>
                    <div className="project-img-odd">
                        <img src={project.url} alt={project.name} />
                    </div>

                    <div className="logos-container">
                        {project.logos.map((logo, index) => {
                            return (
                                <img key= {index} className="project-logos" src={logo} alt={`Logo n°${index}`} />
                            )
                        })}
                    </div>
                </div>);
        }
    })

    return (
        <section className="projects-container" id="projects">
            <h2 className="section-title">{t("projectSectionTitle")}</h2>
            <div className="projects-list">
                {projectsList}
            </div>
        </section>
    );
}

export default Projects;