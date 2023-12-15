import { Link } from 'react-router-dom';
import logo from '../assets/arxena-logo.png'
import upload from '../assets/new_upload.png'
import gpt from '../assets/powered_by_gpt4.png'
import twitter from '../assets/tw.png'
const Home = () => {
  return (
    <div className="p-20">
      {/* Navbar */}
      <div className="d-flex justify-content-end gap-4">
        <Link to='/signUp' className="myBtn text-xl bg-primary text-white">Sign Up</Link>
        <Link to='/signIn' className="myBtn text-xl border-primary text-primary">Login</Link>
      </div>
      <div className="imgAndInput">
        <div className="mainContainer centerDiv">
          <img className='logo' src={logo} alt="" />
          <div className="inputContainer">
            <input type="text" placeholder="🔍 Search any company's org chart" />
            <img src={upload} alt="" />
          </div>
          <img className='gpt' src={gpt} alt="" />
        </div>
      </div>
      {/* footer */}
      <div className="row align-items-center  justify-content-between">
        <div className="links col">
          <p>OrgGPT - Talent Identification Software for Ambitious Companies</p>
          <div className="">
            <a href="#">Pricing</a> <span>|</span>
            <a href="#">Pricing</a> <span>|</span>
            <a href="#">Pricing</a> <span>|</span>
            <a href="#">Pricing</a> <span>|</span>
            <a href="#">Pricing</a> <span>|</span>
          </div>
        </div>
        <div className="social gap-4 d-flex justify-content-start justify-content-md-end col">
          <img className='' src={twitter} alt="" />
          <img className='' src={twitter} alt="" />
          <img className='' src={twitter} alt="" />
          <img className='' src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;