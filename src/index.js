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
const usersAgeCall = [user1.age + user2.age + user3.age + user4.age];
const usersAge = [user1.age, user2.age, user3.age, user4.age];
const usersName = [user1.name, user2.name, user3.name, user4.name];

function UsersAverageAge() {
  let ages = usersAgeCall / users.length;
  console.log("The average age is", ages);
}

function onlyAdultUsers() {
  for (let i = 0; i < usersAge.length; i++) {
    let adult = usersAge[i] > 18;
    console.log(adult);
  }
}
function AllNameUpper() {
  for (let i = 0; i < usersName.length; i++) {
    let names = usersName[i];
    console.log(names.toUpperCase());
  }
}

UsersAverageAge();
onlyAdultUsers();
AllNameUpper();

// 1. average age of users?

// 2. all adult users

// 3. all adult users names

// 4. all users but with their name in UPPERCASE, e.g. { name: 'JACK' }
