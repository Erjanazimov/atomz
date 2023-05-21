import React from 'react';
import './_kofeFried.scss';
import bem from "easy-bem";
import News from "../../components/News/News";
import {newsData} from "../../utils/constant";

const KofeFried = () => {
    const b = bem('KofeFried');
    const filter = newsData.filter((item) => item.kofe === 2)

    return (
        <div className={`${b()} container`}>
            <h1>Обжареное кофе</h1>
            <News data={filter} bool={false}/>
        </div>
    );
};

export default KofeFried;