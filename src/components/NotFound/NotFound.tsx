import React from 'react';
import './_notFound.scss';
import bem from "easy-bem";
import { Alert } from 'antd';

const NotFound = () => {
    const b = bem('NotFound')
    return (
        <div className={b()}>
            <Alert message='Пока нету новостей' type="warning" />
        </div>
    );
};

export default NotFound;