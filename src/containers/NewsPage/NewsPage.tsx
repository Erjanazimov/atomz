import React, {useContext, useEffect} from 'react';
import bem from "easy-bem";
import './_newsPage.scss';
import News from "../../components/News/News";
import {Context} from "../../context/contexts";
import Loading from "../../components/Loading/Loading";

const NewsPage = () => {
    const {contextState, getNews} = useContext(Context);
    const b = bem('NewsPage')
    useEffect(() => {
        getNews();
    }, []);

    if (contextState.loading){
        return <Loading/>
    }
    return (
        <div className={`${b()} container`}>
            <h1>Новости</h1>
            <News data={contextState.news.results} bool={false} numberSlice={40}/>
        </div>
    );
};

export default NewsPage;