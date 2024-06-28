'use client';
import { getToken } from 'next-auth/jwt';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const { push } = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: '/',
      });
      if (!res?.error) {
        push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen border">
        <div className="border shadow-2xl w-[600px] rounded-lg p-5">
          <form onSubmit={handleLogin} className="p-10 flex flex-col gap-4">
            <h1 className="text-center text-5xl mb-6">Login</h1>

            <label htmlFor="email">Email : </label>
            <div className="relative w-full">
              <img
                src="/icon/user.svg"
                alt="User Icon"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="w-full pl-10 border border-gray-300 rounded-full py-2 text-gray-900 placeholder-gray-400 focus:outline-none  focus:ring-indigo-500 focus:border-primary"
                placeholder="Email"
              />
            </div>

            <label htmlFor="password">Password : </label>

            <div className="relative w-full">
              <img
                src="/icon/user.svg"
                alt="User Icon"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="w-full pl-10 border border-gray-300 rounded-full py-2 text-gray-900 placeholder-gray-400 focus:outline-none  focus:ring-indigo-500 focus:border-primary"
                placeholder="password"
              />
            </div>

            <button
              type="submit"
              className="bg-primary rounded-full text-white p-2 mt-5"
            >
              Sign In
            </button>
            <hr className="w-full" />
            <button
              type="submit"
              className="bg-primary rounded-full text-white p-2"
            >
              Sign In With Google
            </button>
          </form>
          <p className="text-secondary text-xs">
            do you have an account ? Sign Up{' '}
            <Link href="/register" className="text-tertiary">
              Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
function push(arg0: string) {
  throw new Error('Function not implemented.');
}
