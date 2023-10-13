import {FC} from 'react';
import styles from './constructor-element-empty.module.css';

interface ConstructorElementEmptyProps {
  type?: '' | 'top' | 'bottom';
  text: string;
  extraClass?: React.CSSProperties;
}

const ConstructorElementEmpty: FC<ConstructorElementEmptyProps> = ({
  type = '',
  text,
  extraClass = {},
}) => {
  const className = (type: string) => {
    switch (type) {
      case '':
        return styles.constructor_element_body;
      case 'top':
        return styles.constructor_element_top;
      case 'bottom':
        return styles.constructor_element_bottom;
      default:
        return styles.constructor_element;
    }
  };

  return (
    <div className={className(type)} style={extraClass}>
      <span className={styles.constructor_element_row}>
        <span className={styles.constructor_element_text}>{text}</span>
      </span>
    </div>
  );
};

export default ConstructorElementEmpty;