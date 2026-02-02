# 1. Phạm vi của biến (Scope)
 Xác định nơi mà một biến có thể được truy cập. JavaScript có 3 loại phạm vi chính:


- Toàn cục (Global): Biến được khai báo tự do, không nằm trong khối {} hay hàm, có thể truy cập ở bất cứ đâu.


- Phạm vi hàm (Function scope): Biến khai báo trong hàm (bằng var, let, hay const) chỉ có thể truy cập được bên trong hàm đó.

- Phạm vi khối (Block scope):

- - let và const: Chỉ có giá trị bên trong cặp ngoặc nhọn {}. Truy cập bên ngoài sẽ báo lỗi undefined.


- - var: Không bị giới hạn bởi cặp ngoặc nhọn (trừ hàm), có thể truy cập từ bên ngoài khối.

# 2. Điều khiển vòng lặp: break và continue

- break: Dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức khi một điều kiện được thỏa mãn.


- continue: Dùng để bỏ qua lần lặp hiện tại và chuyển ngay sang lần lặp kế tiếp.

# 3. Câu điều kiện nâng cao

- if...else if...else: Kiểm tra nhiều điều kiện theo thứ tự từ trên xuống dưới.

- Toán tử điều kiện (Ternary operator): Cách viết ngắn gọn cho if...else. Cú pháp: điều kiện ? giá trị_nếu_đúng : giá trị_nếu_sai.

# 4. Vòng lặp nâng cao

- for...in: Dùng để duyệt qua các thuộc tính (key) của một đối tượng (object).

- forEach: Phương thức của mảng dùng để thực thi một hàm cho từng phần tử. Lưu ý: Không thể dùng break hay continue trong forEach.

# 5. Hàm tiện ích (Utils Functions)
Các hàm có sẵn giúp xử lý dữ liệu nhanh chóng:

- String Utils (Xử lý chuỗi):


- trim(), trimStart(), trimEnd(): Loại bỏ khoảng trắng.


- toUpperCase(), toLowerCase(): Chuyển đổi hoa/thường.


- includes(): Kiểm tra sự tồn tại của chuỗi con (có phân biệt hoa thường).


- split(): Tách chuỗi thành mảng dựa trên ký tự phân cách.


- replace(): Thay thế chuỗi con.

- Array Utils (Xử lý mảng):

- Thêm phần tử: push() (cuối), unshift() (đầu), splice() (vị trí bất kỳ).

- Xóa phần tử: pop() (cuối), shift() (đầu), splice() (vị trí bất kỳ).

- Tìm kiếm: find() (trả về phần tử đầu tiên thỏa điều kiện), filter() (trả về tất cả phần tử thỏa điều kiện).

- -Biến đổi: map() (tạo mảng mới từ việc biến đổi các phần tử mảng cũ).

- Sắp xếp: sort((a, b) => a - b) cho tăng dần và (b, a) => b - a cho giảm dần