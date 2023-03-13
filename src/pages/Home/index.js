import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import Introduction from './Introduction';

import PopularProducts from './PopularProducts';
import Client from './Client';
import Feedback from './Feedback';
import Feature from './Feature';
import FeatureBelow from './FeatureBelow';
import ShoppingNow from './ShoppingNow';
import OurBlog from './OurBlog';
import HowItwork from './HowItwork';
import BlogQuote from './BlogQuote';
import BlogHero from './BlogHero';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Introduction />
            <Client />
            <PopularProducts />
            <Feedback />
            <Feature />
            <FeatureBelow />
            <BlogHero />

            <HowItwork />
            <BlogQuote title="So one day,I embarked on a new journey of collecting and recording the endless stream of memories and moments of our life. In words, and images." />
            <OurBlog />
            <ShoppingNow />
        </div>
    );
}

export default Home;
