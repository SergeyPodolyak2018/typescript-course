// 1. Heloo World task
// TODO: creaate excercise1 folder
// TODO: check node version
// TODO: check npm version
// TODO: check npx version
// TODO: init npm project
// TODO: install typescript
// TODO: generate tsconfig.json

// TODO: create src/index.ts with this code
function excercise1() {
    const greeting: string = 'Hello World';
    console.log(greeting);
  }
  excercise1();
  // TODO: run typescript in watch mode
  // TODO: compare with javascript generated by typescript
  
  // 2. loop which prints string to console n times
  function excercise2() {
    // declare two varaibles - one of string, one of type number
    // assign string var value 'Hello'
    // assign number var value 3
    // create a while loop which prints string variable to console 3 times
    // try to assign number variable to string variable - observe the error
    const firstVar: string = 'Hellow';
    let secondVar: number = 3;
    while (secondVar !== 0) {
      console.log(firstVar);
      secondVar--;
    }
    //firstVar = secondVar;
  }
  excercise2();
  
  // 3. code that generates array of numbers - from n to m
  function excercise3() {
    // TODO: declare varaibles n and m of type number
    // TODO: declare varaible result of type array of numbers
    // TODO: assign n and m some values - n = 1, m = 10
    // TODO: create a for loop which adds numbers from n to m to result array
    // TODO: support case where m > n (reverse the order)
    const m: number = -1;
    const n: number = 10;
    const result: number[] = [];
    for (let i: number = 0; i <= Math.abs(n - m); i++) {
      if (n < m) {
        result.push(n + i);
      } else {
        result.push(n - i);
      }
    }
    console.log(result);
  }
  excercise3();
  // TODO: compile and run the code
  
  // 4. Create a function which uses tuple type to calculate the distance between two points in 2D space
  function excercise4() {
    // TODO: declare two variables of type tuple, each with two numbers
    // TODO: assign values to the variables (1,1) and (4,5)
    // TODO: create a function which calculates the distance between two points in 2D space
    const point1: [number, number] = [1, 1];
    const point2: [number, number] = [4, 5];
    function distance(p1: [number, number], p2: [number, number]): number {
      const [x1, y1] = p1;
      const [x2, y2] = p2;
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  
      // TODO: calculate the distance
    }
    // TODO: call the function and print the result to console
    console.log(distance(point1, point2));
  }
  // TODO: compile and run the code
  excercise4();
  
  // 5. Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
  function excercise5() {
    // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
    // TODO: declare two variables of type TPoint
    // TODO: assign values to the variables (1,1) and (4,5)
    // TODO: create a function which calculates the distance between two points in 2D space
    type TPoint = { x: number; y: number };
    const point1: TPoint = { x: 1, y: 1 };
    const point2: TPoint = { x: 4, y: 5 };
    function distance(p1: TPoint, p2: TPoint): number {
      const { x: x1, y: y1 } = p1;
      const { x: x2, y: y2 } = p2;
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  
      // TODO: calculate the distance
      // TODO: calculate the distance
      // TODO: rewrite code to use distructuring to get x and y from p1 and p2
    }
    // TODO: call the function and print the result to console
    console.log(distance(point1, point2));
  }
  // TODO: compile and run the code
  
  excercise5();
  