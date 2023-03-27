import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import React, { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '~/contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from '~/api/axios';

const cx = classNames.bind(styles);

function Login() {
    const { setAuth } = useContext(AuthContext);
    const usernameRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    // useEffect(() => {
    //     setErrorMessage('');
    // }, [username, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/auth?username=${username}&password=${password}`);
            console.log(response.data);
            console.log(response.data[0]);

            if (typeof response.data[0] === 'undefined') {
                setErrorMessage('Error username or password!');
            } else {
                setErrorMessage('');
                setAuth(response.data[0]);
                setSuccess(true);
            }

            setUsername('');
            setPassword('');
            // setSuccess(true);
        } catch (error) {
            if (!error?.response) {
                setErrorMessage('No Server Response');
            } else if (error.response?.status === 400) {
                setErrorMessage('Missing username or password');
            }

            errorRef.current.focus();
        }
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (success === true) {
            navigate('/');
        }
    }, [success]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-login')}>
                <div className={cx('img-block')}>
                    <img
                        className={cx('image')}
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1661623027751-V1IYRWTYQE5LJUBB1KE9/78+Work+From+Home+-+Her86m2+-+13.jpg?format=1500w"
                        alt=""
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

                <div className={cx('form-block')}>
                    <h2 className={cx('sub-title')}>Welcome to Mirrors.</h2>
                    <div className={cx('login-form')}>
                        <form onSubmit={handleSubmit}>
                            <div className={cx('form-group')}>
                                <label className={cx('form-label')} htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className={cx('form-input')}
                                    ref={usernameRef}
                                    type="text"
                                    id="username"
                                    name="username"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                />
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
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <div className={cx('checkbox')}>
                                    <input type="checkbox" name="remember" id="remember" hidden />
                                    <label htmlFor="remember"> Remember me</label>
                                </div>
                            </div>

                            <p
                                ref={errorRef}
                                className={errorMessage ? cx('error-message') : cx('offscreen')}
                                aria-live="assertive"
                            >
                                {errorMessage}
                            </p>

                            <div className={cx('form-group')}>
                                <button className={cx('btn')}>Log In</button>
                            </div>
                        </form>
                    </div>
                    <span>Haven't Account? </span> <br />
                    <Button to="/register" text className={cx('sign-up')}>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
