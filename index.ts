// Task 1

const greet = (firstName: string) => {
  return `Hello ${firstName}`;
};

greet("Student");

// Task 2

const double = (n: number) => {
  return n * 2;
};
console.log(double(5));

// Task 3

const isEven = (num: number) => {
  return num % 2 === 0;
};
console.log(isEven(4));

// Task 4

const square = (x: number) => {
  return x * x;
};
console.log(`Square of 3 is ${square(3)}`);

// Task 5

const getAge = (year: number) => {
  return 2026 - year;
};
console.log(`Age is ${getAge(1990)}`);

// Task 6
const prices: number[] = [10, 20, 30];
let total = 0;
prices.forEach((p) => {
  total += p;
});
console.log(`Total is ${total}`);

// Task 7

const user = { name: "John" };
const sayHi = () => {
  console.log(`Hi ${user.name}`);
};
sayHi();

// Task 8

const colors = ["red", "blue"];
colors.forEach((c) => {
  console.log(`Color: ${c}`);
});

// Task 9

const items = [1, 2, 3];
const doubled: number[] = items.map((i) => {
  return i * 2;
});
console.log(`doubled: ${doubled}`);

// Task 10
const checkAuth = (user: { isAdmin: boolean }): boolean => {
  return user.isAdmin;
};
console.log(`Is Admin: ${checkAuth({ isAdmin: true })}`);

// Task 11
import fs from "fs/promises";
const read = async (path: string): Promise<void> => {
  try {
    const data = await fs.readFile(path, "utf-8");
    console.log(`File data: ${data}`);
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
};
read("data.txt");

// Task 12
const getData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Data from ${url}:`, data);
    return data;
  } catch (err) {
    console.error(`Error fetching data from: ${err}`);
  }
};
getData("https://jsonplaceholder.typicode.com/todos/1");

// Task 13
const process = (data: number[]): number[] => {
  return data
    .filter((x) => {
      return x > 10;
    })
    .map((x) => {
      return x * 2;
    });
};
console.log(`Processed data: ${process([5, 15, 25])}`);

// Task 14
const timer = (ms: number): Promise<void> => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};
const testTimer = async (): Promise<void> => {
  try {
    await timer(2000);
    console.log("Timer completed");
  } catch (err) {
    console.error(`Error in timer: ${err}`);
  }
};
testTimer();

// Task 15

const logErr = (m: string) => {
  return console.error(`Error: ${m}`);
};
logErr("Something went wrong");
