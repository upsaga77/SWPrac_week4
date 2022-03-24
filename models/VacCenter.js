const sql = require("../config/vacCenterDB");

const vacCenter = function (vacCenter) {
  this.id = vacCenter.id;
  this.name = vacCenter.name;
  this.tel = vacCenter.tel;
};

vacCenter.getAll = (result) => {
  sql.query("select * from vacCenters", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("vacCenters", res);
    result(null, res);
  });
};

module.exports = vacCenter;
