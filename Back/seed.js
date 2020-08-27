const { User, Registry } = require("./models/index");

const user1 = User.create({
  email: "admin@admin.com",
  password: "123456",
  name: "Admin",
  isAdmin: true,
  createdAt: new Date(), 
  updatedAt: new Date()
});

const user2 = User.create({
  email: "sebastian@oowlish.com",
  password: "123456",
  name: "Sebastian",
  createdAt: new Date(), 
  updatedAt: new Date()
});

const registre1 = Registry.create({
  username: "Sebastian",
  UserId: 2,
  entry: "08/07/2020 10:01:10",
  out: "08/07/2020 18:54:11",
  lunchStart: "08/07/2020 12:45:10",
  lunchEnd: "08/07/2020 13:31:18",
  createdAt: new Date(), 
  updatedAt: new Date()
});

const registre2 = Registry.create({
  username: "Sebastian",
  UserId: 2,
  entry: "08/08/2020 09:10:21",
  out: "08/08/2020 18:05:10",
  lunchStart: "08/08/2020 12:10:01",
  lunchEnd: "08/08/2020 12:34:10",
  createdAt: new Date(), 
  updatedAt: new Date()
});

const registre3 = Registry.create({
  username: "Sebastian",
  UserId: 2,
  entry: "08/09/2020 08:40:00",
  out: "08/09/2020 17:55:00",
  lunchStart: "08/09/2020 12:01:06",
  lunchEnd: "08/09/2020 13:15:05",
  createdAt: new Date(), 
  updatedAt: new Date()
});
