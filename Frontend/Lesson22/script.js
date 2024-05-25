// JSON - Js Object Notation

const data = [
  {
    a: 1,
  },
  {
    a: 2,
  },
];

const jsonString = JSON.stringify(data);
const jsonObj = JSON.parse(jsonString);

//   console.log(jsonString);
//   console.log(jsonObj);

const promise1 = new Promise((resolve, reject) => {
  //   resolve("testing");
  setTimeout(() => {
    reject("successful from promise 1");
  }, 1500);
});

// promise1
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// Promise.all
// Promise.allSettled
// Promise.any
// Promise.race

// Promise.resolve - birbasa fulfilled promise yaradir
// Promise.reject - birbasa rejected promise yaradir

// const promise2 = Promise.reject("error from promise 2");
const promise3 = Promise.resolve("successful from promise 3");

// promise2
//   .then((result) => {
//     console.log({ promise2: result });
//   })
//   .catch((error) => {
//     console.log({ promise2: error });
//   });

// promise3
//   .then((result) => {
//     console.log({ promise3: result });
//     return true;
//   })
//   .catch((error) => {
//     console.log({ promise3: error });
//   });

// console.log(promise2);

// Promise all - ilk rejected-e qeder isleyir, ve reject varsa reject eliyir, eks halda hamisi icra olunur
// Promise.all([promise1, promise2, promise3])
//   .then(([promise1Result, promise2Result, promise3Result]) => {
//     console.log({ promise1Result, promise2Result, promise3Result });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// Promise.allSettled - rejected ve ya resolved olmasina baxmayaraq butun sorgulari icra edir ve qaytarir
// Promise.allSettled([promise1, promise2, promise3]).then((result) => {
//   console.log({ result });
// });

// Promise.any - ilk resolve-u goturur ve netice resolve-a dushur, resolve olmayanda netice rejecte dushur
// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// Promise.race - ilk qarsilasdigi neticeye uygun olaraq netice qaytarir (resolve -> resolve edir) (reject -> reject edir)
// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// getBanners();
// getAds();
// getProducts();

// const userData = await getUserData();
// const companyData = await getCompanyData({ user_id: userData.id });
// const employeeData = await getEmployeeData({ company_id: companyData.id });

const getAllData = async () => {
  try {
    console.log("1");
    const result = await promise1;

    console.log(2);
    console.log({ result });
  } catch (error) {
    console.log({ error });
  } finally {
    console.log("finally code block");
  }
};

// Event loop - main code, micro task, macro task

getAllData();

const numbers = [1, 2, 3, 4, 5];

const [a, b, c] = numbers;

const dataa = {
  0: "Subhan",
};

// const {} = {};
// const [] = [];

// const {} = [];
