// Задание 1

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
//     }

// for (value in numbers) {
//     if (numbers[value] >= 3) {
//         console.log(numbers[value])
//     }
// }

// Задание 2

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
    
//     comments: [ {
//         userId: 10,
//         userName: "Alex",
//         text: "lorem ipsum",

//         rating: {
//             likes: 10,
//             dislikes: 2, // вывести это число
//             },

//     },

//     {
//     userId: 5, // вывести это число
//     userName: "Jane",
//     text: "lorem ipsum 2", // вывести этот текст

//     rating: {
//     likes: 3,
//     dislikes: 1,
//     },
//     },
//     ],

//     };
    
// console.log(post.author) // первый вывод
// console.log(post.comments[0].rating.dislikes) //второй вывод
// console.log(post.comments[1].userId) //третий вывод
// console.log(post.comments[1].text) // четвёртый вывод

// Задание 3

// const products = [
//     { id: 3, price: 200 },
//     { id: 4, price: 900 },
//     { id: 1, price: 1000 },
//     ];

// products.forEach(elem => {
//     elem.price = (elem.price - elem.price * 0.15 )
// })

// console.log(products)

// Задание 4

// const products = [
//     {
//     id: 3, price: 127,
//     photos: [ "1.jpg", "2.jpg" ],},
   
//     {id: 5, price: 499,
//     photos: [],},
    
//     {id: 10, price: 26,
//     photos: ["3.jpg",] },

//     { id: 8, price: 78},
//     ];

// const productsWithPhoto = products.filter((goods) => {
//     if (goods.photos && goods.photos != 0) console.log(goods)
// })

// products.sort(function (a, b) {
//     return a.price - b.price
// })

// console.log(products)

// Задание 5

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// function mergeDayOfWeek(en, ru){
//     let newWeek = {};
//     en.forEach((i, j) => {newWeek[i] = ru[j]})
//     return newWeek;
//   }

//   console.log(mergeDayOfWeek(en, ru))