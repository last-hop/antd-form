import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";

const ResponsiveForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <Row justify="center" style={{ margin: "0", padding: "20px" }}>
      <Col xs={22} sm={16} md={12} lg={10}>
        <Form
          form={form}
          name="contactForm"
          layout="vertical"
          onFinish={handleSubmit}
          style={{
            maxWidth: "100%",
            margin: "auto",
            backgroundColor: "#fff",
            padding: "30px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "5px" }}>
            Contact Us
          </h2>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Make an Appointment
          </h1>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your full name" }]}
              >
                <Input
                 
                  placeholder="Full Name"
                  style={{ backgroundColor: "#f9f9f9" }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  placeholder="example@gmail.com"
                  style={{ backgroundColor: "#f9f9f9" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="department"
                label="Department"
                rules={[{ required: true, message: "Please select a department" }]}
              >
                <Select placeholder="Please Select" style={{ backgroundColor: "#f9f9f9" }}>
                  <Select.Option value="physics">Physics</Select.Option>
                  <Select.Option value="chemistry">Chemistry</Select.Option>
                  <Select.Option value="maths">Maths</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="time"
                label="Time"
                rules={[{ required: true, message: "Please select a time" }]}
              >
                <Select placeholder="4:00 Available" style={{ backgroundColor: "#f9f9f9" }}>
                  <Select.Option value="4:00">4:00</Select.Option>
                  <Select.Option value="4:30">4:30</Select.Option>
                  <Select.Option value="5:30">5:30</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="message" label="Message">
            <Input.TextArea
              rows={4}
              placeholder="Write your message here"
              style={{ backgroundColor: "#f9f9f9" }}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Book Appointment
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ResponsiveForm;
