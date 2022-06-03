import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
   return (
     <div>
        <div className="nav">
           <Link to="/students">Check</Link>
        </div>
     </div>
   );
};

export default Header;