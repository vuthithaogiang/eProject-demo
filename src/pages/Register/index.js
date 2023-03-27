import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from '~/api/axios';

const cx = classNames.bind(styles);
const REGISTER_URL = '/auth';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
    // handle Avatar
    const [previewAvatar, setPreviewAvartar] = useState(
        'https://files.fullstack.edu.vn/f8-prod/manual_uploads/htmlcss-pro/avatar-placeholder.webp',
    );

    useEffect(() => {
        //clean up
        return () => {
            URL.revokeObjectURL(previewAvatar);
        };
    }, [previewAvatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);
        setPreviewAvartar(file.preview);
    };

    const usernameRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMessage, setErrMesage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(username);
        console.log(result);
        console.log(username);
        setValidName(result);
    }, [username]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrMesage('');
    }, [username, email, password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PWD_REGEX.test(password);

        if (!v1 || !v2 || !v3) {
            setErrMesage('Invalid Entry');
            return;
        }

        try {
            const handleNewUser = await axios.get(`/auth?username=${username}&password=${password}&email=${email}`);
            console.log(handleNewUser.data);

            if (handleNewUser.data.length !== 0) {
                console.log('Username Taken');

                alert('Username Taken. Please Log in');
            } else {
                const response = await axios.post(
                    REGISTER_URL,
                    JSON.stringify({ username, email, password, picture: previewAvatar }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true,
                    },
                );
                console.log(response.data);

                console.log(JSON.stringify(response));
                setSuccess(true);
                alert('Sign Up sucessfully!');
            }
        } catch (error) {
            if (!error?.response) {
                setErrMesage('No server Response');
            } else if (error.response?.status === 409) {
                setErrMesage('Username Taken');
            } else {
                setErrMesage('Registration Failed!');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-register')}>
                <div className={cx('img-block')}>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1661623027751-V1IYRWTYQE5LJUBB1KE9/78+Work+From+Home+-+Her86m2+-+13.jpg?format=1500w"
                        alt=""
                        className={cx('image')}
                    />
                    <div className={cx('trend')}>
                        <div className={cx('row')}>
                            <strong className={cx('value')}>4,000+</strong>
                            <img className={cx('icon')} alt="" src={images.trend} />
                        </div>

                        <p className={cx('desc')}>By avarage for customers in San Francisco, CA</p>

                        <div className={cx('separate')}></div>

                        <div className={cx('avatar-block')}>
                            {/* Group 1 */}
                            <div className={cx('avatar-group')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt=""
                                />
                                <img
                                    className={cx('avatar')}
                                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?h=350&auto=compress&cs=tinysrgb"
                                    alt=""
                                />
                            </div>

                            {/* Group 2 */}
                            <div className={cx('avatar-group')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://images.pexels.com/photos/458517/pexels-photo-458517.jpeg?h=350&auto=compress&cs=tinysrgb"
                                    alt=""
                                />
                                <img
                                    className={cx('avatar')}
                                    src="https://randomuser.me/api/portraits/men/36.jpg"
                                    alt=""
                                />

                                <img
                                    className={cx('avatar')}
                                    src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52"
                                    alt=""
                                />
                                <div className={cx('avatar', 'avatar-1')}>FJ</div>
                            </div>

                            {/* Group 3 */}
                            <div className={cx('avatar-group')}>
                                <div className={cx('avatar', 'avatar-1')}>J</div>
                                <img
                                    className={cx('avatar')}
                                    src="https://randomuser.me/api/portraits/men/97.jpg"
                                    alt=""
                                />

                                <div className={cx('avatar', 'avatar-2')}>S</div>
                            </div>

                            {/* Group 4 */}
                            <div className={cx('avatar-group')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1661623152552-1AB8B4MDGPE0J8EQK8NN/78+Work+From+Home+-+Her86m2+-+8.jpg?format=750w"
                                    alt=""
                                />
                                <img
                                    className={cx('avatar')}
                                    src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1661625026532-5ZICTC7DLNJ44GVGFLKV/Work+From+Home+-+Tips+to+Stay+Productive+-+Her86m2+-+9.jpg?format=750w"
                                    alt=""
                                />

                                <img
                                    className={cx('avatar')}
                                    src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                                    alt=""
                                />
                                <div className={cx('avatar', 'avatar-3')}>JJ</div>
                            </div>

                            {/* Group 5 */}
                            <div className={cx('avatar-group')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                                    alt=""
                                />
                                <div className={cx('avatar', 'avatar-4')}>QV</div>
                            </div>

                            {/* Group 6 */}
                            <div className={cx('avatar-group')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                    alt=""
                                />
                                <img
                                    className={cx('avatar')}
                                    src="https://images.pexels.com/photos/325531/pexels-photo-325531.jpeg?h=350&auto=compress&cs=tinysrgb"
                                    alt=""
                                />
                            </div>

                            {/* Group 7 */}
                            <div className={cx('avatar-group')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://images.pexels.com/photos/235462/pexels-photo-235462.jpeg?h=350&auto=compress&cs=tinysrgb"
                                    alt=""
                                />
                                <div className={cx('avatar', 'avatar-5')}>IU</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('register-block')}>
                    <h2 className={cx('sub-title')}>{success ? 'Success' : 'Register'}</h2>
                    {success ? (
                        <Link to="/login">
                            <span className={cx('success-login')}>Login</span>
                        </Link>
                    ) : (
                        <>
                            <div className={cx('register-form')}>
                                <form onSubmit={handleSubmit}>
                                    {/* User name */}

                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="username">
                                            Username
                                        </label>
                                        <input
                                            ref={usernameRef}
                                            className={cx('form-input')}
                                            type="text"
                                            id="username"
                                            name="username"
                                            autoComplete="off"
                                            required
                                            onChange={(e) => setUsername(e.target.value)}
                                            aria-invalid={validName ? 'false' : 'true'}
                                            aria-describedby="uidnote"
                                            onFocus={() => setUsernameFocus(true)}
                                            onBlur={() => setUsernameFocus(false)}
                                        />

                                        <p
                                            id="uidnote"
                                            className={
                                                usernameFocus && username && !validName
                                                    ? cx('instructions')
                                                    : cx('offscreen')
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            4 to 24 characters.
                                            <br />
                                            Must begin with a letter.
                                            <br />
                                            Letters, numbers, underscores, hyphens allowed.
                                        </p>
                                    </div>

                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')}>Gender</label>

                                        <label className={cx('radio')} htmlFor="male">
                                            <input type="radio" name="gender" id="male" />
                                            Male
                                        </label>

                                        <label className={cx('radio')} htmlFor="female">
                                            <input type="radio" name="gender" id="female" />
                                            Female
                                        </label>

                                        <label className={cx('radio')} htmlFor="other">
                                            <input type="radio" name="gender" id="other" />
                                            Other
                                        </label>
                                    </div>

                                    {/* Email */}
                                    <div className={cx('form-group')}>
                                        <label htmlFor="email" className={cx('form-label')}>
                                            Email
                                        </label>

                                        <input
                                            className={cx('form-input')}
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="off"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                            aria-invalid={validEmail ? 'false' : 'true'}
                                            aria-describedby="eidnote"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                        <p
                                            id="eidnote"
                                            className={
                                                emailFocus && email && !validEmail
                                                    ? cx('instructions')
                                                    : cx('offscreen')
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            Email invalid.
                                        </p>
                                    </div>

                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="avatar">
                                            Avatar
                                        </label>
                                        <input
                                            type="file"
                                            id="avatar"
                                            name="avatar"
                                            hidden
                                            onChange={handlePreviewAvatar}
                                        />
                                        <label htmlFor="avatar">
                                            <img
                                                id="preview"
                                                className={cx('avatar-preview')}
                                                src={previewAvatar}
                                                alt=""
                                            />
                                        </label>
                                    </div>

                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="password"
                                            id="password"
                                            name="password"
                                            autoComplete="off"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                            aria-invalid={validPassword ? 'false' : 'true'}
                                            aria-describedby="pidnote"
                                            onFocus={() => setPasswordFocus(true)}
                                            onBlur={() => setPasswordFocus(false)}
                                        />
                                        <p
                                            id="pidnote"
                                            className={
                                                passwordFocus && password && !validPassword
                                                    ? cx('instructions')
                                                    : cx('offscreen')
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            8 to 24 characters.
                                            <br />
                                            Must include uppercase and lowercase letters, <br /> a number and a special
                                            character.
                                            <br />
                                            Allowed special characters: ! @ # $ %.
                                        </p>
                                    </div>

                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')} htmlFor="confirm-password">
                                            Confirm password
                                        </label>
                                        <input
                                            className={cx('form-input')}
                                            type="password"
                                            id="confirm-password"
                                            name="confirm-password"
                                            autoComplete="off"
                                            required
                                            onChange={(e) => setMatchPassword(e.target.value)}
                                            aria-invalid={validMatch ? 'false' : 'true'}
                                            aria-describedby="cpidnote"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />

                                        <p
                                            id="cpidnote"
                                            className={
                                                matchFocus && matchPassword && !validMatch
                                                    ? cx('instructions')
                                                    : cx('offscreen')
                                            }
                                        >
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            Must match the first password input field.
                                        </p>
                                    </div>

                                    <div className={cx('form-group')}>
                                        <button
                                            disabled={
                                                !validName || !validEmail || !validPassword || !validMatch
                                                    ? true
                                                    : false
                                            }
                                            className={cx('btn')}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <span>Already Registered? </span> <br />
                            <Button to="/login" text className={cx('log-in')}>
                                Log In
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Register;
