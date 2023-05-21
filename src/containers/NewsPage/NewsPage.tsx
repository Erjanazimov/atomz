import React from 'react';
import bem from "easy-bem";
import './_newsPage.scss';
import News from "../../components/News/News";
import {newsData} from "../../utils/constant";

const NewsPage = () => {
    const b = bem('NewsPage')
    return (
        <div className={`${b()} container`}>
            <h1>Новости</h1>
            <News data={newsData} bool={false}/>
        </div>
    );
};

export default NewsPage;