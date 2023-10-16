import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ProtectedProps } from "../../utils/types";



const Protected: FC<ProtectedProps> = ({ onlyUnAuth = false, component }) => {
  //@ts-ignore
  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  //@ts-ignore
  const user = useSelector((store) => store.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{component}</>;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth: FC<ProtectedProps> = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);