import classNames from 'classnames/bind';
import styles from './BlogHero.module.scss';

const cx = classNames.bind(styles);

function BlogHero() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <h2 className={cx('title')}>Mirrors's aesthetics is exact what you are looking for.</h2>
            </div>
        </div>
    );
}

export default BlogHero;
