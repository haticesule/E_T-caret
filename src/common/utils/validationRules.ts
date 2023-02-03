import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "İsim Giriniz";
  }
  if (!values.email) {
    errors.email = "Email adresinizi giriniz.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email adresiniz geçersiz.";
  }
  if (!values.message) {
    errors.message = "Mesajınızı giriniz";
  }
  return errors;
}
