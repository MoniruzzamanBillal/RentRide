import { useAppSelector } from "@/redux/hook";
import { verifyToken } from "./Verify.token";
import { TUser } from "@/types/globalTypes";

export const GetUserRole = () => {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return;
  }

  const user = verifyToken(token) as TUser;

  return user?.userRole;
};
