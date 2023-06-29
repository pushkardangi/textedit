const Navbar = () => {
  return (
    <nav className="bg-[#151718] p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-medium text-white">Textedit</span>
        </div>
        <div className="flex items-center">
          <button type="button" className="text-base font-semibold px-3 py-1 text-gray-800 bg-gray-400 hover:bg-gray-200 rounded">
              Light
          </button>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
