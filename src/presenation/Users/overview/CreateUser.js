import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { Select } from "antd";
import propTypes from "prop-types";
import { useUserStore } from "../store";

function CreateStudent() {
  const [form] = Form.useForm();
  const [{}, { onfinish, setVisible }] =
    useUserStore();
  const { Option } = Select;



  return (
    <div className="project-modal">
      <Form
        form={form}
        id="createService"
        name="createService"
        onFinish={(values) => onfinish(values)}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[{ required: true, message: "Please select a gender!" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="status"
          rules={[{ required: true, message: "Please select a status!" }]}
        >
          <Select placeholder="Select status" style={{ width: "50%" }}>
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        </Form.Item>
        <div className="button_wrapp">
          <Button onClick={() => setVisible(false)} type="button">
            Cancel
          </Button>
          <Button size="default" type="primary" key="submit" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
}
CreateStudent.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
};

export default CreateStudent;
