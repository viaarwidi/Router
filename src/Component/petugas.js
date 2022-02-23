import React from 'react'

class petugas extends React.Component {
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
                                        <th>NAMA</th>
                                        <th>USERNAME</th>
                                        <th>LEVEL</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Olivia</td>
                                        <td>admin</td>
                                        <td>123</td>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nabilla</td>
                                        <td>admin</td>
                                        <td>123</td>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Randistya</td>
                                        <td>petugas</td>
                                        <td>123</td>
                                        <td><button class="btn btn-success btn-sm">Ubah</button>
                                        |<button class="btn btn-danger btn-sm">Hapus</button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Nahda</td>
                                        <td>petugas</td>
                                        <td>123</td>
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

export default petugas;