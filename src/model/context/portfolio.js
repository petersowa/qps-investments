export default {
  accounts: [
    {
      id: 1,
      account: '4784237389920',
      holders: [
        {
          id: 1,
          name: 'Xerxis Xerul',
        },
      ],
    },
  ],
  positions: [
    {
      id: 1,
      accountId: 1,
      symbol: 'aapl',
      cost: 30.37,
      type: 'stock',
      buyDate: new Date('12/1/2010').getTime(),
      shares: 100,
      commission: 4.95,
    },
    {
      id: 2,
      accountId: 1,
      symbol: 'f',
      cost: 10.85,
      type: 'stock',
      buyDate: new Date('6/1/2011').getTime(),
      shares: 100,
      commission: 4.95,
    },
    {
      id: 3,
      accountId: 1,
      symbol: 'amzn',
      cost: 182901,
      type: 'stock',
      buyDate: new Date('7/24/2018').getTime(),
      shares: 100,
      commission: 4.95,
    },
  ],
  transactions: [
    {
      id: 1,
      accountId: 1,
      symbol: 'aapl',
      type: 'sell',
      date: new Date('5/3/2014').getTime(),
      shares: 20,
      commission: 4.95,
    },
  ],
};
