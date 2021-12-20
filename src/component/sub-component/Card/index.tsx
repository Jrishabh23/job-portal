import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props: any) => {
    const [userList, setUserList] = useState({});
    const { image, name, id } = props;
    useEffect(() => {
        setUserList({ image, name, id });
    }, []);
    return (
        <>
            <div className="movie-card">
                <Link
                    to={`profile/${id}`}
                    style={{ textDecoration: "none" }}
                    state={userList}
                >
                    <div className="image-container">
                        <img
                            src={image}
                            alt="user-image"
                            height="200"
                            width="200"
                        />
                    </div>
                    <div className="movie-details text-center">
                        <p>{name}</p>
                    </div>
                </Link>
            </div>
        </>
    );
};
export default Card;
