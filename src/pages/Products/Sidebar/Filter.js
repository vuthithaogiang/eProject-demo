import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useEffect } from 'react';

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
                <button className={activeGenre === 0 ? cx('active') : cx('')} onClick={() => setActiveGenre(0)}>
                    All
                </button>
                <button className={activeGenre === 1 ? cx('active') : cx('')} onClick={() => setActiveGenre(1)}>
                    Vintage
                </button>
                <button className={activeGenre === 3 ? cx('active') : cx('')} onClick={() => setActiveGenre(3)}>
                    Retro
                </button>
                <button className={activeGenre === 13 ? cx('active') : cx('')} onClick={() => setActiveGenre(13)}>
                    Normal
                </button>
                <button className={activeGenre === 8 ? cx('active') : cx('')} onClick={() => setActiveGenre(8)}>
                    Wood
                </button>
                <button className={activeGenre === 4 ? cx('active') : cx('')} onClick={() => setActiveGenre(4)}>
                    Handmade
                </button>
                <button className={activeGenre === 10 ? cx('active') : cx('')} onClick={() => setActiveGenre(10)}>
                    Frame
                </button>
                <button className={activeGenre === 11 ? cx('active') : cx('')} onClick={() => setActiveGenre(11)}>
                    Frameless
                </button>
                <button className={activeGenre === 14 ? cx('active') : cx('')} onClick={() => setActiveGenre(14)}>
                    Gold
                </button>
                <button className={activeGenre === 15 ? cx('active') : cx('')} onClick={() => setActiveGenre(15)}>
                    Green
                </button>
                <button className={activeGenre === 6 ? cx('active') : cx('')} onClick={() => setActiveGenre(6)}>
                    Black
                </button>
                <button className={activeGenre === 5 ? cx('active') : cx('')} onClick={() => setActiveGenre(5)}>
                    White
                </button>
                <button className={activeGenre === 12 ? cx('active') : cx('')} onClick={() => setActiveGenre(12)}>
                    Coloful
                </button>
            </div>
        </>
    );
}

export default Filter;
