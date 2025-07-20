'use client'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Header from "./navbar";
import FluidCursor from "../cursor-animation/cursor-pointer";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <div>
            <FluidCursor/>
            <div className=" p-0 pb-10 border-none !z-50">
                <Header />
                <div>
                    {children}
                    <div className="w-full flex justify-center mb-10">
                        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className={` p-1 rounded-full  hover:scale-125  shadow-2xl shadow-gray-600 right-5 text-center  duration-700`}>
                            <MdOutlineKeyboardDoubleArrowUp size={25} />
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    );
};

export default Layout;