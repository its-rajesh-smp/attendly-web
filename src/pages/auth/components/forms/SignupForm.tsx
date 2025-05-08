import { Button } from "@/common/components/UI/Button";
import { Input } from "@/common/components/UI/Input";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useContext } from "react";
import AuthContext from "../../contexts/auth.context";

function SignupForm() {
  const {
    handleSignup,
    userInput,
    setUserInput,
    togglePasswordVisibility,
    isPasswordVisible,
  } = useContext(AuthContext);

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Full Name"
            className="pl-10"
            value={userInput.name}
            onChange={(e) =>
              setUserInput((p) => ({ ...p, name: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Email"
            className="pl-10"
            value={userInput.email}
            onChange={(e) =>
              setUserInput((p) => ({ ...p, email: e.target.value }))
            }
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className="pl-10 pr-10"
            value={userInput.password}
            onChange={(e) =>
              setUserInput((p) => ({ ...p, password: e.target.value }))
            }
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 text-muted-foreground"
          >
            {isPasswordVisible ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignupForm;
