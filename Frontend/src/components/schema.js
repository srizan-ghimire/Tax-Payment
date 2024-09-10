import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email Format"),
  pannumber: yup
    .string()
    .required("Required")
    .min(9, "PAN No. should be exactly 9 digits"),

  password: yup
    .string()
    .required("Required")

    .min(8, "Password should be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character"),
  userType: yup
    .string()
    .required("Required")
    .oneOf(["resident", "company", "nonresident"], "Invalid Selection"),
  yearlyIncome: yup.string().required("Required"),
});
