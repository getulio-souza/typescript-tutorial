// console.log("hello world");

// // interface someValue {
// //   name: string,
// //   id: number
// // }

// // let someObj: someValue = {
// //   name: "getulio",
// //   id: 1
// // }

// // console.log(someObj)

// let aweasomeName: string = "getulio"
// aweasomeName = "something"
// aweasomeName = aweasomeName.toUpperCase()
// console.log(aweasomeName);

// let amount: number = 20
// amount = 12 - 1;
// console.log(amount)


// let isOpen: boolean = true
// isOpen = false;
// console.log(isOpen)


//string
// let name:string = "getulio"
// name.toUpperCase()
// console.log(name)

// //number
// let number1: number = 100;
// let number2: number = 50

// let amount = number1 + number2
// console.log('amount:',amount)

// //boolean
// let isDoorOpen: boolean = true;
// console.log(isDoorOpen)
// isDoorOpen = false;
// console.log(isDoorOpen)

// //union type

// let tax: number | string = 10;
// tax = 100;
// tax = "$10"

// let requestStatus: "pending" | "success" | "error" = "pending"
// requestStatus = "error"
// requestStatus = "success"

// let notSure: any = 4;
// notSure = "there is a string here"
// notSure = 1232;
// notSure = false


//small task

// const books = ["book 1", "book 2", "book 3"];

// let foundBook: string | undefined;

// books.forEach((item) => {
//   if (item === "book 1") {
//     foundBook = item;
//     foundBook = foundBook.toUpperCase()
//   }
// })

// console.log(foundBook?.length)

// let orderStatus: "processing" | "shipped" | "delivered" = "processing";

// orderStatus = "shipped"

//OBJECTS AND ARRAYS

// let numberArray: number[] = [1, 2, 3, 4]
// numberArray.push(5, 6, 7)

// console.log(numberArray)

// let stringArray: string[] = ["name 1", "name 2", "name 3"]
// stringArray.push("name 4")
// console.log(stringArray)


// let names: (string | boolean)[] = ["apple", true, "orange", false]


// //temperatures, colors and both

// let temperatures: number[] = [20, 25, 30];
// // temperatures.push("hot")


// let colors: string[] = ["red", "green", "blue"];
// // colors.push(true)

// let mixArray: (number | string)[] = [20, "yellow", 50]
// console.log(mixArray)

// //cars

// let car: {brand: string, year: number, color: string} = {brand: "toyota", year: 2020, color: "black"}

// car.brand = "ford";
// car.color = "yellow";


// //creating an array of objects
// let book = { title: "book", cost: 20 }
// let pen = { title: "pen", cost: 10 };
// let notebook = { title: "notebook" }

// let items: { readonly title: string, cost?: number }[] = [book, pen, notebook];
// console.log(items)


// let bike = { brand: "dell", year: 2020}
// let bike2 =  { brand: "Lenovo", year: 2017 }

// let products: { brand: string, year?: number }[] = [bike, bike2]
// products.push({ brand: "HP" })
// console.log(products);



//========== FUNCTIONS PARAMS AND FUNCTIONS RETURNS ============== //

// const sayHello = (name: string) => {
//   console.log(`hello, ${name.toLocaleUpperCase()}`)
// }
// sayHello("getulio")

// const calculateDiscount = (price: number) => {
//   const hasDiscount = true;

//   if (hasDiscount) {
//     return price * 0.9;
//   }
// }

// const finalPrice = calculateDiscount(100)
// console.log(finalPrice)

// //be careful with any

// const myFunction = (id: number) => {
//   const firstNumber: number = 3
//   return id + firstNumber
// }

// myFunction(3)
// console.log(myFunction)


// ========= ARRAY OF NAMES - CHALLENGE ======= //

const namesArray: string[] = ["pedro", "marcos", "douglas"];

const checkNames = (name: string) => {
  const isValidName = true;

  if (namesArray.includes(name)) {
  console.log("there is a name in the array")
    return isValidName
  }
  console.log("there is no match in the array")
}

console.log(checkNames("pedro1"))


///teachers answer

const namesList: string[] = ["name1, name2, name3"];

const isNameOnList = (name: string):boolean => {
  return namesList.includes(name);
}

const nameToCheck = "name1"

if (isNameOnList(nameToCheck)) {
  console.log(`this ${nameToCheck} is on the list`)
}
  console.log(`this ${nameToCheck} is NOT on the list`)

