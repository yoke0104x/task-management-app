import { user } from "@/api";
import enums from "@/enums";
import useLocationRewrite from "@/hooks/useLocationRewrite";
import LocalStorage from "@/utils/LocalStorage";
import { LockOutlined, SafetyCertificateOutlined, UserOutlined } from "@ant-design/icons";
import { type FormProps, Button, Col, Form, Input, message, Row, Typography } from "antd";
import { useEffect, useState } from "react";

const { Link } = Typography;

type FieldType = {
    username?: string;
    password?: string;
    captcha?: string;
};


const Login = () => {
    const [captchaCodeSvgData, setCaptchaCodeSvgData] = useState<user.CaptchaCodeSvgDataType>();
    const location = useLocationRewrite()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        user.login({
            ...values,
            captchaId: captchaCodeSvgData?.captchaId ?? ''
        }).then(res => {
            if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                LocalStorage.setItem('token', res.data)
                location.navigate("/")
            } else {
                getCaptchaCodeSvg()
                message.error(res.message)
            }
        })
    };

    useEffect(() => {
        getCaptchaCodeSvg();
        const token = LocalStorage.getItem('token');
        if (token) {
            user.loginStatus().then(res => {
                if (res?.code === enums.ResultCodeEnums.SUCCESS && res.data) {
                    location.navigate("/")
                }
            })
        }
    }, [])

    const getCaptchaCodeSvg = () => {
        user.getVerifyCode().then(res => {
            if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                setCaptchaCodeSvgData(res.data)
            }
        })
    }
    return <div className="w-screen h-screen bg-[url('https://img.xjh.me/random_img.php?type=bg&return=302')] bg-cover relative">
        <div className="absolute w-[400px] backdrop-blur p-4 rounded top-1/2 right-[10%] -translate-y-1/2 shadow-md">
            <p className="text-xl text-center mt-2 font-bold">Event Management System</p>
            <div className="px-10 mt-10">
                <Form
                    name="login"
                    onFinish={onFinish}
                    size="large"
                    variant="borderless"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter your username' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Please enter your username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Please enter your password" />
                    </Form.Item>
                    <Form.Item >
                        <Row gutter={8}>
                            <Col span={16}>
                                <Form.Item
                                    noStyle
                                    name="captcha"
                                    rules={[{ required: true, message: 'Please enter the captcha' }]}
                                >
                                    <Input prefix={<SafetyCertificateOutlined />} placeholder="Please enter the captcha" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <div className="cursor-pointer" onClick={getCaptchaCodeSvg} dangerouslySetInnerHTML={{ __html: captchaCodeSvgData?.captcha ?? '' }}></div>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item className="mb-0">
                        <Button className="mt-2 rounded-full" block type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                    <Link onClick={() => {
                        location.navigate("/user/register")
                    }} className="inline-block mt-2">Register</Link>
                </Form>
            </div>
        </div>
    </div>
}
export default Login