import { Link } from "react-router-dom";
import logo from "../assets/arxena-logo.png";
import profile from '../assets/mannan_pacha_dp.webp'
import quote from '../assets/quote.png'
import quote1 from '../assets/quote1.png'

const SignUp = () => {
  return (
    <div className="row ">
      <div className="col-12 col-md-8 p-4">
        <Link to='/'><img className="sLogo" src={logo} alt="" /></Link>
        <div className="inputCard text-center ">
          <p className="formTxt">Get started with 10 free org-chart credits.</p>
          <p className="formTxt mb-4">No credit card is needed.</p>

          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon1">
              💵 +2
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Business Email"
            />
          </div>
          <div className="mb-4 ">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Large select example">
            <option selected>I work for a</option>
            <option value="1">Front End</option>
            <option value="2">Back End</option>
            <option value="3">Full Stack</option>
          </select>
          <button className="myBtn mb-3 text-xl bg-primary text-white">
            Create account
          </button>
          <p className="mb-3 bottomText">Already registered? <Link to='/signIn' className="customLink">Log in instead</Link> </p>
          <p className="bottomText">
            Account lock: We discourage licence sharing. Your account will be
            accessible from this device only
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 leftBg">
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

export default SignUp;
