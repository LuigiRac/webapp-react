import { Outlet } from "react-router-dom";
import HeaderContent from "../components/Headercontent";
import FooterContent from "../components/FooterContent"

export default function DefaultLayout() {
    return (
        <div>
            <HeaderContent />
            <Outlet />
            <FooterContent />
        </div>
    );
};