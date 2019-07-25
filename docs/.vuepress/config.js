module.exports = {
  title: 'Crypto.com Chain',
  description: 'Welcome to Crypto.com Chain\'s documentation!',
  themeConfig: {
    nav: [
      {text:'Home', link: '/'},
      {text:'Getting Started',link:'/getting-started/'},
      {text:'Crypto.com',link:'https://crypto.com'},
    ],
    sidebar: {
      '/getting-started/': [
        '',
        'consensus',
        'genesis',
        'transaction-accounting-model',
        'transaction',
        'serialization',
        'signature-schemes',
        'transaction-flow',
        'enclave-architecture',
        'transaction-privacy',
        'staking',
        'notes-on-performance',
        'threat-model'
      ]
    },
    displayAllHeaders: true
  },
  base: '/demo-doc-2/'
}
