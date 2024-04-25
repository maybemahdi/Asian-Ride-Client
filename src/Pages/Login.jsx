
const Login = () => {
    return (
        <div className="bg-grey-lighter min-h-[80vh] flex flex-col">
      <Helmet>
        <title>Living-Link | Login</title>
      </Helmet>
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-4 rounded shadow-xl text-black w-full">
          <h1 data-aos="zoom-in" className="mb-8 text-3xl text-center">
            Log in
          </h1>
          <form data-aos="zoom-in-right" onSubmit={handleLogin}>
            <input
              type="email"
              ref={emailRef}
              className="block border bg-gray-100 border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              required
            />

            <div className="relative flex">
              <input
                type={showPassword ? "text" : "password"}
                className="block border bg-gray-100 border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer top-[21%]"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded border-0 cursor-pointer bg-black text-white font-semibold hover:bg-green-dark focus:outline-none my-1"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center gap-5 items-center my-5">
            <button
              data-aos="zoom-in-up"
              onClick={loginWithGoogle}
              className="inline-flex overflow-hidden cursor-pointer text-white bg-gray-900 rounded group"
            >
              <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                <FaGoogle size={20} />
              </span>
              <span className="pl-4 pr-5 py-2.5">Google</span>
            </button>
            <button
              data-aos="zoom-in-down"
              onClick={loginWithGithub}
              className="inline-flex overflow-hidden cursor-pointer text-white bg-gray-900 rounded group"
            >
              <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                <FaGithub size={20} />
              </span>
              <span className="pl-4 pr-5 py-2.5">Github</span>
            </button>
          </div>
        </div>
        <div data-aos="zoom-in" className="text-grey-dark mt-6">
          New to our Website?
          <Link
            to={"/register"}
            className="ml-1 font-bold text-blue-500 border-b border-blue text-blue"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Login;