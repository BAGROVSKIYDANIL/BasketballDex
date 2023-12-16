import {useState, useEffect } from 'react'
import Select, {OnChangeValue} from 'react-select'
import { IOption } from '../../../../common/components/ui/MultiSelect/interface'
import makeAnimated from 'react-select/animated'
import Input from '../../../../common/components/ui/input/Input'
import Label from '../../../../common/components/ui/label/Label'
import Button from '../../../../common/components/ui/button/Button'
import { useNavigate } from 'react-router-dom'
import { IFormPlayerData } from '../../interfaces/interface'
import { useHttp } from '../../../../common/hooks/http.hook'
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/redux.hook'
import { uploadImagePlayer } from '../../action'
import { getPlayerPosition, getTeams } from '../../asyncAction'

import './PlayersAdd.scss'



const animatedComponents = makeAnimated()

const PlayersAdd = () =>
{
    const navigate = useNavigate();
    const {request} = useHttp();
    const dispatch = useAppDispatch()
    const {imageUrl, arrPosition, arrTeams} = useAppSelector((state) => state.players)
    const token = localStorage.getItem('token')
    const [currentPosition, setcurrentPosition] = useState([]);
    const [currentTeam, setCurrentTeam] = useState([]);
    const [formData, setFormData] = useState<IFormPlayerData>({
            name: '',
            position: '',
            avatarUrl: '',
            team: null,
            height: null,
            weight: null,
            birthday: null,
            number: null
        
    })


    useEffect(() =>
    {
        dispatch(getPlayerPosition())
        dispatch(getTeams())
    },[dispatch])

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        const {name, value } = e.target;
        let parsedValue = null
        switch(name)
        {
            case'height':
            case'weight':
            case'number':
            parsedValue = parseInt(value)
            break;
            default:
            parsedValue = value
        }
        console.log(value)
        setFormData({...formData, [name] : parsedValue})
    }
    
    const handleSubmit = async(e:React.MouseEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
        try
        {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`}
            const newPlayer = await request('http://dev.trainee.dex-it.ru/api/Player/Add', 'POST', JSON.stringify(formData), headers)  
            console.log(newPlayer)  
            navigate('/PagePlayerCard')
        }
        catch(e)
        {
            console.error('Произошла ошибка:', e);
        }
    }

    const handleUploadImage = async(e:React.ChangeEvent<HTMLInputElement>) =>
    {
        const file = e.target.files?.[0]
        if(!file)
        {
            alert('Пожалуйста выберите файл');
            return;
        }

        const  formDat = new FormData();
               formDat.append('file', file)
        const headers = {'Authorization': `Bearer ${token}`};
        const image = await request('http://dev.trainee.dex-it.ru/api/Image/SaveImage', 'POST', formDat, headers)
            dispatch(uploadImagePlayer(image))
            setFormData({...formData, avatarUrl: image})
    }

    const getValue = (selectedValues:any, options:any) =>
    {
        if(selectedValues.length === 0)
        {
            return null;
        }
        return options.filter((option: { value: string }) => selectedValues.includes(option.value));
    }

    const onChangePosition = (newValue: OnChangeValue<IOption, boolean>, setter:any) =>
    {
        const selectedValues = (newValue as IOption[]).map((value) => value.value)
        setter(selectedValues);
        setFormData({...formData, position: selectedValues[0]})
    }

    const onChangeTeam = (newValue: OnChangeValue<IOption, boolean>, setter:any) =>
    {
        const selectedValues = (newValue as IOption[]).map(({value, id}) => ({value, id}))
        setter(selectedValues[0].value);
        if(selectedValues[0].id)
        {
            setFormData({...formData, team: selectedValues[0].id})
        }
    }
    const image = `http://dev.trainee.dex-it.ru${imageUrl}`

    return(
        <div className="addition">
            <div className="addition__menu">
                <div className="addition__path">
                    <a href="#/">Players</a>
                    <span>/</span>
                    <a href="#/">Add new player</a>
                </div>
            </div>
            <div className="addition__wrapper">
                <div className="addition__loading">
                    <label htmlFor="fileInput" className="addittion__label">
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="75" viewBox="0 0 74 75" fill="none">
                            <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M13.8748 29.6875C12.179 29.6875 10.7915 28.2812 10.7915 26.5625V20.3125H4.62481C2.92897 20.3125 1.54147 18.9062 1.54147 17.1875C1.54147 15.4688 2.92897 14.0625 4.62481 14.0625H10.7915V7.8125C10.7915 6.09375 12.179 4.6875 13.8748 4.6875C15.5706 4.6875 16.9581 6.09375 16.9581 7.8125V14.0625H23.1248C24.8206 14.0625 26.2081 15.4688 26.2081 17.1875C26.2081 18.9062 24.8206 20.3125 23.1248 20.3125H16.9581V26.5625C16.9581 28.2812 15.5706 29.6875 13.8748 29.6875ZM33.6143 40.625C35.2666 37.7244 38.3203 35.9375 41.625 35.9375C44.9297 35.9375 47.9834 37.7244 49.6357 40.625C51.2881 43.5257 51.2881 47.0994 49.6357 50C47.9834 52.9007 44.9297 54.6875 41.625 54.6875C38.3203 54.6875 35.2666 52.9007 33.6143 50C31.9619 47.0994 31.9619 43.5257 33.6143 40.625ZM66.2915 20.3125H56.5173L52.694 16.0938C51.5531 14.8125 49.8881 14.0625 48.1615 14.0625H28.4281C28.9523 15 29.2915 16.0312 29.2915 17.1875C29.2915 20.625 26.5165 23.4375 23.1248 23.4375H20.0415V26.5625C20.0415 30 17.2665 32.8125 13.8748 32.8125C12.734 32.8125 11.7165 32.4688 10.7915 31.9375V64.0625C10.7915 67.5 13.5665 70.3125 16.9581 70.3125H66.2915C69.6831 70.3125 72.4581 67.5 72.4581 64.0625V26.5625C72.4581 23.125 69.6831 20.3125 66.2915 20.3125ZM26.2079 45.3125C26.2079 53.9375 33.1146 60.9375 41.6246 60.9375C50.1346 60.9375 57.0413 53.9375 57.0413 45.3125C57.0413 36.6875 50.1346 29.6875 41.6246 29.6875C33.1146 29.6875 26.2079 36.6875 26.2079 45.3125Z" fill="white"/>
                        </svg>
                            <img className='addittion__img' src={image} alt="" />                        
                    </label>
                    <Input  id='fileInput'
                            type='file'
                            accept='image/*, .png, .jpg, .gif, .web'
                            onChange={handleUploadImage}
                        />
                </div>
                <div className="form">
                    <form action="" className="form__wrapper" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <Label  text={'Name'}/>
                            <Input  type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}/>
                        </div>
                        <div className="form__group">
                            <Label text='Position'/>
                            <Select
                                classNamePrefix='players-select'
                                placeholder='Выбрать...'
                                onChange={newValue => onChangePosition(newValue, setcurrentPosition)}
                                value={getValue(currentPosition, arrPosition)}
                                options={arrPosition}
                                components={animatedComponents}
                                isMulti/>
                        </div>
                        <div className="form__group">
                            <Label text='Team'/>
                            <Select
                                classNamePrefix='players-select'
                                placeholder='Выбрать...' 
                                onChange={newValue => onChangeTeam(newValue, setCurrentTeam)}
                                value={getValue(currentTeam, arrTeams)}
                                options={arrTeams}
                                isMulti/>                        
                        </div>
                        <div className="form__group">
                            <div className="form__row1">
                                <div className="form__height">
                                    <Label  text='Height (cm)'/>
                                    <Input  type='text'
                                            name='height'
                                            value={formData.height}
                                            onChange={handleInputChange}/>
                                </div>
                                <div className="form__weight">
                                    <Label  text='Weight (kg)'/>
                                    <Input  type='text'
                                            name='weight'
                                            value={formData.weight}
                                            onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__row2">
                                    <div className="form__birthday">
                                        <Label  text='Birthday'/>
                                        <Input  type='date'
                                                name='birthday'
                                                value={formData.birthday}
                                                onChange={handleInputChange}/>
                                    </div>
                                    <div className="form__number">
                                        <Label  text='Number'/>
                                        <Input  type='text'
                                                name='number'
                                                value={formData.number}
                                                onChange={handleInputChange}/>
                                    </div>
                            </div>
                        </div>
                        <div className="form__button">
                            <Button variant='Cancel'>Cancel</Button>
                            {/* <Link to='/PagePlayerCard'><Button variant='Save'>Save</Button></Link> */}
                         <Button type='submit' variant='Save'>Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default PlayersAdd;