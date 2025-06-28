import {ReactNode} from "react";
import {
    debt,
    emFund,
    family,
    goingHoliday,
    home,
    retire,
    vision,
} from "../assets";

export interface TimelinePoint {
    left: number;
    marker: 'large' | 'small' | 'none';
    label: ReactNode;
    cards: TimelineItem[]
    transition: 'solid' | 'dotted';
}

export interface TimelineItem {
    image: string;
    imageAlt: string;
    arrowDirection: 'up' | 'down';
    children: ReactNode;
}

export type TimelineData = TimelinePoint[];

export const timelineData: TimelineData = [
    {
        left: 0,
        marker: 'large',
        label: <>You are<br />here</>,
        cards: [],
        transition: 'solid'
    },
    {
        left: 18+65+8,
        marker: 'small',
        label: <>In 1 year and 9<br/>months</>,
        cards: [
            {
                image:family,
                imageAlt: "Family",
                children: <>Baby's birth</>,
                arrowDirection:'down'
            },
            {
                image:home,
                imageAlt: "Home",
                children: <>New home</>,
                arrowDirection:'up'
            },
        ],
        transition: 'solid'
    },
    {
        marker: 'small',
        left: 18+65+8+45+80+8+24,
        label: <>In 3 years and<br/>2 months</>,
        cards: [
            {
                image:goingHoliday,
                imageAlt: "Holiday",
                children: <>Holiday</>,
                arrowDirection:'down'
            },
        ],
        transition: 'solid'
    },
    {
        marker: 'small',
        left: 18+65+8+45+80+8+80+50+8,
        label: <>In 4 years and<br/>9 months</>,
        cards: [
            {
                image:emFund,
                imageAlt: "Emergency Fund",
                children: <>Emergency Fund</>,
                arrowDirection:'up'
            },
        ],
        transition: 'solid'
    },
    {
        marker: 'small',
        left: 18+65+8+45+80+8+80+50+8+50+138+8,
        label: <>In 8 years and<br/>11 months</>,
        cards: [
            {
                image:debt,
                imageAlt: "Debt Free",
                children: <>Debt free</>,
                arrowDirection:'up'
            },
        ],
        transition: 'solid'
    },
    {
        marker: 'none',
        left: 18+65+8+45+80+8+80+50+8+50+138+8+(138/2)+8,
        label: <><br/><br/></>,
        cards: [
            {
                image:retire,
                imageAlt: "Retire",
                children: <>Retire</>,
                arrowDirection:'down'
            },
        ],
        transition: 'dotted'
    },
    {
        marker: 'none',
        left: 18+65+8+45+80+8+80+50+8+50+138+8+(138/2)+8+(138/2)+8+36+8,
        label: <><br/>Ultimately<br/></>,
        cards: [
            {
                image:vision,
                imageAlt: "Vision",
                children: <>Make a contribution to my community through philantrophy</>,
                arrowDirection:'up'
            },
        ],
        transition: 'dotted'
    },
];
