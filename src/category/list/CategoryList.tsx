import { Button } from "antd";
import { Link } from "react-router-dom";
import http_common from "../../http_common";
import { ICategoryItem } from "./types";
import { useEffect, useState } from "react";
import Table, { ColumnsType } from "antd/es/table";

const CategoryList = () => {

    const [list, setList] = useState<ICategoryItem[]>([]);

    const columns: ColumnsType<ICategoryItem> = [
        {
            title: '#',
            dataIndex: 'id'
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (imgPath: string) => {
                return (
                    <img src={"150_" + imgPath} alt={"Image"} width={100}/>
                );
            }
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description'
        },
    ];

    useEffect(()=> {
        console.log("use Effect");

        http_common.get<ICategoryItem[]>("/api/categories/list")
            .then(resp=> {
                console.log("resp", resp.data);
                setList(resp.data);
            });

    },[]);

    return (
        <>
            <h1>Categories list</h1>
            <Table dataSource={list} rowKey={"id"} columns={columns} size={"middle"} />
            <Link to={"/category/create"}>
                <Button type="primary" size={"large"}>
                    Add
                </Button>
            </Link>
        </>
    )
}

export  default CategoryList;