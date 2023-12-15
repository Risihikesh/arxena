import { Link } from "react-router-dom";
import logo from "../assets/arxena-logo.png";
import profile from '../assets/mannan_pacha_dp.webp'
import quote from '../assets/quote.png'
import quote1 from '../assets/quote1.png'

const SignIn = () => {
  return (
    <div className="row  ">
      <div className="col-12 col-md-8 p-4">
        <Link to='/'><img className="sLogo" src={logo} alt="" /></Link>
        <div className="inputCard text-center ">
          <p className="formTxt mb-4">Welcome back!</p>

          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button className="myBtn mb-3 text-xl bg-primary text-white">
            Login In
          </button>
          <p className="mb-3 bottomText">Forgot your password? Reset it here</p>
          <p className="bottomText">
          Need an account? <Link to='/signUp' className="customLink">Sign up for free</Link>
          </p>
        </div>
      </div>
      <div className=" col-12 col-md-4 leftBg h-screen">
        <div className="mt-4 mb-4 pb-4"></div>
        <img className="rounded-circle profile" src={profile} alt="" />
        <div className="quote p-4">
          <img className="mb-4" src={quote} alt="" />
          <p className="fst-italic mb-4 pb-4">Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.</p>
          <p><span>Mannan Pacha</span> | Manager - Ernst & Young</p>
          <img className="quote1" src={quote1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;