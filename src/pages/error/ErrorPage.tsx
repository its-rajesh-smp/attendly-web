import { Button } from "@/common/components/UI/Button";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center text-2xl font-bold">
        <h1>OOps</h1>
        <p>Page Not Found</p>
      </div>
      <img src="/404-page-not-found.jpg" className="w-[25rem] h-[25rem]" />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
