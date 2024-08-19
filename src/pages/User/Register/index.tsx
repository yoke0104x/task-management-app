import Icon from "@/components/Icon";
import { UserOutlined, LockOutlined, SafetyCertificateOutlined } from "@ant-design/icons"
import { Form, Input, Row, Col, Button, FormProps, Typography, message } from "antd"
import { useState } from "react";
import { useCountDown } from "ahooks";
import { email, user } from "@/api";
import enums from "@/enums";
import useLocationRewrite from "@/hooks/useLocationRewrite";
const { Link } = Typography;

type FieldType = {
    username?: string;
    password?: string;
    email?: string;
    emailCode?: string;
    phone?: string;
};

const Register = () => {
    const [targetDate, setTargetDate] = useState<number>();
    const [form] = Form.useForm();
    const [countdown] = useCountDown({
        targetDate,
    });
    const location = useLocationRewrite()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        user.register(values).then(res => {
            if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                message.success("Registration successful")
                location.navigate("/user/login")
            } else {
                message.error(res.message)
            }
        })
    };

    const onSendEmail = () => {
        form.validateFields(['email']).then((values) => {
            email.sendEmail(values).then(res => {
                if (res.code === enums.ResultCodeEnums.SUCCESS) {
                    message.success("Sent successfully")
                    setTargetDate(Date.now() + 60000)
                } else {
                    message.error(res.message)
                }
            })
        })
    }

    return <div className="w-screen h-screen bg-[url('https://img.xjh.me/random_img.php?type=bg&return=302')] bg-cover relative">
        <div className="absolute w-[400px] backdrop-blur p-4 rounded top-1/2 right-[10%] -translate-y-1/2 shadow-md">
            <p className="text-xl text-center mt-2 font-bold">Register</p>
            <div className="px-10 mt-10">
                <Form
                    name="login"
                    onFinish={onFinish}
                    size="large"
                    variant="borderless"
                    initialValues={{
                        "username": "yoke0001email",
                        "password": "dm0104x."
                    }}
                    form={form}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter your username' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Please enter your username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }, {
                            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/,
                            message: 'Password must contain letters and numbers',
                        }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Please enter your password" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email address' }]}
                    >
                        <Input type="email" prefix={<Icon type="AttachEmailOutlined" />} placeholder="Please enter your email address" />
                    </Form.Item>
                    <Form.Item >
                        <Row gutter={8}>
                            <Col span={10}>
                                <Form.Item
                                    noStyle
                                    name="emailCode"
                                    rules={[{ required: true, message: 'Please enter the verification code' }]}
                                >
                                    <Input prefix={<SafetyCertificateOutlined />} placeholder="Please enter the verification code" />
                                </Form.Item>
                            </Col>
                            <Col span={14}>
                                <Button disabled={countdown !== 0} className="w-full h-9" type="primary" onClick={onSendEmail}>{countdown ? `(${Math.round(countdown / 1000)}s)` : 'Get verification code'}</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{
                            message: 'Please enter your phone number',
                            pattern: /^\+?\d{0,3}\d+$/,
                        }]}
                    >
                        <Input prefix={<Icon type="PhoneAndroidFilled" />} placeholder="Please enter your phone number" />
                    </Form.Item>
                    <Form.Item className="mb-0">
                        <Button className="mt-2 rounded-full" block type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                    <Link onClick={() => {
                        location.navigate("/user/login")
                    }} className="inline-block mt-2">Already have an account? Go to login</Link>
                </Form>
            </div>
        </div>
    </div>
}
export default Register