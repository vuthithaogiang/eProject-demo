import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AllProduct from '~/components/AllProductPopular';

import React from 'react';
import Details from './Details';

const cx = classNames.bind(styles);

function DetailProduct() {
    let params = useParams();
    const [productInfo, setProductInfo] = useState([]);
    const fetchDetails = async () => {
        const data = await fetch(`http://localhost:3000/products?id=${params.name}`);
        const detailData = await data.json();
        console.log(detailData);
        console.log(detailData[0]);

        setProductInfo(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <>
            <div className={cx('container')}>
                {productInfo.map((info, index) => (
                    <Details key={index} product={info} />
                ))}
            </div>
            <div className={cx('suggested')}>
                <AllProduct />
            </div>
        </>
    );
}

export default DetailProduct;
