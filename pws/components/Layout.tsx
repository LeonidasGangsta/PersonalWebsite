import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FireIcon } from '@heroicons/react/solid';
import { APP_TITTLE, NavigationItems } from '../constants/constants';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const page = NavigationItems.find((navigationPage) => navigationPage.Route === router.pathname)

  return (
    <html lang="es">
      <Head>
        <title>
          {`${APP_TITTLE} ${page ? `- ${page?.Name}` : ''}`}
        </title>
        <meta name="description" content="This is a personal website for personal purposes" />
      </Head>
      <header className="w-full bg-white shadow-md text-gray-600 flex justify-center flex-col md:flex-row md:justify-between items-center p-4 font-semibold">
        <Link href="/">
          <button type="button" aria-label="Main page" className="focus:outline-none">
            <FireIcon className="w-10 h-10 md:w-12 md:h-12 mr-2 text-red-700 cursor-pointer" />
          </button>
        </Link>
        <div id="header-right" className="hover:text-red-800 cursor-pointer">
          {
            NavigationItems.map((NavItem) => (
              <Link href={NavItem.Route} key={NavItem.Name}>
                <span>
                  {NavItem.Name}
                </span>
              </Link>
            ))
          }
        </div>
      </header>
      <main className="container mx-auto my-4">
        {children}
      </main>
    </html>
  )
};

export default Layout;
