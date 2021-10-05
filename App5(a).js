const radius = 20;
const length = 4;
const width = 2;
const height = 30;

function areaofCircle(radius) {
    return 3.14 * radius * radius;
}

function areaofRectangle(length, width) {
    return length * width;
}

function areaofCylinder(radius, height) {
    return 2 * 3.14 * radius * height + 2 * 3.14 * Math.pow(radius, 2);
}

export { radius, height, length, width, areaofCircle, areaofCylinder, areaofRectangle };