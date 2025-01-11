import { useState,useContext } from "react";
import { GlobalContext } from "../../context";
import { Regconfigs } from "../../Registration/config";
import auth from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CommonForm from "../Registration/commonForm";
function Register() {
  const { signup } = useContext(GlobalContext);
  const navigate = useNavigate()
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

      const result = await signup(auth, data.mail, data.password);
      await updateProfile(result.user, {
        displayName: data.name,
      });
      if (auth.currentUser.displayName) navigate("/Home");
    } catch (error) {
      console.log(error);

      switch (error.code) {
        case "auth/email-already-in-use":
          setFirebaseError(
            "This email is already registered. Please use another email or log in."
          );
          break;
        case "auth/invalid-email":
          setFirebaseError(
            "The email address is not valid. Please provide a valid email."
          );
          break;

        case "auth/operation-not-allowed":
          setFirebaseError("Sign-up is disabled. Please contact support.");
          break;
        default:
          setFirebaseError("An error occurred. Please try again later.");
          break;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full h-screen bg-gradient-to-b from-[#191817] from-49%  to-[#6100C2]  flex flex-col items-center justify-center">
      <h1 className="text-white font-bold xs:text-[50px] mb-4 text-[32px]">
        Sign Up
      </h1>
      {firebaseError && (
        <div className="mb-4 mx-4 p-3 bg-red-100 text-red-700 rounded-lg xs:text-sm text-[12px]">
          {firebaseError}
        </div>
      )}

      <CommonForm
        formData={Regconfigs}
        error={error}
        setError={setError}
        details={details}
        setDetails={setDetails}
        submit={submit}
        loading={loading}
        action={'Login'}
        buttonText={'Submit'}
        question={'Have an account?'}
      
      />
    </section>
  );
}

export default Register;
