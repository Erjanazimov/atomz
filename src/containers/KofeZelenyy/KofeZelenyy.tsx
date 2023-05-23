import React, {useContext, useEffect} from 'react';
import './_kofeZelenyy.scss';
import bem from "easy-bem";
import News from "../../components/News/News";
import {Context} from "../../context/contexts";
import Loading from "../../components/Loading/Loading";

const KofeZelenyy = () => {
    const b = bem('KofeZelenyy');
    const {contextState, getNews} = useContext(Context);
    useEffect(() => {
        getNews();
    }, []);

    if (contextState.loading){
        return <Loading/>
    }
    return (
        <>
            <div className={`${b()} container`}>
                <h1>Зелёный кофе</h1>
                <News data={contextState.news.results} bool={false} numberSlice={40}/>
            </div>
        </>
    );
};

export default KofeZelenyy;