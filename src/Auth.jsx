import { useCallback, useState, useEffect } from "react";
import SignInput from "./components/SignInput";
import { useLoginMutation } from "./hooks/useLoginMutation";
import { useRegisterMutation } from "./hooks/useRegisterMutation";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [variant, setVariant] = useState("login");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const { mutate: mutateLogin, isSuccess: loginSuccess } = useLoginMutation();
  const { mutate: mutateRegister, isSuccess: registerSuccess } = useRegisterMutation();
  const navigate = useNavigate();

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant => (currentVariant === "login" ? "register" : "login"));
    setEmail("");
    setPassword("");
    setUsername("");
    setEmailError(false);
    setPasswordError(false);
    setUsernameError(false);
  }, []);

  const login = useCallback((e) => {
    e.preventDefault();
    setEmailError(email === "");
    setPasswordError(password === "");

    mutateLogin({ email, password });
  }, [email, password, mutateLogin]);

  const register = useCallback((e) => {
    e.preventDefault();
    setEmailError(email === "");
    setPasswordError(password === "");
    setUsernameError(username === "");

    mutateRegister({ username, email, password });
  }, [username, email, password, mutateRegister]);

  useEffect(() => {
    if (loginSuccess) {
      navigate("/profiles");
    }
  }, [loginSuccess, navigate]);

  return (
    <div className="desktop:bg-cover desktop:bg-center h-screen tablet:bg-[url('../images/NetBG.jpg')] bg-black">
      <nav className="desktop:px-12 px-4">
        <img src="../images/logo.png" alt="Logo" className="desktop:h-16 desktop:pl-32 desktop:pt-6 h-12 pt-6 pl-0 px-0" />
      </nav>
      <div className="flex justify-center items-center">
        <div className="text-white bg-black bg-opacity-80 px-4 tablet:px-16 tablet:py-16 mt-12 rounded-md w-full tablet:w-3/5 tablet:max-w-md">
          <h1 className="text-3xl font-bold pb-8">{variant === "login" ? "Sign In" : "Register"}</h1>
          <div className="flex flex-col ">
            {variant === "register" && (
              <SignInput
                id="username"
                onChange={e => setUsername(e.target.value)}
                label="Username"
                value={username}
              />
            )}
            <p className="text-red-500">{usernameError ? "The username field is empty" : ""}</p>
            <SignInput
              type="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
              label="Email"
              value={email}
            />
            <p className="text-red-500">{emailError ? "The email field is empty" : ""}</p>
            <SignInput
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              label="Password"
              value={password}
            />
            <p className="text-red-500">{passwordError ? "The password field is empty" : ""}</p>
            <button
              className="bg-custom-red w-full rounded-md py-2 mb-16 transition duration-300 ease-in-out font-bold"
              onClick={variant === "login" ? login : register}
            >
              {variant === "login" ? "Login" : "Sign Up "}
            </button>
            <p className="text-zinc-300 max-w-xl">
              {variant === "login" ? "New to Netflix?" : "Already have an account?"}
              <span
                className="ml-5 text-white font-bold cursor-pointer "
                onClick={toggleVariant}
              >
                {variant === "login" ? "Sign up now." : "Sign in."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
