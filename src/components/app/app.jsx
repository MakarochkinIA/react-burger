import {Route, Routes} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { Home } from '../../pages/home/home';
import {Login} from '../../pages/login/login';
import {Register} from '../../pages/register/register';
import {ForgotPassword} from '../../pages/forgot-password/forgot-password';
import { ResetPassword } from "../../pages/reset-password/reset-password";
import { Details } from "../../pages/ingredient-details/ingredient-details";
import { Profile } from "../../pages/profile/profile";
import { checkUserAuth } from "../../services/actions/auth";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<OnlyUnAuth component={<Login/>} />} />
        <Route path="/register" element={<OnlyUnAuth component={<Register/>} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword/>} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword/>} />} />
        <Route path="/profile" element={<OnlyAuth component={<Profile/>} />} />
        <Route path='/ingredients'
               element={<IngredientDetails />} />
      </Routes>

      {background && (
        <Routes>
	        <Route
	          path='/ingredients/:id'
	          element={
	            <Modal>
	              <IngredientDetails />
	            </Modal>
	          }
	        />
        </Routes>
      )}
    </>
  );
};

export default App;
