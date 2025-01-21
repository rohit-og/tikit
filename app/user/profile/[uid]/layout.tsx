import Sidebar from "@/components/UserComponents/Sidebar";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
}
