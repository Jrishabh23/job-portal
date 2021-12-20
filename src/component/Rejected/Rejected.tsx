import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplicant, getLocalhostValue } from "../../Utilities/Network/route";
import { getDetails } from "../Home/action";
import Card from "../sub-component/Card";

export const Rejected = () => {
    const participantList = useSelector((state: any) => state.listReducers);
    const dispatch = useDispatch();

    /**
     * Call API when page is call
     */
    useEffect(() => {
        dispatch(getDetails());
    }, []);

    const _renderList = (pList: any) => {
        const list = pList["response"];
        if (list.length === 0) return null;
        const rejectedIds = getLocalhostValue("rejected");
        const rejectedList = list.filter((item: any) =>
            rejectedIds?.includes(item["id"])
        );
        return (
            <>
                <h1>Rejected User</h1>
                <div className="cardDetails">
                    {rejectedList.map((item: any, index: any) => {
                        return (
                            <Card
                                key={index}
                                id={item["id"]}
                                name={item["name"]}
                                image={item["Image"]}
                            />
                        );
                    })}
                    ;
                </div>
            </>
        );
    };
    return (
        <>
            <div className="navigation">
                <a href="/">Back to Home</a>
            </div>
            <h1>Job Portal</h1>
            {_renderList(participantList)}
        </>
    );
};
