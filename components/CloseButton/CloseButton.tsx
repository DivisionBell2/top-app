import { useScrollY } from '@/hooks/useScrollY';
import styles from './CloseButton.module.css';
import { ReactSVG as CloseIcon } from 'react-svg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { CloseButtonProps } from './CloseButton.props';

export const CloseButton = ({className, ...props}: CloseButtonProps): JSX.Element => {

    return (
        <button
            className={styles.close}
            {...props}
        >
            <CloseIcon src="/buttonIcon/close.svg" />
        </button>
    )
}