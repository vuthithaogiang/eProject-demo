import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Feedback.module.scss';

const cx = classNames.bind(styles);

function FeedbackItem({ content, className }) {
    return (
        <div className={cx('feedback-item', className)}>
            <div className={cx('info')}>
                <img src={content.src} alt="" className={cx('avatar')} />
                <p className={cx('title')}>{content.name}</p>
                <p className={cx('desc')}>{content.desc}</p>
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
