import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function DetailProduct() {
    let params = useParams();

    const [details, setDetails] = useState([]);

    const fetchDetails = async () => {
        const data = await fetch(`http://localhost:3000/products?id=${params.name}`);
        const detailData = await data.json();
        console.log(detailData[0]);
        setDetails(detailData[0]);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('thumbnails')}>
                <img src={details.photo} />
            </div>

            <div className={cx('info')}>
                <h3>{details.name}</h3>
            </div>
        </div>
    );
}

export default DetailProduct;
