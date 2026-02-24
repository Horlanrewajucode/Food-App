import { Link } from "react-router-dom";
import Logo from "./logo";

function SignUpScreen() {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center">
        {/* <span className="hidden md:block">
          <Logo />
        </span> */}
        <h3 className="md:text-3xl text-2xl font-mono">Create Your Account</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[18px] text-[rgba(59,71,88,1)]"
            >
              Email
            </label>
            <div className="flex items-center justify-center relative">
              <img
                src="mail.png"
                alt="mail-icon"
                className="absolute left-2 px-1"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="name@gmail.com"
                className="border border-stone-400 rounded-md h-12 px-10 w-full placeholder:font-semibold placeholder:text-[17px] outline-stone-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[18px]  text-[rgba(59,71,88,1)]"
            >
              Phone number
            </label>
            <div className="flex items-center justify-center relative">
              <img
                src="phone-number.png"
                alt="phone-number"
                className="absolute left-2 px-1"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="09011838106"
                className="border border-stone-400 rounded-md h-12 px-10 w-full placeholder:font-semibold placeholder:text-[17px] outline-stone-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-[18px]  text-[rgba(59,71,88,1)]"
            >
              Password
            </label>
            <div className="flex items-center justify-center relative">
              <img
                src="/lock.png"
                alt="lock-icon"
                className="absolute left-2 px-1"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="QWE123#"
                className="border border-stone-400 rounded-md h-12 px-9 w-full placeholder:font-semibold placeholder:text-[17px] outline-stone-400"
              />
              <button className="flex items-center cursor-pointer">
                <img
                  src="/visibility.png"
                  alt="visiblity-icon"
                  className="absolute right-2"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-[18px]  text-[rgba(59,71,88,1)]"
            >
              Confirm Password
            </label>
            <div className="flex items-center justify-center relative">
              <img
                src="/lock.png"
                alt="lock-icon"
                className="absolute left-2 px-1"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="QWE123#"
                className="border border-stone-400 rounded-md h-12 px-9 w-full placeholder:font-semibold placeholder:text-[17px] outline-stone-400"
              />
              <button className="flex items-center cursor-pointer">
                <img
                  src="/visibility.png"
                  alt="visiblity-icon"
                  className="absolute right-2"
                />
              </button>
            </div>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" className="cursor-pointer" />
            <label className="font-mono text-[12px]">
              I agree to the{" "}
              <span className="text-[rgba(30,136,229,1)]">
                Terms & Condition
              </span>{" "}
              and{" "}
              <span className="text-[rgba(30,136,229,1)]">Privacy Policy</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <button className="bg-[rgba(255,122,24,1)] w-full rounded-md text-white py-3 cursor-pointer text-[18px] font-semibold font-serif">
            Continue
          </button>
          <p>Or continue with</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <button className="flex items-center gap-3 bg-white border border-stone-300 text-stone-600 w-full justify-center py-3 rounded-md cursor-pointer">
            <img src="/google.png" alt="google-icon" /> Continue with Google
          </button>
          <button className="flex items-center gap-2 bg-white border border-stone-300 text-stone-600 w-full justify-center py-1  cursor-pointer rounded-md">
            <img src="/facebook.png" alt="facebook-icon" /> Continue with
            Facebook
          </button>
        </div>
        <p className="text-[12px] text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-[rgba(30,136,229,1)]">
            Login
          </Link>{" "}
        </p>
      </div>
    </section>
  );
}

export default SignUpScreen;
