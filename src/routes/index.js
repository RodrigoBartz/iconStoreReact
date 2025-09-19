import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NewIcon from "../pages/NewIcon";
import Carrinho from "../pages/Carrinho";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <SignIn />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<SignIn />} />
          <Route path="/newicon" element={<NewIcon/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;