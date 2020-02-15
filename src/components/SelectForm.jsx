import * as React from 'react';

const SelectForm = ({onChange, value}) => (
    
    <div className='select-wrap'>
        <select value={value} className='select' onChange={onChange}>
            <option value='Samara'>Samara</option>
            <option value='Moscow'>Moscow</option>
            <option value='Kazan'>Kazan</option>
            <option value='Minsk'>Minsk</option>
            <option value='Berlin'>Berlin</option>
            <option value='Paris'>Paris</option>
            <option value='Tbilisi'>Tbilisi</option>
            <option value='error'>For error</option>
        </select>
    </div>
);

export default SelectForm;