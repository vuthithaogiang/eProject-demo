import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Feedback.module.scss';
import FeedbackItem from './FeedbackItem';

const cx = classNames.bind(styles);
const delay = 4000;

const feedbackContent = [
    {
        src: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Peter Moor',
        desc: 'Customer of Mirrors',

        blockquote:
            'This asymmetrical and irregular mirror will add stylish atmosphere my home . The geometric shape of the mirror allows you to use the mirror in different styles and combinations as me wish',
    },

    {
        src: 'https://images.pexels.com/photos/432739/pexels-photo-432739.jpeg?h=350&auto=compress&cs=tinysrgb',
        name: 'Russia',
        desc: 'Customer of Mirrors',

        blockquote:
            'Mirror looks cozy and great in any home and this bold and striking mirror will be a talking point in any living room , bedroom, bathroom and hallway .',
    },
    {
        src: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Marri',
        desc: 'Customer of Mirrors',

        blockquote:
            'I am sure you will love it more in real life than in photos , as photos can’t capture the whole beauty of this mirror!',
    },
];

function Feedback() {
    const [indexSlide, setIndexSlide] = useState(1);

    const moveDote = (index) => {
        setIndexSlide(index);
    };

    useEffect(() => {
        setTimeout(
            () => setIndexSlide((prevIndex) => (prevIndex === feedbackContent.length ? 1 : prevIndex + 1)),
            delay,
        );

        return () => {};
    }, [indexSlide]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('feedback-list')}>
                    {feedbackContent.map((data, index) => (
                        <div className={indexSlide === index + 1 ? cx('slide', 'active-anim') : cx('slide')}>
                            <FeedbackItem key={index} content={data} />
                        </div>
                    ))}
                </div>

                <div className={cx('container-dots')}>
                    {Array.from({ length: 3 }).map((item, index) => (
                        <div
                            onClick={() => moveDote(index + 1)}
                            className={indexSlide === index + 1 ? cx('dot', 'active') : cx('dot')}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
