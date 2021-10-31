// object
const user1 = {
  name: "Theo",
  age: 34,
};
const user2 = {
  name: "John",
  age: 43,
};
const user3 = {
  name: "Nick",
  age: 12,
};

const user4 = {
  name: "Jack",
  age: 8,
};

const users = [user1, user2, user3, user4];

// 1. average age of users?

// First we get the ages from the Array
let usersAge = users.map((user) => {
  return user.age;
});
// Second we sum the ages
let totalAge = 0;
users.forEach((item) => {
  totalAge = totalAge + item.age;
});
// Third we get the average
let average = totalAge / usersAge.length;

console.log(`"The average ages is" ${average}`);

// 2. all adult users
//  Function to find ages 18 and higher
function adult(age) {
  return age >= 18;
}
usersAge = usersAge.filter(adult);

console.log(usersAge);

// 3. all adult users names
// Names from the array
// let usersName = users.map((users) => {
//   return users.name;
// });

// 4. all users but with their name in UPPERCASE, e.g. { name: 'JACK' }
let usersName = users.map((users) => {
  return users.name.toUpperCase();
});

console.log(usersName);
