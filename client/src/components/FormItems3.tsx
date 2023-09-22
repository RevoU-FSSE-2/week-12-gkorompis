import {Field, ErrorMessage} from 'formik';
import {Input, Form as AntdForm} from 'antd';

interface FormItems3Props {
    btnNextHandler:  React.Dispatch<React.SetStateAction<Number>>
}

const FormItem = AntdForm.Item;

const fieldNames = ["username", "password"];
const fieldLabels = ["Username", "Password"]

const FormItems3 = ({btnNextHandler}:FormItems3Props) =>{
    return (
        <>
                <h2>STEP 3</h2>
                <div className="form-field">
                    <FormItem className="app-form-antd-form-item" label={fieldLabels[0]} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                        <Field as={Input} name={fieldNames[0]} placeholder={fieldLabels[0]}/>
                        <div className="form-field-error">
                            <ErrorMessage name={fieldNames[0]}  component="span"/>
                        </div>
                    </FormItem>
                </div>
                <div className="form-field">
                    <FormItem className="app-form-antd-form-item" label={fieldLabels[1]} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                        <Field as={Input} name={fieldNames[1]}  placeholder={fieldLabels[1]} type="password"/>
                        <div className="form-field-error">
                            <ErrorMessage name={fieldNames[1]} component="span"/>
                        </div>
                    </FormItem>
                </div>
                <button type="button" onClick={()=>{btnNextHandler(1)}}>Previous</button>
                <button type="submit">Submit</button>
        </>
    )
}

export default FormItems3;