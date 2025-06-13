import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Outlet } from "react-router";

export default function Template() {
    return (
        <div className="w-full min-h-screen pt-20">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}