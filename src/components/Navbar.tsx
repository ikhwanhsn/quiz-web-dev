import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar lg:px-12 px-5 shadow-md fixed top-0 z-50 bg-white text-black">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold">
          Quiz Web Dev
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
