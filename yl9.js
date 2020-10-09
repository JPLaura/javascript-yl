const side1 = 24
const side2 = 45
const side3 = 56

let sides = sides.sort([side1, side2, side3])
let added = sides[1] + sides[0]

if (sorted[2] > added) {
    console.log("Yes")
}
else {
    console.log("Oops")
}



if (side1 == side2 == side3) {
    console.log("Võrdkülgne")
}
    else if (side1 != side2 == side3) {
        console.log("Võrdhaarne")
}
    else {
        console.log("no")
}