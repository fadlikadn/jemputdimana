"use strict";

var Perjalanan = {};

$(function() {
    var interval = false;
    var entity = new Proxy({}, {
        set: function(obj, prop, val) {
            obj[prop] = val;
            // console.log(prop);
            if (prop === 'items') {
                Perjalanan.items.render();
            }

            return true;
        }
    });

    // var perjalanans = [];
    Perjalanan = {
        entity,
        // items: [],
        _listeningPerjalanan: function() {
            mApp.firestore.db.collection('travels').onSnapshot(function(snapshot) {
                // perjalanans = [];
                // Perjalanan.items = [];
                var items = [];
                snapshot.forEach(function(doc) {
                    // Perjalanan.items.push(doc.data());
                    // perjalanans.push(doc.data());
                    items.push(doc.data());
                });

                Perjalanan.entity.items = items;

                // console.log(Perjalanan.entity.items);
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
        },
        items: {
            render() {
                if (Perjalanan.entity.items !== undefined) {
                    var perjalanans = Perjalanan.entity.items;
                    perjalanans.forEach(function(perjalanan) {
                        console.log(perjalanan);
                    });
                }
            }
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