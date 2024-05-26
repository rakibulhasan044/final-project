import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user.email,
        name: res.user.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
      })
      navigate('/')
    });
  };

  return (
    <div className="p-8">
      <div className=" divider"></div>
      <div>
        <button className="btn" onClick={handleGoogleSignIn}>
          <FaGoogle className="mr-2" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
