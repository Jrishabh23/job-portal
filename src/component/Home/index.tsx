import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../sub-component/Card";
import { getDetails } from "./action";
import "./home.css";

export const Home = () => {
    const dispatch = useDispatch();
    const result = useSelector((state: any) => state.listReducers);
    useEffect(() => {
        dispatch(getDetails());
    }, []);

    const _renderList = (result: any = []) => {
        if (result.length === 0) return null;
        const selectedIds = localStorage.getItem("selected");
        const ids = selectedIds?.split(",") || [];
        const rejectedIdr = localStorage.getItem("rejected");
        const idr = rejectedIdr?.split(",") || [];
        const filteredElement = [...ids, ...idr];
        let userList = result.filter(
            (item: any) => !filteredElement?.includes(item["id"])
        );
        const userLists = userList.map((item: any, index: any) => {
            return (
                <Card
                    key={index}
                    id={item["id"]}
                    name={item["name"]}
                    image={item["Image"]}
                />
            );
        });
        return (
            <>
                <div>
                    <h1>Total User</h1>
                </div>
                <div className="cardDetails">{userLists}</div>
            </>
        );
    };

    return (
        <>
            <h1>Job Portal</h1>
            <div className="btn">
                <a href="/selected" className="btn-selected selected">
                    Selected
                </a>
                <a href="/rejected" className="btn-selected rejected">
                    Rejected
                </a>
            </div>
            {_renderList(result["response"])}
        </>
    );
};
