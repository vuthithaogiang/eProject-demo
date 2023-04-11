import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <h1 className={cx('title')}>Guest Bedroom Makeover to Welcome Spring</h1>
                <div className={cx('thumb-video')}>
                    <iframe
                        src="https://www.youtube.com/embed/omUv1YPSXow"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>

                <p className={cx('blog-desc')}>
                    A lot of family members are going to visit us this year so I'm determined to get the guest bedroom
                    done before spring.
                </p>

                <p className={cx('blog-desc')}>
                    The Bedroom for me is undoubtedly the most used room in the home, a place that is full of memories.
                </p>

                <p className={cx('blog-desc')}>So come on in to the heart of our home!</p>
                <p className={cx('blog-desc')}>Let me show you how I decorate and organize our Guest Bedroom.</p>

                <div className={cx('list-image')}>
                    <img
                        className={cx('')}
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676831526690-9E4AOH43IJIJCL0APR0A/Guest+Bedroom+Makeover+-+Her86m2+31.jpg?format=1500w"
                        alt=""
                    />

                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676831529237-OE5EDV8XYYMSHP0ZHD1Y/Guest+Bedroom+Makeover+-+Her86m2+34.jpg?format=1500w"
                        alt=""
                    />

                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676831640560-MA1JPSBX0UQFWOF4O1RG/Guest+Bedroom+Makeover+-+Her86m2+93.jpg?format=1500w"
                        alt=""
                    />

                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676831641073-KL1SWRSIM4MLQA1VHKX3/Guest+Bedroom+Makeover+-+Her86m2+84.jpg?format=1500w"
                        alt=""
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676838620231-H8MK8QFCCY7GJ73EQ0FC/Guest+Bedroom+Makeover+-+Her86m2+89.jpg?format=1500w"
                        alt=""
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676831679506-RD41TLF3I26RB507E73Q/Guest+Bedroom+Makeover+-+Her86m2+90.jpg?format=1500w"
                        alt=""
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676831684656-ZZUSHTJL95VMEX4AM4WP/Guest+Bedroom+Makeover+-+Her86m2+88.jpg?format=1500w"
                        alt=""
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676838556444-WKC8YHYF4257V4028MOK/Guest+Bedroom+Makeover+-+Her86m2+72.jpg?format=1500w"
                        alt=""
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676838558372-YT9FTKVD4HGI9ERXJBM5/Guest+Bedroom+Makeover+-+Her86m2+70.jpg?format=1500w"
                        alt=""
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676838581106-VMRURQ5ZKGGGOZA5NQ2X/Guest+Bedroom+Makeover+-+Her86m2+60.jpg?format=1500w"
                        alt=""
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676838561693-SL2KCMXX4U5IUTPFQO0J/Guest+Bedroom+Makeover+-+Her86m2+81.jpg?format=1500w"
                        alt=""
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676838778763-TYEGHWPPNLMTYMN2EY31/Guest+Bedroom+Makeover+-+Her86m2+82.jpg?format=1500w"
                        alt=""
                    />

                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1676841179917-623THID10TEXS7RJ5US2/Guest+Bedrooom+Makeover+-+Her86m2+_1.459.1.jpg?format=1500w"
                        alt=""
                    />
                </div>

                <div className={cx('subcribe')}>
                    <div className={cx('main-content')}>
                        <h3>
                            Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and
                            selling on Mirrors. Enter your email
                        </h3>
                        <div>
                            <input type="email" placeholder="Enter your email" />
                            <button>Subcribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
