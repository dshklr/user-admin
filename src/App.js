import Users from "./pages/users";
import UserPage from "./pages/user-profile-page";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
