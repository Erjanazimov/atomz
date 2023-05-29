import React, {useContext, useEffect} from 'react';
import './_info.scss';
import bem from "easy-bem";
import {useParams} from "react-router-dom";
import {Context} from "../../context/contexts";
import Loading from "../Loading/Loading";
import ReactHtmlParser from 'react-html-parser';

const Info = () => {
    const b = bem('Info');
    const {id} = useParams();
    const {contextState, infoNews} = useContext(Context);

    useEffect(() => {
        if (!contextState.news.results.length && id){
            infoNews(id)
        }
    }, [])


    const infoRender = contextState.news.results.find((item) => item.id === Number(id)) || contextState.info.results;

    if (contextState.info.loading){
        return <Loading/>;
    }
    return (
        <div className={b()}>
            <div className={`${b('section')} container`}>
                <h1>{infoRender?.header}</h1>
                <div>
                    <img src={infoRender?.image} alt='images'/>
                </div>
                <div className={b('description')}>
                    {ReactHtmlParser(infoRender?.description ? `<pre>${infoRender.description}</pre>` : '')}
                </div>

            </div>
        </div>
    );
};

export default Info;