import { useState } from 'react';
import Select, {OnChangeValue} from 'react-select';
import { IOption } from './interface';
import { useAppSelector} from '../../../hooks/redux.hook';
import { useAppDispatch } from '../../../hooks/redux.hook';
import { selectTeam } from '../../../../modules/players/action';
import makeAnimated from 'react-select/animated';

import './MultiSelect.scss'




const animatedComponents = makeAnimated();

const MultiSelect= () => {
    const {arrTeams} = useAppSelector((state) => state.players)    
    const [currentTeam, setCurrentTeam] = useState([])
    const dispatch = useAppDispatch();


    const getValue = (selectedValues:any, options:any) =>
    {
        if(selectedValues.length === 0 )
        {
            return null;
        }
        return options.filter((option: { value: string }) => selectedValues.includes(option.value));
    }
    const onChange = (newValue: OnChangeValue<IOption, boolean>, setter:any) =>
    {
        const selectedValues = (newValue as IOption[]).map(value => value.value);
        setter(selectedValues)
        dispatch(selectTeam(selectedValues))
    }

    return (        
            <Select 
            classNamePrefix='custom-select'
            onChange={newValue => onChange(newValue, setCurrentTeam)} 
            value={getValue(currentTeam, arrTeams)} 
            options={arrTeams}
            components={animatedComponents}
            isMulti />
            
        );
};

export default MultiSelect;