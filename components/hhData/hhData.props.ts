import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface hhDataProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: 'white' | 'blue';
    children: ReactNode;
}