import React, {FC} from 'react';
import bem from "easy-bem";
import './_news.scss';
import {Card} from "antd";
import {useNavigate} from "react-router-dom";
const { Meta } = Card;

interface NewsProps {
    data: any[],
    bool?: boolean
}
const News:FC<NewsProps> = ({data, bool = true}) => {
    const b = bem('News');
    const push = useNavigate();
    return (
        <div className={b('border')}>
        <div className={`${b()} container`}>
            {bool ?
                <>
                    <h1>Новости</h1>
                    <div className={b('btn')}>
                        <h2>Последние новости</h2>
                        <button onClick={() => push('/news')}>Все новости</button>
                    </div>
                </> : null
            }
            <div className={b('content')}>
                {data.slice(0, 4).map((item) => {
                    return   <Card
                        style={{
                            height: 340
                    }
                        }
                        onClick={() => push(`/info/${item.id}`)}
                        key={item.id}
                        hoverable
                        cover={<img className='img' alt="example" src={item.images} />}
                    >
                        <Meta title={item.title} description={item.description}/>
                    </Card>
                })}
            </div>

        </div>
        </div>
    );
};

export default News;