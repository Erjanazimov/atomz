import React, {FC, useEffect, useState} from 'react';
import bem from "easy-bem";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './_contacts.scss';
import {Button} from "antd";
interface contactsProps {
    onOpen: () => void
}
const Contacts:FC<contactsProps> = ({onOpen}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const b = bem('Contacts');
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const defaultState = {
        center: [55.706447, 37.657520],
        zoom: 10,
    };
    return (
        <div id='contact' className={`${b()} container`}>
            <h1>Как нас найти</h1>
            <div className={b('maps')}>
                <div>
                    <YMaps>
                        <Map defaultState={defaultState} style={{
                            width: windowWidth > 1100 ? 630 : windowWidth - 40,
                            height: 480
                        }}>
                            <Placemark geometry={[55.684758, 37.738521]} />
                        </Map>
                    </YMaps>
                </div>
                <div className='map_text'>
                    <div className='text'>
                        <p>
                            <b>
                                Адрес:
                            </b> 115280 г. Москва автозаводская 11 4 этаж 408 офис
                        </p>
                        <p>
                            <b>
                                Как добраться:
                            </b> город Москва, ул. Куликана, 19273
                        </p>
                        <p>
                            <b>
                                Часы работы:
                            </b> с 07:00 до 18:00 ежедневно (кроме
                            выходных и праздники)
                        </p>
                        <p>
                            <b>
                                Наш номер телефон:
                            </b> <a href="tel:+74953635285">+74953635285</a>
                        </p>
                        <p>
                            <b>
                                E-mail:
                            </b> <a href="mailto:info@atomzcoffee.ru" className="tel">info@atomzcoffee.ru</a>
                        </p>
                    </div>
                    <div className='social'>
                        <h4>Наши соц-сеть:</h4>
                        <div className={b('icons_social')}>
                            <div>
                                <a href='#'>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM36.6 17C36.225 20.95 34.6 30.55 33.775 34.975C33.425 36.85 32.725 37.475 32.075 37.55C30.625 37.675 29.525 36.6 28.125 35.675C25.925 34.225 24.675 33.325 22.55 31.925C20.075 30.3 21.675 29.4 23.1 27.95C23.475 27.575 29.875 21.75 30 21.225C30.0174 21.1455 30.0151 21.0629 29.9933 20.9845C29.9715 20.9061 29.9309 20.8342 29.875 20.775C29.725 20.65 29.525 20.7 29.35 20.725C29.125 20.775 25.625 23.1 18.8 27.7C17.8 28.375 16.9 28.725 16.1 28.7C15.2 28.675 13.5 28.2 12.225 27.775C10.65 27.275 9.425 27 9.525 26.125C9.575 25.675 10.2 25.225 11.375 24.75C18.675 21.575 23.525 19.475 25.95 18.475C32.9 15.575 34.325 15.075 35.275 15.075C35.475 15.075 35.95 15.125 36.25 15.375C36.5 15.575 36.575 15.85 36.6 16.05C36.575 16.2 36.625 16.65 36.6 17Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.625 7.2749C40.333 4.95972 37.603 3.12407 34.5941 1.87503C31.5852 0.625991 28.3578 -0.0114444 25.1 -9.52166e-05C11.45 -9.52166e-05 0.325 11.1249 0.325 24.7749C0.325 29.1499 1.475 33.3999 3.625 37.1499L0.125 49.9999L13.25 46.5499C16.875 48.5249 20.95 49.5749 25.1 49.5749C38.75 49.5749 49.875 38.4499 49.875 24.7999C49.875 18.1749 47.3 11.9499 42.625 7.2749ZM25.1 45.3749C21.4 45.3749 17.775 44.3749 14.6 42.4999L13.85 42.0499L6.05 44.0999L8.125 36.4999L7.625 35.7249C5.56937 32.4423 4.47785 28.648 4.475 24.7749C4.475 13.4249 13.725 4.1749 25.075 4.1749C30.575 4.1749 35.75 6.32491 39.625 10.2249C41.5437 12.1348 43.0642 14.4066 44.0985 16.9085C45.1327 19.4104 45.6601 22.0927 45.65 24.7999C45.7 36.1499 36.45 45.3749 25.1 45.3749ZM36.4 29.9749C35.775 29.6749 32.725 28.1749 32.175 27.9499C31.6 27.7499 31.2 27.6499 30.775 28.2499C30.35 28.8749 29.175 30.2749 28.825 30.6749C28.475 31.0999 28.1 31.1499 27.475 30.8249C26.85 30.5249 24.85 29.8499 22.5 27.7499C20.65 26.0999 19.425 24.0749 19.05 23.4499C18.7 22.8249 19 22.4999 19.325 22.1749C19.6 21.8999 19.95 21.4499 20.25 21.0999C20.55 20.7499 20.675 20.4749 20.875 20.0749C21.075 19.6499 20.975 19.2999 20.825 18.9999C20.675 18.6999 19.425 15.6499 18.925 14.3999C18.425 13.1999 17.9 13.3499 17.525 13.3249H16.325C15.9 13.3249 15.25 13.4749 14.675 14.0999C14.125 14.7249 12.525 16.2249 12.525 19.2749C12.525 22.3249 14.75 25.2749 15.05 25.6749C15.35 26.0999 19.425 32.3499 25.625 35.0249C27.1 35.6749 28.25 36.0499 29.15 36.3249C30.625 36.7999 31.975 36.7249 33.05 36.5749C34.25 36.3999 36.725 35.0749 37.225 33.6249C37.75 32.1749 37.75 30.9499 37.575 30.6749C37.4 30.3999 37.025 30.2749 36.4 29.9749Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <Button onClick={onOpen} className={b('button')}>
                            Связаться с нами
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;