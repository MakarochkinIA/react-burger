import { useRef, FC } from 'react';
import styles from './main-elements.module.css';
import { useDispatch } from '../../../../hooks/redux-hooks';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag, DropTargetMonitor, XYCoord } from 'react-dnd';
import { MOVE_INGREDIENT } from '../../../../services/actions/current-ingredients';
import { MainElementsProps } from '../../../../utils/types';
import { DragItem } from '../../../../utils/types';

const MainElements: FC<MainElementsProps> = ({ index, item, handleClose }) => {
    const ref = useRef<HTMLDivElement>(null);
    const id = item._id;
    const dispatch = useDispatch();
    const [{ handlerId }, drop] = useDrop({
        accept: "item",
        collect: monitor => ({
            handlerId: monitor.getHandlerId(),
        }),
        hover: (ingredient: DragItem, monitor: DropTargetMonitor) => {
            if (!ref.current) {
                return;
            }
            const dragIndex = ingredient.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch({
                type: MOVE_INGREDIENT,
                payload: {
                    dragIndex: dragIndex,
                    hoverIndex: hoverIndex,
                },
            });
            ingredient.index = hoverIndex;
        },
    });
    const [, drag] = useDrag({
        type: 'item',
        item: () => {
            return { id, index };
        },
    });
    drag(drop(ref));

    return (
        <div ref={ref} className={styles.content_container} data-handler-id={handlerId}>
            <div className={styles.scroll_area_svg}>
                <DragIcon type='primary' />
            </div>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                extraClass={`${styles.bg_color}`}
                handleClose={() => {
                    handleClose(item);
                }}
            />
        </div>
    );
};

export default MainElements;