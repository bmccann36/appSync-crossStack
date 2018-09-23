

const vouchers = [
  {
    amount: 10,
    voucherId: 'a',
    vendorId: '01',
    createdAt: '2018',
  },
  {
    amount: 5,
    voucherId: 'b',
    vendorId: '02',
    createdAt: '2017',
  },
];

module.exports.handler = (event, context, callback) => {

  console.log('event arguments: ', event.arguments);

  const matchedVoucher = vouchers.filter(voucher => voucher.voucherId === event.arguments.voucherId)[0];

  console.log('matchedVoucher', matchedVoucher);


  callback(null, matchedVoucher);

};
// SAMPLE INVOCATION
// module.exports.handler({ arguments: { vocherId: 'b' } }, null, (err, succ) => console.log(succ));
