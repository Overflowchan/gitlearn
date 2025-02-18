import React from 'react';
import Heading from '../../common/Heading';
import Stability from '../../../assets/icons/stability-icon.png';
import Sustainability from '../../../assets/icons/sustainbility.png';
import Team from '../../../assets/icons/team.png';
import Reputation from '../../../assets/icons/reputation.png';
import './style.scss'; // Импорт файла стилей

function Career(props) {
    return (
        <div className="career-wrapper">
            <div className="career-section">
                <Heading size={2} title="Career" />

                <div className="four-divs">
                    <div className="value stability">
                        <img src={Stability} alt="stability-img" />
                        <div className="right-info">
                            <h2>Our Company's Stability</h2>
                            <p>Stability is at the core of our operations. With a solid foundation built on years of experience in the transportation industry, we pride ourselves on reliability, consistency, and resilience.</p>
                        </div>
                    </div>

                    <div className="value sustainability">
                        <img src={Sustainability} alt="sustainability-img" />
                        <div className="right-info">
                            <h2>Sustainability</h2>
                            <p>Sustainability is a cornerstone of our operations. We recognize the importance of minimizing our environmental footprint while delivering exceptional transportation services.</p>
                            <p>Fuel Efficiency: We invest in fuel-efficient vehicles and technologies to reduce emissions and conserve resources.</p>
                        </div>
                    </div>

                    <div className="value team">
                        <img src={Team} alt="team-img" />
                        <div className="right-info">
                            <h2>Our Team</h2>
                            <p>Our team is the backbone of our success. Comprised of dedicated professionals with extensive experience in logistics and transportation, we work together seamlessly to deliver exceptional service and exceed client expectations.</p>
                        </div>
                    </div>

                    <div className="value reputation">
                        <img src={Reputation} alt="reputation-img" />
                        <div className="right-info">
                            <h2>Reputation</h2>
                            <p>Our reputation is built on a foundation of reliability, professionalism, and commitment to excellence in the transportation industry. With years of dedicated service, we have earned the trust of our clients and partners alike.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Career;
