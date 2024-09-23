import { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './modal.module.scss'; // Импортируем SCSS-модуль стилей

interface ModalProps {
  isOpen: boolean;           // Управляет видимостью модального окна
  onClose: () => void;       // Функция для закрытия модального окна
  title?: string;            // Опциональный заголовок модального окна
  children: ReactNode;       // Содержимое модального окна
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Если модальное окно закрыто, ничего не рендерим

  return (
    <>
      <div className={cn(styles.overlay)} onClick={onClose}></div>
      <div className={cn(styles.modal)}>
        <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.closeButton} onClick={onClose}>
                ✕
            </button>
        </div>
        <div className={styles.body}>
            {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
