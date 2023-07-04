import React, {FC, useContext, useEffect} from 'react';
import Scroll from "../../components/Scroll/Scroll";
import About from "../../components/About/About";
import News from "../../components/News/News";
import {Context} from "../../context/contexts";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import Contacts from "../../components/Contacts/Contacts";
import {Helmet} from "react-helmet-async";

interface MainProps {
    setOpen: () => void
}
const Main:FC<MainProps> = ({setOpen}) => {
    const {getNews, contextState} = useContext(Context);
    useEffect(() => {
        getNews(0);
    }, []);

    return (
        <>
            <Scroll/>
            <About/>
           <div className='container'>
               {contextState.loading ?
                   <Loading/> :
                   <News data={contextState.news.results} numberSlice={4}/>
               }
           </div>
            <Contacts onOpen={setOpen}/>
        </>
    );
};

export default Main;