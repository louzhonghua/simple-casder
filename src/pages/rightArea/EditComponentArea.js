import React from 'react';
import { Form, Input, Button } from 'antd';

const EditComponentArea = () => {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item name="name" label="名称">
                <Input />
            </Form.Item>
            <Form.Item name="size" label="大小">
                <Input />
            </Form.Item>
            {/* 其他可编辑的控件 */}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    保存
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditComponentArea;

