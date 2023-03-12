import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Feedback.module.scss';

const cx = classNames.bind(styles);

function FeedbackItem({ content }) {
    return (
        <div className={cx('feedback-item')}>
            <div className={cx('info')}>
                <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="" className={cx('avatar')} />
                <p className={cx('title')}>{content.name}</p>
                <p className={cx('desc')}>{content.desc}</p>
                <div className={cx('dots')}>
                    <span className={cx('dot-active')}></span>
                    <span className={cx('dot')}></span>
                    <span className={cx('dot')}></span>
                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('open-quotes')}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <blockquote>{content.blockquote}</blockquote>
                <div className={cx('close-quotes')}>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
            </div>
        </div>
    );
}

export default FeedbackItem;
