import { useState } from 'react';
import Select, {OnChangeValue} from 'react-select';
import { IOption } from './interface';
import makeAnimated from 'react-select/animated';

import './MultiSelect.scss'

const options:IOption[] = [
    {
        value: 'Memphis Grizzlies',
        label: 'Memphis Grizzlies',
    },
    {
        value: 'Denver Nuggets',
        label: 'Denver Nuggets'
    },
    {
        value: 'Portland  trail blazzers',
        label: 'Portland  trail blazzers'
    },
    {
        value: 'Minnesota timberwolves',
        label: 'Minnesota timberwolves'
    },
    {
        value: 'Oklahoma city thunder',
        label: 'Oklahoma city thunder'
    },
    {
        value: 'Philadelphia seventy sixers',
        label: 'Philadelphia seventy sixers'
    }
]
// interface MultiSelectProps 
// {
//     margin?: string;
//     left?: string;
// }

const animatedComponents = makeAnimated();

const MultiSelect= () => {
    const [currentCities, setCurrentCities] = useState(['null'])
     
    const getValue = () =>
    {
        return currentCities ?
        options.filter(city => currentCities.indexOf(city.value) >= 0) : options.find(city => city.value === currentCities) 
    }
    const onChange = (newValue: OnChangeValue<IOption, boolean>) =>
    {
        setCurrentCities((newValue as IOption[]).map(value => value.value))
    }
    return (        
            <Select 
            classNamePrefix='custom-select'
            onChange={onChange} 
            value={getValue()} 
            options={options}
            components={animatedComponents}
            isMulti />
            
        );
};

export default MultiSelect;