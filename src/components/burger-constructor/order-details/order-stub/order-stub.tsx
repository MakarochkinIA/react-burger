import styles from './order-stub.module.css';
import { FC } from 'react'


const OrderStub: FC = () => {
    return (
        <div className={styles.order_stub}>
            <p className='text text_type_main-large mb-8'>
                Заказ обрабатывается
            </p>
            <p className='text text_type_main-large mb-8'> 
                Ожидайте
            </p>
        </div>
    );
}

export default OrderStub;