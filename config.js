import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAU47lcpY6wgnRsF5hhOzdmmfbSXWv7tvM",
    authDomain: "team-voting-b97cc.firebaseapp.com",
    projectId: "team-voting-b97cc",
    storageBucket: "team-voting-b97cc.appspot.com",
    messagingSenderId: "558207115255",
    appId: "1:558207115255:web:13bb9eeeb98448092658f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();