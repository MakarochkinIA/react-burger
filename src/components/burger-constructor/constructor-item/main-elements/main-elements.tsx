import { useRef, FC } from 'react';
import styles from './main-elements.module.css';
import { useDispatch } from 'react-redux';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from 'react-dnd';
import { Ingredient } from '../../../../utils/types';
import { MOVE_INGREDIENT } from '../../../../services/actions/current-ingredients';

interface MainElementsProps {
  index: number;
  item: Ingredient;
  handleClose: (item: Ingredient) => void;
}

const MainElements: FC<MainElementsProps> = ({ index, item, handleClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const id = item._id;
  const dispatch = useDispatch();
  const [{ handlerId }, drop] = useDrop({
    accept: "item",
    collect: monitor => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(ingredient, monitor) {
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
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
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