const myPromise = new Promise(function(resolve, reject) {
    const success = angkasa;

    if(success == angkasa){
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

myPromise
    .then(function(){
    console.log('Nama saya benar');
})
.catch(function(){
    console.log('Nama saya salah');
})
.finally(function(){
    console.log('Sistem promise itu telah selesai membaca variabel nama')
})