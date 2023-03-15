//import Item from '~/components/Item';
//import Slider from '~/components/Slider/Slider';
import SliderImages from '~/components/SliderImages';
//import SliderProducts from '~/components/SliderProducts/SliderProducts';
import images from '~/assets/images';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import ListProduct from '~/components/ListProduct';
import ListBlogItem from '~/components/ListBlogItem';
import RenderAPI from '~/test/RenderAPI';
import AllProduct from '~/components/AllProduct';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function Products() {
    const data = {
        src: images.product1,
        title: 'The mirror vintage  ',
        rating: 4.5,
        desc: 'Get the best course, gain knowledge and shine for your future career.',
        price: 120.75,
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
        <div className={cx('wrapper')}>
            {/* <Slider />

            <SliderProducts /> */}

            {/* <SliderImages />

            {/* <ListProduct /> */}

            {/* <ListBlogItem /> */}

            {/* <RenderAPI /> */}

            <Sidebar />

            <div className={cx('content')}>
                <AllProduct />
                <RenderAPI />
                <ListProduct />
            </div>
        </div>
    );
}

export default Products;
