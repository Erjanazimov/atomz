import React, {FC, useContext, useEffect} from 'react';
import Scroll from "../../components/Scroll/Scroll";
import About from "../../components/About/About";
import News from "../../components/News/News";
import {Context} from "../../context/contexts";
import {Spin} from "antd";

interface MainProps {
    onOpen: () => void
}
const Main:FC<MainProps> = ({onOpen}) => {
    const {getNews, contextState} = useContext(Context);
    useEffect(() => {
        getNews();
    }, []);

    if (contextState.loading){
        return  <div className="example">
            <Spin />
        </div>
    }
    return (
        <>
            <Scroll/>
            <About/>
            <News data={contextState.news.results} numberSlice={4}/>
        </>
    );
};

export default Main;