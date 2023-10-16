import { Routes, Route } from "react-router-dom";
import Home from "./console/home/Home";
import Purpose from "./console/purpose/Purpose";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/purpose" element={<Purpose />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
