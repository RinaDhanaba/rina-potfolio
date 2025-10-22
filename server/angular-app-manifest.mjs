
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 497, hash: '6d5782f84c016eb592500d0fd64054d20bec697d9db074d0aa641f3e80eef142', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: 'f9222ce3539782ba7c0b9721bdc6febd3e6e393e406d9de3f1cc9a0d7bd51f2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 640, hash: 'a3d3e31acf3e07f2230e8750c75821a1a8a23d1f40aa770119ebaf00999b98d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
