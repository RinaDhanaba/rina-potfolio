
export default {
  basePath: 'https://rinadhanaba.github.io/rina-portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
