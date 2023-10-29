import { ReactNode } from 'react';
import './Button.scss'

    interface ButtonProps 
    {
        children: ReactNode,
        variant?: 'default'|'Cancel' |'Save'| 'Add',
        onClick?: () => void;
    }

const Button: React.FC<ButtonProps> = ({children, onClick, variant}) =>
{
    return(
        <button type='button' className={variant} onClick={onClick}>{children}</button>
    )
}

export default Button;