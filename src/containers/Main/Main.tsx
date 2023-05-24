import React, {useContext, useEffect} from 'react';
import Scroll from "../../components/Scroll/Scroll";
import About from "../../components/About/About";
import News from "../../components/News/News";
import {Context} from "../../context/contexts";
import Loading from "../../components/Loading/Loading";

const Main= () => {
    const {getNews, contextState} = useContext(Context);
    useEffect(() => {
        if (!contextState.news.results.length){
            getNews();
        }
    }, []);
    return (
        <>
            <Scroll/>
            <About/>
            {contextState.loading ?
                <Loading/> :
                <News data={contextState.news.results} numberSlice={4}/>
            }
        </>
    );
};

export default Main;