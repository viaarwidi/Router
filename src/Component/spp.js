import React from 'react'

class spp extends React.Component {
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
                                        <th>TAHUN</th>
                                        <th>NOMINAL</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2021</td>
                                        <td>Rp700.000</td>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td> 2020</td>
                                        <td>Rp600.000</td>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>2021</td>
                                        <td>Rp700.000</td>
                                       
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>2020</td>
                                        <td>Rp600.000</td>
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

export default spp;