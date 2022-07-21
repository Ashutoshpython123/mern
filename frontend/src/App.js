import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import UserList from "./Components/UserList";

function App() {
  return (
    <>
      <Router>
          
          <Routes>
            <Route exact path="/" element={<CreateUser />} />
            <Route exact path="/user-list" element={<UserList />} />
          </Routes>

        </Router>
    </>
  );
}

export default App;
