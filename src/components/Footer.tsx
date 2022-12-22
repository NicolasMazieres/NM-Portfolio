import { useTranslation } from 'react-i18next';

function Footer() {
    const {t} = useTranslation();

    return (
        <footer>
            <p>{t("footerText.part1")}</p>
            <div>
                <a href="https://fr.freepik.com/photos-gratuite/beau-paysage-sentier-dans-foret-arbres-couverts-givre_16937996.htm#query=background%20forest&position=1&from_view=search&track=sph">Wirestock image</a>  {t("footerText.part2")}
            </div>
        </footer>
    );
}

export default Footer;