import { ReactNode } from 'react';
import './Button.scss'

    interface ButtonProps 
    {
        children: ReactNode,
        type?: 'submit'| 'button',
        variant?: 'default'|'Cancel' |'Save'| 'Add',
        onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
    }

const Button: React.FC<ButtonProps> = ({children, onClick, variant, type}) =>
{
    return(
        <button type={type} className={variant} onClick={onClick}>{children}</button>
    )
}

export default Button;