import classNames from 'classnames/bind';
import styles from './RenderAPI.module.scss';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function RenderAPI() {
    const [popular, setPopular] = useState([]);

    const [filtered, setFiltered] = useState([]);

    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=399690578d7a285ae0caaaea376aa937&language=en-US&page=7',
        );
        const movies = await data.json();

        setPopular(movies.results);
        setFiltered(movies.results);
    };

    return (
        <div className={cx('container')}>
            <Filter
                popular={popular}
                setFiltered={setFiltered}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
            />
            <motion.div layout className={cx('popular-movies')}>
                <AnimatePresence>
                    {filtered.map((movie) => {
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default RenderAPI;
