"use strict";

$(function() {
    var firestore = {
        loadFirebaseScript: function() {
            this.initializeFirestore();
        },

        initializeFirestore: function() {
            // console.log('test');
            // console.log(firebase_config);
            // console.log(firebase);
            // console.log(mApp);

            if (typeof firebase !== 'undefined') {
                firebase.initializeApp(firebase_config);

                mApp.firestore = {
                    db: firebase.firestore(),
                    getDocument: function(params, callback) {
                        var result = null;
                        var query = mApp.firestore.db.collection(params.path).doc(params.document_id).get().then(function(doc) {
                            if(doc.exists) {
                                callback(doc.data());
                            } else {
                                console.log('No such document');
                            }
                        });
                    },
                    init: function() {
                        this.db.settings({ timestampsInSnapshots: true });
                    }
                };
                mApp.firestore.init();
            }
        },

        init: function() {
            this.loadFirebaseScript();
        }
    };

    firestore.init();
});