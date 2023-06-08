import React, {useContext, useEffect} from 'react';
import './_info.scss';
import bem from "easy-bem";
import {useParams} from "react-router-dom";
import {Context} from "../../context/contexts";
import Loading from "../Loading/Loading";
import {parseData} from "../../utils/constant";
import {ColumnsType} from "antd/es/table";
import {Table} from "antd";

interface DataType {
    key: React.Key;
    sort: string;
    grade: number | string;
    price: string;
    description: string;
}

const columns: ColumnsType<DataType> = [
    { title: 'Наименование', dataIndex: 'name', key: 'name' },
    { title: 'Размер', dataIndex: 'size', key: 'size' },
    { title: 'Обработка', dataIndex: 'treatment', key: 'treatment' },
    { title: 'Цена', dataIndex: 'price', key: 'price' },
];

const columns2: ColumnsType<DataType> = [
    { title: 'Наименование', dataIndex: 'sort', key: 'name' },
    { title: 'Состав', dataIndex: 'grade', key: 'age' },
    { title: 'Цена', dataIndex: 'price', key: 'address' },
];

const Info = () => {
    const b = bem('Info');
    const {id} = useParams();
    const {contextState, infoNews} = useContext(Context);

    useEffect(() => {
        infoNews(Number(id))
    }, [id])

    const infoRender = contextState.news.results.find((item) => item.id === Number(id)) || contextState.info.results;

    const infoRenderJson:any = parseData(infoRender?.description);

    if (contextState.info.loading){
        return <Loading/>;
    }
    return (
        <div className={b()}>
            <div className={b('fons')}
                 style={{
                backgroundImage: `url(${infoRender?.image})`
            }}>
                <div>
                    <h1>{infoRender?.header}</h1>
                </div>
            </div>
            <div className={`${b('section')} container2`}>
                <div>
                    <Table
                        scroll={{ x: 600, y: 500 }}
                        columns={contextState.info.results?.type_coffee === 1 ? columns : columns2}
                        expandable={{
                            expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
                            rowExpandable: (record) => record.sort !== 'Not Expandable',
                        }}
                        pagination={false}
                        dataSource={infoRenderJson}
                    />
                </div>
            </div>
        </div>
    );
};

export default Info;