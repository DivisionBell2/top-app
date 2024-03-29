import styles from './hhData.module.css';
import { Card } from '../Card/Card';
import { ReactSVG as RateIcon } from 'react-svg';
import { priceRu } from '@/helpers/helpers';
import { HhDataProps } from './hhData.props';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon src="/rate.svg" className={styles.filled} />
                        <RateIcon src="/rate.svg" className={styles.rate_icon} />
                        <RateIcon src="/rate.svg" className={styles.rate_icon} />

                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon src="/rate.svg" className={styles.filled} />
                        <RateIcon src="/rate.svg" className={styles.filled} />
                        <RateIcon src="/rate.svg" className={styles.rate_icon} />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon src="/rate.svg" className={styles.filled} />
                        <RateIcon src="/rate.svg" className={styles.filled} />
                        <RateIcon src="/rate.svg" className={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
    )
}