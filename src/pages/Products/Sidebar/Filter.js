import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Filter({ popular, setFiltered, setActiveGenre, activeGenre }) {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((item) => item.genreIds.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre]);
    return (
        <>
            <h4 className={cx('title-search')}>Genres</h4>
            <div className={cx('filter-container')}>
                <Link
                    to={'/products/All'}
                    className={activeGenre === 0 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(0)}
                >
                    All
                </Link>
                <Link
                    to={'/products/Vintage'}
                    className={activeGenre === 1 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(1)}
                >
                    Vintage
                </Link>
                <Link
                    to={'/products/Retro'}
                    className={activeGenre === 3 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(3)}
                >
                    Retro
                </Link>
                <Link
                    to={'/products/Normal'}
                    className={activeGenre === 13 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(13)}
                >
                    Normal
                </Link>
                <Link
                    to={'/products/Wood'}
                    className={activeGenre === 8 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(8)}
                >
                    Wood
                </Link>
                <Link
                    to={'/products/Handmade'}
                    className={activeGenre === 4 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(4)}
                >
                    Handmade
                </Link>
                <Link
                    to={'/products/Frame'}
                    className={activeGenre === 10 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(10)}
                >
                    Frame
                </Link>
                <Link
                    to={'/products/Frameless'}
                    className={activeGenre === 11 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(11)}
                >
                    Frameless
                </Link>
                <Link
                    to={'/products/Gold'}
                    className={activeGenre === 14 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(14)}
                >
                    Gold
                </Link>
                <Link
                    to={'/products/Green'}
                    className={activeGenre === 15 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(15)}
                >
                    Green
                </Link>
                <Link
                    to={'/products/Black'}
                    className={activeGenre === 6 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(6)}
                >
                    Black
                </Link>
                <Link
                    to={'/products/White'}
                    className={activeGenre === 5 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(5)}
                >
                    White
                </Link>
                <Link
                    to={'/products/Colorful'}
                    className={activeGenre === 12 ? cx('nav') : cx('item')}
                    onClick={() => setActiveGenre(12)}
                >
                    Coloful
                </Link>
            </div>
        </>
    );
}

export default Filter;
