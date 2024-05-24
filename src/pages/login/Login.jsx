import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);


    useEffect(() => {
        loadCaptchaEnginge(6);
    },[])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleValidateCaptch = () => {
        const captchValue = captchaRef.current.value;
        console.log(captchValue);
        if(validateCaptcha(captchValue)) {
            setDisabled(false);
        }
        else{
            setDisabled(true)
        }
    }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" ref={captchaRef} placeholder="type the captcha" name='captcha' className="input input-bordered" required />
          <button
          onClick={handleValidateCaptch}
           className="btn btn-xs mt-2 ">Tiny</button>
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} className="btn btn-primary" type='submit' value='Login' />
        </div>
      </form>
      <p><small>New Here? <Link to='/signup'>Create an acount</Link></small></p>
    </div>
  </div>
</div>
  );
};

export default Login;
