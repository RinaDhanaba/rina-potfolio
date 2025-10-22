
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://rinadhanaba.github.io/rina-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rina-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: '2eb31ae2579f3fb6e0a3bed97a4592273ea1d3ff6326b8e6abbd20a08ece11e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '9772d6b229fec47f3d63134d65fd61b8f68db3da906567ea0e503c35849bba48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 684, hash: 'aa6c4010f4470cb62530b3d9ce2e6fa8716c558335bc0d0c798aa29449a399ff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
