// function myfirst(){
//     myDisplayer("good bye");
// }
// function mySecond(callback){
//     myDisplayer("hello");
//     callback();
// }
// function myDisplayer(message){
//     console.log(message);
// }
// mySecond(myfirst);

// console.log("paragraf 1");
// setTimeout(() => {
//     console.log("paragraf 2");
// },3000);
// console.log("paragraf 3");

// function setTime() {
//     const header = document.getElementById("header");
//     header.textContent = new Date().toString();
//   }
//   setInterval(setTime, 1000);
//   console.log("Program Finish");

// try {
//     let num = 5
//     num.toUpperCase()
// }catch (error) {
//     console.log('an error :' + error.message)
//     throw
// }

// Misalkan kita ingin membuat fungsi untuk membagi dua angka. 
// Fungsi ini harus memeriksa apakah input berupa angka dan 
// apakah pembagian yang dilakukan tidak membagi dengan 
// nol (karena pembagian dengan nol akan menghasilkan nilai Infinity 
//     yang tidak valid dalam konteks ini). Jika terjadi kesalahan, 
//     fungsi akan menangkapnya dan menampilkan pesan kesalahan.

function bagi(a, b) {
    try {
      // Memeriksa apakah a dan b adalah angka
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
      }
  
      // Memeriksa apakah b (pembagi) tidak nol
      if (b === 0) {
        throw new Error('Tidak dapat membagi dengan nol');
      }
  
      // Melakukan pembagian jika semuanya valid
      return a / b;
      
    } catch (error) {
      // Menampilkan pesan kesalahan jika ada yang salah
      console.error('Terjadi kesalahan:', error.message);
    }
  }
  
  // Contoh penggunaan
  console.log(bagi(10, 2)); // Output: 5
  console.log(bagi(10, 0)); // Output: Terjadi kesalahan: Tidak dapat membagi dengan nol
  console.log(bagi(10, 'a')); // Output: Terjadi kesalahan: Input harus berupa angka
  