import { Fragment } from "react";
import CommonInput from "./commonInput";
import { Link } from "react-router-dom";
export default function CommonForm({
  formData,
  error,
  setError,
  details,
  setDetails,
  submit,
  loading,
  action,
  buttonText,
  question,
}) {
  const nav = buttonText === "Login" ? "/Signup" : "/Login";
  
  return (
    <Fragment>
      <form
        onSubmit={(e) => submit(e, details)}
        className="w-[80%] xs:w-[350px] p-4 bg-white rounded-lg  flex flex-col"
      >
        {formData.map((formElement) => (
          <CommonInput
            name={formElement.name}
            id={formElement.id}
            type={formElement.type}
            placeholder={formElement.placeholder}
            error={error}
            setError={setError}
            details={details}
            setDetails={setDetails}
            page={buttonText}
          />
        ))}

        <div className="w-full flex flex-col justify-center items-center">
          <button
            className="p-2 bg-[#6100C2] focus:outline-[#6100C2]   w-[100px] rounded-lg text-white hover:bg-[#2a0253] transition duration-300"
            disabled={loading}
            style={{ opacity: loading ? "0.5" : "1" }}
          >
            {buttonText}
          </button>
          <p className="mt-2 xs:text-sm text-[12px]">
            {question}{" "}
            <Link className="text-[#6100C2] xs:text-sm text-[12px]" to={nav}>
              {action}
            </Link>
          </p>
        </div>
      </form>
    </Fragment>
  );
}
