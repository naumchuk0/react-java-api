import {Link, useNavigate} from "react-router-dom";
import {Button, Form, Input, Row, Upload} from "antd";
import {ICategoryCreate, IUploadedFile} from "./types.ts";
import TextArea from "antd/es/input/TextArea";
import {UploadChangeParam} from "antd/es/upload";
import { PlusOutlined } from '@ant-design/icons';
import http_common from "../../http_common.ts";

const CategoryCreatePage = () => {

    const navigate = useNavigate();
    const [form] = Form.useForm<ICategoryCreate>();

    const onHandleSubmit = async (values: ICategoryCreate) => {
        try {
            await http_common.post("/api/categories/create", values, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/');
        }
        catch (ex) {
            console.log("Error", ex);
        }
    }

    return (
        <>
            <h1>Add Category</h1>
            <Row>
                <Form form={form}
                    onFinish={onHandleSubmit}
                    layout={"vertical"}
                    style={{
                        "minWidth": '100%',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: 20
                    }}
                >
                    <Form.Item
                        label={"Name"}
                        name={"name"}
                        htmlFor={"name"}
                        rules={[
                            {required: true, message: "Enter Name"},
                            {min: 3, message: "Min length 3"}
                        ]}
                    >
                        <Input autoComplete={"name"}/>
                    </Form.Item>

                    <Form.Item
                        label={"Description"}
                        name={"description"}
                        htmlFor={"description"}
                        rules={[
                            {required: true, message: "Enter Description"},
                            {min: 3, message: "Min length 10"}
                        ]}
                    >
                        <TextArea></TextArea>
                    </Form.Item>

                    <Form.Item
                        name="image"
                        label="Photo"
                        valuePropName="image"
                        getValueFromEvent={(e: UploadChangeParam) => {
                            const image = e?.fileList[0] as IUploadedFile;
                            return image?.originFileObj;
                        }}
                        rules={[{required: true, message: 'Select categorys photo!'}]}
                    >
                        <Upload
                            showUploadList={{showPreviewIcon: false}}
                            beforeUpload={() => false}
                            accept="image/*"
                            listType="picture-card"
                            maxCount={1}
                        >
                            <div>
                                <PlusOutlined/>
                                <div style={{marginTop: 8}}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        <Button style={{margin: 10}} type="primary" htmlType="submit">
                            Add
                        </Button>
                        <Link to={"/"}>
                            <Button style={{margin: 10}} htmlType="button">
                                Cancel
                            </Button>
                        </Link>
                    </Row>
                </Form>
            </Row>
        </>
    )
}

export  default  CategoryCreatePage;