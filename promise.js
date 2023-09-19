// fetch('https://arya-teal.vercel.app/api/food-arrya-segara')
//     .then(response => response.json())
//     .then(response => console.log(response));

 //PROMISE ADALAH
 // SEBUAH OBJECT YANG MEMPRESTASIKAN KEBERHASILAN / KEGAGALAN SEBUAH EVENT YANG ASYNCHRONOUS 
 //YANG AKAN TERJADI DI MASA YANG AKAN DATANG
 //janji(terpenuhi / ingkar)
 // states (fulfield / rejected / pending)
 // callback (resolve / reject / finaly)
 // aksi (then / catch)

 // contoh 1
//  let ditepati = true;
//  const janji1 = new Promise((resolve,reject) => {
//     if(ditepati){
//         resolve('Janji telah di tepati');
//     }
//     else{
//         reject('Ingkar janji');
//     }
//  });

//  janji1
//     .then(response => console.log('OK : ' +response))
//     .catch(response => console.log('Not Ok : ' + response));


// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) =>{
//     if(ditepati){
//         setTimeout(() => {
//             resolve('ditepati beberapa waktu')
//         }, 2000);
//     }
//     else{
//         setTimeout(() => {
//             reject('tidak ditepati setelah beberapa waktu')
//         }, 2000);
//     }
// });

// console.log('mulai');

// // console.log(janji2.then(() => console.log(janji2))); // ini terlihat asyncoronus nya

//  janji2 // munculnya di akhir dan tidak terlihat asyncoronus nya
//     .finally(() => console.log('Selesai menunggu')) // finally dulu muncul baru muncul
                                                      //  then atau catch nya tergantung kondisinya
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('Not Ok : ' + response)); 

// console.log("selesai");



//Promise All 
const film = new Promise(resolve =>{
    setTimeout(() => {
        resolve([{
            judul : 'Spiderman No Way Home',
            sutradara : 'Arya Segara',
            aktor : 'Anwar , Anggi'
        }]);
    },1000);
});


const cuaca = new Promise(resolve =>{
    setTimeout(() => {
        resolve([{
            kota : 'Bandung',
            temperatur : 26,
            kondisi : 'Cerah Berawan'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film,cuaca])
    // .then(response => console.log(response)); // ini di gabung dalam bentuk array penggabungannya

    .then(response => {
        const [film,cuaca] = response;
        console.log(film);
        console.log(cuaca);
    }); // ini di pecah tidak dalam bentuk array penggabungannya jadi satu satu tampil nya