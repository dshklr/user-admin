import { Users } from "./pages/users";
import { User } from "./pages/user";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/not-found";
import { UserEdit } from "./pages/user-edit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/:id/edit" element={<UserEdit />} />
      </Routes>
    </div>
  );
}

export default App;
