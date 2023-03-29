import classNames from 'classnames/bind';
import styles from './PurchaseProtection.modules.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function PurchaseProtection() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('main-content')}>
                    <img src={images.hand} alt="" />
                    <div className={cx('header-content')}>
                        <h2>Shop confidently with Mirrors's Purchase Protection program</h2>
                        <p>Get a full refund if your item doesn't arrive, arrives damaged, or isn't as described.</p>
                    </div>
                </div>
            </div>

            <div className={cx('body-content')}>
                <div className={cx('main-content')}>
                    <div className={cx('content')}>
                        <h3>Mirrors Purchase Protection</h3>
                        <p>
                            Easily get help in the rare case that something goes wrong when shopping from a small
                            business.
                        </p>
                        <div className={cx('list')}>
                            <p>What's eligible for Etsy Purchase Protection:</p>
                            <ul>
                                <li>Your order doesn't match the item description or photos</li>
                                <li>Your item arrived damaged</li>
                                <li>Your item didn't arrive or was lost in the mail</li>
                            </ul>
                        </div>
                    </div>

                    <img className={cx('thumb')} src={images.desc} alt="" />
                </div>
            </div>

            <div className={cx('feature')}>
                <h2>We’re ready to help if something goes wrong. Here’s how it works:</h2>
                <div className={cx('main-content')}>
                    <div className={cx('item')}>
                        <span>1</span>
                        <h3>Reach out to the Seller</h3>
                        <p>
                            Send a message to your seller from the ‘Help with order’ page if there’s an issue. Sellers
                            know their business best—by reaching out to them first they can try to resolve the issue
                            before Mirrors steps in.
                        </p>
                    </div>

                    <div className={cx('item')}>
                        <span>2</span>
                        <h3>Open a case for Mirrors to review</h3>
                        <p>
                            You’ll be eligible to open a case 48 hours after sending the original help request message
                            and the estimated delivery date has passed. After a case has been opened, Mirrors will step
                            in to review the details.
                        </p>
                    </div>

                    <div className={cx('item')}>
                        <span>3</span>
                        <h3>We’ll help you reach a resolution</h3>
                        <p>
                            If your order is eligible for Mirrors Purchase Protection, you’ll be refunded for your
                            purchase. Once the case is closed, you’ll receive an email confirmation.
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('questions')}>
                <div className={cx('main-content')}>
                    <h2>Have questions? We have answers!</h2>
                    <h3>What's aligible Mirrors Puchase Protection?</h3>
                    <p>The following issues are eligible:</p>
                    <ul>
                        <li>Your order doesn't match the item description or photos.</li>
                        <li>
                            For example, items shouldn't be a different color, size, or material than what's described
                            or shown in the photos. They also shouldn't have any missing parts or imperfections that
                            weren't originally noted.
                        </li>
                        <li>Your item arrived damaged.</li>
                        <li>Your item didn't arrive or was lost in the mail.</li>
                    </ul>

                    <p>
                        See full program details <strong>here</strong>. Otherwise, all sales are subject to the seller's
                        return policy. If you're unsatisfied with an order, you may be able to return or exchange your
                        order depending on the shop's policies. Learn more about sellers' return policies{' '}
                        <strong>here</strong>.
                    </p>

                    <h3>If I place a order using guest checkout, is it eligible for Mirrors Purchase Protection?</h3>
                    <p>
                        If you purchased an item using guest checkout, you'll need to create an Etsy account to claim
                        the order so it can be eligible for Etsy's Purchase Protection program. Learn more{' '}
                        <strong>here</strong>.
                    </p>

                    <h3>What does a case mean fo a seller?</h3>
                    <p>
                        We understand sometimes things don't go as expected, and the case system is designed for Etsy to
                        review the situation and do our best to find a resolution that works for both parties.
                        Occasional cases will not impact the shop.
                    </p>
                    <p>
                        If you're a seller, you can learn more about the program <strong>here</strong>.
                    </p>
                    <button className={cx('find-more')}>Find More Answers </button>
                    <div className={cx('separate')}></div>
                </div>
            </div>

            <div className={cx('subcribe')}>
                <div className={cx('main-content')}>
                    <h3>
                        Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling
                        on Mirrors. Enter your email
                    </h3>
                    <div>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subcribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseProtection;
