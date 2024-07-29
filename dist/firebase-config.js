"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const app_1 = require("firebase/app");
const firebaseConfig = {
    apiKey: "AIzaSyANmcxTkhl7gnf0SbPfsG3Kzoi6OBWlIQE",
    authDomain: "user-dashboard-63473.firebaseapp.com",
    projectId: "user-dashboard-63473",
    storageBucket: "user-dashboard-63473.appspot.com",
    messagingSenderId: "180723125162",
    appId: "1:180723125162:web:beecaab4540775b72879d3",
    measurementId: "G-P3BW54P7VZ"
};
exports.app = (0, app_1.initializeApp)(firebaseConfig);
