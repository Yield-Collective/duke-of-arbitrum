import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center p-4">
      {/* External link */}
      <a href="https://x.com/dukeofarbitrum" target="_blank" rel="noopener noreferrer" className="text-white text-lg flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
        X
      </a>
    </nav>
  );
};

export default Navbar;

