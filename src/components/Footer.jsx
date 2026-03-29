import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="py-10 border-t border-zinc-200 text-center text-sm text-zinc-600"
    >
      © {year} The-Aayush Developer. All rights reserved.
    </footer>
  );
};

export default Footer;