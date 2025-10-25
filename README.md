# NodeJs
## HTTP (Hypertext Transfer Protocol)
- GET: Truy suất dữ liệu
- POST: Đăng tải dữ liệu
- PUT: Cập nhật dữ liệu
- DELETE: Xóa dữ liệu
## Cài đặt NodeJs
- npm init: cài đặt Nodejs
- npm install express --save: cài đặt express
## Routing
- app.method(PATH, HANDLER) ví dụ router.post('/', todoController.createTodo)
+ app là instance của express
+ method là các phương thức http: POST, GET, PUT, DELETE
+ path là đường dẫn của api '/abcd'
+ handler: là controller nhận 2 tham số req (request) và res (response)
## GET method
- Khi truy cập vào một trang web thì mặc định trình duyệt sẽ trả về method GET
- Để trình duyệt phân biệt GET nên trả về dữ liệu gì thì sẽ phân biệt vào route ví dụ '/' và '/abc' sẽ trả về dữ liệu 
khác nhau
## GET method sử dụng route parameter (Giống với @PathVariable)
- Được sử dụng để lấy thông tin của dữ liệu nào đó
- Sử dụng Model.findById(id cần tìm) vơi id là _id trong mogodb có thế là «Object|Number|String»
- Sử dụng Model.findOne({key: value}) với key là tên trường trong db , value lấy từ parameter sử dụng req.params.abc với abc là tên biến trong route /:abc.
## Nhập và xuất dữ liệu
- require(): dùng để nhập vào module đã export ví dụ require('../controllers/todoController')
- module.exports: dùng để chia sẻ dữ liệu ra bên ngoài ví dụ module.exports = router
## Cài đặt mongodb
- npm install mongoose để cài đặt thư viện
- kết nối với mongodb
*const mongoose = require('mongoose');*
*async function connect() {*
    *try {*
        *await mongoose.connect('mongodb://root:root@127.0.0.1:27017/todo?authSource=admin')*
        *console.log('connect');*
    *} catch (error) {*
        *console.log('errro');*
        
    *}*
*}*
*module.exports = { connect }*

**const mongoose = require('mongoose');** nhận dũ liệu từ mongoose để sử dụng
**await mongoose.connect('mongodb://root:root@127.0.0.1:27017/todo?authSource=admin')** connect tới mongodb với username và password là root và đường dẫn là mongodb://root:root@127.0.0.1:27017/todo?authSource=admin, kết nối tới cơ sở dữ liệu là todo nếu không có thì sẽ tự tạo
## POST method
- Dùng để tạo mới dữ liệu kết hợp với models để lưu dữ liệu và database
- sử dụng Model.create(req.body) với req.body lấy từ người dùng nhập
***Ví dụ Json***
{
    "action": true // đây là body req lấy để lưu vào db
}
## PUT method
- Dùng để cập nhật dữ liệu của 1 thành phần nào đó
- Sử dụng Model.findOneAndUpdate(filter, update, options)
+ filter: Điều kiện tìm để update ví dụ _id (id lấy từ req.params.__)
+ update: Dữ liệu cần cần cập nhật lấy từ req.body
+ options: Tuỳ chọn cách cập nhật ví dụ {new: true} trả về dữ liệu đã cập nhật
## DELETE method
- Dùng để xóa dữ liệu
- Sử dụng Model.findByIdAndDelete(id) giống với các method còn lại nhưng delete là xóa bản ghi trong db theo id với _id trong db
 ### DOCS
 - https://mongoosejs.com/docs/queries.html
 



