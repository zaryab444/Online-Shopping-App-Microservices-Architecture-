const CustomerService = require('../services/customer-service');

module.exports = (app) => {
    const service = new CustomerService();

//customer/app-events
app.use('/app-events', async (req,res,next) => {
    const { payload } = req.body;

  service.SubscribeEvents(payload);
  console.log("----shopping service record event");
  return res.status(200).json(payload);
});
}


