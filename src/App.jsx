import InputField from "./components/InputField"
import SocialLogin from "./components/SocialLogin"

const App = () => {
  return (
    <div className="login-container">   
    <form action="#" className="login-form">
      <InputField type="email" placeholder="Email address" icon="mail"/>
      <InputField type="password" placeholder="Password" icon="key"/>
      
      <a href="#" className="forgot-pass-link">Forgot Password?</a>

      <button className="login-button">Log In</button>
    </form>

    <p className="separator"><span>or</span></p>

    <h2 className="form-title">Log in with</h2>
    <SocialLogin />

    <p className="signup-prompt">Don&apos;t have an account yet? <a href="#">Sign up now</a></p>
  </div>
  )
}

export default App
