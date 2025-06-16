import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Outlet } from "react-router";

export default function Template() {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-[calc(100vh-40px)] pt-20">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}