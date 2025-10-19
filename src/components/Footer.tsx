import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-background bg-opacity-70 backdrop-blur-sm py-8 px-4 sm:px-8 border-t border-border text-center text-muted-foreground">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Let's Build Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;