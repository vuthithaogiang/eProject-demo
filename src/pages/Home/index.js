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
            <BlogQuote title="After silence, that which comes nearest to expressing the inexpressible is music." />
            <OurBlog />
            <ShoppingNow />
        </div>
    );
}

export default Home;
