import React from "react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import "./styles/global.css";
import { NavliksMd } from "./components/links";
import { Route, Routes } from "react-router-dom";
import Page0 from "./pages/page0";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";

export default function Main() {
     return (
          <div>
               <Navigation links={<NavliksMd />} />
               <div className="pages">
                    <Routes>
                         <Route index path="/" element={<Page0 />} />
                         <Route index path="/page1" element={<Page1 />} />
                         <Route index path="/page2" element={<Page2 />} />
                         <Route index path="/page3" element={<Page3 />} />
                         <Route index path="/page4" element={<Page4 />} />
                    </Routes>
               </div>
               <Footer />
          </div>
     );
}
