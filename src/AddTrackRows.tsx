import React, { Component } from 'react';

import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import DatePicker from 'antd/es/date-picker';
import moment from 'moment';

const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 }
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 8 }
};

function onOk(value: any) {
  console.log('onOk: ', value);
}

function onChange(value: any, dateString: any) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const rangeConfig = {
  rules: [{ type: 'array', required: true, message: 'Please select time!' }],
  children: null
} as any;

class AddTrackRows extends Component {
  render() {
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="range-picker" label="Time Range" {...rangeConfig}>
          <RangePicker
            ranges={{
              'Now +10': [moment(), moment().add(10, 'minutes')]
            }}
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChange}
            onOk={onOk}
          />
        </Form.Item>
        <Form.Item
          label="Nickname"
          name="nickname"
          rules={[{ required: true, message: 'Please input the Nickname!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default AddTrackRows;
