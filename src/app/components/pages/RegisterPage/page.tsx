'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function RegisterPage() {
  const { push } = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
        fullname: e.target.Fullname.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 200) {
      e.target.reset();
      push('/');
    } else {
      console.log('ada error');
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen border">
        <div className="border shadow-2xl w-[600px] rounded-lg p-5">
          <form
            action=""
            className="p-10 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            {' '}
            <h1 className="text-center text-5xl mb-6">Register</h1>
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
            <label htmlFor="Fullname">Fullname : </label>
            <div className="relative w-full">
              <img
                src="/icon/user.svg"
                alt="User Icon"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              />
              <input
                type="Fullname"
                name="Fullname"
                id="Fullname"
                className="w-full pl-10 border border-gray-300 rounded-full py-2 text-gray-900 placeholder-gray-400 focus:outline-none  focus:ring-indigo-500 focus:border-primary"
                placeholder="Fullname"
              />
            </div>
            <label htmlFor="password">password : </label>
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
              Sign Up
            </button>
            {/* <hr className="w-full" />
            <button
              type="submit"
              className="bg-primary rounded-full text-white p-2"
            >
              Sign Up With Google
            </button> */}
          </form>
          <p className="text-secondary text-xs">
            do you have an account ? Sign In{' '}
            <Link href="/login" className="text-tertiary">
              Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
