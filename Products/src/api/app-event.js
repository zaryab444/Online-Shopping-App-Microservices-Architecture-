module.exports = (app) => {
  
// product/app-events
app.use('/app-events', async (req,res,next) => {
    const { payload } = req.body;

  console.log("----products service record event");
  return res.status(200).json(payload);
});
}


