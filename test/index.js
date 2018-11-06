const loger = require('../index.js');

const logDefault = loger();
const logDanger  = loger('danger');
const logWarning = loger('warning');
const logSuccess = loger('success');
const logPrimary = loger('primary');
const logInfo    = loger('info');


logDanger('This in dengerous!');
logDanger('This in dengerous:', 'because...');
logDefault('=================');
logWarning('WARNING!', 'somthing wrong');
logDefault('=================');
logSuccess('Conratulate!', 'You win!');
logDefault('=================');
logPrimary('This is primary text');
logDefault('=================');
logInfo('Please, read this information carefully');

