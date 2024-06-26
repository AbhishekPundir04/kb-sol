import { toast } from "react-toastify";
import { POST } from "../../../services/api";
import { authTypes } from "../type/auth/auth";

export const adminLogin = (user, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: authTypes.POST_SIGN_ADMIN_PENDING,
      });
      const res = await POST("auth/login", user);
      if (res?.data?.status_code === 200) {
        localStorage.setItem("ACCESS_TOKEN", res.data.result.token);
        dispatch({
          type: authTypes.POST_SIGN_ADMIN_SUCCESS,
          payload: res.data.result,
          isLoggedIn: true,
        });
        toast.success(res?.data?.message);
        callback();
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) { }
  };
};