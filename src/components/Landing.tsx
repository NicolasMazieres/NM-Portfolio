import { BsArrowDownCircle } from 'react-icons/bs';

type Props = { handleArrowClick: React.MouseEventHandler<SVGElement> }

function Landing({ handleArrowClick }: Props) {
    const handleClick = handleArrowClick;

    return (
        <section className="landing-container">
            <div className="switch-button">
                <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" />
                <label htmlFor="language-toggle"></label>
                <span className="on">FR</span>
                <span className="off">EN</span>
            </div>
            <p>
                Hello, I'm Nicolas,
                <br />
                Welcome to my website !
            </p>
            <BsArrowDownCircle className='down-arrow' onClick={handleClick} />
        </section>
    );
}

export default Landing;