"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("firebase/firestore");
const firebase_config_1 = require("./firebase-config");
const db = (0, firestore_1.getFirestore)(firebase_config_1.app);
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querySnapshot = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(db, "users"));
        const users = querySnapshot.docs.map(doc => (Object.assign({ id: doc.id }, doc.data())));
        return users;
    }
    catch (error) {
        console.log(error);
        throw new Error(`some error in fetching users ${error}`);
    }
});
exports.default = getAllUser;
