import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black border-t border-t-white text-white flex-col flex gap-8 items-center py-20 ">
      <Image src={"/footer-logo.png"} alt="" width={600} height={60} />
      <div className="flex flex-row gap-6 font-semibold">
        <li className="flex">ABOUT</li>
        <li className="flex">FORMAT</li>
        <li className="flex">PLAYERS</li>
        <li className="flex">TEAMS</li>
        <li className="flex">PRIVACY POLICY</li>
      </div>
      <div>© 2024, AOA. All Rights Reserved.</div>
    </div>
  );
}

export default Footer