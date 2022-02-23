import React from 'react'

class kelas extends React.Component {
    render() {
        return(
            <div>
                <div class="main-panel">
            <div class="content-wrapper">
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                            <h4 class="card-title">Data Kelas</h4>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                  
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>NAMA KELAS</th>
                                        <th>KOMPETENSI KEAHLIAN</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Olivia</td>
                                        <td>Rekayasa Perangkat Lunak</td>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td> Nabilla</td>
                                        <td>Rekayasa Perangkat Lunak</td>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Randistya</td>
                                        <td>Teknik Komputer Jaringan</td>
                                       
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Nahda</td>
                                        <td>Teknik Komputer Jaringan</td>
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

export default kelas;