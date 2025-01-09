import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";
import auth from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import userImage from "/src/assets/person_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
import passwordImage from "/src/assets/lock_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
import mailImage from "/src/assets/mail_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
import bg from "/src/assets/pexels-anniroenkae-3109850.jpg";
function Register() {
  const navigate = useNavigate();
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const { signup } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  async function submit(data) {
    try {
      setError("");
      setLoading(true);

      const result = await signup(auth, data.mail, data.password);
      await updateProfile(result.user, {
        displayName: data.name,
      });
      if (auth.currentUser.displayName) navigate("/Home");
    } catch (error) {
      console.log(error);
      console.log(error.code);

      switch (error.code) {
        case "auth/email-already-in-use":
          setError(
            "This email is already registered. Please use another email or log in."
          );
          break;
        case "auth/invalid-email":
          setError(
            "The email address is not valid. Please provide a valid email."
          );
          break;

        case "auth/operation-not-allowed":
          setError("Sign-up is disabled. Please contact support.");
          break;
        default:
          setError("An error occurred. Please try again later.");
          break;
      }
    } finally {
      setLoading(false);
    }
  }

  console.log(error);

  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const cpasswordRef = useRef(null);
  const mailRef = useRef(null);
  const emailValue = watch("mail");
  const passwordValue = watch("password");
  const cpasswordValue = watch("cpassword");
  const nameValue = watch("name");
  function dynamicErrorUpdate(ref, name, errors, watchElement) {
    ref?.current.classList.add("incorrect");
    if (ref.current) {
      if (errors[name]) {
        ref.current.classList.remove("success");
        ref.current.classList.add("incorrect");
      } else if (watchElement?.length > 1) {
        ref.current.classList.add("success");
        ref.current.classList.remove("incorrect");
      }
    }
  }
  useEffect(() => {
    dynamicErrorUpdate(mailRef, "mail", errors, emailValue);
    dynamicErrorUpdate(passwordRef, "password", errors, passwordValue);
    dynamicErrorUpdate(nameRef, "name", errors, nameValue);
    dynamicErrorUpdate(cpasswordRef, "cpassword", errors, cpasswordValue);
  }, [errors, passwordValue, nameValue, emailValue, cpasswordValue]);

  return (
    <section className="w-full h-screen bg-gradient-to-b from-[#191817] from-49%  to-[#6100C2]  flex flex-col items-center justify-center">
      <h1 className="text-white font-bold xs:text-[50px] mb-4 text-[32px]">
        Sign Up
      </h1>
      {error && (
        <div className="mb-4 mx-4 p-3 bg-red-100 text-red-700 rounded-lg xs:text-sm text-[12px]">
          {error}
        </div>
      )}
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[80%] xs:w-[350px] p-4 bg-white rounded-lg  flex flex-col gap-4"
      >
        <div className="flex border border-[#9b9b9b] rounded-lg" ref={nameRef}>
          <label
            htmlFor="name"
            className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
          >
            <img className="inline w-[32px] h-[32px] " src={userImage} alt="" />
          </label>
          <div className="flex p-1 input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              {...register("name", {
                required: "This field is required",
              })}
              className="w-[100%]"
            />
          </div>
        </div>
        {errors.name && <p>{errors.name.message}</p>}
        {/* {errors.name? nameRef.current.classList.add('success'):null} */}

        <div className="flex border border-[#9b9b9b] rounded-lg" ref={mailRef}>
          <label
            htmlFor="mail"
            className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
          >
            <img src={mailImage} alt="" className="inline w-[32px] h-[32px]" />
          </label>
          <div className="flex p-1 input">
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Email"
              {...register("mail", {
                required: "Enter your e-mail address",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a correct e-mail address",
                },
              })}
              className="w-[100%]"
            />
          </div>
        </div>
        {errors.mail && <p>{errors.mail.message}</p>}

        <div
          className="flex border border-[#9b9b9b] rounded-lg"
          ref={passwordRef}
        >
          <label
            htmlFor="password"
            className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
          >
            <img src={passwordImage} alt="" className=" w-[32px] h-[32px]" />
          </label>
          <div className="flex p-1 input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Enter your password",
                validate: (value) => {
                  if (!/^(?=.*[a-z])/.test(value))
                    return "Password must have at least one lowercase letter";
                  if (!/^(?=.*[A-Z])/.test(value))
                    return "Password must have at least one uppercase letter";
                  if (!/^(?=.*\d)/.test(value))
                    return "Password contain at least a digit";
                },
              })}
              className="w-[100%]"
            />
          </div>
        </div>
        {errors.password && <p>{errors.password.message}</p>}

        <div
          className="flex border border-[#9b9b9b] rounded-lg"
          ref={cpasswordRef}
        >
          <label
            htmlFor="password"
            className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
          >
            <img
              src={passwordImage}
              alt=""
              className="inline w-[32px] h-[32px]"
            />
          </label>
          <div className="flex p-1 input">
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Password"
              {...register("cpassword", {
                required: "Confirm your password",
                validate: (value) => {
                  if (value !== getValues("password"))
                    return "Password does not match";
                },
              })}
              className="focus:outline-none pl-1 w-[100%]"
            />
          </div>
        </div>
        {errors.cpassword && <p>{errors.cpassword.message}</p>}

        <div className="w-full flex flex-col justify-center items-center">
          <button
            className="p-2 bg-[#6100C2] focus:outline-[#6100C2]   w-[100px] rounded-lg text-white hover:bg-[#2a0253] transition duration-300"
            disabled={loading}
            style={{ opacity: loading ? "0.5" : "1" }}
          >
            Submit
          </button>
          <p className="mt-2 xs:text-sm text-[12px]">
            Have an Account?{" "}
            <Link
              className="text-[#6100C2] xs:text-sm text-[12px]"
              to={"/Login"}
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;
