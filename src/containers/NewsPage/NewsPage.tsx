import React, {useContext, useEffect} from 'react';
import bem from "easy-bem";
import './_newsPage.scss';
import News from "../../components/News/News";
import {Context} from "../../context/contexts";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";

const NewsPage = () => {
    const {contextState, getNews} = useContext(Context);
    const b = bem('NewsPage')
    useEffect(() => {
        getNews(0);
    }, []);

    if (contextState.loading){
        return <Loading/>
    }
    return (
        <div className={`${b()} container`}>
            <h1>Новости</h1>
            <p>Здесь вы найдете свежие новости о кофе, включая тренды, исследования, события и интересные факты. <br/>
                От новых сортов кофе до методов обжарки и приготовления, а также новинок в кофейной технологии и экипировке. <br/>
                Мы также предлагаем обзоры крупных кофейных мероприятий и фестивалей.</p>
            {contextState.news.results.length ?
                <News data={contextState.news.results} bool={false} numberSlice={40}/>
                : <NotFound/>
            }
        </div>
    );
};

export default NewsPage;