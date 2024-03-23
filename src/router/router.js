import { BrowserRouter, Route, Routes } from "react-router-dom";
import WritePage from "../pages/WritePage";
import Homepage from "../pages/Homepage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/writePage" element={<WritePage />} />
    </Routes>
  );
}

export default Router;
