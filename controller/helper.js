// hàm lấy giá trị cho input
function layGiaTriInput() {
  // lấy thông tin từ người dùng
  var _taiKhoan = document.getElementById("tknv").value;
  var _hoTen = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCB = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

  var valid = true;

  // Hàm kiểm tra trường nhập rỗng
  // valid =
  //   checkRong(_taiKhoan, "tbTK") &
  //   checkRong(_hoTen, "tbTen") &
  //   checkRong(_email, "tbEmail") &
  //   checkRong(_matKhau, "tbMK") &
  //   checkRong(_ngayLam, "tbNgay") &
  //   checkRong(_luongCB, "tbLuongCB") &
  //   checkRong(_chucVu, "tbChucVu") &
  //   checkRong(_gioLam, "tbGioLam") &
  //   kiemTraEmail(_email, "tbEmail") &
  //   kiemTraTaiKhoan(_taiKhoan, "tbTK") &
  //   kiemTraTen(_hoTen, "tbTen") &
  //   kiemTraMK(_matKhau, "tbMK") &
  //   kiemTraLuong(_luongCB, "tbLuongCB") &
  //   kiemTraGioLam(_gioLam, "tbGioLam");
  valid = checkRong(_ngayLam, "tbNgay");
  valid = checkRong(_chucVu, "tbChucVu");

  valid = checkRong(_taiKhoan, "tbTK");
  valid &&= kiemTraTaiKhoan(_taiKhoan, "tbTK");

  valid = checkRong(_hoTen, "tbTen");
  valid &&= kiemTraTen(_hoTen, "tbTen");

  valid = checkRong(_email, "tbEmail");
  valid &&= kiemTraEmail(_email, "tbEmail");

  valid = checkRong(_matKhau, "tbMK");
  valid &&= kiemTraMK(_matKhau, "tbMK");

  valid = checkRong(_luongCB, "tbLuongCB");
  valid &&= kiemTraLuong(_luongCB, "tbLuongCB");

  valid = checkRong(_gioLam, "tbGioLam");
  valid &&= kiemTraGioLam(_gioLam, "tbGioLam");

  if (!valid) {
    return;
  }

  // Tạo ra lớp đối tượng sinh viên mới
  var nhanVien = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
  );
  return nhanVien;
}

//hàm tìm vị trí nhân viên
function timViTriNhanVien(taiKhoan) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.taiKhoan == taiKhoan) {
      viTri = index;
    }
  });
  // for (var i = 0; i < arrNhanVien.length; i++) {
  //   if (arrNhanVien[i].taiKhoan == taiKhoan) {
  //     var viTri = i;
  //     break;
  //   }
  // }
  return viTri;
}

// hàm gắn giá trị cho Input
function ganGiaTriChoInput(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCB,
  chucVu,
  gioLam
) {
  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("password").value = matKhau;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luongCB;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}

// Hàm lưu dữ liệu xuống local
function saveStorage(arrNhanVien) {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

// Hàm lấy dữ liệu từ Local
function getStorage() {
  var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
  if (arrNhanVienLocal != null) {
    arrNhanVien = arrNhanVienLocal;
  }
}

// Hàm định dạng số phân cách đơn vị
// function dinhDangSo() {
//   var n = document.getElementById("luongCB").value;
//   var chiLaySo = /[0-9]/g;
//   var number = "";
//   var check = n.match(chiLaySo);
//   if (check) {
//     check.forEach(function (item) {
//       number += item;
//       check = number;
//     });

//     check = check.toString();
//   }

//   document.getElementById("luongCB").value = Number(check).toLocaleString();
// }
