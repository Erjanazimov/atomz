import React, {FC} from 'react';
import bem from "easy-bem";
import './_news.scss';
import {Card} from "antd";
import {useNavigate} from "react-router-dom";
import {Coffee} from "../../context/interfaces";
const { Meta } = Card;

interface NewsProps {
    data: Coffee[],
    bool?: boolean,
    numberSlice: number
}
const News:FC<NewsProps> = ({data, bool = true, numberSlice = 4}) => {
    const b = bem('News');
    const push = useNavigate();
    const oncClick = () => {
        push('/news');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className={b('border')}>
        <div className={`${b()} container`}>
            {bool ?
                <>
                    <h1>Новости</h1>
                    <div className={b('btn')}>
                        <h2>Последние новости</h2>
                        <button onClick={oncClick}>Все новости</button>
                    </div>
                </> : null
            }
            <div className={b('content')}>
                {data.slice(0, numberSlice).map((item) => {
                    return   <Card
                        style={{
                            width: 320,
                            height: 340
                    }
                        }
                        onClick={() => push(`/info/${item.id}`)}
                        key={item.id}
                        hoverable
                        cover={<img className='img' alt="example" src={item.image} />}
                    >
                        <Meta title={item.header} description={item.description}/>
                    </Card>
                })}
            </div>

        </div>
        </div>
    );
};

export default News;