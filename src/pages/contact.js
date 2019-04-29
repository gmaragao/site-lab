import React from "react"
import { Form, Input, Row, Col, Button, Icon } from "antd"
import Layout from "../components/layout"

const { TextArea } = Input

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Form layout="inline">
          <Row>
            <Col>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Name  Ex: Gabriel Aragão"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button>Submit</Button>
          </Form.Item>
        </Form>
      </Layout>
    </div>
  )
}

export default ContactPage
