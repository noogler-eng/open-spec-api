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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const addUser_1 = __importDefault(require("./addUser"));
const allUser_1 = __importDefault(require("./allUser"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
// server.use('/api-docs', swaggerUi.serve);
// server.get('/api-docs', swaggerUi.setup(swaggerDocument));
server.post("/new-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    try {
        const id = yield (0, addUser_1.default)(username, email);
        res.status(201).json({
            msg: "user added sussessfully",
            userId: id
        });
    }
    catch (error) {
        console.log("adding user error: ", error);
        res.status(500).json({
            msg: "some error in server side"
        });
    }
}));
server.get("/all-users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, allUser_1.default)();
        res.status(200).json({
            msg: "users data",
            users: data
        });
    }
    catch (error) {
        console.log("adding user error: ", error);
        res.status(500).json({
            msg: "some error in server side"
        });
    }
}));
server.listen(8080, () => {
    console.log("running at 8080 port");
});
