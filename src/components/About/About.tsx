import React from 'react';
import './_about.scss';
import bem from "easy-bem";
const About = () => {
    const b = bem('About')
    return (
        <div id='about' className={b('border')}>
        <div className={`${b()} container`}>
            <h1>О компании</h1>
            <p>
                Команда <b>Атомз</b> предлагает поставку высококачественного зеленого кофе напрямую от производителей. Широкий ассортимент сортов и регионов происхождения. Гарантированное качество и свежесть. Быстрая и надежная доставка.Мы также рады дать конкурентоспособные цены, гибкую систему заказов и своевременную доставку. Наша цель - установить долгосрочное партнерство с нашими заказчиками, основанное на взаимовыгодном сотрудничестве и высоком качестве продукции.Обращайтесь к нам для организации поставок зеленого кофе на ваше предприятие.            </p>
            <br/>
            <div className={b('block_about')}>
                <div>
                    <div className='icons'>
                        <svg width="90" height="106" viewBox="0 0 90 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.75 12.18C41.425 13.23 41.25 14.345 41.25 15.5C41.25 17.57 42.93 19.25 45 19.25H67.5C68.4946 19.25 69.4484 18.8549 70.1517 18.1517C70.8549 17.4484 71.25 16.4946 71.25 15.5C71.2503 14.3746 71.0818 13.2554 70.75 12.18M41.75 12.18C42.4601 9.88349 43.8869 7.87467 45.8213 6.4477C47.7557 5.02072 50.0962 4.25057 52.5 4.25H60C62.404 4.24978 64.7448 5.01963 66.6794 6.44672C68.614 7.87381 70.0406 9.88308 70.75 12.18M41.75 12.18C39.87 12.295 38 12.43 36.13 12.58C30.475 13.05 26.25 17.865 26.25 23.54V34.25M70.75 12.18C72.63 12.295 74.5 12.43 76.37 12.58C82.025 13.05 86.25 17.865 86.25 23.54V75.5C86.25 78.4837 85.0647 81.3452 82.955 83.455C80.8452 85.5647 77.9837 86.75 75 86.75H63.75M26.25 34.25H9.375C6.27 34.25 3.75 36.77 3.75 39.875V96.125C3.75 99.23 6.27 101.75 9.375 101.75H58.125C61.23 101.75 63.75 99.23 63.75 96.125V86.75M26.25 34.25H58.125C61.23 34.25 63.75 36.77 63.75 39.875V86.75M22.5 71.75L30 79.25L45 60.5" stroke="#EFEFEF" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p>
                        Мы можем гарантировать, что наш зеленый кофе надежен и качественен, и порадует даже самых требовательных любителей кофе.
                    </p>
                </div>
                <div>
                    <div className='icons'>
                        <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70.95 70.9499C73.875 68.0149 74.27 63.6649 71.83 61.2199C69.39 58.7799 65.035 59.1749 62.105 62.1049C59.18 65.0349 54.825 65.4299 52.385 62.9899C49.945 60.5499 50.34 56.1949 53.27 53.2699M53.27 53.2699L51.5 51.4999M53.27 53.2699C54.925 51.6099 57.035 50.7699 59 50.7849M72.715 72.7149L70.945 70.9449C68.945 72.9499 66.27 73.7699 64 73.2999M37.035 48.3949C39.0128 48.3949 40.9462 47.8084 42.5907 46.7096C44.2352 45.6108 45.517 44.049 46.2738 42.2217C47.0307 40.3945 47.2287 38.3838 46.8429 36.444C46.457 34.5042 45.5046 32.7224 44.1061 31.3238C42.7076 29.9253 40.9257 28.9729 38.9859 28.587C37.0461 28.2012 35.0355 28.3992 33.2082 29.1561C31.3809 29.913 29.8192 31.1947 28.7203 32.8392C27.6215 34.4837 27.035 36.4171 27.035 38.3949" stroke="white" strokeWidth="7.5" strokeLinecap="round"/>
                            <path d="M74.685 17.6399C66.955 9.91494 63.095 6.04994 58.08 4.61494C53.065 3.17494 47.74 4.40494 37.095 6.86494L30.955 8.27994C21.995 10.3449 17.515 11.3799 14.445 14.4449C11.38 17.5149 10.345 21.9949 8.28001 30.9549L6.86001 37.0949C4.40501 47.7449 3.17501 53.0649 4.61001 58.0799C6.05001 63.0949 9.91501 66.9549 17.64 74.6799L26.79 83.8299C40.24 97.2849 46.96 104 55.31 104C63.665 104 70.385 97.2749 83.83 83.8299C97.285 70.3849 104 63.6649 104 55.3099C104 48.5999 99.66 42.9399 90.98 33.9999" stroke="white" strokeWidth="7.5" strokeLinecap="round"/>
                        </svg>

                    </div>
                    <p>
                        Не нужно платить больше за качество - наш зеленый кофе доступен по разумной цене для всех, кто ценит свое здоровье и энергию.
                    </p>
                </div>
                <div>
                    <div className='icons'>
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.5882 6.24568C45.5039 6.26021 43.4463 6.55646 41.4492 7.15341C39.4678 7.74638 37.6425 8.60583 35.9859 9.70036C37.7958 14.2993 42.416 20.1371 47.768 25.1206C53.3559 30.3242 59.7633 34.7452 63.9012 36.739L63.9497 36.7625L63.9973 36.7866C67.7998 38.7401 70.4918 41.8147 72.0457 45.2063C73.0465 47.3902 73.6294 49.6777 73.9692 52.0032C77.0161 49.6266 80.228 47.7235 83.4933 46.3423C83.2448 42.0509 82.3008 37.5509 80.5814 33.0451C76.9753 23.5951 70.6767 15.9872 63.5435 11.3476C58.4166 8.01286 52.9148 6.20864 47.5882 6.24568ZM29.6801 16.1609C28.4817 18.0204 27.499 20.0937 26.7523 22.3454C24.2585 29.8627 24.4608 39.2926 28.0671 48.743C30.2496 54.4625 33.4195 59.5055 37.1632 63.6258C40.8513 64.7293 44.4991 66.4341 47.9257 68.7474C50.5732 70.535 52.9324 72.5811 54.9769 74.8065C55.6441 74.9686 56.3116 75.1069 56.9784 75.2157C58.2488 71.9021 59.8976 68.6054 61.9294 65.4071C63.1588 63.4704 64.5059 61.6109 65.963 59.839C65.9798 58.6222 65.97 57.443 65.9121 56.3173C65.7551 53.2728 65.2676 50.6689 64.3746 48.7203C63.4821 46.7717 62.3191 45.4104 60.1418 44.292L60.2379 44.3393C54.8759 41.7554 48.18 37.0334 42.0176 31.2952C37.1191 26.7343 32.5751 21.6256 29.6801 16.1609ZM95.2469 47.9715C92.0812 47.9972 88.7323 48.7325 85.3441 50.139C78.116 53.1394 70.8584 59.221 65.4902 67.6695C62.7441 71.9918 60.7706 76.4984 59.5437 80.9171C64.3601 88.9979 65.543 98.2801 62.0733 106.075C62.6341 106.877 63.2601 107.63 63.945 108.328C69.0178 103.952 74.8641 100.326 79.0191 96.6031C81.2902 94.5687 83.0098 92.5543 83.9653 90.6359C84.9209 88.7171 85.2497 86.9569 84.7528 84.5602L84.7238 84.4208L84.7045 84.2801C82.8171 70.6175 86.1284 62.5883 90.9539 57.6762C94.8342 53.727 98.6967 51.6469 101.361 48.9008C99.4362 48.2609 97.3835 47.9539 95.2469 47.9715ZM108.547 53.5854C104.649 58.43 99.8438 60.6675 96.9727 63.59C93.6736 66.9481 91.3962 70.9904 93.0551 83.0675C93.8538 87.1737 93.1519 91.1173 91.518 94.3976C89.8547 97.7368 87.3673 100.452 84.6497 102.887C80.5216 106.586 75.7598 109.753 71.7764 112.843C76.294 114.017 81.4373 113.449 86.6745 111.275C93.9026 108.275 101.161 102.193 106.528 93.7442C111.897 85.2954 114.319 76.141 113.965 68.3232C113.694 62.3443 111.847 57.2213 108.547 53.5857L108.547 53.5854ZM93.0551 83.0675C93.041 82.9936 93.0298 82.9203 93.0143 82.8465L93.063 83.1261C93.0608 83.1065 93.0582 83.087 93.0553 83.0675H93.0551ZM27.3778 66.3275C23.0693 66.2886 19.0106 67.2333 15.5946 69.0947C15.618 69.0954 15.6384 69.0971 15.6619 69.0978C17.6845 69.1693 20.2238 68.9307 23.1473 69.3298C26.0707 69.7292 29.4954 71.0567 32.0897 73.9922C34.6842 76.9276 36.4631 81.0891 37.7023 87.0657L37.7316 87.2049L37.7508 87.346C38.3257 91.516 40.9819 93.9284 45.5869 96.1871C49.5159 98.1143 54.5604 99.4906 59.3487 100.892C61.4932 91.2823 56.4049 79.5622 45.5651 72.244C39.7202 68.2981 33.3134 66.3811 27.3783 66.3275H27.3778ZM8.37516 76.0416C2.4525 86.244 7.20234 101.215 20.1188 109.935C32.8277 118.516 48.1936 117.5 55.5891 108.599C51.2681 107.368 46.3697 105.969 41.8711 103.763C36.0703 100.918 30.5414 96.1365 29.4258 88.711C28.3634 83.625 26.9438 80.911 25.7672 79.5797C24.5859 78.2422 23.6648 77.9168 22.0055 77.6907C20.3461 77.4638 18.0656 77.6257 15.3649 77.5306C13.2602 77.4565 10.7909 77.1544 8.37516 76.0418V76.0416ZM29.426 88.7107C29.4312 88.7342 29.4363 88.7558 29.4412 88.7794L29.3927 88.4991C29.4026 88.5704 29.4155 88.6397 29.4263 88.711L29.426 88.7107Z" fill="white"/>
                        </svg>
                    </div>
                    <p>
                        Благодаря нашим партнерам, мы можем предложить нашим клиентам разнообразие вкусов и ароматов зеленого кофе - каждый найдет свой идеальный выбор.
                    </p>
                </div>
                <div>
                    <div className='icons'>
                        <svg width="108" height="98" viewBox="0 0 108 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4V0.25C3.00544 0.25 2.05161 0.645088 1.34835 1.34835C0.645088 2.05161 0.25 3.00544 0.25 4H4ZM59 4H62.75C62.75 3.00544 62.3549 2.05161 61.6516 1.34835C60.9484 0.645088 59.9946 0.25 59 0.25V4ZM59 34V30.25C58.0054 30.25 57.0516 30.6451 56.3484 31.3484C55.6451 32.0516 55.25 33.0054 55.25 34H59ZM4 7.75H59V0.25H4V7.75ZM55.25 4V84H62.75V4H55.25ZM7.75 74V4H0.25V74H7.75ZM59 37.75H84V30.25H59V37.75ZM100.25 54V74H107.75V54H100.25ZM62.75 84V34H55.25V84H62.75ZM88.42 88.42C87.8396 89.0005 87.1505 89.4611 86.3922 89.7753C85.6338 90.0894 84.8209 90.2512 84 90.2512C83.1791 90.2512 82.3662 90.0894 81.6078 89.7753C80.8495 89.4611 80.1604 89.0005 79.58 88.42L74.28 93.72C76.8586 96.2985 80.3559 97.7471 84.0025 97.7471C87.6491 97.7471 91.1464 96.2985 93.725 93.72L88.42 88.42ZM79.58 79.58C80.1604 78.9995 80.8495 78.5389 81.6078 78.2247C82.3662 77.9106 83.1791 77.7488 84 77.7488C84.8209 77.7488 85.6338 77.9106 86.3922 78.2247C87.1505 78.5389 87.8396 78.9995 88.42 79.58L93.72 74.28C91.1414 71.7015 87.6441 70.2529 83.9975 70.2529C80.3509 70.2529 76.8536 71.7015 74.275 74.28L79.58 79.58ZM28.42 88.42C27.8396 89.0005 27.1505 89.4611 26.3922 89.7753C25.6338 90.0894 24.8209 90.2512 24 90.2512C23.1791 90.2512 22.3662 90.0894 21.6078 89.7753C20.8495 89.4611 20.1604 89.0005 19.58 88.42L14.28 93.72C16.8586 96.2985 20.3559 97.7471 24.0025 97.7471C27.6491 97.7471 31.1464 96.2985 33.725 93.72L28.42 88.42ZM19.58 79.58C20.1604 78.9995 20.8495 78.5389 21.6078 78.2247C22.3662 77.9106 23.1791 77.7488 24 77.7488C24.8209 77.7488 25.6338 77.9106 26.3922 78.2247C27.1505 78.5389 27.8396 78.9995 28.42 79.58L33.72 74.28C31.1414 71.7015 27.6441 70.2529 23.9975 70.2529C20.3509 70.2529 16.8536 71.7015 14.275 74.28L19.58 79.58ZM88.42 79.58C89.64 80.8 90.25 82.395 90.25 84H97.75C97.75 80.485 96.405 76.96 93.725 74.275L88.42 79.58ZM90.25 84C90.25 85.605 89.64 87.2 88.42 88.42L93.725 93.72C95.0035 92.4449 96.0127 90.9299 96.7042 89.2618C97.3958 87.5938 97.7512 85.8057 97.75 84H90.25ZM74 80.25H59V87.75H74V80.25ZM79.58 88.42C78.9983 87.8405 78.5372 87.1516 78.2231 86.393C77.909 85.6344 77.7482 84.8211 77.75 84H70.25C70.25 87.515 71.595 91.04 74.275 93.725L79.58 88.42ZM77.75 84C77.75 82.395 78.36 80.8 79.58 79.58L74.275 74.28C72.9965 75.5551 71.9873 77.0701 71.2958 78.7382C70.6042 80.4062 70.2488 82.1943 70.25 84H77.75ZM19.58 88.42C18.9983 87.8405 18.5372 87.1516 18.2231 86.393C17.909 85.6344 17.7482 84.8211 17.75 84H10.25C10.25 87.515 11.595 91.04 14.275 93.725L19.58 88.42ZM17.75 84C17.75 82.395 18.36 80.8 19.58 79.58L14.28 74.28C13.0017 75.5553 11.9877 77.0703 11.2961 78.7383C10.6046 80.4063 10.2491 82.1944 10.25 84H17.75ZM59 80.25H34V87.75H59V80.25ZM28.42 79.58C29.64 80.8 30.25 82.395 30.25 84H37.75C37.75 80.485 36.405 76.96 33.725 74.275L28.42 79.58ZM30.25 84C30.25 85.605 29.64 87.2 28.42 88.42L33.72 93.72C34.9983 92.4447 36.0123 90.9297 36.7039 89.2617C37.3954 87.5937 37.7509 85.8056 37.75 84H30.25ZM100.25 74C100.25 77.45 97.45 80.25 94 80.25V87.75C97.6467 87.75 101.144 86.3013 103.723 83.7227C106.301 81.1441 107.75 77.6467 107.75 74H100.25ZM84 37.75C88.3098 37.75 92.443 39.4621 95.4905 42.5095C98.538 45.557 100.25 49.6902 100.25 54H107.75C107.75 47.7011 105.248 41.6602 100.794 37.2062C96.3398 32.7522 90.2989 30.25 84 30.25V37.75ZM0.25 74C0.25 77.6467 1.69866 81.1441 4.27728 83.7227C6.85591 86.3013 10.3533 87.75 14 87.75V80.25C10.55 80.25 7.75 77.45 7.75 74H0.25Z" fill="white"/>
                            <path d="M4 29H19M4 49H29" stroke="white" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <p>
                        Мы заботимся о наших клиентах и предоставляем различные способы доставки зеленого кофе - от обычной курьерской доставки до экспресс-доставки по самолету.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;