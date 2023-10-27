import { FC } from 'react';
import styles from './feed-data.module.css';
import { useSelector } from '../../../hooks/redux-hooks';
import { getOrderNumbersStatuses } from '../../../utils/utils';
import { wsData } from '../../../utils/data';


const FeedData: FC = () => {

    const messages = useSelector((store) => store.wsAll.messages);
    const message = wsData
    const {done, inWork } = getOrderNumbersStatuses(message)
    {console.log(done.slice(14))}
    return (
        <div className={styles.main_container}>
            <div className={`${styles.box_container} mb-15`}>
                <div className={styles.element}>
                    <p className='mb-6 text text_type_main-medium'>
                        Готовы:
                    </p>
                    <div className={styles.box_done}>
                        {done.slice(0, 15).map((item, index) => (
                        <span className='mb-2 text text_type_digits-default' key={index}>{item}</span>
                        ))}
                </div>
                </div>
                <div  className={styles.element}>
                <p className='mb-6 text text_type_main-medium'>
                        В работе:
                    </p>
                <div className={styles.box}>
                
                        {inWork.slice(0, 15).map((item, index) => (
                            <span className='mb-2 text text_type_digits-default' key={index}>{item}</span>
                        ))}
                </div>
                </div>
            </div>
            <div className={`${styles.complited} mb-15 text text_type_main-medium`}>
                <span>
                    Выполнено за все время:
                </span>
                <span className={'text text_type_digits-large'}>
                    {`${message.total}`}
                </span>
            </div>
            <div className={`${styles.complited} text text_type_main-medium`}>
                <span>
                    Выполнено за сегодня:
                </span>
                <span className={'text text_type_digits-large'}>
                    {`${message.totalToday}`}
                </span>
            </div>
        </div>
    );
}

export default FeedData;