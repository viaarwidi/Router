import React from 'react'

class siswa extends React.Component {
    render() {
        return(
            <div>
               <div class="main-panel">
            <div class="content-wrapper">
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                            <h4 class="card-title">Data Petugas</h4>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th>NO</th>
                                    <th>NISN</th>
                                    <th>NIS</th>
                                    <th>NAMA SISWA</th>
                                    <th>ID KELAS</th>
                                    <th>ALAMAT</th>
                                    <th>NO_TELP</th>
                                    <th>ID SPP</th>
                                    <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th>1</th>
                                    <th>12345</th>
                                    <th>345</th>
                                    <th>Oivi</th>
                                    <th>1</th>
                                    <th>Jl. Sanan</th>
                                    <th>08123</th>
                                    <th>1</th>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                    <th>2</th>
                                    <th>67890</th>
                                    <th>567</th>
                                    <th>Nabilla</th>
                                    <th>2</th>
                                    <th>Jl. Sulfat</th>
                                    <th>08234</th>
                                    <th>2</th>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                    <th>3</th>
                                    <th>45321</th>
                                    <th>284</th>
                                    <th>Randistya</th>
                                    <th>4</th>
                                    <th>Jl. Sukori</th>
                                    <th>08975</th>
                                    <th>3</th>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                    <th>4</th>
                                    <th>26473</th>
                                    <th>928</th>
                                    <th>Nahda</th>
                                    <th>4</th>
                                    <th>Jl. Alsi</th>
                                    <th>09235</th>
                                    <th>4</th>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                </tbody>
                                </table>
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

export default siswa;