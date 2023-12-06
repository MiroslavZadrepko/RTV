import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import Navigation from "./components/Navigation";
/*
import Register from "./components/Register";
import AddCraftsman from "./components/AddCraftsman";
import LogOut from "./components/LogOut";
import Admin from "./components/Admin";
import AdminHandleCraft from "./components/AdminHandleCraft";
import AdminHandleRev from "./components/AdminHandleRev";*/
import { ThemeProvider } from '@mui/material';
import theme from "./components/styles/theme";
import LogIn from './components/LogIn';
import Novinar from './components/Novinar';
import Snimatelji from './components/Snimatelji';

function App() {

  return (
    <ThemeProvider theme={theme}>

      <div className="container">
        <Router basename="/" >

          {/* <Navigation />*/}

          <Routes>
            <Route exact path="*" element={<LogIn />} />
            <Route path="/novinar" element={<Novinar />} />
            <Route path="/snimatelji" element={<Snimatelji />} />

            {/*<Route exact path="/logout" element={<LogOut />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/addcraftsman" element={<AddCraftsman />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route path="/admin/crafts" element={<AdminHandleCraft />} />
            <Route path="/admin/revs" element={<AdminHandleRev />} />*/}
          </Routes>

        </Router>

        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}
export default App;
