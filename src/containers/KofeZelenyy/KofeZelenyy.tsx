import React, {useContext, useEffect} from 'react';
import './_kofeZelenyy.scss';
import bem from "easy-bem";
import News from "../../components/News/News";
import {Context} from "../../context/contexts";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";

const KofeZelenyy = () => {
    const b = bem('KofeZelenyy');
    const {contextState, getNews} = useContext(Context);
    useEffect(() => {
        getNews(1);
    }, []);

    if (contextState.loading){
        return <Loading/>
    }
    return (
        <>
            <div className={`${b()} container`}>
                <h1>Зелёный кофе</h1>
                <p>
                    Команда Атомз предлагает поставку высококачественного зеленого кофе напрямую от производителей.
                    <br/>
                    Широкий ассортимент сортов и регионов происхождения.
                    Гарантированное качество и свежесть. Быстрая и надежная доставка. <br/>
                    Мы также рады дать конкурентоспособные цены, гибкую систему заказов и своевременную доставку. <br/>
                    Наша цель - установить долгосрочное партнерство с нашими заказчиками, основанное на взаимовыгодном сотрудничестве и высоком качестве продукции.
                    Обращайтесь к нам для организации поставок зеленого кофе на ваше предприятие.
                </p>
                {contextState.news.results.length ?
                    <News data={contextState.news.results} bool={false} numberSlice={40}/>
                    : <NotFound/>
                }
            </div>
        </>
    );
};

export default KofeZelenyy;