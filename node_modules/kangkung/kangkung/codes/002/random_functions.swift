import Foundation

// Fungsi untuk menghasilkan bilangan bulat acak antara 1 dan 100
func generateRandomNumber() -> Int {
    return Int.random(in: 1...100)
}

// Fungsi untuk menghitung faktorial dari suatu bilangan
func factorial(_ n: Int) -> Int {
    if n == 0 || n == 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

// Fungsi untuk menghitung jarak antara dua titik dalam koordinat kartesian
func distanceBetweenPoints(x1: Double, y1: Double, x2: Double, y2: Double) -> Double {
    return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
}

// Fungsi untuk mengecek apakah suatu string adalah palindrom atau tidak
func isPalindrome(_ s: String) -> Bool {
    return s == String(s.reversed())
}

// Fungsi untuk menghasilkan array dengan bilangan bulat acak
func generateRandomArray(length: Int) -> [Int] {
    var array = [Int]()
    for _ in 0..<length {
        array.append(generateRandomNumber())
    }
    return array
}

// Fungsi untuk mencetak hasil-hasil yang dihasilkan
func printResults() {
    let randomArray = generateRandomArray(length: 10)
    print("Array acak: \(randomArray)")
    for num in randomArray {
        print("Faktorial dari \(num) adalah \(factorial(num))")
    }
    print("Jarak antara titik (1, 1) dan (4, 5) adalah \(distanceBetweenPoints(x1: 1, y1: 1, x2: 4, y2: 5))")
    print("Apakah 'level' adalah palindrom? \(isPalindrome("level"))")
    print("Apakah 'swift' adalah palindrom? \(isPalindrome("swift"))")
}

// Memanggil fungsi untuk mencetak hasil-hasil
printResults()
