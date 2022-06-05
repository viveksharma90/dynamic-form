import React, { useState } from 'react';
import './App.css';

function App() {
  const [formFields, setFormFields] = useState([
    { name: '', designation: '', contact: '', skills: '', dob: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formFields));
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      name: '',
      designation: '',
      contact: '',
      skills: '',
      dob: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="App">
      <h1>Employee Data</h1>
      <form onSubmit={handleSubmit}>
        {formFields.map((form, index) => {
          return (
            <div key={index} className="form_details">
              <input
                type='text'
                name='name'
                placeholder=''
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                type='text'
                name='designation'
                placeholder=''
                onChange={event => handleFormChange(event, index)}
                value={form.designation}
              />
              <input
                type='text'
                name='contact'
                placeholder=''
                onChange={event => handleFormChange(event, index)}
                value={form.contact}
              />
              <input
                type='text'
                name='skills'
                placeholder=''
                onChange={event => handleFormChange(event, index)}
                value={form.skills}
              />
              <input
                type='text'
                name='dob'
                placeholder=''
                onChange={event => handleFormChange(event, index)}
                value={form.dob}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button className="form_btn" onClick={addFields}>Add Employee</button>
      <br />
      <button className="form_btn1" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
