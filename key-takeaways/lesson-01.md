# Cài đặt môi trường (Setup)

- NVM & Node.js: Sử dụng NVM (Node Version Manager) để quản lý và chuyển đổi linh hoạt các phiên bản Node.js giữa các dự án.

# Cấu hình Git:

Bash
- git config --global user.name "<tên_của_bạn>"
- git config --global user.email "<email_của_bạn>"
- git config --global init.defaultBranch main

#### VSCode Terminal: Nên đổi Terminal mặc định từ Powershell sang Git Bash để tránh lỗi vặt trên Windows.


#### Kết nối GitHub: Thực hiện tạo và thêm SSH Key để xác thực giữa máy cá nhân và GitHub.
- Lệnh tạo SSH key: ssh-keygen -t rsa -b 4096 -C
"your_email@example.com"
- Kết nối SSH thêm vào github: Lấy nội dung ssh key: cat
~/.ssh/id_rsa.pub
- Truy cập:
https://github.com/settings/ss
h/new để thêm ssh key

# Cài đặt playwright 
- Tạo folder
- Mở bằng VS code 
- Mở terminal
- Chạy lệnh git init playwright@latest cho tới khi hiển thị " Happy hacking" là thành công 

# Đưa code lên github
## Tạo repo
- Khởi tạo repo local: git init
- Tạo repo github và liên kết với repo local: git remote add origin <url> 
-> 2 lệnh trên làm 1 lần duy nhất

- Thêm file vào staging git add . 
- Commit file: git commit -m"message"
- push code: git push origin main
-> 3 lệnh trên làm mỗi khi có thay đổi 

## Đưa code lên git
- Truy cập:
https://github.com/new
- Điền tên repository
- Chọn “Public”

