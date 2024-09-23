import { TextareaHTMLAttributes, InputHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import styles from './input.module.scss';


type InputProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: 'input' | 'textarea';  
    label?: string;                  
    error?: string;                  
  };

const Input: FC<InputProps> = ({ variant = 'input', label, error, className, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      {variant === 'input' ? (
        <input
          className={cn(styles.inputField, className, { [styles.error]: !!error })}
          {...props}
        />
      ) : (
        <textarea
          className={cn(styles.textareaField, className, { [styles.error]: !!error })}
          {...props}
        />
      )}
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;
