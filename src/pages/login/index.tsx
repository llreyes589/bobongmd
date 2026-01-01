const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center b relative overflow-hidden">
      {/* Decorative Blobs */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000" /> */}

      <div className="z-10 w-full max-w-md p-8 bg-white bg-opacity-80 rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center">
        <h1 className="text-4xl font-extrabold  bg-clip-text text-primary-main mb-4">
          Welcome Back!
        </h1>
        <p className="text-secondary-dark mb-8 text-center">
          Sign in to your account to continue
        </p>
        <form className="w-full flex flex-col gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-dark"
              placeholder="email@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-dark"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-secondary-dark text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 flex flex-col items-center">
          {/* <a href="#" className="text-sm text-purple-500 hover:underline">
            Forgot password?
          </a> */}
          <span className="text-sm text-gray-500 mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
