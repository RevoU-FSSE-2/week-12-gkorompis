
import { Input, DatePicker, Form } from 'antd';

const FormItem = Form.Item; // Create a Form.Item alias

const FormStep1 = () => {
  return (
    <>
      <h3 className="app-form-title">Personal Information</h3>
      <Form className="app-form">
        <FormItem className="app-form-antd-form-item" label="Full Name" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Input id="formName" name="name" />
        </FormItem>
        <FormItem className="app-form-antd-form-item" label="Email" labelCol={{ span: 6}} wrapperCol={{ span: 16 }}>
          <Input type="email" id="formEmail" name="email" />
        </FormItem>
        <FormItem className="app-form-antd-form-item" label="DOB" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <DatePicker id="formDob" name="dob" />
        </FormItem>
      </Form>
    </>
  );
};
export default FormStep1;