import { SortEnum, SortProps } from "./Sort.props";
import styles from './Sort.module.css';
import cn from 'classnames';
import { ReactSVG as SortIcon } from 'react-svg';

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}
            >
            <SortIcon className={styles.sortIcon} src="/sort.svg" />По рейтингу
            </span>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
            >
            <SortIcon className={styles.sortIcon} src="/sort.svg" />По&nbsp;цене
            </span>
        </div>
    )
}