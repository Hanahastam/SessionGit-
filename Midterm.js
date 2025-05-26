// Question 1
const checkIfNumbers = (arr) => {
  for (let item of arr) {
    if (typeof item !== 'number') {
      return "عنصری عدد نیست!";
    }
  }
  return "همه عناصر عدد می باشند";
};


console.log(checkIfNumbers([1, 2, 'Hana']));  

"--------------------------------------------------------------------------"

// Question 2 
const students = [
  { name: "Ali", grade: 16 },
  { name: "Sara", grade: 18 },
  { name: "Reza", grade: 19 },
  // {},
  // { name: "hana" },
  { grade: 20 }
];

if (!students || students.length === 0) {
  console.log("خطا: هیچ دانشجویی وارد نشده.");
} else {
  const highLevelStudents = [];

  for (let i = 0; i < students.length; i++) {
    const item = students[i];

    if (typeof item !== "object" || item === null) {
      console.log("خطا: ورودی معتبر نیست.");
      continue;
    }

    if (Object.keys(item).length === 0) {
      console.log("خطا: آبجکت خالیه.");
      continue;
    }

    if (!("name" in item)) {
      console.log("خطا: نام وارد نشده.");
      continue;
    }

    if (!("grade" in item)) {
      console.log("خطا: نمره وارد نشده.");
      continue;
    }

    if (item.grade > 17) {
      highLevelStudents.push(item.name);
    }
  }

  console.log("دانشجویان با معدل بالا:", highLevelStudents);
}


"--------------------------------------------------------------------------"

// Question 3
const calculator = {
  name: "math",

  math: function (a, b) {
    return a + b;
  },

  substract: function (a, b) {
    return a - b;
  }
};

console.log(calculator.name);          
console.log(calculator.math(2, 6));   
console.log(calculator.substract(2, 6)); 

"--------------------------------------------------------------------------"

// Question 4
function sum_numbers_to_n(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    return "ورودی باید عدد صحیح باشد!"; //استاد داخل صورت سوال نبود ولی برای مبحث clean code،اعتبارسنجی گذاشتم
  }

  if (n === 1) {
    return 1;
  }

  return n + sum_numbers_to_n(n - 1);
}

console.log(sum_numbers_to_n(5));






