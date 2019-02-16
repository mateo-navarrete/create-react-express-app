const ora = require('ora');
const fx = [
  'bouncingBall',
  'bouncingBar',
  'dots',
  'dots12',
  'moon',
  'point',
  'weather',
];

module.exports = {
  spinner: ora({ spinner: fx[(Math.random() * fx.length) >> 0] }),
};
