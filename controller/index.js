arrNhanVien = [];
getStorage();
renderGiaoDien();

function renderGiaoDien() {
  var content = "";
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = new NhanVien();
    var nhanVienItem = arrNhanVien[i];

    Object.assign(nhanVien, nhanVienItem);

    var tongLuong = nhanVien.tongLuong().toLocaleString();
    var xepLoai = nhanVien.xepLoai();

    content += `
    <tr>
        <td>${nhanVien.taiKhoan}</td>
        <td>${nhanVien.hoTen}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.ngayLam}</td>
        <td>${nhanVien.chucVu}</td>
        <td>${tongLuong}</td>
        <td>${xepLoai}</td>
        <td>
        <button onclick="editNhanVien('${nhanVien.taiKhoan}')" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button onclick="xoaNhanVien('${nhanVien.taiKhoan}')" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        </td>
    </tr>
    `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

// Thêm nhân viên
function themNhanVien() {
  var nhanVien = layGiaTriInput();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    saveStorage(arrNhanVien);
    renderGiaoDien();
    ganGiaTriChoInput("", "", "", "", "", "", "", "", "");
  }
}

// Xóa nhân viên
function xoaNhanVien(taiKhoan) {
  var index = timViTriNhanVien(taiKhoan);
  var tenCanXoa = arrNhanVien[index].hoTen;
  var xacNhanXoa = confirm(
    "Bạn có chắc muốn xóa nhân viên " + tenCanXoa + "không?"
  );
  if (xacNhanXoa == true) {
    if (index != -1) {
      arrNhanVien.splice(index, 1);
      saveStorage(arrNhanVien);
      renderGiaoDien();
    }
  }
}

// edit nhân viên
function editNhanVien(taiKhoan) {
  document.getElementById("myModal").style.display = "block";
  document.querySelector(".fade").classList.add("show");
  // document.querySelector(".fade").classList.toggle("modal-open");

  var index = timViTriNhanVien(taiKhoan);
  var nhanVien = arrNhanVien[index];
  ganGiaTriChoInput(
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCB,
    nhanVien.chucVu,
    nhanVien.gioLam
  );
  document.getElementById("tknv").readOnly = true;
}

function capNhat() {
  var nhanVienDaChinhSua = layGiaTriInput();
  var index = timViTriNhanVien(nhanVienDaChinhSua.taiKhoan);
  arrNhanVien[index] = nhanVienDaChinhSua;
  document.getElementById("tknv").readOnly = false;
  // document.querySelector(".fade").classList.toggle("show");
  // document.getElementById("myModal").style.display = "none";
  // document.querySelector(".fade").classList.toggle("modal-open");

  ganGiaTriChoInput("", "", "", "", "", "", "", "", "");
  saveStorage(arrNhanVien);
  renderGiaoDien();
}

function dong() {
  document.getElementById("tknv").readOnly = true;
  document.querySelector(".fade").classList.remove("show");
  document.getElementById("myModal").style.display = "none";
  // document.querySelector(".fade").classList.toggle("modal-open");

  ganGiaTriChoInput("", "", "", "", "", "", "", "", "");
  saveStorage(arrNhanVien);
  renderGiaoDien();
}
