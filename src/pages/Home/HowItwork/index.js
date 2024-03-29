import classNames from 'classnames/bind';
import styles from './HowItWork.module.scss';
import images from '~/assets/images';
import Item from './Item';

const cx = classNames.bind(styles);

const data = {
    title: 'Free mirror fixings when shopping',
    desc: 'Mirrors by MirrorOutlet provide free & fully insured nationwide delivery, ensuring that your mirror arrives safely and quickly.',
};

const data1 = {
    title: 'Fast, Free & Fully Delive',
    desc: 'Mirrors by MirrorOutlet provide free & fully insured nationwide delivery, ensuring that your mirror arrives safely and quickly.',
};

const data2 = {
    title: 'Get in touch with Mirrors today',
    desc: 'Mirrors by MirrorOutlet provide free & fully insured nationwide delivery, ensuring that your mirror arrives safely and quickly.',
};

function HowItwork() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>How it works</h1>
                    <p className={cx('desc')}>
                        Take care of your home, your great satisfaction is the driving force for us to develop
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
