// Fungsi untuk menghasilkan angka acak antara 1 dan 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Fungsi untuk menghitung faktorial dari suatu bilangan
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Fungsi untuk menghitung nilai mutlak dari selisih dua angka
function absoluteDifference(a, b) {
    return Math.abs(a - b);
}

// Fungsi untuk mengecek apakah suatu bilangan prima atau bukan
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Fungsi untuk menghasilkan array dengan angka acak
function generateRandomArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(generateRandomNumber());
    }
    return arr;
}

// Fungsi untuk mencetak nilai faktorial, perbedaan absolut, dan keprimaan array acak
function printResults() {
    let randomArray = generateRandomArray(10);
    console.log("Array acak:", randomArray);
    randomArray.forEach(num => {
        console.log(`Faktorial dari ${num} adalah ${factorial(num)}.`);
    });
    console.log(`Perbedaan absolut antara angka pertama dan terakhir adalah ${absoluteDifference(randomArray[0], randomArray[randomArray.length - 1])}.`);
    console.log("Bilangan prima dalam array:", randomArray.filter(num => isPrime(num)));
}

// Memanggil fungsi untuk mencetak hasil
printResults();
