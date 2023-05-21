import React, { useRef, useEffect, useReducer } from 'react';
import './_scroll.scss';
import {useNavigate} from "react-router-dom";
import zeleny from '../../assets/koffee/OLG.jpeg';
import black from '../../assets/koffee/black.jpeg';
import koffee from '../../assets/koffee/koffee.jpeg';

interface Slide {
    id: number,
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string
}

interface AppState {
    slideIndex: number;
}

type AppAction = { type: 'NEXT' } | { type: 'PREV' };

const slides: Slide[] = [
    {
        id: 1,
        title: 'Зеленое кофе',
        subtitle: '',
        description: 'Проснись силой зеленого кофе: энергия, вдохновение, забота о тебе и природе!"',
        image: zeleny,
        link: '/kofe-zelenyy'
    },
    {
        id: 2,
        title: 'Обжаренное кофе ',
        subtitle: '',
        description: 'Потрясающий вкус, горячая страсть: Ожаренный кофе — пробуждение силы и наслаждение каждым глотком!',
        image: black,
        link: '/kofe-fried'
    },
    {
        id: 3,
        title: 'Новости',
        subtitle: '',
        description: '«Обжарщик года» 2023',
        image: koffee,
        link: '/news'
    },
];

function useTilt(active: boolean | null) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined as DOMRect | undefined,
            mouseX: undefined as number | undefined,
            mouseY: undefined as number | undefined,
        };

        let el = ref.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty('--px', String(px));
            el.style.setProperty('--py', String(py));
        };

        el.addEventListener('mousemove', handleMouseMove);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState: AppState = {
    slideIndex: 0,
};

function slidesReducer(state: AppState, event: AppAction): AppState {
    if (event.type === 'NEXT') {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length,
        };
    }
    if (event.type === 'PREV') {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
        };
    }
    return state;
}

function Slide({ slide, offset }:any) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
    const push = useNavigate();
    return (
        <div
            onClick={() => push(slide.link)}
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                // @ts-ignore
                '--offset': offset,
                '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
            }}
        >
            <div
                className="slideBackground"
                style={{
                    backgroundImage: `url('${slide.image}')`,
                }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`,
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </div>
    );
}

function Scroll() {
    const [state, dispatch] = useReducer(slidesReducer, initialState);

    return (
        <div className='body'>
        <div className="slides">
            <button onClick={() => dispatch({ type: 'NEXT' })}>‹</button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => dispatch({ type: 'PREV' })}>›</button>
        </div>
        </div>
    );
}

export default function Main() {
    return <Scroll />;
}