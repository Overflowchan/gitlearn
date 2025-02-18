import Heading from "../../common/Heading"
import AboutImg from "../../../assets/images/human-img.jpg"
import './style.scss'


function About(props) {
    return (
        <div className="about-section">
            <Heading size={2} title="About Us" />

            <div className="about-content">
                <img className="about-page-image" src={AboutImg} alt="About us" />
                <div className="info">
                    <p>Welcome to IMKAT TRANSPORTATION INC, a leading provider of transportation and logistics solutions for your business. We specialize in delivering high-quality freight services, ensuring efficiency and reliability at every stage of delivery.</p>
                    <p>Our strengths lie in our extensive industry experience and commitment to the highest service standards. We offer a diverse array of services, from international and domestic shipping to specialized transport solutions, all tailored to meet the unique needs of each client.</p>
                    <p>Partnering with us grants access to proven logistics strategies and the ability to customize transportation solutions that precisely align with specific business requirements.</p>
                    <p>Have questions? Ask us using the button below!</p>
                   <a href="/contacts"> <button className="btn btn-warning">Ask Now</button></a>
                </div>
            </div>
        </div>
    );
}

export default About;