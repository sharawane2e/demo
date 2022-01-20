import * as yup from "yup";
import ErrorMessages from "../constants/ErrorMessages";
import Regex from "../constants/Regex";

const LoginSchema = yup.object().shape({
  username: yup
    .string()
    .required(ErrorMessages.EMAIL_REQUIRED)
    .matches(Regex.Email, ErrorMessages.EMAIL_INVALID),
  password: yup.string().required(ErrorMessages.PASSWORD_REQUIRED),
});

export default LoginSchema;
