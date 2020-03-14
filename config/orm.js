var connection = require("../config/connection");

function printQMark(num) {
    const arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function toSql(obj) {
    var arr = [];
    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    deleteOne: function (table, condition, cb) {
        var queryString = " DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = " INSERT INTO " + table;
        queryString += "(";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQMark(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = " UPDATE " + table;
        queryString += " SET ";
        queryString += toSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }
};

module.exports = orm;