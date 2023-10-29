import {Route, Routes} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom";
import { useDispatch } from "../../hooks/redux-hooks";
import { useEffect, FC } from "react";
import AppHeader from "../app-header/app-header";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import Home from '../../pages/home/home';
import {Login} from '../../pages/login/login';
import {Register} from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import Feed from "../../pages/feed/feed";
import { ResetPassword } from "../../pages/reset-password/reset-password";
import { Profile } from "../../pages/profile/profile";
import { checkUserAuth } from "../../services/actions/auth";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { NotFound404 } from "../../pages/not-found/not-found";
import { DELETE_CURRENT_INGREDIENT } from "../../services/actions/ingredient";
import { getIngredients } from "../../services/actions/burger-ingredients";
import { WS_CONNECTION_START } from "../../services/actions/ws";
import FeedDetails from "../../pages/feed/feed-details/feed-details";
import ProfileOrders from "../../pages/profile/profile-orders/profile-orders";

const App: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch({
        type: DELETE_CURRENT_INGREDIENT,
    });
    navigate(-1);
  };


  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(getIngredients());
  }, [dispatch]);
  useEffect(
    () => {
        dispatch({ type: WS_CONNECTION_START });
    },
    [dispatch] // eslint-disable-line react-hooks/exhaustive-deps
  );
  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<OnlyUnAuth component={<Login/>} />} />
        <Route path="/register" element={<OnlyUnAuth component={<Register/>} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword/>} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword/>} />} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/feed/:id" element={<FeedDetails/>} />
        <Route path="/profile" element={<OnlyAuth component={<Profile/>} />} >
          <Route path="orders" element={<ProfileOrders />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path='/ingredients/:id' element={<IngredientDetails />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>

      {background && (
        <Routes>
	        <Route
	          path='/ingredients/:id'
	          element={
	            <Modal header='Детали ингредиента' onClose={handleModalClose}> 
	              <IngredientDetails />
	            </Modal>
	          }
	        />
          <Route
	          path='/feed/:id'
	          element={
	            <Modal header='Детали ингредиента' onClose={handleModalClose}> 
	              <FeedDetails />
	            </Modal>
	          }
	        />
        </Routes>
      )}
    </>
  );
};

export default App;
