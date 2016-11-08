/* https://github.com/A-gambit/cookie-es6 */
export const setCookie = (name, value, options = {}) => {
  let str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (value == null) options.maxage = -1;

  if (options.maxage) {
    options.expires = new Date(+new Date() + options.maxage);
  }

  if (options.path) str += '; path=' + options.path;
  if (options.domain) str += '; domain=' + options.domain;
  if (options.expires) str += '; expires=' + options.expires.toUTCString();
  if (options.secure) str += '; secure';

  document.cookie = str;
};

export const getCookie = (name) => {
  const parse = (str) => {
    const obj = {},
          pairs = str.split(/ *; */);

    if (!pairs[0]) return obj;

    for (let pair of pairs) {
      pair = pair.split('=');
      obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return obj;
  };

  const cookies = parse(document.cookie);

  return typeof name === 'string' && cookies.hasOwnProperty(name) ? cookies[name] : false;
};
