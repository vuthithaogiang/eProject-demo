import classNames from 'classnames/bind';
import styles from './BlogQuote.module.scss';

const cx = classNames.bind(styles);

function BlogQuote({ title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <h2 className={cx('title')}>{title}</h2>
            </div>
        </div>
    );
}

export default BlogQuote;
