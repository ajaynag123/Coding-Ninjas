module.exports.home = (req, res) => {
  console.log(req.cookies);
  res.cookie('amrutha',567);
  return res.render('home', {
    title: 'Home'});
};