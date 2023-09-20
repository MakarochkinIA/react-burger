import {Route, Routes} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom";
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



function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    // Возвращаемся к предыдущему пути при закрытии модалки
    navigate(-1);
  };

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/ingredients'
               element={<IngredientDetails />} />
      </Routes>

      {background && (
        <Routes>
	        <Route
	          path='/ingredients/:id'
	          element={
	            <Modal onClose={handleModalClose}>
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
