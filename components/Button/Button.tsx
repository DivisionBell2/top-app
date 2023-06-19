import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import { ReactSVG as ArrowIcon } from 'react-svg';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {

    const scale = useMotionValue(1);
    useEffect(() => {
        scale.onChange(s => console.log(s))
    }, []);

    return <>
        <motion.button
            whileHover={{ scale: 1.05 }}

            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost'
            })}
            style={{scale}}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon src="/arrow.svg" className='arrow_icon' />
            </span>}
        </motion.button>
    </>
}