import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Feedback.module.scss';
import FeedbackItem from './FeedbackItem';

const cx = classNames.bind(styles);
const delay = 2500;

const feedbackContent = [
    {
        name: 'Peter Moor',
        desc: 'Customer of Mirrors',

        blockquote:
            '  Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I have learn',
    },

    {
        name: 'Peter',
        desc: 'Customer of Mirrors',

        blockquote:
            '  Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills ',
    },
    {
        name: 'Peter Moor',
        desc: 'Customer of Mirrors',

        blockquote:
            '  Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills',
    },
];

function Feedback() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(
            () => setIndex((prevIndex) => (prevIndex === feedbackContent.length - 1 ? 0 : prevIndex + 1)),
            delay,
        );
        console.log(index);

        return () => {};
    }, [index]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('feedback-list')}>
                    {feedbackContent.map((data, index) => (
                        <FeedbackItem key={index} content={data} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
