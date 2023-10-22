import { FC } from 'react';
import styles from './feed-data.module.css';


const FeedData: FC = () => {
    return (
        <div className={styles.main_container}>
            <div className={`${styles.box_container} mb-15`}>
                <div className={styles.box}>
                    <span className='mb-6'>
                        Готовы:
                    </span>
                </div>
                <div className={styles.box}>
                    <span  className='mb-6'>
                        В работе:
                    </span>
                </div>
            </div>
            <div className={`${styles.complited} mb-15`}>
                <span>
                    Выполнено за все время:
                </span>

            </div>
            <div className={styles.complited}>
                <span>
                    Выполнено за сегодня:
                </span>
            </div>
        </div>
    );
}

export default FeedData;