import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Chatroom from "./pages/Chatroom";
import Login from "./pages/Login";
import { PrivateRoutes } from "./routes/PrivateRoutes";
function App() {


  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<PrivateRoutes><Chatroom /></PrivateRoutes>} />
      </Routes>

    </AuthProvider>
  )
}

export default App
