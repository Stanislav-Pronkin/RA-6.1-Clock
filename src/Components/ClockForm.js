import React, { useState } from 'react';
import shortid from 'shortid';

export default function ClockForm({ onAdd }) {
    const [form, setForm] = useState({name: '', timezone: ''});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setForm(prevForm => ({...prevForm, [name] : value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const clock = {
            id: shortid.generate(),
            name: form.name,
            timezone: form.timezone
        }

        onAdd(clock);
        setForm({name: '', timezone: ''});
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
			<div className='form-field'>
				<label className='input-clock-name' htmlFor='name'>Название</label>
				<input className='form-input' name='name' value={form.name} onChange={handleChange} required />
			</div>
			<div className='form-field'>
				<label className='input-clock-name' htmlFor='timezone'>Временная зона</label>
				<input className='form-input' name='timezone' placeholder='UTC' value={form.timezone} onChange={handleChange} required />
			</div>
			<button className='btn add-btn' type='submit'>Добавить</button>
		</form>
    )
}