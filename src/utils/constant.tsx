export const newsData = [
    {
        id: 1,
        title: 'Зеленое кофе Vietnam',
        kofe: 1,
        description: '',
        images: 'https://nyamkin.ru/images/recepts/medium/5f6f180f146f2.jpg'
    },
    {
        id: 2,
        title: 'Обжареное кофе',
        kofe: 2,
        description: <pre>
                {'Арабика Бразилия 100%\n' +
                            '990рублей. \n' +
                        '\n' +
                        'Блэнд \n' +
                        'Бразилия арабика 80% \n' +
                        'Вьетнам Робуста 20 % \n' +
                        '957рублей \n' +
                        '\n' +
                        'Бленд \n' +
                        'Бразилия арабика 50% \n' +
                        'Вьетнам Робуста 50 % \n' +
                        '890рублей \n' +
                        '\n' +
                        'Блэнд \n' +
                        'Бразилия арабика 20%\n' +
                        'Вьетнам робуста 20 % \n' +
                        '820 рублей \n' +
                        '\n' +
                        'Вьетнам робуста 100 % \n' +
                        '790рублей\n' +
                        '\n' +
                        'Сублим. Кокам, Бразилия - 1400 рублей/кг\n' +
                        'Сублим. Индус, Индия - 1290рублей \n' +
                        'Гранулы - 1190 рублей кг\n' +
                        'Порошкообразный - 1090 рублей кг \n' +
                        'Цикорий 040-333 - 590 рублей кг'}
            </pre>,
        images: 'https://s1.studio-smeg.ru/content/09/44/944/1fe594931660827928/1fe594931660827928.jpg'
    },
    {
        id: 3,
        title: 'Зеленое кофе',
        kofe: 1,
        description: <pre>
            {'Vietnam 🇻🇳\n' +
                'Robusta Gr 1, scr 18 clean : 4$\n' +
                'Robusta Gr 1, scr 18 Wetpolished: 4,1$\n' +
                '\n' +
                'Колумбия 🇨🇴 \n' +
                'Columbia Supremo : 9,8$\n' +
                'Columbia Excelso: 9,1$\n' +
                '\n' +
                'Uganda🇺🇬 \n' +
                'Uganda Drugar: 6,3$\n' +
                '\n' +
                'India 🇮🇳 \n' +
                'India Arabica plantation AA: 8,9$\n' +
                'India Arabica plantation C: 8,2$\n' +
                'India Arabica plantation A: 8,9$\n' +
                'India Arabica plantation B: 8,6$\n' +
                'India Robusta cherry AA: 5,15$\n' +
                'India Robusta cherry AB: 5$\n' +
                '\n' +
                'Brazil 🇧🇷 \n' +
                'Arabica Brazil Santos 17/18 GC: 6,2$\n' +
                'Arabica Brazil Mogiana 17/18 GC:7,3$\n' +
                'Arabica Brazil Santos 17/18 FC 6,5 $\n' +
                'курс= ЦБ'}
        </pre>,
        images: 'https://hqwalls.com.ua/wp-content/uploads/2020/02/Zelen-y-kofe.jpg'
    },
]

export function getCurrentDate(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `Сегодня, ${day}.${month}.${year}`;
    return formattedDate;
}
