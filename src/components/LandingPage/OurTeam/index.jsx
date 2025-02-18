import Heading from "../../common/Heading"
import Team from '../../../assets/images/team-img.jpg';
// team-img.jpg
import "./style.scss"

function OurTeam(props) {
    return (
        <section className="team-section-content-wrapper">
            <Heading size={2} title="Our Team" />
            <div className="value team">
                <img src={Team} alt="team-img" />
                <div className="right-info">
                    <h2>Become a Part of Us</h2>
                    <br />
                    <p>Welcome to IMKAT TRANSPORTATION INC, where our team embodies a commitment to excellence and a spirit of camaraderie. We take pride in delivering top-notch transportation solutions with a personal touch. Our team is not just skilled professionals but also warm-hearted individuals who are passionate about what they do.</p>
                    <p>At IMKAT TRANSPORTATION INC, teamwork is at the heart of everything we do. From our drivers on the road to our support staff behind the scenes, each member plays a crucial role in ensuring smooth operations and exceptional service. We value collaboration, integrity, and a customer-first approach, which sets us apart in the industry.</p>
                    <p>Whether you're looking for reliable logistics solutions or seeking a career with a supportive team, you can trust IMKAT TRANSPORTATION INC to exceed your expectations. Join us on our journey to deliver excellence, driven by a team that cares.</p>
            </div>
        </div>
        </section >
    );
}

export default OurTeam;