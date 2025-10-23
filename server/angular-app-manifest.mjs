
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rina-potfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/rina-potfolio/about",
    "route": "/rina-potfolio"
  },
  {
    "renderMode": 2,
    "route": "/rina-potfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/rina-potfolio/work"
  },
  {
    "renderMode": 2,
    "route": "/rina-potfolio/services"
  },
  {
    "renderMode": 2,
    "route": "/rina-potfolio/resume"
  },
  {
    "renderMode": 2,
    "redirectTo": "/rina-potfolio/about",
    "route": "/rina-potfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11600, hash: 'e1f5864d5b4f5831b9fe0fe1eaed477b0b837f9fa9f461b0ad2bf1f2e74ff54b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12113, hash: '4d4b522e32adacb46f690ac1126a7a2d6406bed762f0bdd8f524251c79e31901', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'work/index.html': {size: 23205, hash: '20d40b311d92df4f7a8e9a8e06ed161728ba1b1bdfb807fdb6c63ebcde79f034', text: () => import('./assets-chunks/work_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 23219, hash: '4cd4ad96ee960dd81151d7c6a9e46f8a56e2e108194c851011bafc48efd12fad', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 23213, hash: '494ce6ec7b119d2fea312f40886032709d03d6159fddd21ee3cd2fa9aaf8bc24', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23210, hash: '65be312be6fc344ab246155e2dfd0b830fa8e3b0d8d83bd971059cf7f6f4fe8b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
