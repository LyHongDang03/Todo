// Giống với @RequestMapping
const todoRoutes = require('./todo');
function route(app){
     app.use('/todo', todoRoutes);
}

module.exports = route

