import {Field, ErrorMessage} from 'formik';
import {Input, Form as AntdForm} from 'antd';

interface FormItems2Props {
    btnNextHandler:  React.Dispatch<React.SetStateAction<Number>>
}

const FormItem = AntdForm.Item;

const fieldNames = ["streetAddress", "city", "state", "zip"];
const fieldLabels = ["Street Address", "City", "State", "Zip"]

const FormItems2 = ({btnNextHandler}:FormItems2Props) =>{
    return (
        <>
                <h2>STEP 2</h2>
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
                        <Field as={Input} name={fieldNames[1]}  placeholder={fieldLabels[1]}/>
                        <div className="form-field-error">
                            <ErrorMessage name={fieldNames[1]} component="span"/>
                        </div>
                    </FormItem>
                </div>
                <div className="form-field">
                    <FormItem className="app-form-antd-form-item" label={fieldLabels[2]} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                        <Field as={Input} name={fieldNames[2]}  placeholder={fieldLabels[2]}/>
                        <div className="form-field-error">
                            <ErrorMessage name={fieldNames[2]} component="span"/>
                        </div>
                    </FormItem>
                </div>
                <div className="form-field">
                    <FormItem className="app-form-antd-form-item" label={fieldLabels[3]} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                        <Field as={Input} name={fieldNames[3]}  placeholder={fieldNames[3]}/>
                        <div className="form-field-error">
                            <ErrorMessage name={fieldNames[3]} component="span"/>
                        </div>
                    </FormItem>
                </div>
            
                <button type="button" onClick={()=>{btnNextHandler(0)}}>Previous</button>
                <button type="button" onClick={()=>{btnNextHandler(2)}}>Next</button>
        </>
    )
}

export default FormItems2;