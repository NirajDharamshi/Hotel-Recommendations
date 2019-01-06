module.exports.get_recommendation_page = function(req,res){
  res.render('hotel.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_about_page = function(req,res){
  res.render('about.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_contact_page = function(req,res){
  res.render('contact.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_credits_page = function(req,res){
  res.render('credits.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_visualizations_page = function(req,res){
  res.render('visualizations.hbs', {currentYear: new Date().getFullYear()});
}
module.exports.get_top_hotels_page = function(req,res){
  res.render('hchart.hbs', {currentYear: new Date().getFullYear()});
}
