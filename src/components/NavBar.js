import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map(link => <a key={link} href={`#${link}`}>{link}</a>)}
  </nav>;

  



  //create element for each link 
}

export default NavBar;




// . map creates a copy of the orginal array 
// .forEach doesnt return anything 
// .map returns a new array altered for our purposes 