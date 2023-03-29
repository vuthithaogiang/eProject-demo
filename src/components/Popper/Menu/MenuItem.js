import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import AuthContext from '~/contexts/AuthProvider';
import React, { useContext } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    const { setCurrentAccount } = useContext(AuthContext);

    if (!data.separate) {
        return (
            <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        );
    } else {
        return (
            <Button className={classes} leftIcon={data.icon} onClick={() => setCurrentAccount(false)}>
                Log Out
            </Button>
        );
    }
}

export default MenuItem;
