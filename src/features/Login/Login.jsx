import "./Login.scss";
import LogoImage from "../../assets/7786193-Photoroom.png";
function Login() {
  return (
    <div className="page">
      <div className="group">
        <img src={LogoImage} alt="logo" />
        <p>Login to your account</p>
        <div className="container">
          <form>
            <label>email</label>
            <input type="text" />
            <label>password</label>
            <input type="password" />
            <button>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
