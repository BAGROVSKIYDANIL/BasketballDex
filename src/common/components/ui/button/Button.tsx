import { ReactNode } from 'react';
import './Button.scss'

interface ButtonProps 
{
    children: ReactNode,
    variant?: 'outline' | 'secondary',
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick, variant}) =>
{
    return(
        <button className={`default ${variant}`} onClick={onClick}>{children}</button>
    )
}

export default Button;