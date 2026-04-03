const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(srv) {

    srv.on('printhelloworld', req => {
    console.log(req.data.input)
    return `${req.data.input}world`

} )

   srv.on('addition', req =>{
   console.log(req.data)
   let result =  req.data.num + req.data.num2;
    return result

})
  srv.on('Myfun', req => {

    let result = {}

    if ( req.data.category == 1) {
     result.product = 'BMW',
     result.price = '1000 INR',
     result.location = 'Mumbai'

    } else {
   
        result.product = 'Audi';
        result.stock = 100,
        result.priceArray = [{
          "Price": 5689,
          "Discount": "10%"


        }]

    }
   console.log(result)
    return result;


  })



})
