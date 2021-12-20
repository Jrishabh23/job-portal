import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../component/Home";
import Profile from "../component/Profile/Profile";
import { Rejected } from "../component/Rejected/Rejected";
import { Selected } from "../component/Selected/Selected";
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/selected" element={<Selected />} />
                    <Route path="/rejected" element={<Rejected />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;
// 404 route missing
