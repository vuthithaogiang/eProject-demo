import classNames from "classnames/bind";
import styles from './HowItWork.module.scss';
import images from "~/assets/images";
import Item from "./Item";

const cx = classNames.bind(styles);

const data = {
    title: 'Search product',
    desc: 'Search a product by styles, colours, shapes or any thinhs else that you want. '
}

function HowItwork() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                <h1 className={cx('heading')}>How it works</h1>
                <p className={cx('desc')}>Exceptional dental care for all ages. your greate smile begins with a greate dentis</p>
            </div>

            <div className={cx('list-item')}>
                <Item  icon={images.howwork1} title={data.title} desc={data.desc}/>
                <Item  icon={images.howwork2} title={data.title} desc={data.desc}/>
                <Item  icon={images.howwork3} title={data.title} desc={data.desc}/>

            </div>

            </div>
        </div>
    )

    
}

export default HowItwork;