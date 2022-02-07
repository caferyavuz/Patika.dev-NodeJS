let arg = process.argv.slice(2)
function circleAreaCalc(r){
    let area = Math.PI * (r * r)
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)
}

circleAreaCalc(arg[0]*1)