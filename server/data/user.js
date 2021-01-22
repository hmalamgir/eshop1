import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin user',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'tamim ahmed',
    email: 'tamim@mail.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'rafin ahmed',
    email: 'rafin@mail.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'shafin ahmed',
    email: 'shafin@mail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  }
];

export default users;
