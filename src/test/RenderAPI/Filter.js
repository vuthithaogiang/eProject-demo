import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './RenderAPI.module.scss';

const cx = classNames.bind(styles);

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }

        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre]);
    return (
        <div className={cx('filter-container')}>
            <button className={activeGenre === 0 ? cx('active') : cx('')} onClick={() => setActiveGenre(0)}>
                All
            </button>
            <button className={activeGenre === 35 ? cx('active') : cx('')} onClick={() => setActiveGenre(35)}>
                Comedy
            </button>
            <button className={activeGenre === 28 ? cx('active') : cx('')} onClick={() => setActiveGenre(28)}>
                Action
            </button>
        </div>
    );
}

export default Filter;
