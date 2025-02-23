import bcrypt from 'bcryptjs';

const users = [ 
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Monkey D Luffy',
        email: 'luffy@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Roronoa Zoro',
        email: 'zoro@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];
export default users;