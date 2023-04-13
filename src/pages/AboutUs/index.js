import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AboutUs() {
    const markers = [
        {
            geocode: [48.86, 2.3522],
            popUp: 'Hello, We are Mirrors 1',
        },

        {
            geocode: [48.85, 2.3],
            popUp: 'Hello, We are Mirrors 2',
        },
        {
            geocode: [48.855, 2.322],
            popUp: 'Hello, We are Mirrors 3',
        },
        {
            geocode: [48.8566, 2.34],
            popUp: 'Hello, We are Mirrors 4',
        },
        {
            geocode: [48.855, 2.356],
            popUp: 'Hello, We are Mirrors 5',
        },
        {
            geocode: [48.9, 2.34],
            popUp: 'Hello, We are Mirrors 6',
        },
        {
            geocode: [48.89, 2.35],
            popUp: 'Hello, We are Mirrors 8',
        },
        {
            geocode: [48.889, 2.35],
            popUp: 'Hello, We are Mirrors 9',
        },
        {
            geocode: [48.889, 2.335],
            popUp: 'Hello, We are Mirrors 10',
        },
        {
            geocode: [48.89, 2.355],
            popUp: 'Hello, We are Mirrors 11',
        },
    ];

    const customIcon = new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/149/149059.png',
        iconSize: [38, 38],
    });

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-icon"> ${cluster.getChildCount()} </div>`,
            className: 'custom-marker-cluster',
            iconSize: point(33, 33, true),
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('keep-commerce-human')}>
                    <img src={images.human} />
                    <div>
                        <h2>Keep Commerce Human</h2>
                        <p>
                            Mirrors is the global marketplace for unique and creative goods. It’s home to a universe of
                            special, extraordinary items, from unique handcrafted pieces to vintage treasures.
                        </p>
                        <p>
                            In a time of increasing automation, it’s our mission to keep human connection at the heart
                            of commerce. That’s why we built a place where creativity lives and thrives because it’s
                            powered by people. We help our community of sellers turn their ideas into successful
                            businesses. Our platform connects them with millions of buyers looking for an alternative -
                            something special with a human touch, for those moments in life that deserve imagination.
                        </p>
                        <p>
                            As a company, we strive to lead with our guiding principles and to help spread ideas of
                            sustainability and responsibility whose impact can reach far beyond our own business.
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('team')}>
                <div className={cx('container')}>
                    <div className={cx('staff')}>
                        <p>Mirrors Staff</p>
                        <h2>Meet Our Leadership</h2>

                        <div className={cx('staff-list')}>
                            {/* item 1 */}
                            <article className={cx('staff-item')}>
                                <figure>
                                    <img className={cx('avatar')} src={images.staff1} alt="" />
                                </figure>
                                <p className={cx('staff-title')}>Chief Marketing Officer</p>
                                <h3 className={cx('staff-name')}>Meghan Samit</h3>
                            </article>

                            {/* item 2 */}
                            <article className={cx('staff-item')}>
                                <figure>
                                    <img className={cx('avatar')} src={images.staff2} alt="" />
                                </figure>
                                <p className={cx('staff-title')}>Chief Human Resources Officer</p>
                                <h3 className={cx('staff-name')}>Alissa Silva</h3>
                            </article>
                            {/* item 3 */}
                            <article className={cx('staff-item')}>
                                <figure>
                                    <img className={cx('avatar')} src={images.staff3} alt="" />
                                </figure>
                                <p className={cx('staff-title')}>Chief Technology Officer</p>
                                <h3 className={cx('staff-name')}>Cindy Harris</h3>
                            </article>
                            {/* item 4 */}
                            <article className={cx('staff-item')}>
                                <figure>
                                    <img className={cx('avatar')} src={images.staff4} alt="" />
                                </figure>
                                <p className={cx('staff-title')}>Chief Product Officer</p>
                                <h3 className={cx('staff-name')}>Lucas Tony</h3>
                            </article>
                        </div>

                        <h5>The people who work at Mirrors share the vision and values of our community.</h5>
                        <h5>
                            We’re driven by the idea that the best work is born from diligence, craftsmanship and fun.
                        </h5>
                    </div>
                </div>
            </div>

            <div className={cx('leaflet-container')}>
                <h2>Stores</h2>
                <MapContainer center={[48.8566, 2.3522]} zoom={12}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
                        {markers.map((marker, index) => (
                            <Marker key={index} position={marker.geocode} icon={customIcon}>
                                <Popup>
                                    <h3>{marker.popUp}</h3>
                                </Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>

            <div className={cx('latest-news')}>
                <div className={cx('container')}>
                    <header>
                        <div>
                            <h3>Latest News</h3>
                            <span>See more</span>
                        </div>
                        <p>
                            Mirrors has used, and intends to continue using, its investor relations website and the
                            Mirrors News Blog <span>(blog.mirrors.com/news) </span>
                            to disclose material non-public information and to comply with its disclosure obligations
                            under Regulation FD. Accordingly, you should monitor our investor relations website and the
                            Etsy News Blog in addition to following our press releases, SEC filings and public
                            conference calls and webcasts.
                        </p>
                    </header>
                    <div className={cx('news-list')}>
                        {/* item1 */}
                        <div className={cx('news-item')}>
                            <img src="https://s22.q4cdn.com/941741262/files/design/latest-news-1.jpg" alt="" />
                            <div>
                                <p>Mirrors to Participate in Upcoming Investor Conferences</p>
                                <p className={cx('date')}>February 23, 2023</p>
                            </div>
                        </div>

                        {/* item2 */}
                        <div className={cx('news-item')}>
                            <img src="https://s22.q4cdn.com/941741262/files/design/latest-news-2-new.jpg" alt="" />
                            <div>
                                <p>Mir, Inc. Reports Fourth Quarter and Full Year 2022 Results</p>
                                <p className={cx('date')}>February 22, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('commitment')}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <h3>Committing to a world of good</h3>
                        <p>
                            What does it mean to shop at Mirrors? It means that with every one-of-a-kind,
                            can’t-stop-talking-about-it, completely delightful item you buy, a wave of positive change
                            begins. From the small businesses, to the people behind them, to the planet around us – each
                            purchase creates an impact we can all be proud of. Learn more about our push for progress
                            and join us in committing to a world of good.
                        </p>
                    </div>

                    <video autoPlay muted loop playsInline className={cx('video')}>
                        <source
                            src="https://i.etsystatic.com/site-assets/impact/impact-page/header-hero.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </div>

                <div className={cx('purchase-protection')}>
                    <img src={images.hand} alt="" />
                    <div className={cx('content')}>
                        <p>
                            <strong>Buy confidently </strong>
                            with Mirrors's Purchase Protection program for buyers, get a full refund in the rare case
                            your item doesn't arrive, arrives damaged, or isn't as described.{' '}
                            <Link to="/purchase-protection">See eligibility</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('additional')}>
                <div className={cx('container')}>
                    <div>
                        <div className={cx('video')}>
                            <video autoPlay muted loop playsInline>
                                <source
                                    src="https://i.etsystatic.com/site-assets/impact/impact-page/content-bike.mp4"
                                    type="video/mp4"
                                ></source>
                            </video>
                        </div>

                        <div className={cx('content')}>
                            <h3>We believe makers and creatives everywhere deserve a shot at economic independence</h3>
                            <p>
                                The Mirrors Uplift Initiative is a series of programmes that opens doors and builds
                                opportunities for creative entrepreneurs everywhere. In 2021, Mirrors collected over 6.8
                                million total donations from buyers like you
                            </p>
                            <button>Read about the Mirrors Uplift Initiative</button>
                            <div>
                                <span>What's next?</span>
                                <p>
                                    Mirrors has also partnered with Nest, a non-profit focused on gender equity and
                                    economic inclusion for makers and artisans.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
