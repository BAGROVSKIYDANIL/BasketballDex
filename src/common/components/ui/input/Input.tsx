import './Input.scss'

interface InputProps
{
    value?: string | number | Date| null  ;
    name?: string;
    type?: string;
    accept?: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({value, onChange, type, name, accept, id}) => {

    return (
        <input 
        id={id}
        type={type} 
        accept={accept}
        name={name}
        value={value === null ? '' : value instanceof Date ? value.toISOString() : value} 
        onChange={onChange}/>
    );
};

export default Input;