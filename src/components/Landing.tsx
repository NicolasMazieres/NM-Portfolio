import { BsArrowDownCircle } from 'react-icons/bs';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

type Props = { handleArrowClick: React.MouseEventHandler<SVGElement> }

function Landing({ handleArrowClick }: Props) {
    const { t, i18n } = useTranslation();
    
    const handleClick = handleArrowClick;

    const handleLanguage = () => {
        if (i18n.language === "fr"){
            i18n.changeLanguage("en"); 
        }
        else if (i18n.language === "en"){
            i18n.changeLanguage("fr");
        }
      }

    return (
        <section className="landing-container">
            <div className="switch-button">
                <input id="language-toggle" onClick={handleLanguage} className="check-toggle check-toggle-round-flat" type="checkbox" />
                <label htmlFor="language-toggle"></label>
                <span className="on">FR</span>
                <span className="off">EN</span>
            </div>
            <p>
                {t('landingTitle.part1')}
                <br />
                {t('landingTitle.part2')}
            </p>
            <BsArrowDownCircle className='down-arrow' onClick={handleClick} />
        </section>
    );
}

export default Landing;