import { BrowserRouter, Route, Routes } from "react-router-dom";
import WritePage from "../pages/WritePage";
import Homepage from "../pages/Homepage";
import ContentPage from "../pages/ContentPage";
import EditPage from "../pages/EditPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/writePage" element={<WritePage />} />
      <Route path="/contentPage">
        <Route path=":listId" element={<ContentPage />} />
        <Route path="edit">
          <Route path=":listId" element={<EditPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
