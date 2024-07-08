class User {
  constructor(name) {
    this.id = Math.floor(Math.random() * 100) + 1;
    this.name = name;
  }

  logIn(username, password) {
    const isRegistered = this.validateUser(username, password);

    console.log(
      isRegistered
        ? `Welcome, ${this.name}! (${this.showTimeline(username)})`
        : "Username or password is incorrect. Try it again."
    );
  }

  validateUser(username, password) {
    return usersDatabase.some((userDataBase) => username === userDataBase.username && password === userDataBase.password);
  }

  showTimeline(username) {
    const userTimeline = usersTimeline.find(
      (userTimeline) => username === userTimeline.username
    ).timeline;

    return userTimeline ? userTimeline : "User has no timeline yet.";
  }
}

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caroline",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "andres",
    timeline: "I love JavaScript!",
  },
  {
    username: "caroline",
    timeline: "Python is the best",
  },
  {
    username: "mariana",
    timeline: "I like more coffee than tea",
  },
];

const user1 = new User("Mariana");
// console.log("Id: " + user1.id);
// console.log("Name: " + user1.name);
// console.log("Timeline: " + user1.showTimeline("andres"));
user1.logIn("mariana", "789");
