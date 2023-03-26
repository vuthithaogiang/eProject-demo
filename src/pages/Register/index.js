import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
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
                    <h2 className={cx('sub-title')}>Register</h2>
                    <div className={cx('register-form')}>
                        <form method="post" action="">
                            <div className={cx('form-group')}>
                                <label className={cx('form-label')} htmlFor="avatar">
                                    Avatar
                                </label>
                                <input type="file" id="avatar" name="avatar" hidden onChange={handlePreviewAvatar} />
                                <label htmlFor="avatar">
                                    <img id="preview" className={cx('avatar-preview')} src={previewAvatar} alt="" />
                                </label>
                            </div>
                            <div className={cx('form-group')}>
                                <label className={cx('form-label')} htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    id="username"
                                    name="username"
                                    autoComplete="off"
                                    required
                                />
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
                                    autoComplete="off"
                                    required
                                />
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
                                />
                            </div>

                            <div className={cx('form-group')}>
                                <button className={cx('btn')} type="submit" onClick={(e) => e.preventDefault()}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                    <span>Already Registered? </span> <br />
                    <Button to="/login" text className={cx('log-in')}>
                        Log In
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Register;
