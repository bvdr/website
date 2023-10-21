import Hamburger from '@/components/hamburger'
import Link from 'next/link'

const Navigation = () => {
  return (
      <nav className="flex w-full p-5 fixed bg-black text-white justify-between items-center z-20">
        <Link href="/">
              Home
        </Link>
        <Hamburger/>
      </nav>
  );
};

export default Navigation;