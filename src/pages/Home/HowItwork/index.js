import classNames from 'classnames/bind';
import styles from './HowItWork.module.scss';
import images from '~/assets/images';
import Item from './Item';

const cx = classNames.bind(styles);

const data = {
    title: 'Free mirror fixings when shopping',
    desc: 'In order to ensure your new addition is secured safely to your walls, it’s important that you remember to obtain the correct fixtures and fittings for your new mirror!',
};

const data1 = {
    title: 'Fast, Free & Fully Delive',
    desc: 'Mirrors by MirrorOutlet provide free & fully insured nationwide delivery, ensuring that your mirror arrives safely and quickly.',
};

const data2 = {
    title: 'Get in touch with MirrorOutlet today',
    desc: 'If you would like more information on any of the mirrors that we sell, or if you would like advice on a mirror to best suit your space, get in touch with our team today.',
};

function HowItwork() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>How it works</h1>
                    <p className={cx('desc')}>
                        Exceptional dental care for all ages. your greate smile begins with a greate dentis
                    </p>
                </div>

                <div className={cx('list-item')}>
                    <Item icon={images.howwork1} title={data.title} desc={data.desc} />
                    <Item icon={images.howwork2} title={data1.title} desc={data1.desc} />
                    <Item icon={images.howwork3} title={data2.title} desc={data2.desc} />
                </div>
            </div>
        </div>
    );
}

export default HowItwork;
