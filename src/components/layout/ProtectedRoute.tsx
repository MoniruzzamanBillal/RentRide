import { logOut } from "@/redux/features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TUser } from "@/types/globalTypes";
import { verifyToken } from "@/util/Verify.token";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

type TProtectedRouteProps = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const location = useLocation();

  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate state={location.pathname} to={"/login"} />;
  }

  const user = verifyToken(token!) as TUser;

  const { userRole } = user;

  if (role !== undefined && role !== userRole) {
    dispatch(logOut());

    toast.error(`This route is not accessible to ${userRole}`, {
      duration: 2000,
    });

    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
