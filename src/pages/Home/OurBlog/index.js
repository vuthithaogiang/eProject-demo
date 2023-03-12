import classNames from 'classnames/bind';
import images from '~/assets/images';
import BlogItem from './BlogItem';
import styles from './OurBlog.module.scss';

const cx = classNames.bind(styles);

function OurBlog({ childen, className }) {
    const dataItem = {
        date: '21 November 2022',
        desc: 'How to become a pro web designer 2022 and get remote job?',
    };
    return (
        <div className={cx('wrapper', { className })}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>Our blog</h1>
                    <p className={cx('desc')}>Read our regular travel blog the latest update of tour and travel</p>
                </div>

                <div className={cx('list-item')}>
                    <BlogItem src={images.product13} date={dataItem.date} desc={dataItem.desc} />
                    <BlogItem src={images.product14} date={dataItem.date} desc={dataItem.desc} />
                    <BlogItem src={images.product15} date={dataItem.date} desc={dataItem.desc} />

                    <BlogItem src={images.product13} date={dataItem.date} desc={dataItem.desc} />
                    <BlogItem src={images.product14} date={dataItem.date} desc={dataItem.desc} />
                    <BlogItem src={images.product15} date={dataItem.date} desc={dataItem.desc} />

                    <BlogItem src={images.product13} date={dataItem.date} desc={dataItem.desc} />
                    <BlogItem src={images.product14} date={dataItem.date} desc={dataItem.desc} />
                    <BlogItem src={images.product15} date={dataItem.date} desc={dataItem.desc} />
                </div>

                <div className={cx('slider-bar')}>
                    <span className={cx('active')}></span>
                    <span></span>
                    <span></span>
                </div>
                {childen}
            </div>
        </div>
    );
}

export default OurBlog;
