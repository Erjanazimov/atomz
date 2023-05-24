import React, {useState} from 'react';
import './App.css';
import Main from "./containers/Main/Main";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import {Button, Form, Input, message, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";
import Info from "./components/Info/Info";
import Header from "./components/Header/Header";
import KofeZelenyy from "./containers/KofeZelenyy/KofeZelenyy";
import KofeFried from "./containers/KofeFried/KofeFried";
import NewsPage from "./containers/NewsPage/NewsPage";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    const [open, setOpen] = useState(false);

    const onFinish = () => {
        message.success('Успешно отправлено');
        setOpen(false);
    }
  return (
      <>
          <Header onOpen={() => setOpen(true)}/>
          <div className='paddingTopHeader'>
              <Routes>
                  <Route path='/' element={<Main/>} />
                  <Route path='/kofe-zelenyy' element={<KofeZelenyy/>} />
                  <Route path='/kofe-fried' element={<KofeFried/>} />
                  <Route path='/news' element={<NewsPage/>} />
                  <Route path='/info/:id' element={<Info/>} />
              </Routes>
          </div>
          <Contacts onOpen={() => setOpen(true)}/>
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
