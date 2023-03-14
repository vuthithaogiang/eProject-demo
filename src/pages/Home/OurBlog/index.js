import classNames from 'classnames/bind';
import ListBlogItem from '~/components/ListBlogItem';
import styles from './OurBlog.module.scss';

const cx = classNames.bind(styles);

function OurBlog({ className }) {
    return (
        <div className={cx('wrapper', { className })}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>Our blog</h1>
                    <p className={cx('desc')}>Read our regular travel blog the latest update of tour and travel</p>
                </div>
            </div>
            <ListBlogItem />
        </div>
    );
}

export default OurBlog;
