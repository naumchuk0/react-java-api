import {Card, Col, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import {APP_ENV} from "../../../env";
import { IGoodsItem} from "./types.ts";

const { Title } = Typography;

interface IGoodsCardProps {
    item: IGoodsItem
}

const GoodsCard: React.FC<IGoodsCardProps> = (props) => {
    const {item} = props;
    const {name, description, image} = item;

    return (
        <>
            <Col style={{padding: 10}} xxl={6} lg={8} md={12} sm={12}>
                <Card
                    bodyStyle={{flex: '1', paddingBlock: '10px'}}
                    style={{height: 350, display: 'flex', flexDirection: 'column', paddingTop: '40px'}}
                    hoverable
                    cover={
                        <img
                            style={{height: '120px', objectFit: 'contain'}}
                            alt={name}
                            src={image ? `${APP_ENV.BASE_URL}/uploading/300_${image}` : "NotImage"}
                        />
                    }
                >
                    <Meta
                        title={name}
                        description={
                            <Title level={5} type="success">{description}</Title>
                        }
                    />
                </Card>
            </Col>
        </>
    )
}

export default GoodsCard;