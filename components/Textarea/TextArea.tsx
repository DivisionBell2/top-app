import { TextAreaProps } from "./Textarea.props";
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const TextArea = forwardRef(({ error, className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
                [styles.error]: error
            })} ref={ref} {...props}/>
            {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
});