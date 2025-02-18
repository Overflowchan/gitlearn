import Heading from "../../common/Heading";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import "./style.scss";

function Contacts(props) {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            phone: form.phone,
            to_name: "IMKAT TRANSPORTATION INC",
            message: form.message,
        };

        emailjs.send('service_1xdvyko', 'template_syinb1m', templateParams, 'ogYmPmv0_vd-jKZo2')
            .then((result) => {
                toast.success('Email sent successfully!', {
                    position: "top-right",
                    theme: "colored",
                });
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            })
            .catch((error) => {
                toast.error(`Error happened - ${error}`, {
                    position: "top-right",
                    theme: "colored",
                });

            });
    };

    return (
        <div className="contacts-wrapper">
            <div className="left">
                <Heading size={1.5} title="Contacts" />

                <div className="info-section">
                    <h5>Ask us any question</h5>
                    <p>+1 (555) 123-4567</p>
                </div>

                <div className="info-section">
                    <h5>Email Address</h5>
                    <p>imkattransportation@gmail.com</p>
                </div>

                <div className="info-section">
                    <h5>Legal Address</h5>
                    <p>8450 HELSINKI WAY ANTELOPE, CA 95843</p>
                </div>
            </div>

            {/* form-control */}
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Full name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="tel"
                            placeholder="Phone (10 digits)"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <textarea
                            cols={30}
                            rows={5}
                            placeholder="Your message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-warning" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;