import React from 'react';
 import { Link } from "react-router-dom";

 const Navbar = () => {
     return (
         <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <Link className="navbar-brand" href="#">Navbar</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                         <li className="nav-item active">
                             <Link className="nav-link" href="/">Beranda <span className="sr-only">(current)</span></Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-item active" href="/admin">Admin</Link>
                         </li>
                         <li className="nav-item dropdown">
                             <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 List Data
                             </Link>
                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <Link className="dropdown-item" href="/petugas">Petugas</Link>
                                 <Link className="dropdown-item" href="/siswa"> Siswa</Link>
                                 <Link className="dropdown-item" href="/kelas"> Kelas</Link>
                                 <Link className="dropdown-item" href="/spp"> SPP</Link>
                                 <div className="dropdown-divider"></div>
                             </div>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-item active" href="/transaksi">Transaksi</Link>
                         </li>
                     </ul>
                     <form className="form-inline my-2 my-lg-0">
                         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                     </form>
                 </div>
             </nav>
         </div>
     )
 }

 export default Navbar;