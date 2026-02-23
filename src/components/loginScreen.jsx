import Logo from "./logo";

function LoginScreen() {
  return (
    <section>
      <div>
        <Logo />
        <h3>Login Your Account</h3>
      </div>
      <div>
        <div>
          <label htmlFor="email">Email or phone number</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button>Continue</button>
          <p>Or continue with</p>
        </div>
        <div>
          <button>Continue with Google</button>
          <button>Continue with Facebook</button>
        </div>
      </div>
    </section>
  );
}

export default LoginScreen;
