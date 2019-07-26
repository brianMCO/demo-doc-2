module.exports = {
  title: 'Crypto.com Chain',
  description: 'Welcome to Crypto.com Chain\'s documentation!',
  themeConfig: {
    nav: [
      {text:'Home', link: '/'},
      {text:'Getting Started',link:'/getting-started/latest/'},
      {text:'Client RPC',link:'https://github.com/crypto-com/chain/tree/master/client-rpc'},
      {
        text:'Version',
        items:[
          {text:'Latest',link:'/getting-started/latest/'},
          {text:'v1.0.0',link:'/getting-started/v1.0.0/'}
        ]
      }
    ],
    sidebar: {
      '/getting-started/latest/': [
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
      ],
      '/getting-started/v1.0.0/': [
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
