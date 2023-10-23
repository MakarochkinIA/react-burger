import { FC } from 'react';
import styles from './feed-data.module.css';


const FeedData: FC = () => {
    return (
        <div className={styles.main_container}>
            <div className={`${styles.box_container} mb-15`}>
                <div className={styles.box_done}>
                    <p className='mb-6 text text_type_main-medium'>
                        Готовы:
                    </p>
                    <span className={'text text_type_digits-default'}>
                        034533
                    </span>
                    <span className={'text text_type_digits-default'}>
                        034533
                    </span>
                    <span className={'text text_type_digits-default'}>
                        034533
                    </span>
                    <span className={'text text_type_digits-default'}>
                        034533
                    </span>
                </div>
                <div className={styles.box}>
                    <span  className='mb-6 text text_type_main-medium'>
                        В работе:
                    </span>
                    <span className={'text text_type_digits-default'}>
                        034533
                    </span>
                    <span className={'text text_type_digits-default'}>
                        034533
                    </span>
                    <span className={'text text_type_digits-default'}>
                        034533
                    </span>
                    <span className={'text text_type_digits-default'}>
                        034533
                    </span>
                </div>
            </div>
            <div className={`${styles.complited} mb-15 text text_type_main-medium`}>
                <span>
                    Выполнено за все время:
                </span>
                <span className={'text text_type_digits-large'}>
                    28 752
                </span>
            </div>
            <div className={`${styles.complited} text text_type_main-medium`}>
                <span>
                    Выполнено за сегодня:
                </span>
                <span className={'text text_type_digits-large'}>
                    138
                </span>
            </div>
        </div>
    );
}

export default FeedData;