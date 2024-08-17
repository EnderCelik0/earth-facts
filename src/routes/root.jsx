import { Outlet } from "react-router-dom";

export default function Root() {
  return (  
    <div>
      <h1>Earth Facts</h1>
      
      <Outlet />
    </div>
);
}