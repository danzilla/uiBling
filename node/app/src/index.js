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

  res.render('uikit', {pageInfo});
});


router.get('/boot', function(req, res, next) {
  console.log("\n ~ Hi boot ~ \n");

  // pageInfo detailes
  let pageInfo = {
    title: "Bootstrap",
    page: "Auth-page",
    request: "get",
    sessionName: "nada",
    logM: 'Login'
  }

  res.render('bootstrap', {pageInfo});
});


router.get('/uiv2', function(req, res, next) {
  console.log("\n ~ Hi boot ~ \n");

  // pageInfo detailes
  let pageInfo = {
    title: "Bootstrap",
    page: "Auth-page",
    request: "get",
    sessionName: "nada",
    logM: 'Login'
  }

  res.render('index-bling', {pageInfo});
});







module.exports = router;
