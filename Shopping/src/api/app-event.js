const ShoppingService = require('../services/shopping-service');

module.exports = (app) => {
    const service = new ShoppingService();

//customer/app-events
app.use('/app-events', async (req,res,next) => {
    const { payload } = req.body;

  service.SubscribeEvents(payload);
  console.log("----customer service record event");
  return res.status(200).json(payload);
});
}


