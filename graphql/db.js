export const Users = [
    {   
        id: "1",
        name: "manngold",
        age: 25,
        position: "Front-End",
    },
    {   
        id: "2",
        name: "fourfoot",
        age: 28,
        position: "Back-End"
    }
];

export const getById = id => {
    const filteredUser = Users.filter(user => user.id === String(id));
    console.log(filteredUser);
    return filteredUser[0];
};