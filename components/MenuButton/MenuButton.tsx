import { useScrollY } from '@/hooks/useScrollY';
import styles from './MenuButton.module.css';
import { ReactSVG as MenuIcon } from 'react-svg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { MenuButtonProps } from './MenuButton.props';

export const MenuButton = ({className, ...props}: MenuButtonProps): JSX.Element => {

    return (
        <button
            className={styles.menu}
            {...props}
        >
            <MenuIcon src="/menu.svg" />
        </button>
    )
}