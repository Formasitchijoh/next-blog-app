const users = [
  {
    id: '1234658hjv',
    name: "Formasit Chijoh",
    email: "user@nextmail.com",
    password: "123456",
    role: "admin",
    image_url: "",
    socials: {
      facebook: "",
      x: "",
      linkedIn: "",
    },
  },
  {
    id: '1234658hjv',
    name: "Samanta",
    email: "user@nextmail.com",
    password: "123456",
    role: "admin",
    image_url: "",
    socials: {
      facebook: "",
      x: "",
      linkedIn: "",
    },
  }, {
    id: '1234658hjv',
    name: "Formasit Musongo",
    email: "user@nextmail.com",
    password: "123456",
    role: "admin",
    image_url: "",
    socials: {
      facebook: "",
      x: "",
      linkedIn: "",
    },
  }, {
    id: '1234658hjv',
    name: "Ndalegh Chijoh",
    email: "user@nextmail.com",
    password: "123456",
    role: "admin",
    image_url: "",
    socials: {
      facebook: "",
      x: "",
      linkedIn: "",
    },
  }, {
    id: '1234658hjv',
    name: "Formasit Nancy",
    email: "user@nextmail.com",
    password: "123456",
    role: "admin",
    image_url: "",
    socials: {
      facebook: "",
      x: "",
      linkedIn: "",
    },
  },
];

const posts = [
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    image_url: "",
    title: "Tech  bootcamp",
    description: "something i want to say something i want to saysomething i want to saysomething i want to say",
    author: users[0].name,
    likes: 3,
    status: "private",
    date: '2022-10-29',
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    image_url: "",
    title: "Tech  bootcamp",
    description: "something i want to say",
    author: users[1].name,
    likes: 3,
    status: "public",
    date: '2022-11-29',
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    image_url: "",
    title: "Tech  bootcamp",
    description: "something i want to say",
    author: users[3].name,
    likes: 3,
    status: "public",
    date: '2022-10-2',
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    image_url: "",
    title: "Tech  bootcamp",
    description: "something i want to say",
    author: users[4].name,
    likes: 3,
    status: "private",
    date: '2023-10-29',
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    image_url: "",
    title: "Tech  bootcamp",
    description: "something i want to say",
    author: users[2].name,
    likes: 3,
    status: "public",
    date: '2022-10-29',
  },
];


module.exports = {
    users, posts
}