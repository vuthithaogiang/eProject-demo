import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import axios from '~/api/axios';

const cx = classNames.bind(styles);

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_REGEX = /^[0-9\-\+]{9,15}$/;
const MESSAGE_REGEX = /[0-9a-zA-Z]{6,}/;

const FEEDBACK_URL = '/feedback';

function FeedbackForm() {
    const firstNameRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [emailValid, setEmailValid] = useState(false);

    const [phone, setPhone] = useState('');
    const [phoneValid, setPhoneValid] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [message, setMessage] = useState('');
    const [messageValid, setMessageValid] = useState(false);
    const [messageFocus, setMessageFocus] = useState(false);

    const [type, setType] = useState('');
    const [checked, setCheckked] = useState(false);

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(firstName);
        // console.log(result);
        // console.log(firstName);
        setValidFirstName(result);
    }, [firstName]);

    useEffect(() => {
        const result = USER_REGEX.test(lastName);

        setValidLastName(result);
    }, [lastName]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);

        setEmailValid(result);
    }, [email]);

    useEffect(() => {
        const result = PHONE_REGEX.test(phone);

        setPhoneValid(result);
    }, [phone]);

    useEffect(() => {
        const result = MESSAGE_REGEX.test(message);

        setMessageValid(result);
    }, [message]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                FEEDBACK_URL,
                JSON.stringify({ firstName, lastName, email, phone, type, message }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                },
            );
            console.log(response.data);

            console.log(JSON.stringify(response));
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
            setPhone('');
            alert('Send messgage sucessfully!');
        } catch (error) {
            if (!error?.response) {
                console.log('No server Response');
            } else if (error.response?.status === 409) {
                console.log('Message Taken');
            } else {
                console.log('Request Failed!');
            }
        }

        // console.log(firstName, lastName, email, phone, type, message);
    };

    return (
        <main className={cx('wrapper')}>
            <div className={cx('container-feedback')}>
                <div className={cx('heading')}>
                    <h1>Contact Us</h1>
                    <p>Any question or remarks? Just write us a message!</p>
                </div>

                <div className={cx('container')}>
                    <section className={cx('contact-info')}>
                        <h2>Contact Information</h2>
                        <p className={cx('desc')}>
                            Fill up the form and our Team will get back to you within 24 hours.
                        </p>

                        <div className={cx('info-item')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <span className={cx('value')}>(541) 772-8846 </span>
                        </div>

                        <div className={cx('info-item')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span className={cx('value')}>hello@mirror.com</span>
                        </div>

                        <div className={cx('info-item')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <span className={cx('value')}>102 Street 2714 Don</span>
                        </div>

                        <div className={cx('socials')}>
                            <a href="#!" className={cx('item')}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#!" className={cx('item')}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#!" className={cx('item')}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#!" className={cx('item')}>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>

                        <div className={cx('circle')}></div>
                        <div className={cx('circle-large')}></div>
                    </section>

                    {/* Contact form */}

                    <div className={cx('contact-form')}>
                        <form action="" autoComplete="off" onSubmit={handleSubmit}>
                            <div className={cx('form-row')}>
                                <div className={cx('form-group')}>
                                    <label htmlFor="first-name" className={cx('form-label')}>
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        ref={firstNameRef}
                                        name="first-name"
                                        className={cx('form-input')}
                                        id="first-name"
                                        placeholder="Enter first name"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onFocus={() => setFirstNameFocus(true)}
                                        onBlur={() => setFirstNameFocus(false)}
                                    />

                                    {firstNameFocus && firstName && !validFirstName && (
                                        <p className={cx('form-error')}>Please enter first name 4 to 24 characters.</p>
                                    )}
                                </div>

                                <div className={cx('form-group')}>
                                    <label htmlFor="last-name" className={cx('form-label')}>
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        className={cx('form-input')}
                                        id="last-name"
                                        placeholder="Enter last name"
                                        required
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastName}
                                        onFocus={() => setLastNameFocus(true)}
                                        onBlur={(e) => setLastNameFocus(false)}
                                    />
                                    {lastNameFocus && lastName && !validLastName && (
                                        <p className={cx('form-error')}>Please enter last name 4 to 24 characters.</p>
                                    )}
                                </div>
                            </div>

                            <div className={cx('form-row')}>
                                <div className={cx('form-group')}>
                                    <label htmlFor="mail" className={cx('form-label')}>
                                        Mail
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className={cx('form-input')}
                                        id="mail"
                                        placeholder="Enter email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                    />
                                    {emailFocus && email && !emailValid && (
                                        <p className={cx('form-error')}>Please enter valid email.</p>
                                    )}
                                </div>

                                <div className={cx('form-group')}>
                                    <label htmlFor="phone" className={cx('form-label')}>
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className={cx('form-input')}
                                        id="phone"
                                        placeholder="Enter phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                        onFocus={() => setPhoneFocus(true)}
                                        onBlur={() => setPhoneFocus(false)}
                                    />

                                    {phoneFocus && phone && !phoneValid && (
                                        <p className={cx('form-error')}>Please enter phone valid.</p>
                                    )}
                                </div>
                            </div>

                            <div className={cx('form-row')}>
                                <div className={cx('form-group')}>
                                    <label className={cx('form-label', 'large')}>
                                        What the information do you need?
                                    </label>
                                    <div className={cx('radio-group')}>
                                        <div className={cx('radio-btn')}>
                                            <input
                                                type="radio"
                                                name="type"
                                                id="how-to-order"
                                                value="how-to-order"
                                                required
                                                onChange={(e) => setType(e.target.value)}
                                                onClick={() => setCheckked(true)}
                                            />
                                            <label htmlFor="how-to-order">How to order?</label>
                                        </div>

                                        <div className={cx('radio-btn')}>
                                            <input
                                                type="radio"
                                                name="type"
                                                id="new-arrival"
                                                value="new-arrival"
                                                required
                                                onChange={(e) => setType(e.target.value)}
                                                onClick={() => setCheckked(true)}
                                            />
                                            <label htmlFor="new-arrival">New arrival</label>
                                        </div>

                                        <div className={cx('radio-btn')}>
                                            <input
                                                type="radio"
                                                name="type"
                                                id="shipping"
                                                value="shipping"
                                                required
                                                onChange={(e) => setType(e.target.value)}
                                                onClick={() => setCheckked(true)}
                                            />
                                            <label htmlFor="shipping">Shipping</label>
                                        </div>

                                        <div className={cx('radio-btn')}>
                                            <input
                                                type="radio"
                                                name="type"
                                                id="other"
                                                required
                                                value="other"
                                                onChange={(e) => setType(e.target.value)}
                                                onClick={() => setCheckked(true)}
                                            />
                                            <label htmlFor="other">Other</label>
                                        </div>
                                    </div>
                                    {/* {checked === false && <p className={cx('form-error')}>Please enter this filed.</p>} */}
                                </div>
                            </div>

                            <div className={cx('form-row')}>
                                <div className={cx('form-group')}>
                                    <label className={cx('form-label')} htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className={cx('form-textarea')}
                                        name="message"
                                        placeholder="Write your message..."
                                        required
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        onFocus={() => setMessageFocus(true)}
                                        onBlur={() => setMessageFocus(false)}
                                    ></textarea>

                                    {messageFocus && message && !messageValid && (
                                        <p className={cx('form-error')}>Please enter message least 6 characters.</p>
                                    )}
                                </div>
                            </div>

                            <div className={cx('form-row')}>
                                <button
                                    disabled={
                                        !validFirstName ||
                                        !validLastName ||
                                        !emailValid ||
                                        !phoneValid ||
                                        checked === false
                                            ? true
                                            : false
                                    }
                                    className={cx('submit-btn')}
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FeedbackForm;
