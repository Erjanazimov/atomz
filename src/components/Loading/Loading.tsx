import React from 'react';
import {Spin} from "antd";
import './_loading.scss';
import bem from "easy-bem";

const Loading = () => {
    const b = bem('Loading')
    return (
        <div className={b()}>
            <Spin size="large"/>
        </div>
    );
};

export default Loading;