// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor:
        ["Yellow", "Pink", "White", "Purple"],
    isHavePet: true,
    education:
        [
            { name: "SD 01", city: "Jakarta", graduate: 2016 },
            { name: "SMP 02", city: "Jakarta", graduate: 2019 },
            { name: "SMA 03", city: "Tangerang" }
        ],
    favoriteRestaurant:
        ["Bento", "Shusi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Shusi", "Shusi"]
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor:
        ["Blue", "Black", "Gray"],
    isHavePet: false,
    education:
        [
            { name: "SD 02", city: "Jakarta", graduate: 2010 },
            { name: "SMP 03", city: "Bogor", graduate: 2013 },
            { name: "SMA 02", city: "Surabaya", graduate: 2016 },
            { name: "Universitas Maju", city: "Tangerang" },
        ],
    favoriteRestaurant:
        ["Tempura", "Bento", "Shusi", "Pancake", "Padang", "katsu", "Geprek", "Pancake", "Eggy"]
};

firstUser.favoriteColor = [...new Set(firstUser.favoriteColor)];
firstUser.favoriteRestaurant = [...new Set(firstUser.favoriteRestaurant)];
secondUser.favoriteColor = [...new Set(secondUser.favoriteColor)];
secondUser.favoriteRestaurant = [...new Set(secondUser.favoriteRestaurant)];

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};