import * as React from 'react';

const SelectForm = ({onChange, value}) => (
    <div className='select-wrap'>
        <select value={value} className='select' onChange={onChange}>
            <option value='Samara'>Самара</option>
            <option value='Moscow'>Москва</option>
            <option value='Kazan'>Казань</option>
            <option value='Kagggg'>Казаhhhh</option>
        </select>
    </div>
);

export default SelectForm;