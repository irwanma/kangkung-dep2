// Inisialisasi array dengan 1000 angka acak antara 1 hingga 1000
let numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers.push(Math.floor(Math.random() * 1000) + 1);
}

// Fungsi untuk mengurutkan array menggunakan algoritma pengurutan gelembung (bubble sort)
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Mengurutkan array numbers
let sortedNumbers = bubbleSort(numbers);

// Menampilkan hasil pengurutan
console.log("Array yang diurutkan:");
console.log(sortedNumbers);
