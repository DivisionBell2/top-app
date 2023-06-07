import { TextAreaProps } from "./Textarea.props";
import styles from './Textarea.module.css';
import cn from 'classnames';

export const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} {...props}/>
    )
}