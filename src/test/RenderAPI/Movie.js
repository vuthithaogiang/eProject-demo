import classNames from 'classnames/bind';
import styles from './RenderAPI.module.scss';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function Movie({ movie }) {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 2 }}
            layout
        >
            <h2 className={cx('title')}>{movie.title}</h2>
            <img className={cx('img')} src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
        </motion.div>
    );
}

export default Movie;
