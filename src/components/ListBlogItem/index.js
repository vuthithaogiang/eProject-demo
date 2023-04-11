import BlogItem from '~/components/BlogItem';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './ListBlogItem.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const cx = classNames.bind(styles);
const data = {
    src: images.blog,
    date: '14 March 2023',
    desc: 'Description is here.....',
};
const data1 = {
    src: images.blog1,
    date: '22 November 2022',
    desc: 'Guest Bedroom Makeover ',
};
const data2 = {
    src: images.product17,
    date: '22 December 2022',
    desc: 'Description is here.....',
};
const data3 = {
    src: images.blog2,
    date: '22 November 2020',
    desc: 'Description is here.....',
};

const data4 = {
    src: images.blog3,
    date: '22 November 2022',
    desc: 'Description is here.....',
};
const data5 = {
    src: images.blog,
    date: '22 November 2022',
    desc: 'Description is here.....',
};

function ListBlogItem() {
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
        <Carousel
            responsive={responsive}
            containerClass={cx('carousel-container')}
            showDots={true}
            dotListClass={cx('style-dots')}
        >
            <BlogItem data={data} />
            <BlogItem data={data1} />
            <BlogItem data={data3} />
            <BlogItem data={data4} />
            <BlogItem data={data5} />
            <BlogItem data={data2} />
        </Carousel>
    );
}

export default ListBlogItem;
