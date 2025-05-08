import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/common/components/UI/Tabs";
import { AuthContextProvider } from "../contexts/auth.context";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
function AuthTabs() {
  return (
    <AuthContextProvider>
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        {/* Login Form */}
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        {/* Signup Form */}
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </AuthContextProvider>
  );
}

export default AuthTabs;
