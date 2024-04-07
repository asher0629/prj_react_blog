import { BrowserRouter, Route, Routes } from "react-router-dom";
import WritePage from "../pages/WritePage";
import Homepage from "../pages/Homepage";
import ContentPage from "../pages/ContentPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/writePage" element={<WritePage />} />
      <Route path="/contentPage">
        <Route path=":listId" element={<ContentPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
