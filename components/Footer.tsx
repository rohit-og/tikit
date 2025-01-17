import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t mt-4 px-6 absolute">
      <div className="flex justify-between items-center mx-auto max-w-7xl py-12">
        <Link href="/">
          <h1 className="text-2xl font-semibold">TiKit</h1>
        </Link>

        <p>&copy; 2025 All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
