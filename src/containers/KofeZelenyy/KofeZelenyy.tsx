import React from 'react';
import './_kofeZelenyy.scss';
import bem from "easy-bem";
import News from "../../components/News/News";
import {newsData} from "../../utils/constant";

const KofeZelenyy = () => {
    const b = bem('KofeZelenyy');
    const filter = newsData.filter((item) => item.kofe === 1)
    return (
        <>
            <div className={`${b()} container`}>
                <h1>Зелёный кофе</h1>
                <News data={filter} bool={false}/>
            </div>
        </>
    );
};

export default KofeZelenyy;