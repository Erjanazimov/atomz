import React, {useContext, useEffect} from 'react';
import './_kofeFried.scss';
import bem from "easy-bem";
import News from "../../components/News/News";
import {Context} from "../../context/contexts";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";

const KofeFried = () => {
    const b = bem('KofeFried');
    const {contextState, getNews} = useContext(Context);

    useEffect(() => {
        getNews(2);
    }, []);

    if (contextState.loading){
        return <Loading/>
    }

    return (
        <div className={`${b()} container`}>
            <h1>Обжаренный кофе</h1>
            <p>
                Добро пожаловать в нашу компанию, где мы с гордостью предлагаем высококачественный обжаренный кофе, созданный специально для бизнеса. <br/>
                Наш продукт - идеальное решение для кофеен, вейдинговых аппаратов и ресторанов, где важна не только непревзойденная ароматная насыщенность, но и незабываемый вкус, который порадует самых изысканных гурманов.
                Мы постоянно стремимся к совершенству, осуществляя мастерский процесс обжарки каждой зерновки, чтобы доставить нашим клиентам удовольствие и радость от настоящего кофейного опыта.
                Присоединяйтесь к нам и окунитесь в мир настоящего кофе!
            </p>
            {contextState.news.results.length ?
                <News data={contextState.news.results} bool={false} numberSlice={40}/>
                : <NotFound/>
            }
        </div>
    );
};

export default KofeFried;