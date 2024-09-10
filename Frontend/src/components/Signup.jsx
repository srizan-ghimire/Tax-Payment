import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { PiMoneyWavy } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { PiGenderFemaleBold } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import useCustomToast from "../hooks/useCustomToast";
import { schema } from "./schema";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
const SignUp = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (signUpData) => {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",

        signUpData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      successToast("User Registered");
      navigate("/login");
    },
    onError: (res) => {
      errorToast("User Already Exists");
    },
  });

  const { successToast, errorToast } = useCustomToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    clearErrors,
    trigger,
    formState: { errors },

    watch,
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await trigger([
      "name",
      "email",
      "pannumber",
      "password",
      "userType",
      "yearlyIncome",
    ]);
    const formData = watch();

    const panNumber = {
      pannumber: Number(formData.pannumber),
      yearlyIncome: Number(formData.yearlyIncome),
    };
    delete formData.pannumber;
    delete formData.yearlyIncome;
    const newFormData = { ...formData, panNumber };

    if (result) {
      console.log(newFormData);
      mutate(newFormData);
    }
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(errors);
  //   }, 2000);
  // }, []);

  return (
    <section id="signup">
      <div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
        <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:rounded-lg">
          <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
            <div className="text-center">
              <Link to="/" className="inline-block">
                <img
                  src="/img/nepgov.png"
                  className="w-32 mx-auto "
                  alt="logo"
                />
                <h2 className="text-2xl font-medium text-primary">
                  iTax Nepal
                </h2>
                <p className="text-sm">Digital Tax Payment Gateway</p>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex-1 w-full">
                <div className="mt-8 mb-12 text-center border-b">
                  <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                    Sign Up with Email
                  </div>
                </div>
                <form>
                  <div className="max-w-xs mx-auto">
                    <div>
                      <div className="relative mt-5">
                        <input
                          className="w-full px-6 py-3 pl-10 text-base text-gray-700 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-md outline-none focus:border-primary focus:shadow-md focus:bg-white"
                          type="text"
                          {...register("name")}
                          onInput={() => clearErrors("name")}
                          placeholder="Full Name"
                        />
                        <RxAvatar className="absolute text-xl text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                      </div>
                      <p className={"error"}>{errors.name?.message}</p>
                    </div>

                    <div className="relative mt-5">
                      <input
                        className="w-full px-6 py-3 pl-10 text-base text-gray-700 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-md outline-none focus:border-primary focus:shadow-md focus:bg-white"
                        type="email"
                        {...register("email")}
                        onInput={() => clearErrors("email")}
                        placeholder="Email"
                      />
                      <MdOutlineEmail className="absolute text-xl text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                    </div>
                    <p className={"error"}>
                      {errors.email && errors.email.message}
                    </p>

                    <div className="relative mt-5">
                      <input
                        className="w-full px-6 py-3 pl-10 text-base text-gray-700 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-md outline-none focus:border-primary focus:shadow-md focus:bg-white"
                        type="tel"
                        maxLength={9}
                        {...register("pannumber")}
                        onInput={(e) => {
                          // This function ensures non-numeric characters are not entered
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                          clearErrors("panNumber");
                        }}
                        placeholder="PAN Number"
                      />
                      <FiPhone className="absolute text-xl text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                    </div>
                    <p className={"error"}>
                      {errors.pannumber && errors.pannumber.message}
                    </p>

                    <div className="relative mt-5">
                      <input
                        className="w-full px-6 py-3 pl-10 text-base text-gray-700 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-md outline-none focus:border-primary focus:shadow-md focus:bg-white"
                        type="password"
                        {...register("password")}
                        onInput={() => clearErrors("password")}
                        placeholder="Password"
                      />
                      <IoKeyOutline className="absolute text-xl text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                    </div>
                    <p className={"error"}>
                      {errors.password && errors.password.message}
                    </p>
                    <div className="relative mt-5">
                      <input
                        className="w-full px-6 py-3 pl-10 text-base text-gray-700 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-md outline-none focus:border-primary focus:shadow-md focus:bg-white"
                        type="number"
                        placeholder="Yearly Income"
                        {...register("yearlyIncome")}
                      />
                      <PiMoneyWavy className="absolute text-xl text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                    </div>
                    <p className={"error"}>{errors?.yearlyIncome?.message}</p>

                    {/* <div className="relative mt-5">
                    <input
                      className="w-full px-6 py-3 pl-10 text-base text-gray-700 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-md outline-none focus:border-primary focus:shadow-md focus:bg-white"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <IoKeyOutline className="absolute text-xl text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                  </div> */}

                    <div className="relative mt-5">
                      <select
                        {...register("userType")}
                        onInput={() => clearErrors("userType")}
                        className="w-full px-6 py-3 pl-10 text-base text-gray-700 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-md outline-none cursor-pointer focus:border-primary focus:shadow-md focus:bg-white"
                      >
                        <option value="">Select Type</option>
                        <option value="resident">Individual</option>
                        <option value="business">Company</option>
                        <option value="nonresident">Family</option>
                      </select>
                      <PiGenderFemaleBold className="absolute text-xl text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
                    </div>
                    <p className={"error"}>
                      {errors.userType && errors.userType.message}
                    </p>

                    <button
                      onClick={handleSubmit}
                      className="flex items-center justify-center w-full gap-2 py-4 mt-5 font-semibold tracking-wide text-white transition-all duration-300 ease-in-out rounded-lg bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-">Sign Up</span>
                    </button>

                    <p className="mt-6 text-xs text-center text-gray-600">
                      By signing up, you agree to abide by iTax Nepal{" "}
                      <a
                        href="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        Terms of Service
                      </a>{" "}
                      and its
                      <a
                        href="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        {" "}
                        Privacy Policy
                      </a>
                    </p>

                    <p className="mt-6 text-sm text-center text-gray-600">
                      Already have an account?{" "}
                      <Link to="/login" className="underline text-primary">
                        Log In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden text-center bg-blue-100 lg:flex">
            <div className="flex items-center justify-center w-full m-12 xl:m-16">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="362.52377"
                  height="438.18799"
                  viewBox="0 0 362.52377 438.18799"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      d="M336.47953,37.094H50.51956c-10.48999,0-19.02002,8.52997-19.02002,19.01996V252.07398c0,10.48999,8.53003,19.02002,19.02002,19.02002H336.47953c10.48999,0,19.02002-8.53003,19.02002-19.02002V56.11395c0-10.48999-8.53003-19.01996-19.02002-19.01996Z"
                      fill="#f2f2f2"
                    />
                    <path
                      d="M305.4553,52.18799H19.49534C9.00535,52.18799,.47532,60.71796,.47532,71.20795v195.96002c0,10.48999,8.53003,19.02002,19.02002,19.02002H305.4553c10.48999,0,19.02002-8.53003,19.02002-19.02002V71.20795c0-10.48999-8.53003-19.01996-19.02002-19.01996Zm17.02002,157.3037c0,41.25363-33.44267,74.6963-74.6963,74.6963H19.49534c-9.3999,0-17.02002-7.62012-17.02002-17.02002V71.20795c0-9.39986,7.62009-17.01996,17.01996-17.01996H305.4553c9.3999,0,17.02002,7.62012,17.02002,17.02002V209.49169Z"
                      fill="#3f3d56"
                    />
                  </g>
                  <g>
                    <path
                      d="M41.32151,243.72071l-1.69238-1.06543c1.1001-1.74854,2.23535-3.44336,3.37305-5.0376l1.62793,1.16211c-1.11572,1.5625-2.22852,3.22461-3.30859,4.94092Z"
                      fill="#ccc"
                    />
                    <path
                      d="M52.34934,229.46778l-1.43164-1.39648c3.05176-3.12744,6.26367-5.8125,9.5459-7.97998l1.10254,1.66895c-3.16357,2.08887-6.26465,4.68213-9.2168,7.70752Zm49.89551-12.62402c-2.38818,0-4.56396-.30566-6.19287-.57227l.32324-1.97363c1.65039,.27002,3.63818,.5459,5.86963,.5459,1.9707,0,3.90771-.21631,5.92139-.66211l.43164,1.95312c-2.15723,.47705-4.23535,.70898-6.35303,.70898Zm-29.92627-.26465l-.60156-1.90723c2.14844-.67773,4.37402-1.18555,6.61475-1.51025,1.92432-.27832,3.76416-.41357,5.62402-.41357h.12305v2h-.12305c-1.76318,0-3.50879,.12842-5.3374,.39307-2.13428,.30908-4.25439,.79297-6.2998,1.43799Zm47.67139-5.77979l-1.27832-1.53809c2.75977-2.29248,4.73779-5.06445,6.83252-7.99951l.83545-1.16748,1.62305,1.16895-.83057,1.16016c-2.17188,3.04346-4.22363,5.91846-7.18213,8.37598Zm16.03906-18.33789l-1.23047-1.57715c2.6958-2.10352,5.7417-3.80811,9.31104-5.21094,.60791-.23926,1.18896-.45264,1.74658-.64258l.64551,1.89258c-.53027,.18115-1.08203,.38379-1.66016,.61133-3.38818,1.33154-6.27051,2.94287-8.8125,4.92676Zm24.14502-6.94678c-.67285,0-1.31104-.00635-1.92432-.01318l.02344-2c.62695,.00732,1.28125,.00879,1.97363,.01318,2.35352,0,5.63135-.06689,10.12744-.5874l.23047,1.98633c-4.64453,.53809-7.97412,.59424-10.43066,.60107Zm22.59668-2.61914l-.39648-1.95996c3.59229-.72656,7.77148-1.59131,11.9082-2.65869l.5,1.93652c-4.18408,1.07959-8.39404,1.95068-12.01172,2.68213Zm23.79297-6.47363l-.74805-1.85498c4.01025-1.6167,7.49219-3.43994,10.64551-5.57471l1.12109,1.65625c-3.27148,2.21484-6.87598,4.10352-11.01855,5.77344Zm20.20752-14.29102l-1.62305-1.16895c.55811-.77441,1.04053-1.52979,1.50684-2.26025,1.37695-2.15625,2.80127-4.38623,6.19238-7.12354l.2373-.18994,1.23926,1.56934-.22021,.17627c-3.1377,2.5332-4.4126,4.53027-5.76318,6.64453-.48096,.75342-.979,1.53271-1.56934,2.35254Zm17.94189-15l-.72949-1.8623c3.56445-1.39746,7.59033-2.52197,11.96582-3.34277l.36914,1.96582c-4.25244,.79785-8.15723,1.8877-11.60547,3.23926Z"
                      fill="#ccc"
                    />
                    <path
                      d="M268.54319,142.42286l-.125-1.99609c1.94336-.12158,3.9751-.20166,6.03906-.23877l.03613,2c-2.03467,.03613-4.03662,.11523-5.9502,.23486Z"
                      fill="#ccc"
                    />
                  </g>
                  <g>
                    <path
                      d="M63.62346,73.85921h-28.06006c-1.40997,0-2.56,1.15002-2.56,2.56,0,1.41998,1.15002,2.57001,2.56,2.57001h28.06006c1.40997,0,2.56-1.15002,2.56-2.57001,0-1.40997-1.15002-2.56-2.56-2.56Z"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M110.62346,73.85921h-28.06006c-1.40997,0-2.56,1.15002-2.56,2.56,0,1.41998,1.15002,2.57001,2.56,2.57001h28.06006c1.40997,0,2.56-1.15002,2.56-2.57001,0-1.40997-1.15002-2.56-2.56-2.56Z"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M157.62346,73.85921h-28.06006c-1.40997,0-2.56,1.15002-2.56,2.56,0,1.41998,1.15002,2.57001,2.56,2.57001h28.06006c1.40997,0,2.56-1.15002,2.56-2.57001,0-1.40997-1.15002-2.56-2.56-2.56Z"
                      fill="#e6e6e6"
                    />
                  </g>
                  <rect
                    x="32.97532"
                    y="242.18799"
                    width="255"
                    height="2"
                    fill="#e6e6e6"
                  />
                  <path
                    d="M274.50535,96.18799c-18.15002,.46997-31.69,5.81-40.27002,15.84998-3.16998,3.72003-4.46002,6.65002-5.82001,9.75-1.34998,3.06-2.72998,6.21002-5.94,10.32001v-3.40002c1.98999-2.91998,3.06-5.35999,4.10999-7.72998,1.42004-3.23999,2.77002-6.29999,6.13-10.22998,8.96002-10.5,23-16.07001,41.72998-16.56l.06006,2Z"
                    fill="#ccc"
                  />
                  <path
                    d="M228.41532,121.78797c-1.34998,3.06-2.72998,6.21002-5.94,10.32001-.38,.48999-.78998,1-1.22998,1.53003-11.58002,13.76996-27.05005,18.28998-39.48999,21.92999-.78003,.22998-1.54004,.44-2.28003,.63995-11.06,3-17.12,2.89001-21.63,2.82001-4.52997-.07996-7.52002-.13-12.87,2.92999-9.81,5.59003-13.83002,13.77002-17.71997,21.68005-4.01001,8.13995-7.79004,15.82996-17.43005,19.44-6.69,2.5-11.38995,1.25995-16.35999-.04004-4.27002-1.13-11.96576-28.94397-18.77997-33-14.07001,2.95001-22.62,48.92999-33.29004,73.54999l-1.83997-.79999c10.95001-25.23999,19.96997-71.60999,34.70996-74.70996,6.57001-1.38,15.22003,31.83997,19.71002,33.01996,4.65997,1.23004,9.04999,2.38,15.15002,.10004,8.89996-3.32001,12.33997-10.33002,16.32996-18.44,3.84003-7.80005,8.19-16.64001,18.52002-22.54004,5.83002-3.32996,9.21997-3.26996,13.90002-3.19,4.45996,.08002,10.47998,.17999,21.59998-2.88995,.56-.16003,1.13-.32001,1.71997-.49005,12.18005-3.56,27.33002-7.98999,38.51001-21.28998,1.10004-1.31,2.01001-2.52002,2.77002-3.65002,1.98999-2.91998,3.06-5.35999,4.10999-7.72998,1.42004-3.23999,3.19-2.28998,1.83002,.81Z"
                    fill="#3d52a0"
                  />
                  <g>
                    <path
                      d="M121.77587,350.56818c-.7916-2.75646-2.14717-5.10758-3.76107-6.78474l-5.86366-26.72989-12.78116,3.13108,7.32422,26.77769c-.48165,2.2656-.38528,4.9703,.40632,7.72676,1.8084,6.29712,6.55959,10.4794,10.61208,9.34144,4.0525-1.13796,5.87168-7.16522,4.06328-13.46232h0Z"
                      fill="#ffb6b6"
                    />
                    <path
                      d="M120.00766,175.22718s-20.18426-.41334-25.31664,14.28545c-4.67151,13.37891-10.20941,50.13547-7.2157,52.2594l12.74266,90.48537,18.17083-2.49685-4.66349-108.56892,6.28234-45.96446Z"
                      fill="#3d52a0"
                    />
                  </g>
                  <polygon
                    points="213.47532 343.18799 209.8953 438.18799 162.3953 438.18799 160.47532 395.61798 152.03532 438.18799 101.12534 438.18799 107.47532 365.008 114.03532 349.61798 118.47532 339.18799 213.47532 343.18799"
                    fill="#2f2e41"
                  />
                  <path
                    d="M175.47532,157.18799l-33-2-11,14-24,9,11,107-5,64s70,56,100-6l-8-75,2-87-23-10-9-14Z"
                    fill="#3d52a0"
                  />
                  <g>
                    <path
                      d="M239.00562,132.84916c.35806,3.46696-.09662,6.72734-1.14365,9.34143l5.49713,32.81189-15.68972,2.15901-3.88701-33.51684c-1.55922-2.34493-2.67064-5.44357-3.02869-8.91052-.81798-7.92025,2.60476-14.76279,7.64491-15.28331,5.04015-.52052,9.78906,5.47809,10.60704,13.39833v.00002Z"
                      fill="#ffb6b6"
                    />
                    <path
                      d="M211.67726,184.94481c-5.40875-9.24477-18.82553-10.11629-24.83468-1.25004-1.64275,2.4238-1.1851,5.14828-1.57731,8.42166-1.66507,13.89642,24.96442,54.95993,43.39029,59.68796,2.41791,.62042,3.79531,3.22857,6.23577,3.7531h.00002c7.22956,1.55386,13.96073-4.18446,13.57049-11.56881l-5.00511-94.70802-21.02719,7.17204,1.34587,49.17054-12.09814-20.67841Z"
                      fill="#3d52a0"
                    />
                  </g>
                  <g>
                    <circle
                      cx="162.39989"
                      cy="123.53243"
                      r="29.06773"
                      fill="#ffb6b6"
                    />
                    <path
                      d="M189.47532,102.18799c-.25,.06006,3.82632-3.91316,4-4,4-2-.11005,17.54999-3,17-7.11005-1.35004-10.17999-4.03003-12.94,2.65997-.77002,1.85999-1.25,3.96002-2.75,5.29004-2.06,1.81-5.47998,1.65997-7.15997,3.81995-1.35004,1.74005-.96002,4.30005,.03998,6.26001,1,1.97003,2.52002,3.64001,3.42999,5.65002,1.02002,2.26001-3.33002,9.45001-4.98999,13.48999v.01001l-.00987,.02366c-.44108,1.05969-1.48927-1.99293-2.59591-2.29765-1.32423-.36464-3.27507,2.7622-5.38421,2.19397-.01001,0-.02002-.01001-.03003-.01001-2.01001-.56-4.25-1.15997-6.46997-1.76001h-.01001c-6.25-1.69995-7.83002,.74005-8.13,.67004l-3.88-4.06c-1.33156-.9695-1.18106-4.09939-2.12-4.94-.76788-.68747-2.68219,.90109-3.24639,.2403-2.76637-3.24001-3.40286-6.48121-5.03364-12.88031-1.48999-5.84998-4.57996-23.35999,1.77002-24.15002,5.98999-.75,1.60999-9.08997,7.64001-8.77997-.35999-1.52002,.31-3.15002,1.40002-4.27002,1.07996-1.13,2.51996-1.83002,3.96997-2.42999,7.15002-2.91998,5.96002-5.42993,13.5-3.72998,.75-1.04999,11.63995-.35004,13,0,.09998,.01996-3.37,.85004,2,0-.20001,1.23004,3.19995,1.77002,3,3,.75-1.01001,8.81,4.78998,9,6,.25,1.51001-2.03003,.73999-.51001,.96997,.90002,.14001,2.44,1.97003,2.29004,2.88,.64996-.88,1.29999-1.75,1.95996-2.63,.12,.01001,.22998,.03003,.35004,.04999,3.03998,.58002-.44522,10.51796-.32001,7.42004,.22998-5.69,4.25995-2.35999,1.22998-1.69Z"
                      fill="#2f2e41"
                    />
                  </g>
                  <path
                    d="M300.83517,256.89952c.22394,.55166,.99694,.55161,1.22077-.00016,1.56147-3.8494,3.78448-8.16027,6.20251-11.45472,.38714-.52746-.14657-1.23226-.76183-1.0097l-5.18327,1.87521v-32.08641h-1.73515v32.08647l-5.18518-1.87548c-.61526-.22256-1.14891,.48224-.76178,1.0097,2.41814,3.2945,4.64141,7.60554,6.20394,11.45509Z"
                    fill="#3f3d56"
                  />
                  <path
                    d="M334.82587,289.93686c-.16772,.57127,.43765,1.05196,.95607,.75908,3.61674-2.04334,8.03852-4.03665,11.9809-5.11272,.6312-.17229,.65157-1.05613,.03136-1.26448l-5.22518-1.75505,19.95475-25.12659-1.35878-1.0791-19.95478,25.12664-2.8941-4.69337c-.34339-.55692-1.19961-.33688-1.22448,.31693-.15525,4.08375-1.09529,8.84236-2.26575,12.82866Z"
                    fill="#3f3d56"
                  />
                  <g>
                    <path
                      d="M318.59274,311.3491h-33.72142c-2.09368,0-3.79696-1.70328-3.79696-3.79696-4.45851-13.03165-4.37046-25.80093,0-38.32306,0-2.09368,1.70329-3.79696,3.79696-3.79696h33.72142c2.09368,0,3.79696,1.70328,3.79696,3.79696v38.32306c0,2.09368-1.70328,3.79696-3.79696,3.79696Z"
                      fill="#e6e6e6"
                    />
                    <path
                      d="M292.09642,266.56341c-5.46252,0-9.89077,4.42825-9.89077,9.89076v30.28487c0,1.92125,1.55748,3.47874,3.47874,3.47874h18.648c9.34795,0,16.92596-7.57801,16.92596-16.92596v-23.24967c0-1.92125-1.55748-3.47874-3.47874-3.47874h-25.6832Z"
                      fill="#fff"
                    />
                    <g>
                      <path
                        d="M309.58533,277.7003h-15.78792c-.39803,0-.72189-.32387-.72189-.72189,0-.39803,.32387-.72174,.72189-.72174h15.78792c.39803,0,.72174,.32372,.72174,.72174,0,.39803-.32372,.72189-.72174,.72189Z"
                        fill="#e6e6e6"
                      />
                      <path
                        d="M309.58533,293.09284h-15.78792c-.39803,0-.72189-.32387-.72189-.72189s.32387-.72174,.72189-.72174h15.78792c.39803,0,.72174,.32372,.72174,.72174s-.32372,.72189-.72174,.72189Z"
                        fill="#e6e6e6"
                      />
                      <path
                        d="M318.0573,285.40161h-32.73185c-.39803,0-.72189-.32387-.72189-.72189,0-.39803,.32387-.72174,.72189-.72174h32.73185c.39803,0,.72174,.32372,.72174,.72174,0,.39803-.32372,.72189-.72174,.72189Z"
                        fill="#e6e6e6"
                      />
                    </g>
                    <path
                      d="M318.44333,299.35144h-13.65783c-.39803,0-.72189-.32387-.72189-.72189,0-.39803,.32387-.72174,.72189-.72174h13.65783c.39803,0,.72174,.32372,.72174,.72174s-.32372,.72189-.72174,.72189Z"
                      fill="#e6e6e6"
                    />
                  </g>
                  <g>
                    <ellipse
                      cx="12.46328"
                      cy="12.52176"
                      rx="12.46328"
                      ry="12.20069"
                      fill="#3d52a0"
                    />
                    <path
                      d="M112.37614,8.34784H45.29119c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.87249-4.17392,4.17392-4.17392H112.37614c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.87249,4.17392-4.17392,4.17392Z"
                      fill="#f2f2f2"
                    />
                    <path
                      d="M164.72947,22.47495H45.29119c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.87249-4.17392,4.17392-4.17392h119.43829c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.87249,4.17392-4.17392,4.17392Z"
                      fill="#f2f2f2"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
