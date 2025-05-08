import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { Dto, Logger } from "@/common/utils";
import { createContext, useState, type ReactNode } from "react";
import { loginAct, registerAct } from "../action-creators/auth.act";
import { AuthDto } from "../dtos";

interface IUserInput {
  name?: string;
  email: string;
  password: string;
}

interface IAuthContext {
  handleLogin: (e: React.FormEvent) => void;
  handleSignup: (e: React.FormEvent) => void;
  togglePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  userInput: IUserInput;
  setUserInput: React.Dispatch<React.SetStateAction<IUserInput>>;
}

const AuthContext = createContext<IAuthContext>({
  handleLogin: () => {},
  handleSignup: () => {},
  togglePasswordVisibility: () => {},
  isPasswordVisible: false,
  userInput: { email: "", password: "" },
  setUserInput: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [userInput, setUserInput] = useState<IUserInput>({
    email: "",
    password: "",
    name: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = Dto.validateInput(AuthDto.userLoginSchema, userInput);
    if (!payload) return;
    try {
      await dispatch(loginAct(payload));
    } catch (error) {
      Logger.logError(error);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = Dto.validateInput(AuthDto.userSignupSchema, userInput);
    if (!payload) return;
    try {
      await dispatch(registerAct(payload));
    } catch (error) {
      Logger.logError(error);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleSignup,
        togglePasswordVisibility,
        isPasswordVisible,
        userInput,
        setUserInput,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
