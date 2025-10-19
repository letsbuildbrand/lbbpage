import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors">
          Your Agency Name
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="#home" className="text-lg text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="#services" className="text-lg text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link to="#about" className="text-lg text-gray-300 hover:text-white transition-colors">About</Link>
          <Link to="#contact" className="text-lg text-gray-300 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-gray-900 text-white border-gray-700">
              <div className="flex flex-col space-y-4 p-4">
                <Link to="#home" className="text-xl hover:text-yellow-500 transition-colors">Home</Link>
                <Link to="#services" className="text-xl hover:text-yellow-500 transition-colors">Services</Link>
                <Link to="#about" className="text-xl hover:text-yellow-500 transition-colors">About</Link>
                <Link to="#contact" className="text-xl hover:text-yellow-500 transition-colors">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;