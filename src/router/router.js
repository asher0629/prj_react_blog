import { BrowserRouter, Route, Routes } from "react-router-dom";
import WritePage from "../pages/WritePage";
import Homepage from "../pages/Homepage";
import ContentPage from "../pages/ContentPage";
import EditPage from "../pages/EditPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { PrivateRoute, PublicRoute } from "./PrivateRoute";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/write" element={<WritePage />} />
      </Route>
      <Route path="/content">
        <Route path=":listId" element={<ContentPage />} />
        <Route path="edit" element={<PrivateRoute />}>
          <Route path=":listId" element={<EditPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
