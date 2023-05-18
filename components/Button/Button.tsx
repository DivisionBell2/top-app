import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import { ReactSVG as ArrowIcon } from 'react-svg';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
    return <>
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon src="/arrow.svg" className='arrow_icon' />
            </span>}
        </button>
    </>
}