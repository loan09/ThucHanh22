 function thanhToan() {
    alert("Bạn cần thanh toán:" + sum.innerText +" đ, và tổng số sản phẩm là: "+count.innerText);
    sum.innerText = 0;
    count.innerText = 0;
}
 function huy() {
    alert("Cảm ơn bạn đã chọn sản phẩm của chúng tôi!");
    sum.innerText = 0;
    count.innerText = 0;
}

class Product {
    constructor(gia) {
        this.gia = gia;
    }
}

let p1 = new Product(20000);
let p2 = new Product(30000);
let p3 = new Product(15000);
let p4 = new Product(25000);
let p5 = new Product(20000);
let p6 = new Product(20000);
let p7 = new Product(15000);
let p8 = new Product(20000);
let p9 = new Product(15000);
let p10 = new Product(15000);
let p11 = new Product(15000);
let p12 = new Product(20000);
let p13 = new Product(20000);
let p14 = new Product(30000);
let p15 = new Product(35000);
let p16 = new Product(30000);
let p17 = new Product(20000);
let p18 = new Product(20000);
let p19 = new Product(15000);
let p20 = new Product(15000);
let p21 = new Product(20000);
let p22 = new Product(20000);
let p23 = new Product(30000);
let p24 = new Product(15000);
let p25 = new Product(20000);
let p26 = new Product(25000);
let p27 = new Product(25000);
let p28 = new Product(30000);
let p29 = new Product(35000);
let p30 = new Product(20000);
let arrProduct = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30];
function addToCart(id) {
    sumInt = +sum.innerText;
    sumInt += arrProduct[id].gia;
    sum.innerText = sumInt;

    countInt = +count.innerText;
    countInt++;
    count.innerText = countInt;
}
