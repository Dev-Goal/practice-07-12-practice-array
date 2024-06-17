let a = prompt("Nhập giá trị mà bạn muốn tìm");
let b = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let c = -1;
for (let i = 0; i < b.length; i++) {
  if (a == b[i]) {
    c = i;
  }
}
if (c > -1) {
  alert("Giá trị " + a + " có ở trong mảng và ở vị trí " + c);
} else {
  alert("Giá trị " + a + " không có ở trong mảng");
}

