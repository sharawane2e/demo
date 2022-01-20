import * as yup from "yup";
import ErrorMessages from "../constants/ErrorMessages";
import Regex from "../constants/Regex";

const FormSchema = yup.object().shape({
  fullname: yup.string().required(ErrorMessages.NAME_INVALID),
  email: yup
    .string()
    .required(ErrorMessages.EMAIL_REQUIRED)
    .matches(Regex.Email, ErrorMessages.EMAIL_INVALID),
    password: yup.string().required(ErrorMessages.PASSWORD_REQUIRED),
    number: yup
    .string()
    .required(ErrorMessages.NUMBER_REQUIRED)
    .matches(Regex.Phonenum, ErrorMessages.NUMBER_INVALID)
    .max(10),
    //gender: yup.boolean().required(ErrorMessages.GENDER_INVALID),
    //gender:yup.string().required().nullable().oneOf(["male" , "female"], 'Selecting the gender field is required'),
    //language: yup.boolean().nullable().required().oneOf([true],ErrorMessages.LANGUAGE_INVALID),
    //countries: yup.string().ensure().required(ErrorMessages.COUNTTRY_INVALID),
    //states: yup.string().required(ErrorMessages.STATE_INVALID),
    //cities: yup.string().required(ErrorMessages.CITY_INVALID),
});

export default FormSchema;