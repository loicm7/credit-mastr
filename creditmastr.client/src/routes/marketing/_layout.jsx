// routes/marketing/_layout.tsx
import {Outlet} from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
//import logo from "../../assets/creditMastrLogoBlack.webp";
import logo from "@/assets/creditMastrLogoBlack.webp";


export default function MarketingLayout() {
    return (
        <div className="isolate flex flex-col">
            {/* BARRE DE NAVIGATION*/}
            <Navbar logo={logo}/>
            
            <Outlet/> {/* each page renders here */}

            {/* FOOTER */}
            <Footer/>
        </div>
    );
}