"use strict";

var Perjalanan = {};

$(function() {
    var interval = false;
    var entity = new Proxy({}, {
        set: function(obj, prop, val) {
            obj[prop] = val;
            if (prop === 'items') {
                Perjalanan.items.render();
            }

            return true;
        }
    });

    // var perjalanans = [];
    Perjalanan = {
        entity,
        _listeningPerjalanan: function() {
            mApp.firestore.db.collection('travels').onSnapshot(function(snapshot) {
                var items = [];
                snapshot.forEach(function(doc) {
                    console.log(doc.id);
                    var data = doc.data();
                    data.id = doc.id;
                    // items.push(doc.data());
                    items.push(data);
                });

                Perjalanan.entity.items = items;
            })
        },
        _tablePerjalananBehavior: function() {
            $("#tableperjalanan #checkall").click(function () {
                if ($("#tableperjalanan #checkall").is(':checked')) {
                    $("#tableperjalanan input[type=checkbox]").each(function () {
                        $(this).prop("checked", true);
                    });
        
                } else {
                    $("#tableperjalanan input[type=checkbox]").each(function () {
                        $(this).prop("checked", false);
                    });
                }
            });
            
            $("[data-toggle=tooltip]").tooltip();

            $('body').on('click', '.addPerjalanan', function(e) {
                e.preventDefault();
                console.log('add perjalanan');
                var $modal = $('#add-edit');
                $modal.find('.control').val('');
                $modal.attr('mode', 'add');
                $modal.attr('obj-id', '');
                $modal.modal('toggle');
            });

            $('body').on('click', '.editPerjalanan', function(e) {
                e.preventDefault();
                console.log('edit perjalanan');
                var objOri = $(this).closest('tr').attr('data-obj');
                objOri = JSON.parse(objOri);
                var obj = Object.entries(objOri).map(([key, value]) => ({key, value}));

                var $modal = $('#add-edit');

                obj.forEach(function(input) {
                    var $element = $modal.find(`.input-${input.key}`);
                    $element.val(input.value);
                });
                $modal.attr('mode', 'edit');
                $modal.attr('obj-id', objOri.id);

                $modal.modal('toggle');
            });

            $('#add-edit').find('.save-process').on('click', function() {
                console.log('simpan process');
                // console.log($(this));
                var objId = $(this).closest('#add-edit').attr('obj-id');
                // console.log(objId);

                if (objId !== '') {
                    // edit
                    var objParam = {};
                    $('.control').each(function() {
                        console.log($(this));
                        // console.log($(this).val());
                        var classes = $(this).attr('class').split(' ');
                        var inputClass = "";
                        console.log(classes);
                        for (var i = 0; i < classes.length; i++) {
                            // var matches = /^input\-(.+)/.exec(classes[i]);
                            var matches = classes[i].split('-');
                            if(matches[0] == "input") {
                                inputClass = matches[1];
                                break;
                            }
                        }
                        console.log(inputClass);
                        objParam[inputClass] = $(this).val();
                        // mApp.firestore.db.collection('travels').doc(objId)
                        //     .update({

                        //     });

                    });
                    console.log(objParam);
                    mApp.firestore.db.collection('travels').doc(objId)
                        .update(objParam);

                    var $modal = $('#add-edit');
                    $modal.modal('toggle');
                } else {
                    // add
                }
            });
        },
        items: {
            render() {
                if (Perjalanan.entity.items !== undefined) {
                    var perjalanans = Perjalanan.entity.items;
                    $('.perjalanan-list').empty();
                    perjalanans.forEach(function(perjalanan) {
                        // console.log(perjalanan);
                        Perjalanan.items.mappingPerjalananList(perjalanan);
                    });
                }
            },
            mappingPerjalananList: function(perjalanan) {
                console.log(perjalanan);
                var $container = $('.perjalanan-list');

                var html = 
                    `<tr data-obj='${JSON.stringify(perjalanan)}'>
                        <td><input type="checkbox" class="checkthis" /></td>
                        <td>${perjalanan.title}</td>
                        <td>${perjalanan.driver}</td>
                        <td>${perjalanan.phone}</td>
                        <td>${perjalanan.email}</td>
                        <td>${perjalanan.date}</td>
                        <td>${perjalanan.time}</td>
                        <td><button class="btn btn-primary editPerjalanan" data-title="Edit">
                            <span>Edit</span>
                        </button></td>
                        <td><button class="btn btn-danger deletePerjalanan" data-title="Delete">
                            <span>Delete</span>
                        </button></td>
                    </tr>`;

                var $toAppend = $(html);
                $container.append($toAppend);
            },
        },
        init: function() {
            this._listeningPerjalanan();
            this._tablePerjalananBehavior();
        }
    };

    Perjalanan.init();
});


$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    // $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    // });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});

 {}