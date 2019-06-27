const moment = require('moment');

exports.index = (req, res) => {
  res.json({
    date: moment().format('MMMM Do YYYY, h:mm:ss a')
  });
};
