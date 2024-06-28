'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
function Navbar() {
  const pathname = usePathname();
  const data = useSession();
  console.log(data);
  return (
    <nav className={`flex justify-between items-center py-5 px-16`}>
      <h1 className="text-2xl flex items-center">
        Canberyy<span className="text-primary text-5xl">.</span>
      </h1>
      <div className="flex gap-9 text-secondary items-center">
        <li>
          <Link
            href={'/'}
            className={`${
              pathname === '/' ? 'text-primary' : 'text-secondary'
            }`}
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            href={'/price'}
            className={`${
              pathname === '/price' ? 'text-primary' : 'text-secondary'
            }`}
          >
            Price
          </Link>
        </li>
        <li>
          <Link
            href={'/deals'}
            className={`${
              pathname === '/deals' ? 'text-primary' : 'text-secondary'
            }`}
          >
            Deals
          </Link>
        </li>
        <li>
          <Link
            href={'/community'}
            className={`${
              pathname === '/community' ? 'text-primary' : 'text-secondary'
            }`}
          >
            Community
          </Link>
        </li>

        <button
          onClick={() => signIn()}
          className="border-2 cursor-pointer border-primary rounded-lg p-4 text-primary hover:bg-primary hover:text-white transition-all duration-200"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
