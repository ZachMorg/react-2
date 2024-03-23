import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SnackOrBoozeApi from './Api';

const NewItemForm = function(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        type: '',
        name: '',
        description: '',
        recipe: '',
        serve: ''
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleRadioSnack = function(){
        setFormData(formData => ({
            ...formData,
            type: 'snack'
        }));
    }

    const handleRadioDrink = function(){
        setFormData(formData => ({
            ...formData,
            type: 'drink'
        }));
    }

    const handleSubmit = async function(evt){
        evt.preventDefault();

        let id = formData.name.toLowerCase();
        id = id.replaceAll(' ', '-');
        console.log(formData);
        await SnackOrBoozeApi.postItem(formData, id);

        setFormData({
            type: '',
            name: '',
            description: '',
            recipe: '',
            serve: ''
        });

        navigate(`/`);
    };

    return (
        <form onSubmit={handleSubmit} style={{color: 'black'}}>
            <input onChange={handleRadioSnack} type='radio' id='snack-type' name='type' value='snack'/>
            <label htmlFor='snack-type'>Snack</label>

            <input onChange={handleRadioDrink} type='radio' id='drink-type' name='type' value='drink'/>
            <label htmlFor='drink-type'>Drink</label>
            <br/>

            <label htmlFor='name'>Name:</label>
            <input onChange={handleChange} id='name' name='name' value={formData.name}/>
            <br/>
            
            <label htmlFor='description'>Description:</label>
            <input onChange={handleChange} id='description' name='description' value={formData.description}/>
            <br/>

            <label htmlFor='recipe'>Recipe:</label>
            <input onChange={handleChange} id='recipe' name='recipe' value={formData.recipe}/>
            <br/>

            <label htmlFor='serve'>Serve:</label>
            <input onChange={handleChange} id='serve' name='serve' value={formData.serve}/>
            <br/>

            <button>Add New Item</button>
        </form>
    );
}

export default NewItemForm;