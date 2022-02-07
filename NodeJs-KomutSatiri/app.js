/*
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
 Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/

let arg = process.argv.slice(2)
function circleAreaCalc(r){
    let area = Math.PI * (r * r)
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)
}

circleAreaCalc(arg[0]*1)