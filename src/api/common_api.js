import { ApiHelperGet, ApiHelperPost, ApiHelperFile } from ".";
import { ApiRoutes } from "../constants";

const signup = async (data) => {
  try {
    const res = await ApiHelperPost(ApiRoutes.SIGNUP,data);
    return res;
  } catch (error) {
    throw error;
  }
};

export {
  signup,
};
