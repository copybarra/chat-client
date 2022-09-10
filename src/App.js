import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Register/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Route>
    </Routes>
  );
}