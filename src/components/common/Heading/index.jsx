import HeadingLogo from '../../../assets/icons/heading-logo.png';
import './style.scss';

function Heading(props) {
    const desireSize = props.size || 1
    const fontSize = (48 / desireSize) + "px"

    return (
        <div className="heading-wrapper">
            <img src={HeadingLogo} alt="Heading logo" />
            <h1 style={{ fontSize: fontSize }}>{props.title}</h1>
        </div>
    );
}

export default Heading;