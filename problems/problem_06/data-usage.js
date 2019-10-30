const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = async () => {
  // put your code here !!
  try {
    let data = await raw.split(/\r?\n/).map((value, key) => {
      let item = value.split(',')
      return { username: item[0], total: item[1].slice(5), average: item[2].slice(5) }
    })
    return data
  } catch (error) {
    throw new Error(error)
  }

};

module.exports = { dataUsage };
