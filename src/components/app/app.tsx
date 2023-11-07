import {Route, Routes} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks/redux-hooks";
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
import { DELETE_CURRENT_ORDER } from "../../services/actions/current-order";
import { getIngredients } from "../../services/actions/burger-ingredients";
import FeedDetails from "../../pages/feed/feed-details/feed-details";
import ProfileOrders from "../../pages/profile/profile-orders/profile-orders";

const App: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();
  const handleModalClose = (type: typeof DELETE_CURRENT_INGREDIENT | typeof DELETE_CURRENT_ORDER ) => {
    dispatch({
        type: type,
    });
    navigate(-1);
  };


  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(getIngredients());
  }, [dispatch]);
  const { order } = useSelector(
    (state) => state.currentOrder
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
        <Route path="/feed" element={<Feed/>} >
          <Route path=":id" element={<FeedDetails/>} />
        </Route>
        <Route path="/profile" element={<OnlyAuth component={<Profile/>} />} >
          <Route path="orders" element={<ProfileOrders />} />
          <Route path="orders/:id" element={<FeedDetails />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path="/profile/orders/:id" element={<FeedDetails/>} />
        <Route path='/ingredients/:id' element={<IngredientDetails />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>

      {background && (
        <Routes>
	        <Route
	          path='/ingredients/:id'
	          element={
	            <Modal header='Детали ингредиента' onClose={() => handleModalClose(DELETE_CURRENT_INGREDIENT)} extraClass="text text_type_main-large"> 
	              <IngredientDetails />
	            </Modal>
	          }
	        />
          <Route
	          path='/feed/:id'
	          element={
	            <Modal header={order ? `#${order.number}` : ''} onClose={() => handleModalClose(DELETE_CURRENT_ORDER)} extraClass="text text_type_digits-default"> 
	              <FeedDetails />
	            </Modal>
	          }
	        />
          <Route
	          path='/profile/orders/:id'
	          element={<OnlyAuth component={
	            <Modal header={order ? `#${order.number}` : ''} onClose={() => handleModalClose(DELETE_CURRENT_ORDER)} extraClass="text text_type_digits-default"> 
	              <FeedDetails />
	            </Modal>
	          } />}
	        />
        </Routes>
      )}
    </>
  );
};

export default App;
