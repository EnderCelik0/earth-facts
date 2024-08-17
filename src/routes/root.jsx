import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import '../index.css'
import Planet from "../components/Planet";

export default function Root() {
  return (  
    <div className="min-h-screen bg-rich-black  bg-stars"> 
      <Navbar />
      <Planet/>
      {/* <Outlet /> */}
    </div>
);
}