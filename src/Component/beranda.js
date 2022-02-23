import React from 'react'

class beranda extends React.Component {
    render() {
        return(
            <div class="main-panel">
            <div class="content-wrapper">
                <div class="row">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title"align="center">Alohamora! </h4>
                            <p class="card-description"align="center">Selamat Datang di Website Pembyaran SPP </p>
                            <div class="row">
                            <div class="col-md-4">
                                    <div class="card text-white bg-dark mb-3">
                                    <div class="card-body"align="center">
                                        <h4 class="mb-4">Siswa</h4>
                                        <a href="/siswa" class="btn btn-outline-light">Lihat Data</a>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-white bg-dark mb-3">
                                    <div class="card-body"align="center">
                                        <h4 class="mb-4">Kelas</h4>
                                        <a href="/kelas" class="btn btn-outline-light">Lihat Data</a>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-white bg-dark mb-3">
                                    <div class="card-body"align="center">
                                        <h4 class="mb-4">Transaksi</h4>
                                        <a href="/transaksi" class="btn btn-outline-light">Lakukan Trasaksi</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
    

export default beranda;