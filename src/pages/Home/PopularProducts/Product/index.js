import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import ProductItem from './ProductItem';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const data = [
    {
        src: images.product1,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
    {
        src: images.product2,
        title: 'The mirror vintage',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career. Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
    {
        src: images.product3,
        title: 'The mirror vintage',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
];

const data1 = [
    {
        src: images.product4,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
    {
        src: images.product5,
        title: 'The mirror vintage',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career. Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
    {
        src: images.product6,
        title: 'The mirror vintage',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
];

const data2 = [
    {
        src: images.product7,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
    {
        src: images.product8,
        title: 'The mirror vintage',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career. Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
    {
        src: images.product9,
        title: 'The mirror vintage',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    },
];

function Product({ className }) {
    const classNames = cx('wrapper', className);
    return (
        <div className={classNames}>
            <div className={cx('item')}>
                {data.map((item, index) => (
                    <ProductItem key={index} data={item} />
                ))}
            </div>

            <div className={cx('item')}>
                {data1.map((item, index) => (
                    <ProductItem key={index} data={item} />
                ))}
            </div>

            <div className={cx('item')}>
                {data2.map((item, index) => (
                    <ProductItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Product;
