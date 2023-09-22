
import './App.css';
import { useState } from 'react';
import {  MultiStepForm, RegistrationDetails } from './components';

interface FormValues {
    fullname: string,
    email: string,
    dob: Date | "",
    streetAddress: string,
    city: string,
    state: string,
    zip: string,
    username: string,
    password: string
}

function App() {

  let [formValues, setFormValues] = useState<FormValues>({} as FormValues);

  return (
    <div className="App">
        <MultiStepForm handlerFormValues={setFormValues}/>
        <RegistrationDetails formValues={formValues}/>
    </div>

)
}

export default App;
