import React, {FC, useContext, useEffect, useState} from 'react';
import bem from "easy-bem";
import logo from '../../assets/images/logo.png';
import './_header.scss';
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";
import {Drawer, Space} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {getCurrentDate} from "../../utils/constant";

interface HeaderProps {
    onOpen: () => void
}

const Header:FC<HeaderProps> = ({onOpen}) => {
    const b = bem('Header');
    const push = useNavigate();
    const [course, setCourse] = useState('');
    const [open, setOpen] = useState(false);

    const convertGet = async () => {
        try {
            const resp: {data: {Valute:{USD: {Value: string}}}} = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
            setCourse(resp.data.Valute.USD.Value)
        } catch (e) {}

    }
    useEffect(() => {
        convertGet();
    }, [])

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <header className={`${b()}`}>
            <div className={`container ${b('block_header')}`}>
                <div className={b('logo')}>
                    <div onClick={() => push('/')} className='link'>
                        <img src={logo}/>
                    </div>
                    <div className={b('course')}>
                        $1 = {course} ₽ <br/>
                        <span>{getCurrentDate()}</span>
                    </div>
                    <ul className={b('list')}>
                        <li><Link to='/info/4' onClick={onClose}>Зеленый кофе</Link></li>
                        <li><Link to='/info/3' onClick={onClose}>Обжаренный кофе</Link></li>
                        <li><Link to='/news' onClick={onClose}>Новости</Link></li>
                        <li><Link to='/contact'>Контакты</Link></li>
                        <li><a href='#' onClick={onOpen}>Связаться</a></li>
                    </ul>
                </div>
                <div className={b('contact')}>
                    <a href='tel:+74953635285'>+74953635285</a>,
                    <a href='tel:88006005975'> 88006005975</a>
                    <br/>
                    <a href="mailto:info@atomzcoffee.ru" className='tel'>info@atomzcoffee.ru</a>
                </div>
                <div className={b('menu')} onClick={showDrawer}>
                    <Space>
                        <MenuOutlined style={{
                            fontSize: 24
                        }}/>
                    </Space>
                </div>
            </div>
            <Drawer width={220} placement="right" onClose={onClose} open={open}>
                <div>

                </div>
                <div className={b('menu_nav')}>
                    <p><Link to='/info/4' onClick={onClose}>Зеленый кофе</Link></p>
                    <p><Link to='/info/3' onClick={onClose}>Обжаренный кофе</Link></p>
                    <p><Link to='/news' onClick={onClose}>Новости</Link></p>
                    <p><Link to='/contact' onClick={onClose}>Контакты</Link></p>
                    <p><a href='#' onClick={onOpen}>Связаться</a></p>
                    <p><a target="_blank"  href='https://wa.me/79663223374' onClick={() => setOpen(false)}>WhatsApp</a></p>
                    <p><a target="_blank"  href='https://t.me/Atomzcoffee' onClick={() => setOpen(false)}>Telegram</a></p>
                </div>
                <div onClick={() => setOpen(false)} className={b('close')}>
                    <CloseOutlined style={{
                        fontSize: 24,
                        color: '#603612'
                    }}/>
                </div>
            </Drawer>
        </header>
    );
};

export default Header;