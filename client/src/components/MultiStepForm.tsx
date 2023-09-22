import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormItems1 from './FormItems1';
import FormItems2 from './FormItems2';
import FormItems3 from './FormItems3';
import { useState } from 'react';

/* ------------------------------ INTERFACES */
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

/* ------------------------------ VARIABLES */
const initialValues:FormValues={
    fullname: "",
    email: "",
    dob:  "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    username: "",
    password: "" 
};


const onClickFormik = (values:FormValues) => {
    console.log("onClick", values);
};

const validationSchema = Yup.object({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
    dob: Yup.date().required("Date is required"),
    streetAddress: Yup.string().required("Street Adress is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
})



/* ------------------------------ COMPONENT */

interface MultiStepFormProps {
    handlerFormValues: React.Dispatch<React.SetStateAction<FormValues>>
}


const MultiStepForm = ({handlerFormValues}:MultiStepFormProps) =>{

    let [pageIndex, setPageIndex] = useState<Number>(0);
    
    const returnMultiForm = ()=>{
        switch(pageIndex){
            case 0: 
                return <FormItems1 btnNextHandler={setPageIndex}/>
            case 1: 
                return <FormItems2 btnNextHandler={setPageIndex}/>
            case 2:
                return <FormItems3 btnNextHandler={setPageIndex}/>
        } 
    }

    const onSubmitFormik = (values:FormValues) => {
        console.log("onSubmit", values);
        handlerFormValues(values)
    };
    return(
        <div className="form-multi-steps">
            <Formik initialValues={initialValues} onSubmit={onSubmitFormik} onClick={onClickFormik} validationSchema={validationSchema}>
                {
                    () => { return (

                            <Form>
                                {
                                    returnMultiForm()
                                }
                            </Form>
                        
                        )                       
                    }
                }
            </Formik>
        </div>
    )
}

export default MultiStepForm;