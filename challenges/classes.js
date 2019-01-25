// 1. Copy and paste your prototype in here and refactor into class syntax.
//changed the class name so there's not a naming conflict in the console
class CuboidMaker2 {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2 {
  constructor(attr2) {
    super(attr2);
  }
  volumeCube(width) {
    return this.width ** 3;
  }
  surfaceAreaCube(width) {
    return 6 * this.width ** 2;
  }
}

const cube1 = new CubeMaker({
  width: 10,
  length: 10,
  height: 10
});

console.log(cube1.volumeCube());
console.log(cube1.surfaceAreaCube());
