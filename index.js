const { threeSum } = require('./problems/problem_01');
const { maxFloor } = require('./problems/problem_02');
const { minStep } = require('./problems/problem_03');
const { bangkokForecast } = require('./problems/problem_05');
const { dataUsage } = require('./problems/problem_06');


console.log(maxFloor(5))
console.log(minStep(5))
bangkokForecast().then(console.log).catch(console.error)
dataUsage().then(console.log).catch(console.error)


module.exports = {
    threeSum,
    maxFloor,
    minStep,
    bangkokForecast,
    dataUsage
};