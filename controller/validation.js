// Hàm kiểm tra trường nhập rỗng
function checkRong(checkInput, idThongbao) {
  if (checkInput) {
    document.getElementById(idThongbao).innerHTML = "";

    return true;
  } else {
    document.getElementById(idThongbao).innerHTML =
      "Vui lòng trường nhập dữ liệu này";

    return false;
  }
}

// Hàm kiểm tra email bằng 1 regex
function kiemTraEmail(checkEmail, idThongBao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var mailHopLe = regexEmail.test(checkEmail);
  if (mailHopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Nhập đúng định dạng email";
    return false;
  }
}

// Hàm check ô nhập tài khoản
function kiemTraTaiKhoan(checkTK, idCheckTK) {
  if (checkTK.length >= 4 && checkTK.length <= 6) {
    document.getElementById(idCheckTK).innerHTML = "";
    return true;
  } else {
    document.getElementById(idCheckTK).innerHTML =
      "Tài khoản tối đa 4 - 6 ký tự";
    return false;
  }
}

// Hàm check ô nhập tên nhân viên
function kiemTraTen(checkTen, idCheckTen) {
  var chiLayChu = /^[\p{L} ]+$/u;
  var tenHopLe = chiLayChu.test(checkTen);
  if (tenHopLe) {
    document.getElementById(idCheckTen).innerHTML = "";
    return true;
  } else {
    document.getElementById(idCheckTen).innerHTML = "Tên phải chứa ký tự chữ";
    return false;
  }
}

// Hàm check ô nhập mật khẩu
function kiemTraMK(checkMK, idCheckMK) {
  var kyTuSo = /[0-9]/g;
  var kyTuChuHoa = /[A-Z]/;
  var kytuDB = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (checkMK.length >= 6 && checkMK.length <= 10) {
    if (
      checkMK.match(kyTuSo) &&
      checkMK.match(kyTuChuHoa) &&
      checkMK.match(kytuDB)
    ) {
      document.getElementById(idCheckMK).innerHTML = "";
      return true;
    }
  } else {
    document.getElementById(idCheckMK).innerHTML =
      "Mật khẩu ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    return false;
  }
}

// Hàm check ô nhập số lương căn bản

function kiemTraLuong(checkLuong, idCheckLuong) {
  console.log(checkLuong);
  if (checkLuong >= 1000000 && checkLuong <= 20000000) {
    document.getElementById(idCheckLuong).innerHTML = "";
    return true;
  } else {
    document.getElementById(idCheckLuong).innerHTML =
      "Vui lòng nhập lương căn bản hợp lệ";
    return false;
  }
}

// Hàm check ô nhập số giờ làm
function kiemTraGioLam(checkGioLam, idCheckGioLam) {
  if (checkGioLam >= 80 && checkGioLam <= 200) {
    document.getElementById(idCheckGioLam).innerHTML = "";
    return true;
  } else {
    document.getElementById(idCheckGioLam).innerHTML =
      "Vui lòng nhập số giờ làm hợp lệ";
    return false;
  }
}

// Hàm định dạng số phân cách đơn vị
function dinhDangSo() {
  var n = document.getElementById("luongCB").value;
  var chiLaySo = /[0-9]/g;
  var number = "";
  var check = n.match(chiLaySo);
  if (check) {
    check.forEach(function (item) {
      number += item;
      check = number;
    });

    check = check.toString();
  }

  document.getElementById("luongCB").value = Number(check).toLocaleString();
}
