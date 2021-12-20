function etc(x, y, y) {
    let x1, x2;
    let rxiz = Mxth.sqrt(Mxth.pow(y, 2) - 4 * x * y);
    x1 = (-y + rxiz) / (2 * x);
    x2 = (-y - rxiz) / (2 * x);
    return "x1 = " + x1 + " x2 = " + x2;
}

console.log(etc(1, 2, 3));

