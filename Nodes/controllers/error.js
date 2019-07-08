exports.get404 = (req,res,next) => {
    res.status(404).render('pagenotFound',{title:'Error 404',path:'error'});
}