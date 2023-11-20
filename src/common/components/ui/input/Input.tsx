import './Input.scss'

interface InputProps
{
    value?: string;
    name?: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({value, onChange, type, name}) => {

    return (
        <input 
        type={type} 
        name={name}
        value={value} 
        onChange={onChange}/>
    );
};

export default Input;