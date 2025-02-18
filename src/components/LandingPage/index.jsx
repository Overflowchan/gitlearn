import About from "./About"
import Career from "./Career"
import Contacts from "./Contacts"
import Team from "./OurTeam"
import Blog from "./Blog"
import Faq from "./Faq"

import CarouselComponent from "../common/CarouselComponent"

import Marquee from "react-fast-marquee";

import "./style.scss"

import CarouselImage1 from "../../assets/images/carousel/CarouselImg1.jpg"
import CarouselImage2 from "../../assets/images/carousel/CarouselImg2.jpg"
import CarouselImage3 from "../../assets/images/carousel/CarouselImg3.jpg"
import CarouselImage4 from "../../assets/images/carousel/CarouselImg4.jpg"
import CarouselImage5 from "../../assets/images/carousel/CarouselImg5.jpg"
import CarouselImage6 from "../../assets/images/carousel/CarouselImg6.jpg"
import CarouselImage7 from "../../assets/images/carousel/CarouselImg7.jpg"
import CarouselImage8 from "../../assets/images/carousel/CarouselImg8.jpg"
import CarouselImage9 from "../../assets/images/carousel/CarouselImg9.jpg"
import CarouselImage10 from "../../assets/images/carousel/CarouselImg10.jpg"

function LandingPage() {
    const imgs = [CarouselImage1, CarouselImage2, CarouselImage3, CarouselImage4, CarouselImage5, CarouselImage6, CarouselImage7, CarouselImage8, CarouselImage9, CarouselImage10]

    return (
        <main className="landing-page-main-wrapper">
            <div className="carousel-wrapper">
                <CarouselComponent images={imgs} >
                    <h1>Our trucks earn your trust. Join us and feel the difference.</h1>
                    <p>We are committed to delivering reliable transportation solutions tailored to your needs. With a focus on efficiency and safety, we ensure timely deliveries and exceptional service. Our team at IMKAT TRANSPORTATION INC is dedicated to meeting the highest standards of professionalism and customer satisfaction. From local deliveries to complex logistics operations, we handle every aspect of transportation with precision and care.</p>
                    <p>Discover why IMKAT TRANSPORTATION INC is your partner of choice in logistics. With years of experience and a proven track record, we have built strong relationships with our clients based on trust and reliability. Whether you require regular shipments or specialized logistics solutions, we are here to provide seamless services that exceed your expectations.</p>
                    <p>At IMKAT TRANSPORTATION INC, we prioritize innovation and continuous improvement. We invest in state-of-the-art technology and training for our team to ensure we remain at the forefront of the industry. Our commitment to excellence drives us to deliver efficient, cost-effective, and environmentally sustainable transportation solutions.</p>
                </CarouselComponent>
            </div>

            <div className="about-wrapper">
                <About />
                <Marquee
                    pauseOnHover={true}
                    className="edit">
                    Professional transportation with guaranteed quality. Choose reliability with IMKAT TRANSPORTATON INC.
                </Marquee>
            </div>

            <div className="career-wrapper">
                <Career />

            </div>


            <div className="our-team-wrapper">
                <Team />
            </div>

            <div className="blog-wrapper">
                <Blog />
            </div>

            <div className="news-wrapper">
                <Faq />
            </div>


            <div className="our-contacts-wrapper">
                <Contacts />
            </div>

        </main>
    );
}

export default LandingPage;