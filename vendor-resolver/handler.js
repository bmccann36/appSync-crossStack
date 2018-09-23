

const vendors = [
  {
    name: 'some vendor from another stack',
    vendorId: '01',
  },
  {
    name: 'other stack vendor B',
    vendorId: '02',
  },
];

module.exports.handler = (event, context, callback) => {

  console.log(JSON.stringify(event));

  const vendorId = event.source.vendorId;

  const vendorToReturn = vendors.filter(vendor => vendor.vendorId === vendorId)[0];
  
  console.log(JSON.stringify(vendorToReturn))

  callback(null, vendorToReturn);

};

// TEST INVOCATION
// module.exports.handler({ source: [{ vendorId: '02' }] }, null, (err, succ) => console.log(succ));
