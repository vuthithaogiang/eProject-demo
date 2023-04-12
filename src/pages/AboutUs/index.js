import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import images from '~/assets/images';

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
                        In a time of increasing automation, it’s our mission to keep human connection at the heart of
                        commerce. That’s why we built a place where creativity lives and thrives because it’s powered by
                        people. We help our community of sellers turn their ideas into successful businesses. Our
                        platform connects them with millions of buyers looking for an alternative - something special
                        with a human touch, for those moments in life that deserve imagination.
                    </p>
                    <p>
                        As a company, we strive to lead with our guiding principles and to help spread ideas of
                        sustainability and responsibility whose impact can reach far beyond our own business.
                    </p>
                </div>
            </div>

            <div className={cx('team')}>
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
                    <h5>We’re driven by the idea that the best work is born from diligence, craftsmanship and fun.</h5>
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
        </div>
    );
}

export default AboutUs;
