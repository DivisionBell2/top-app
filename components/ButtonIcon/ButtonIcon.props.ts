import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import up from '../../public/buttonIcon/up.svg';
import close from '../../public/buttonIcon/close.svg';
import menu from '../../public/buttonIcon/menu.svg';

export const icons = {
    up,
    close,
    menu
}

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'white';
}