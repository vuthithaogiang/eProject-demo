import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { motion } from 'framer-motion';
const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={cx('wrapper-item')}
        >
            <img src={data.photo} alt="" className={cx('thumb')} />

            <div className={cx('info')}>
                <div className={cx('head')}>
                    <h3 className={cx('title')}>
                        <a className={cx('line-clamp')}>{data.name}</a>
                    </h3>

                    <div className={cx('rating')}>
                        <img src={images.starIcon} alt="" className={cx('star')} />
                        <span className={cx('value')}>{data.rating}</span>
                    </div>
                </div>

                <p className={cx('desc')}>{data.desc}</p>

                <div className={cx('foot')}>
                    <span className={cx('price')}>
                        ${data.price - (data.price * data.sale) / 100} {data.sale > 0 && <del>${data.price}</del>}
                    </span>
                    <Button rounded>Shop Now</Button>
                </div>
            </div>
        </motion.div>
    );
}

export default Item;
