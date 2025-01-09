import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";
import auth from "../../firebaseConfig";
import passwordImage from "/src/assets/lock_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
import mailImage from "/src/assets/mail_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
import bg from "/src/assets/pexels-anniroenkae-3109850.jpg";
function Login() {
  const navigate = useNavigate();
  const { login } = useContext(GlobalContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: "onChange",
  });

  async function submit(data) {
    try {
      setError("");
      setLoading(true);
      const result = await login(auth, data.mail, data.password);
      if (result) navigate("/Home");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          setError(
            "Invalid credentials. Please check your email and password."
          );
          break;
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        default:
          setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full h-screen bg-gradient-to-b from-[#191817] from-49%  to-[#6100C2]  flex flex-col items-center justify-center">
      <h1 className="text-white font-bold xs:text-[50px] mb-4 text-[32px]">
        Login
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
        <div className="flex border border-[#9b9b9b] rounded-lg">
          <label
            htmlFor="mail"
            className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
          >
            <img
              src={mailImage}
              alt=""
              className="inline w-[22px] h-[22px] xs:w-[32px] xs:h-[32px]"
            />
          </label>
          <div className="flex p-1 input">
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Email"
              {...register("mail", {
                required: "Enter your e-mail address",
              })}
              className="w-[100%]"
            />
          </div>
        </div>
        {errors.mail && <p>{errors.mail.message}</p>}

        <div className="flex border border-[#9b9b9b] rounded-lg">
          <label
            htmlFor="password"
            className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
          >
            <img
              src={passwordImage}
              alt=""
              className="inline w-[22px] h-[22px] xs:w-[32px] xs:h-[32px]"
            />
          </label>
          <div className="flex p-1 input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Enter your password",
              })}
              className="w-[100%]"
            />
          </div>
        </div>
        {errors.password && <p>{errors.password.message}</p>}

        <div className="w-full flex-col flex justify-center items-center">
          <button
            className="p-2 bg-[#6100C2] focus:outline-[#6100C2]   w-[100px] rounded-lg text-white  transition duration-300"
            style={{ opacity: loading ? "0.5" : "1" }}
            disabled={loading}
          >
            Login
          </button>

          <p className="mt-2 xs:text-sm text-[12px]">
            Don't have an account?{" "}
            <Link
              className="text-[#6100C2] xs:text-sm text-[12px]"
              to={"/Signup"}
            >
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Login;
