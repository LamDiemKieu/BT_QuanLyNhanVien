function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCB,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;

  this.tongLuong = function () {
    if (this.chucVu == "Sếp") {
      return this.luongCB * 3;
    } else if (this.chucVu == "Trưởng Phòng") {
      return this.luongCB * 2;
    } else {
      return this.luongCB * 1;
    }
  };

  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.gioLam < 192 && this.gioLam >= 176) {
      return "Nhân viên giỏi";
    } else if (this.gioLam < 176 && this.gioLam >= 160) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
