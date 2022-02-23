import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Beranda from './beranda';
import Admin from './admin';
import Petugas from './petugas';
import Siswa from './siswa';
import SPP from './spp';
import Kelas from './kelas';
import Transaksi from './transaksi';



const utama = () => (
    <Routes>
        <Route exact path = "/" element = {<Beranda/>} />
        <Route path = "/admin" element = {<Admin/>} />
        <Route path = "/petugas" element = {<Petugas/>} />
        <Route path = "/siswa" element = {<Siswa/>} />
        <Route path = "/spp" element = {<SPP/>} />
        <Route path = "/kelas" element = {<Kelas/>} />
        <Route path = "/transaksi" element = {<Transaksi/>} />
    </Routes>
)

export default utama;