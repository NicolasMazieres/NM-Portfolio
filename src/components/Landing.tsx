import { BsArrowDownCircle } from 'react-icons/bs';

type Props = { handleArrowClick: React.MouseEventHandler<SVGElement> }

function Landing({handleArrowClick}: Props) {
    const handleClick = handleArrowClick;

    return (
        <section className="landing-container">
            <p>
                Hello, I'm Nicolas,
                <br />
                Welcome to my website !
            </p>
            <BsArrowDownCircle className='down-arrow' onClick={handleClick}/>
        </section>
    );
}

export default Landing;