import React, {FC} from 'react';
import Contacts from "../../components/Contacts/Contacts";
import './_contact.scss';
import bem from "easy-bem";
interface ContactProps {
    onOpen: () => void
}
const Contact:FC<ContactProps> = ({onOpen}) => {
    const b = bem('Contact')
    return (
        <div className={b()}>
            <div className='container'>
                <h1 className={b('title')}>О компании</h1>
                <p className={b('description')}>
                    Команда <b>Атомз</b> предлагает поставку высококачественного зеленого кофе напрямую от производителей. Широкий ассортимент сортов и регионов происхождения. Гарантированное качество и свежесть. Быстрая и надежная доставка.Мы также рады дать конкурентоспособные цены, гибкую систему заказов и своевременную доставку. Наша цель - установить долгосрочное партнерство с нашими заказчиками, основанное на взаимовыгодном сотрудничестве и высоком качестве продукции.Обращайтесь к нам для организации поставок зеленого кофе на ваше предприятие.
            </p>
            </div>
            <Contacts onOpen={onOpen}/>
        </div>
    );
};

export default Contact;