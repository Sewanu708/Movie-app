import { Fragment, useRef } from "react";
import userImage from "/src/assets/person_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
import passwordImage from "/src/assets/lock_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
import mailImage from "/src/assets/mail_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
function CommonInput({
  name,
  type,
  placeholder,
  id,
  error,
  setError,
  details,
  setDetails,
  page,
}) {
  const labelRef = useRef(null);

  function handleName(e) {
    const value = e.target.value;

    if (/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value)) {
      setError({
        ...error,
        [name]: "",
      });
      labelRef.current.classList.add("success");
      setDetails({ ...details, name: value });
    } else {
      setError({
        ...error,
        [name]: "Enter a valid name",
      });
      labelRef.current.classList.remove("success");
      labelRef.current.classList.add("incorrect");
    }
  }
  function handleMail(e, page) {
    const value = e.target.value;

    if (page === "Login") {
      setDetails({ ...details, mail: value });
      return;
    }
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      setError({
        ...error,
        [name]: "",
      });
      labelRef.current.classList.add("success");
      setDetails({ ...details, mail: value });
    } else {
      setError({
        ...error,
        [name]: "Enter a correct e-mail address",
      });
      labelRef.current.classList.remove("success");
      labelRef.current.classList.add("incorrect");
    }
  }
  function handlePassword(e, page) {
    const value = e.target.value;
    if (page === "Login") {
      setDetails({ ...details, password: value });
      return;
    }
    if (!/^(?=.*[a-z])/.test(value)) {
      labelRef.current.classList.remove("success");
      labelRef.current.classList.add("incorrect");
      setError({
        ...error,
        [name]: "Password must have at least one lowercase letter",
      });
    } else if (!/^(?=.*[A-Z])/.test(value)) {
      setError({
        ...error,
        [name]: "Password must have at least one uppercase letter",
      });
    } else if (!/^(?=.*\d)/.test(value)) {
      setError({
        ...error,
        [name]: "Password contain at least a digit",
      });
    } else {
      setError({
        ...error,
        [name]: "",
      });
      labelRef.current.classList.add("success");
      setDetails({ ...details, password: value });
    }
  }

  function handleCPassword(e) {
    const value = e.target.value;

    if (details.password === value) {
      setError({
        ...error,
        [name]: "",
      });
      labelRef.current.classList.add("success");
    } else {
      setError({
        ...error,
        [name]: "Password Does not match",
      });
      labelRef.current.classList.remove("success");
      labelRef.current.classList.add("incorrect");
    }
  }

  return (
    <Fragment>
      <div
        className="flex rounded-lg"
        style={{ marginBottom: error[name] ? "0.25rem" : "1rem" }}
        ref={labelRef}
      >
        <label
          htmlFor={name}
          className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
        >
          <img
            className="inline w-[32px] h-[32px] "
            src={
              name === "name"
                ? userImage
                : name === "mail"
                ? mailImage
                : passwordImage
            }
            alt=""
          />
        </label>
        <div className="flex p-1 w-full input border border-[#9b9b9b] rounded-r-lg pass">
          <input
            required
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            onInput={(e) => {
              if (name === "name") handleName(e);
              if (name === "password") handlePassword(e, page);
              if (name === "cpassword") handleCPassword(e);
              if (name === "mail") handleMail(e, page);
            }}
            className="w-[100%]"
          />
        </div>
      </div>
      {error[name] && (
        <p className="xs:text-sm text-[12px] text-[#DC2626]">{error[name]}</p>
      )}
    </Fragment>
  );
}

export default CommonInput;
