import styles from './order-stub.module.css';


const OrderStub = () => {
    return (
        <div className={styles.order_stub}>
            <p className='text text_type_main-large mb-8'>
                Заказ обрабатывается
            </p>
        </div>
    );
}

export default OrderStub;