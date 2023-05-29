// hàm lấy giá trị cho input
function layGiaTriInput() {
  // lấy thông tin từ người dùng
  var _taiKhoan = document.getElementById("tknv").value;
  var _hoTen = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCB = Number(
    document.getElementById("luongCB").value.replaceAll(",", "")
  );
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

  var valid = true;
  // Check tài khoản
  if (checkRong(_taiKhoan, "tbTK") == false) {
    valid = false;
  } else if (kiemTraTaiKhoan(_taiKhoan, "tbTK") == false) {
    valid = false;
  }

  // Check họ tên
  if (checkRong(_hoTen, "tbTen") == false) {
    valid = false;
  } else if (kiemTraTen(_hoTen, "tbTen") == false) {
    valid = false;
  }

  // Check email
  if (checkRong(_email, "tbEmail") == false) {
    valid = false;
  } else if (kiemTraEmail(_email, "tbEmail") == false) {
    valid = false;
  }

  // Check mật khẩu
  if (checkRong(_matKhau, "tbMK") == false) {
    valid = false;
  } else if (kiemTraMK(_matKhau, "tbMK") == false) {
    valid = false;
  }

  // Check ngày làm
  if (checkRong(_ngayLam, "tbNgay") == false) {
    valid = false;
  }

  // Check lương CB
  if (checkRong(_luongCB, "tbLuongCB") == false) {
    valid = false;
  } else if (kiemTraLuong(_luongCB, "tbLuongCB") == false) {
    valid = false;
  }

  // Check chức vụ
  if (checkRong(_chucVu, "tbChucVu") == false) {
    valid = false;
  }

  // Check giờ làm
  if (checkRong(_gioLam, "tbGioLam") == false) {
    valid = false;
  } else if (kiemTraGioLam(_gioLam, "tbGioLam") == false) {
    valid = false;
  }

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
  document.getElementById("luongCB").value = luongCB.toLocaleString();
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
