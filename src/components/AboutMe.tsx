import pdf from "../cv-nm-2023.pdf";
import { TbChevronUpRight } from "react-icons/tb";
import { TbChevronDownLeft } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

function AboutMe({ myref }: any) {
    const { t } = useTranslation();

    return (
        <section className="about-container" id="about" ref={myref}>
            <h2 className="section-title">{t("aboutSectionTitle")}</h2>
            <div className="about-content">
                <h3 className="about-work-title">{t("aboutWorkTitle")}</h3>
                <p className="about-work-text">
                    {t("aboutWorkText.part1")} <br /> <br />
                    {t("aboutWorkText.part2")} <br /> <br />
                    {t("aboutWorkText.part3")} <br /> <br />
                    {t("aboutWorkText.part4")}
                </p>
                <TbChevronUpRight className="logo-up-right" />
                <img className="portrait-picture" src="./images/nm-photo.jpg" alt="My portrait" />
                <a href={pdf} className="cv-link" download="CV-NicolasMAZIERES.pdf">{t("downloadCVButton")}</a>
                <h3 className="about-passion-title">{t("aboutPassionTitle")}</h3>
                <p className="about-passion-text">
                    {t("aboutPassionText.part1")} <br /> <br />
                    {t("aboutPassionText.part2")} <br /> <br />
                    {t("aboutPassionText.part3")}
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