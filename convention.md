

/* ------------------------------------------
 1️⃣ Class / Controller / Service / Route
------------------------------------------- */
// Class sử dụng PascalCase
// Ví dụ:
class UserController {}     // ✅
class ProductService {}     // ✅
class BaseRoute {}          // ✅
class AuthMiddleware {}     // ✅




// Ví dụ chuẩn CRUD cho UserController:
class UserController {
  async getUsers() {}           // Lấy danh sách user
  async getUserById() {}        // Lấy 1 user theo id
  async createUser() {}         // Tạo mới 1 user
  async updateUser() {}         // Cập nhật 1 user
  async deleteUser() {}         // Xóa 1 user
}


class UserService {
async getUsers() {}           // Lấy danh sách user
  async getUserById() {}        // Lấy 1 user theo id
  async createUser() {}         // Tạo mới 1 user
  async updateUser() {}         // Cập nhật 1 user
  async deleteUser() {}         // Xóa 1 user
}

 1️⃣ Them 's ở mỗi resource  
 VD" https://localhost:8000/users , https://localhost:8000/products


/* ------------------------------------------
 7️⃣ Middleware / Shared Utils
------------------------------------------- */
// camelCase, động từ hoặc hành động
function authMiddleware(req, res, next) {}      // ✅
function validateRequest(schema) {}             // ✅
function formatResponse(data) {}                // ✅

