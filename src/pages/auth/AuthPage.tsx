import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default AuthPage;
