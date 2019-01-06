<?php include('templates/header.php') ?>
<?php include('templates/sidebar.php') ?>

<div id="content" class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-justify"></i>
                <!-- <span>Toggle Sidebar</span> -->
            </button>

            <button type="button" class="btn btn-success addPerjalanan">
                <i class="fa fa-plus"></i>
            </button>
        </div>
    </nav>

    <div class="row">
        <div class="col-md-12">
            <h4>Daftar Perjalanan</h4>
            <div class="table-responsive">
                <table id="tableperjalanan" class="table table-bordred table-striped">
                    <thead>                   
                        <th><input type="checkbox" id="checkall" /></th>
                        <th>Perjalanan</th>
                        <th>Sopir</th>
                        <th>Telepon</th>
                        <th>Email</th>
                        <th>Tanggal</th>
                        <th>Jam</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody class="perjalanan-list">
                        <!-- <tr>
                            <td><input type="checkbox" class="checkthis" /></td>
                            <td>Perjalanan 1</td>
                            <td>Sopir 1</td>
                            <td>Telepon 1</td>
                            <td>Email 1</td>
                            <td>Tanggal</td>
                            <td>Jam 1</td>
                            <td><p data-placement="top" data-toggle="tooltip" title="Edit">
                                <button class="btn btn-primary" type="button" data-title="Edit" data-toggle="modal" data-target="#edit" >
                                    <span>Edit</span>
                                </button>
                            </p></td>
                            <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger" type="button" data-title="Delete" data-toggle="modal" data-target="#delete" >
                                <span>Delete</span>
                            </button></p></td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
</div>

<div class="modal fade" id="add-edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true" mode="" obj-id="">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h4 class="modal-title custom_align" id="Heading">Menambah Perjalanan</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <input class="form-control control input-title" type="text" placeholder="Perjalanan">
                </div>
                <div class="form-group">
                    <input class="form-control control input-driver" type="text" placeholder="Sopir">
                </div>
                <div class="form-group">
                    <input class="form-control control input-phone" type="text" placeholder="Telepon">
                </div>
                <div class="form-group">
                    <input class="form-control control input-email" type="text" placeholder="Email">
                </div>
                <div class="form-group">
                    <input class="form-control control input-date" type="text" placeholder="Tanggal">
                </div>
                <div class="form-group">
                    <input class="form-control control input-time" type="text" placeholder="Jam">
                </div>
                <div class="form-group">
                    <textarea rows="2" class="form-control control input-note" placeholder="Note">note 1</textarea>
                </div>
            </div>
            <div class="modal-footer ">
                <button type="button" class="btn btn-warning btn-lg save-process" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Simpan</button>
            </div>
        </div>
        <!-- /.modal-content --> 
    </div>
    <!-- /.modal-dialog --> 
</div>

<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h4 class="modal-title custom_align" id="Heading">Edit Your Detail</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                <input class="form-control " type="text" placeholder="Mohsin">
                </div>
                <div class="form-group">

                <input class="form-control " type="text" placeholder="Irshad">
                </div>
                <div class="form-group">
                <textarea rows="2" class="form-control" placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"></textarea>


                </div>
            </div>
            <div class="modal-footer ">
                <button type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Update</button>
            </div>
        </div>
        <!-- /.modal-content --> 
    </div>
    <!-- /.modal-dialog --> 
</div>
    
<div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                <h4 class="modal-title custom_align" id="Heading">Delete this entry</h4>
            </div>
            <div class="modal-body">
                <div class="alert alert-danger"><span class="glyphicon glyphicon-warning-sign"></span> Are you sure you want to delete this Record?</div>
            </div>
            <div class="modal-footer ">
                <button type="button" class="btn btn-success" ><span class="glyphicon glyphicon-ok-sign"></span> Yes</button>
                <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> No</button>
            </div>
        </div>
        <!-- /.modal-content --> 
    </div>
<!-- /.modal-dialog --> 
</div>

<?php include('templates/footer.php') ?>