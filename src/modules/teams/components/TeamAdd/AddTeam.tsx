import Input from '../../../../common/components/ui/input/Input'
import Label from '../../../../common/components/ui/label/Label';
import Button from '../../../../common/components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../../../common/hooks/http.hook';
import { useAppDispatch,useAppSelector } from '../../../../common/hooks/redux.hook';
import {useState } from 'react';
import { uploadImage } from '../../action';
import { IFormData} from '../../interfaces/interface';

import './AddTeam.scss'


const AddTeam: React.FC = () => {

    const navigate = useNavigate();
    const {request} = useHttp();
    const dispatch = useAppDispatch();
    const {imageUrl} = useAppSelector((state) => state.team)
    const token = localStorage.getItem('token')
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        division: '',
        conference: '',
        foundationYear: null,
        imageUrl: ''
    })


    const handleInputChange =  (e:React.ChangeEvent<HTMLInputElement> ) =>
    {   
        let name = ''
        let value = null
        if(e.target.type !== 'file')
        {
            name = e.target.name
            value = e.target.value
            const numericValue = name === 'foundationYear' ? parseInt(value) : value;
            setFormData({...formData, [name]: numericValue});
        }
    }
    const handleSubmit = async (e:React.MouseEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
        try
        {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const newTeam = await request('http://dev.trainee.dex-it.ru/api/Team/Add', 'POST', JSON.stringify(formData), headers);
            console.log(newTeam)
             navigate('/PageTeamCard')

        }     
        catch(e)
        {
            console.error('Произошла ошибка:', e);
        }   
    }
    const handleUpload = async (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        const file = e.target.files?.[0]
        if(!file)
        {
            alert('Пожалуйста выберите файл');
            return;
        }
        const formDat = new FormData();
        formDat.append('file', file)    
        const headers = {'Authorization': `Bearer ${token}`}
        const image = await request('http://dev.trainee.dex-it.ru/api/Image/SaveImage', 'POST', formDat, headers)
         dispatch(uploadImage(image))  
        setFormData({...formData, imageUrl: image})

    }

    const image = `http://dev.trainee.dex-it.ru${imageUrl}`
    return (
        <div className="addittion">
            <div className="addittion__menu">
                <div className="addittion__path">
                    <a href="#/">Teams</a>
                    <span>/</span>
                    <a href="#/">Denver Nuggets</a>
                </div>
            </div>
            <div className="addittion__wrapper">
                <div className="addittion__loading">
                    <label className='addittion__label' htmlFor='fileInput'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="75" viewBox="0 0 74 75" fill="none">
                            <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M13.8748 29.6875C12.179 29.6875 10.7915 28.2812 10.7915 26.5625V20.3125H4.62481C2.92897 20.3125 1.54147 18.9062 1.54147 17.1875C1.54147 15.4688 2.92897 14.0625 4.62481 14.0625H10.7915V7.8125C10.7915 6.09375 12.179 4.6875 13.8748 4.6875C15.5706 4.6875 16.9581 6.09375 16.9581 7.8125V14.0625H23.1248C24.8206 14.0625 26.2081 15.4688 26.2081 17.1875C26.2081 18.9062 24.8206 20.3125 23.1248 20.3125H16.9581V26.5625C16.9581 28.2812 15.5706 29.6875 13.8748 29.6875ZM33.6143 40.625C35.2666 37.7244 38.3203 35.9375 41.625 35.9375C44.9297 35.9375 47.9834 37.7244 49.6357 40.625C51.2881 43.5257 51.2881 47.0994 49.6357 50C47.9834 52.9007 44.9297 54.6875 41.625 54.6875C38.3203 54.6875 35.2666 52.9007 33.6143 50C31.9619 47.0994 31.9619 43.5257 33.6143 40.625ZM66.2915 20.3125H56.5173L52.694 16.0938C51.5531 14.8125 49.8881 14.0625 48.1615 14.0625H28.4281C28.9523 15 29.2915 16.0312 29.2915 17.1875C29.2915 20.625 26.5165 23.4375 23.1248 23.4375H20.0415V26.5625C20.0415 30 17.2665 32.8125 13.8748 32.8125C12.734 32.8125 11.7165 32.4688 10.7915 31.9375V64.0625C10.7915 67.5 13.5665 70.3125 16.9581 70.3125H66.2915C69.6831 70.3125 72.4581 67.5 72.4581 64.0625V26.5625C72.4581 23.125 69.6831 20.3125 66.2915 20.3125ZM26.2079 45.3125C26.2079 53.9375 33.1146 60.9375 41.6246 60.9375C50.1346 60.9375 57.0413 53.9375 57.0413 45.3125C57.0413 36.6875 50.1346 29.6875 41.6246 29.6875C33.1146 29.6875 26.2079 36.6875 26.2079 45.3125Z" fill="white"/>
                        </svg>
                        <img className='addittion__img' src={image} alt="" />
                    </label>
                    <Input  id = 'fileInput'
                            type='file'
                            accept='image/*, .png, .jpg, .gif, .web'
                            onChange={handleUpload}
                            />
                </div>
                <div className="form">
                    <form action="" className="form__wrapper" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <Label text='Name'/>
                            <Input  type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    />
                        </div>
                        <div className="form__group">
                            <Label text='Division'/>
                            <Input  type='text'
                                    name='division'
                                    value={formData.division}
                                    onChange={handleInputChange}
                                    />
                        </div>
                        <div className="form__group">
                            <Label text='Conference'/>
                            <Input  type='text'
                                    name='conference'
                                    value={formData.conference}
                                    onChange={handleInputChange}
                                    />
                        </div>
                        <div className="form__group">
                            <Label text='Year of foundation'/>
                            <Input  type='text'
                                    name='foundationYear'
                                    value={formData.foundationYear}
                                    onChange={handleInputChange}
                                    />
                        </div>
                        <div className="form__button">
                            <Button variant='Cancel'>Cancel</Button>
                            <Button type='submit' variant='Save'>Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>     
    );
};

export default AddTeam;