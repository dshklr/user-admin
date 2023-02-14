//libs
import { Routes, Route } from "react-router-dom";
//pages
import { User, Users, UserEdit, NotFound } from "./pages/index";

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
