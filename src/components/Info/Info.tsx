import React from 'react';
import './_info.scss';
import Footer from "../Footer/Footer";
import bem from "easy-bem";
import {useParams} from "react-router-dom";
import {newsData} from "../../utils/constant";

const Info = () => {
    const b = bem('Info');
    const {id} = useParams();

    const infoRender = newsData.find((item) => item.id === Number(id))
    return (
        <div className={b()}>
            <div className={`${b('section')} container`}>
                <h1>{infoRender?.title}</h1>
                <div>
                    <img src={infoRender?.images} alt='images'/>
                </div>
                <p>
                    {infoRender?.description}
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default Info;