/* No Var - let and const
 * try ES6
 * NodeJS + Monk + Session = keep it minimal
*/
const express = require('express');
const router = express.Router();

// Home page
/* GET login page */
router.get('/', function(req, res, next) {
  console.log("\n ~ Hi ~ \n");

  // pageInfo detailes
  let pageInfo = {
    title: "UI Kit",
    page: "Auth-page",
    request: "get",
    sessionName: "nada",
    logM: 'Login'
  }

  res.render('index', {pageInfo});
});



module.exports = router;
