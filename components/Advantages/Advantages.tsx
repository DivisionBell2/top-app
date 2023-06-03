import styles from './Advantages.module.css';
import { HhAdvantagesProps } from './Advantages.props';
import { ReactSVG as CheckIcon } from 'react-svg';

export const Advantages = ({ advantages }: HhAdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantages}>
                    <CheckIcon src="/check.svg"/>
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline} />
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    )
}