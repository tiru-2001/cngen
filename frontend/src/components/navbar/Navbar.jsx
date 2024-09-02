// import React from 'react';
// import { AiFillHome } from 'react-icons/ai';
// import { FaCalendarAlt } from 'react-icons/fa';
// import { MdBarChart } from 'react-icons/md';
// import { IoPerson } from 'react-icons/io5';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.scss';

// const Navbar = () => {
//   const location = useLocation();

//   const userId = localStorage.getItem('userId');

//   return (
//     <section className="nav-section">
//       <Link
//         to="/"
//         className={`nav-link ${
//           location.pathname === '/home' ? 'active-link' : ''
//         }`}
//       >
//         <AiFillHome />
//       </Link>
//       <Link
//         to="schedule"
//         className={`nav-link ${
//           location.pathname === '/schedule' ? 'active-link' : ''
//         }`}
//       >
//         <FaCalendarAlt />
//       </Link>
//       <Link
//         to="performance"
//         className={`nav-link ${
//           location.pathname === '/performance' ? 'active-link' : ''
//         }`}
//       >
//         <MdBarChart />
//       </Link>
//       <Link
//         to={`private/profile`}
//         className={`nav-link ${
//           location.pathname === `/profile/${userId ? userId : ''}`
//             ? 'active-link'
//             : ''
//         }`}
//       >
//         <IoPerson />
//       </Link>
//     </section>
//   );
// };

// export default Navbar;

import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdBarChart } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const userId = localStorage.getItem('userId');

  return (
    <section className="nav-section">
      <Link
        to="/"
        className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}
      >
        <AiFillHome />
      </Link>
      <Link
        to="/schedule"
        className={`nav-link ${
          location.pathname === '/schedule' ? 'active-link' : ''
        }`}
      >
        <FaCalendarAlt />
      </Link>
      <Link
        to="/performance"
        className={`nav-link ${
          location.pathname === '/performance' ? 'active-link' : ''
        }`}
      >
        <MdBarChart />
      </Link>
      <Link
        to="/profile"
        className={`nav-link ${
          location.pathname === `/profile` ? 'active-link' : ''
        }`}
      >
        <IoPerson />
      </Link>
    </section>
  );
};

export default Navbar;
