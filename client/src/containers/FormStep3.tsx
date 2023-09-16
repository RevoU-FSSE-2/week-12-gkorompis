
import { Input, Form } from 'antd';

const FormItem = Form.Item; // Create a Form.Item alias

const FormStep3 = () => {
  return (
    <>
      <h3 className="app-form-title">Personal Information</h3>
      <Form className="app-form">
        <FormItem label="Username"  className="app-form-antd-form-item" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Input id="formUsername" name="username"/>
        </FormItem>
        <FormItem label="Password" className="app-form-antd-form-item" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Input type="password" id="password" name="password"/>
        </FormItem>
      </Form>
    </>
  );
};
export default FormStep3;