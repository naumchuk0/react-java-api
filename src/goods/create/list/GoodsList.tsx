import { Button, Col, Row, Table } from "antd";
import { Link } from "react-router-dom";
import { IGetGoods, IGoodsItem } from "./types";
import { useEffect, useState } from "react";
import http_common from "../../../http_common";
import GoodsCard from "./GoodsCard";

const GoodsList = () => {
    const [list, setList] = useState<IGoodsItem[]>([
    ]);;

    useEffect(() => {
        http_common.get<IGoodsItem[]>("/api/goods/list")
        .then(resp => {
            setList(resp.data);
        });
    }, []);
    return (
        <>
            <h1>Goods List</h1>
            <Link to={"/goods/create"}>
                <Button type="primary" size={"large"}>
                    Add
                </Button>
            </Link>
            <Row gutter={16}>
                <Col span={24}>
                    <Row>
                        {list.length === 0 ? (
                            <h2>The List Is Empty</h2>
                        ) : (
                            list.map((item) =>
                                <GoodsCard key={item.id} item={item} />,
                            )
                        )}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default GoodsList;
