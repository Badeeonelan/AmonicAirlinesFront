import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import classes from './button.module.scss';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    label: string;
}


const Button: FC<ButtonProps> = ({
    variant = 'primary', 
    label,
    className,
    ...props
}) => {
    console.log(classes);

    return (
        <button
            className={cn(classes.button, classes[variant], className)} 
            {...props} 
        >
            {label}
        </button>
    );
};

export default Button;
