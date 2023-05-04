// Luas permukaan tabung dapat dikatakan sebagai luas dari jumlah sisi yang dimiliki tabung.
// Lp = 2πr² + 2πrT

// π = 22/7 atau 3.14
// r = radius (jari - jari lingkaran)
// T = tinggi tabung

// Buatlah sebuah program untuk menghitung luas permukaan tabung! Pada program ini kamu akan diberikan
// sebuah inputan tinggi tabung (T) dan jari - jari lingkaran (r)

// input
let T = 20;
let r = 4;
let pi = 3.14;

//code
let luasPermukaanTabung = 2 * pi * r * r + 2 * pi * r * T;

console.log("Luas Permukaan Tabung adalah : ", luasPermukaanTabung);
