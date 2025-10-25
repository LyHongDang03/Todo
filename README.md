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
## Bất đồng bộ
- Không cần phải chờ thực hiện xong mới thực hiện tiếp mà sẽ thực hiện liên tục
+ Ví dụ ta có log in ra kết quả 1, 2, 3, funtion(){log ra 4 thực hiện sau 4s} thì kết quả in ra sẽ là 1 2 3 5 và sau 4s sẽ in ra 4 => Chương trình không cần chờ 4s để in ra 4 mà in ra 5 luôn sau đó mới in ra 4
## Promise
- Promise cũng giống như lời hứa trong thực tế có 3 trạng thái: chưa được giải quyết (unresolved), đã giải quyết (resolved), hoặc bị từ chối (rejected).
+ Unresolved or Pending - Promise đang chờ xử lý nếu kết quả chưa sẵn sàng. Khi đó, nó đang chờ một thứ gì đó kết thúc
+ Resolved or Fulfilled - Promise được giải quyết nếu có kết quả. Đó là một cái gì đó đã hoàn thành và tất cả đều diễn ra tốt đẹp
+ Rejected - Promise bị từ chối nếu xảy ra lỗi
- Khi resolved thì dùng Promise.then() để thực hiện công việc tiếp khi bị reject thì sẽ vào .catch(err) và lắng ra lỗi
## async/await
- async: Khai báo đầu hàm cho biết hàm này là hàm bất đồng bộ
- await: Chờ đến khi công việc cần thiết thực hiện xong thì sẽ thực hiện tiếp công việc đã await ví dụ khi thực hiện find() nếu không có await thì res sẽ lấy luôn dữ liệu là Object{<pending>} bởi lúc này db chưa query xong, nếu thực hiện await thì khi find() sẽ chờ đến khi db query xong thì mới thực hiện tiếp công việc tiếp theo
 ### DOCS
 - https://mongoosejs.com/docs/queries.html
 



