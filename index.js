module.exports = function(d, u) {
  d = d || new Date();

  if (typeof d === 'string') {
    d = new Date(d);
  }

  if (!(d instanceof Date) || d+'' === 'Invalid Date') {
    throw new Error('Expected Date instance or constructor value.');
  }

  return [
    [m(d, 'FullYear', u), p(m(d, 'Month', u) + 1), p(m(d, 'Date', u))].join('-'),
    [p(m(d, 'Hours', u)), p(m(d, 'Minutes', u)), p(m(d, 'Seconds', u))].join(':')
  ].join(' ');
};

function p(n, m, c) {
  n = n + '';
  m = m || 2;

  return n.length >= m ? n : new Array(m - n.length + 1).join(c || '0') + n;
}

function m(d, n, u) {
  return d['get' + (u ? 'UTC' : '') + n]();
}
