import classNames from 'classnames/bind';
import Carousel from 'react-multi-carousel';
import styles from './ListProduct.module.scss';
import Item from '~/components/Item';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ListProduct() {
    const data = {
        src: images.product18,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };
    const data1 = {
        src: images.product16,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };
    const data2 = {
        src: images.product17,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };
    const data3 = {
        src: images.product15,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };
    const data4 = {
        src: images.product14,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };
    const data5 = {
        src: images.product13,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };
    const data6 = {
        src: images.product12,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };
    const data7 = {
        src: images.product11,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Carousel containerClass={cx('carousel-container')} responsive={responsive}>
            <Item data={data} />
            <Item data={data1} />
            <Item data={data2} />
            <Item data={data3} />
            <Item data={data4} />
            <Item data={data5} />
            <Item data={data6} />
            <Item data={data7} />
        </Carousel>
    );
}

export default ListProduct;
