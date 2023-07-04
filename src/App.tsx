import React, {useState} from 'react';
import './App.css';
import Main from "./containers/Main/Main";
import {Routes, useLocation} from 'react-router-dom';
import { Route } from 'react-router';
import {Button, Form, Input, message, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";
import Info from "./components/Info/Info";
import Header from "./components/Header/Header";
import KofeZelenyy from "./containers/KofeZelenyy/KofeZelenyy";
import KofeFried from "./containers/KofeFried/KofeFried";
import NewsPage from "./containers/NewsPage/NewsPage";
import Footer from "./components/Footer/Footer";
import Contact from "./containers/Contact/Contact";
import {helmetData} from "./utils/constant";

function App() {
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();
    const onFinish = () => {
        message.success('Успешно отправлено');
        setOpen(false);
    }

    const renderHelmet = () => {
        if (pathname.includes('4')) {
            return helmetData('Зеленый кофе оптом в  Москве', 'Зеленый кофе оптом купить в России и СНГ с доставкой. ', 'Зеленый кофе оптом купить в России и СНГ с доставкой.')
        }

        if (pathname.includes('3')) {
            return helmetData('Обжаренный кофе оптом в Москве', 'Обжаренный кофе для кофеен, ресторанов с бесплатной доставкой', 'Обжаренный кофе для кофеен, ресторанов с бесплатной доставкой')
        }

        return helmetData('Atomz Coffee | Зеленый кофе оптом в России и СНГ', 'Зеленый кофе оптом в России и СНГ', 'Зеленый кофе оптом купить в России и СНГ с доставкой.')
    }
  return (
      <>
          {renderHelmet()}
          <Header onOpen={() => setOpen(true)}/>
          <div className='paddingTopHeader'>
              <Routes>
                  <Route path='/' element={<Main setOpen={() => setOpen(true)}/>} />
                  <Route path='/kofe-zelenyy' element={<KofeZelenyy/>} />
                  <Route path='/kofe-fried' element={<KofeFried/>} />
                  <Route path='/news' element={<NewsPage/>} />
                  <Route path='/info/:id' element={<Info/>} />
                  <Route path='/contact' element={<Contact onOpen={() => setOpen(true)}/>}/>
              </Routes>
          </div>
          <Footer/>
          <Modal
              open={open}
              onCancel={() => setOpen(false)}
              footer={null}
              title='Связаться с нами'
              width={400}
          >
              <Form layout="vertical" style={{
                  paddingTop: 20
              }} onFinish={onFinish}>
                  <Form.Item
                      label="Ваше Имя"
                      name="name"
                      rules={[{ required: true, message: 'Заполните свое ФИО' }]}
                  >
                      <Input />
                  </Form.Item>
                  <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ required: true, message: 'Заполните email' }]}
                  >
                      <Input />

                  </Form.Item>
                  <Form.Item
                      label="Коментарии"
                      name="description"
                      rules={[{ required: true, message: 'Забыли' }]}
                  >
                      <TextArea rows={4} />
                  </Form.Item>
                  <Button className='btn' htmlType="submit">
                      Отправить
                  </Button>
              </Form>
          </Modal>
      </>
  );
}

export default App;
