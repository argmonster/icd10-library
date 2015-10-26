var util = require('mis-util');
var config = require('./config.ignore');

var options = {
   sysname: config.sysname,
   webname: config.webname,
   connect: {
      host: config.host,
      user: config.name,
      password: config.user
   },
   cron: {
      user: config.cronname,
      pass: config.cron
   },
   view_path: {
      local: './view/',
      remote: '/CUST/forms/'
   },
   parm_path: {
      local: './build/'
   },
   usc_path: {
      local: './uScript/'
   }
};

var mis = util(options);

//test with a fake client
mis.script.runonce('./tests/lib-batch-test.usc',['000100'])
.then(mis.script.runonce.bind(mis,'./tests/lib-bill-qual-test.usc'))
.then(mis.script.runonce.bind(mis,'./tests/lib-put-test.usc'))
.then(mis.script.runonce.bind(mis,'./tests/lib-put-ax4-test.usc'))
.then(mis.script.runonce.bind(mis,'./tests/lib-put-noax4-test.usc'))
.then(mis.script.runonce.bind(mis,'./tests/lib-put-gaf-test.usc'))
.then(mis.script.runonce.bind(mis,'./tests/lib-put-iqsq-test.usc'))
.then(mis.script.runonce.bind(mis,'./tests/lib-put-id-test.usc'))
.then(mis.script.runonce.bind(mis,'./tests/lib-get-bill-test.usc'))
.then(mis.script.runonce.bind(mis,'./tests/lib-void-test.usc'))
//mis.script.runonce('./tests/lib-void-test.usc')
//only install the void test because it requires user interaction for testing
.then(mis.script.install.bind(mis, './tests/lib-void-test.usc'))
.then(mis.script.runonce.bind(mis, './tests/lib-update-test.usc'))



