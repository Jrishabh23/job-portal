import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import HttpRequest from "../../Utilities/Request";
import Card from "../sub-component/Card";
import "./Profile.css";
interface IProps {
    id: number;
}
const Profile = () => {
    let navigate = useNavigate();
    const params = useParams();
    const { state } = useLocation();
    const { id, name, image }: any = state;
    // console.log("ddd", id, name, image);
    const [user, setUser] = useState<any>({});

    const _getList = async (props: any) => {
        const listUsers = await HttpRequest();
        const foundUser = listUsers.find((item: any) => {
            return props["id"] === item["id"];
        });
        if (foundUser) setUser(foundUser);
    };

    useEffect(() => {
        _getList(params);
    }, []);

    const _handleAction = (type: number, id: number) => {
        // let location =
        if (type === 1) {
            let selectedData = localStorage.getItem("selected");
            if (!selectedData) {
                localStorage.setItem("selected", id.toString());
                return;
            }
            const data = selectedData.split(",");
            localStorage.setItem("selected", `${data},${id.toString()}`);
        }
        if (type === 0) {
            let rejectedData = localStorage.getItem("rejected");
            if (!rejectedData) {
                localStorage.setItem("rejected", id.toString());
                return;
            }
            const data = rejectedData.split(",");
            localStorage.setItem("rejected", `${data},${id.toString()}`);
        }
        navigate("/", { replace: true });
    };

    const _renderButton: any = () => {
        if (!Object.entries(user).length) return true;
        return (
            <>
                <button
                    onClick={(e) => _handleAction(1, user["id"])}
                    className="btn-action selected"
                >
                    Selected
                </button>
                <button
                    onClick={(e) => _handleAction(0, user["id"])}
                    className="btn-action rejected"
                >
                    Rejected
                </button>
            </>
        );
    };
    return (
        <>
            <div className="navigation">
                <a href="/">Back to Home</a>
            </div>
            <h1>Profile</h1>
            <div className="user-choice-profile">{_renderButton()}</div>
            <div className="user-choice-profile">
                <Card key={id} id={id} name={name} image={image} />
            </div>
        </>
    );
};
export default Profile;
