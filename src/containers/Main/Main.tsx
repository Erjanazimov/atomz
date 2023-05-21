import React, {FC} from 'react';
import Scroll from "../../components/Scroll/Scroll";
import About from "../../components/About/About";
import News from "../../components/News/News";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import {newsData} from "../../utils/constant";

interface MainProps {
    onOpen: () => void
}
const Main:FC<MainProps> = ({onOpen}) => {
    return (
        <>
            <Scroll/>
            <About/>
            <News data={newsData}/>
            <Contacts onOpen={onOpen}/>
            <Footer/>
        </>
    );
};

export default Main;