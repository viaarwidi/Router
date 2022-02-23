import React from 'react';
import Utama from'./Component/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">Pembayaran SPP</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link" aria-current="page">Beranda</Link>
            </li>
          
              <li class="nav-item">
              <Link to="/admin" className="nav-link">Admin</Link>
            </li>
            <li class="nav-item">
              <Link to="/petugas" className="nav-link">Petugas</Link>
            </li>
             <li class="nav-item">
              <Link to="/siswa" className="nav-link">Siswa</Link>
            </li>
            <li class="nav-item">
              <Link to="/kelas" className="nav-link">Kelas</Link>
            </li><li class="nav-item">
              <Link to="/spp" className="nav-link">SPP</Link>
            </li>
            <li class="nav-item">
              <Link to="/transaksi" className="nav-link">Transaksi</Link>
            </li>
            <form class="d-flex mx-5" align="right">
              <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form >
          </ul>
        </div>
      </div>
    </nav>
    <p><Utama /></p>
    </div>
      // <div> <hr />
      // <Link to="/">Beranda</Link> | 
      // <Link to="/admin">Admin</Link> |
      // <Link to="/petugas">Petugas</Link> |
      // <Link to="/siswa">Siswa</Link> |
      // <Link to="/spp">SPP</Link> |
      // <Link to="/kelas">Kelas</Link> |
      // <Link to="/transaksi">Transaksi</Link> 
      // <hr />
      // <p><Utama /></p>
      // </div>
    );
  }
}

export default App;