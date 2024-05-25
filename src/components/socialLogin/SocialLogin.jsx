import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="p-8">
        <div className=" divider"></div>
      <div>
        <button className="btn">
          <FaGoogle className="mr-2" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
