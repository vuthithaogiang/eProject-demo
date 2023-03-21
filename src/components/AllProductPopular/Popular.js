import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classNames from 'classnames/bind';
import styles from './AllProduct.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);
    const getPopular = async () => {
        const check = localStorage.getItem('product');

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch('http://localhost:3000/products');
            const data = await api.json();

            console.log(data);
            localStorage.setItem('product', JSON.stringify(data));

            console.log(data);
        }
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
            <Link className={cx('main-title')}>Popular</Link>
            <Carousel
                containerClass={cx('container-carousel')}
                slidesToSlide={2}
                itemClass={cx('item-class')}
                responsive={responsive}
            >
                {popular.map((product) => (
                    <ItemCard
                        key={product.id}
                        name={product.name}
                        coverPhoto={product.photo}
                        desc={product.desc}
                        rating={product.rating}
                        price={product.price}
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default Popular;
