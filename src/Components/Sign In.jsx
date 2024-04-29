import { useState, useEffect } from 'react';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (email.length > 0 && !validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
    } else if (password.length > 0 && password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
    } else {
      setErrorMessage('');
    }
  }, [email, password]);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      // Perform sign-in logic here
      console.log('Sign in');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      // Perform sign-up logic here
      console.log('Sign up');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-[60px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md w-2vw">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 mb-14 mt-10 sm:mb-16">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"/>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"/>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-red-600">{errorMessage}</div>
              <div className="text-sm">
                <a href="#" className="font-medium text-yellow-500 hover:text-yellow-600">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSignIn}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Don't have an account yet?</p>
            <a href="#" className="font-medium text-yellow-500 hover:text-yellow-600" onClick={handleSignUp}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
