import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Up from './up.svg';
import Close from './close.svg';
import Burger from './burger.svg';

export const icons = {
    Up,
    Close,
    Burger
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'white',
}