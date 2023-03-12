import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './FeatureBelow.module.scss';
import images from '~/assets/images';
import ProductItem from '../PopularProducts/Product/ProductItem';
const cx = classNames.bind(styles);

const data = [
    {
        src: images.product10,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
    {
        src: images.product12,
        title: 'The mirror vintage',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
];
function FeatureBelow() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>Handmade Wall Mirror</h1>

                    <Button className={cx('btn-view-all')} text>
                        View All Items
                    </Button>

                    <div className={cx('actions-btn')}>
                        <button className={cx('back')}>
                            <img src={images.backIcon} alt="" />
                        </button>
                        <button className={cx('next')}>
                            <img src={images.nextIcon} alt="" />
                        </button>
                    </div>
                </div>

                <div className={cx('list-products')}>
                    {data.map((item, index) => (
                        <ProductItem key={index} data={item} className={cx('item')} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeatureBelow;
