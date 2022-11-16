import { useState, useEffect } from "react";
import styles from "./style.module.css";

console.log("CreateAccount running");

function CreateAccount(props) {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE mydb", function (err, result) {
            if (err) throw err;
            console.log("Database created");
        });
    });
}

export default CreateAccount;