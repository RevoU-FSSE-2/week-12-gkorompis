
import { Input, Form } from 'antd';

const FormItem = Form.Item; // Create a Form.Item alias

const FormStep2 = () => {
  return (
    <>
      <h3 className="app-form-title">Address Information</h3>
      <Form className="app-form">
        <FormItem label="Street Adress" className="app-form-antd-form-item" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Input id="formStreetAddress" name="street-address" />
        </FormItem>
        <FormItem label="City" className="app-form-antd-form-item" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Input id="formCity" name="city" />
        </FormItem>
        <FormItem label="State" className="app-form-antd-form-item" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Input id="formState" name="state" />
        </FormItem>
        <FormItem label="Zip" className="app-form-antd-form-item" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Input id="formZip" name="zip" />
        </FormItem>
      </Form>
    </>
  );
};
export default FormStep2;