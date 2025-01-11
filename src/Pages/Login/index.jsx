import { useState, useContext } from "react";
import CommonForm from "../Registration/commonForm";
import { GlobalContext } from "../../context";
import { Loginconfig } from "../../Registration/config";
import auth from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const { login } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const [details, setDetails] = useState({
    name: "",
    mail: "",
    password: "",
  });

  const [firebaseError, setFirebaseError] = useState();
  const [loading, setLoading] = useState(false);
  async function submit(e, data) {
    e.preventDefault();
    try {
      setFirebaseError("");
      setLoading(true);
      const result = await login(auth, data.mail, data.password);
      if (result) navigate("/Home");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          setFirebaseError(
            "Invalid credentials. Please check your email and password."
          );
          break;
        case "auth/user-not-found":
          setFirebaseError("No user found with this email.");
          break;
        case "auth/invalid-email":
          setFirebaseError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setFirebaseError("Incorrect password. Please try again.");
          break;
        default:
          setFirebaseError("An error occurred. Please try again later.");
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
      {firebaseError && (
        <div className="mb-4 mx-4 p-3 bg-red-100 text-red-700 rounded-lg xs:text-sm text-[12px]">
          {firebaseError}
        </div>
      )}

      <CommonForm
        formData={Loginconfig}
        error={error}
        setError={setError}
        details={details}
        setDetails={setDetails}
        submit={submit}
        loading={loading}
        action={"Create Account"}
        buttonText={"Login"}
        question={"Don't have an account?"}
      />
    </section>
  );
}

export default Login;
