"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = ['Jenna', 'Tyler', 'Brynn', 'Odin', 'Quinn'];
exports.getUser = function (req, res) {
    var name = req.query.name;
    if (users.includes(name)) {
        res.send("success");
    }
    else {
        res.send("error");
    }
};
