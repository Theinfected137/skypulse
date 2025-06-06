
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/flips-challenge/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/flips-challenge"
  },
  {
    "renderMode": 2,
    "route": "/flips-challenge/weather"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 693, hash: 'bdca856a54c32818947ea3565e60b3eff3faed6ba9fc04f05ae9a571f7f9900f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: '0a4e81a9e188bcedd85601e78ba6a56924d73842a3b6193f260bb503af5651fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'weather/index.html': {size: 4615, hash: '0cdef39ad18d77fd6fec6caa8821922a71b49f8773b9852e805f26a207c00ad1', text: () => import('./assets-chunks/weather_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2359, hash: '04ae2def5d92c05a07a8318749513ee193e419b2542e0900d7df2bd46dfd69e2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FNE2572F.css': {size: 117, hash: '0R6jdDATT90', text: () => import('./assets-chunks/styles-FNE2572F_css.mjs').then(m => m.default)}
  },
};
