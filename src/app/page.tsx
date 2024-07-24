// app/page.tsx

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import GmailSvg from '../../public/gmail.svg';
import OutlookSvg from '../../public/outlook.svg';
import Dashboard from './dashboard/page';

const Home = () => {
  return (
    // <div className="w-full h-screen flex gap-3 bg-white">
    //   <div className="bg-blue-600 h-full p-12 flex justify-center items-center flex-col">
    //     <p className="text-white font-bold text-5xl mb-3">The Super App for</p>
    //     <p className="text-white font-bold text-5xl">SuperHuman</p>
    //   </div>
    //   <div className="flex-1 flex justify-center items-center flex-col">
    //     <h4 className="text-blue-600 font-bold text-2xl mb-7">Login</h4>
    //     <button
    //       onClick={() => signIn('google')}
    //       className="p-2 px-6 text-white mb-2 bg-white border border-black rounded-2xl flex justify-center items-center gap-4"
    //     >
    //       <Image
    //         src={GmailSvg}
    //         alt="Gmail Logo"
    //         width={34}
    //         height={34}
    //         priority
    //       />
    //       <p className="text-black font-bold">Login with Gmail</p>
    //     </button>
    //     <button
    //       onClick={() => signIn('email')}
    //       className="p-2 px-6 text-white mb-2 bg-white border border-black rounded-2xl flex justify-center items-center gap-4"
    //     >
    //       <Image
    //         src={OutlookSvg}
    //         alt="Outlook Logo"
    //         width={34}
    //         height={34}
    //         priority
    //       />
    //       <p className="text-black font-bold">Login with Outlook</p>
    //     </button>
    //   </div>
    // </div>
    <Dashboard/>
  );
};

export default Home;
