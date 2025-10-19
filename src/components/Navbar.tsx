import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-background bg-opacity-70 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-lg border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
          LBB
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-lg text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-lg text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-lg text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-lg text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-card text-foreground border-border">
              <div className="flex flex-col space-y-4 p-4">
                <a href="#home" className="text-xl hover:text-primary transition-colors">Home</a>
                <a href="#services" className="text-xl hover:text-primary transition-colors">Services</a>
                <a href="#about" className="text-xl hover:text-primary transition-colors">About</a>
                <a href="#contact" className="text-xl hover:text-primary transition-colors">Contact</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;