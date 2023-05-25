import { hhDataProps } from "./hhData.props";
import styles from './hhData.module.css';
import cn from 'classnames';

export const hhCata = ({ color = 'white', children, className, ...props }: hhDataProps): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}
            {...props}
        >
            {children}
        </div>
    )
}