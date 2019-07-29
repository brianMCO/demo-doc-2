module.exports = {
  title: 'Crypto.com Chain',
  description: 'Welcome to Crypto.com Chain\'s documentation!',
  themeConfig: {
    nav: [
      {text:'Home', link: '/'},
      {text:'Getting Started',link:'/getting-started/'},
      {text:'Client RPC',link:'https://github.com/crypto-com/chain/tree/master/client-rpc'}
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
  base: '/demo-doc-2/',
  plugins: [
    ['vuepress-plugin-export',
    {
      sorter: function(a,b){
        var ordering = {
          'Home': 0,
          'Getting Started': 1,
          'Consensus': 2,
          'Genesis': 3,
          'Transaction Accounting Model': 4,
          'Transaction': 5,
          'Serialization': 6,
          'Signature Schemes': 7,
          'Transaction Flow': 8,
          'Enclave Architecture': 9,
          'Transaction Privacy': 10,
          'Staking': 11,
          'Notes on Performance': 12,
          'Threat Model': 13
        };
        console.log("a", a["title"])
        console.log("b", b["title"])
        console.log("---")
        return (ordering[a["title"]] - ordering[b["title"]]);
      }
    }
    ]
  ]
}
