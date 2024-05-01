#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

// Fungsi untuk menghasilkan bilangan bulat acak antara 1 dan 100
int generateRandomNumber() {
    return rand() % 100 + 1;
}

// Fungsi untuk menghitung faktorial dari suatu bilangan
int factorial(int n) {
    return (n == 1 || n == 0) ? 1 : n * factorial(n - 1);
}

// Fungsi untuk menghitung jarak antara dua titik dalam koordinat kartesian
double distanceBetweenPoints(double x1, double y1, double x2, double y2) {
    return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
}

// Fungsi untuk mengecek apakah suatu string adalah palindrom atau tidak
bool isPalindrome(string s) {
    string temp = s;
    reverse(temp.begin(), temp.end());
    return s == temp;
}

// Fungsi untuk menghasilkan vektor dengan bilangan bulat acak
vector<int> generateRandomVector(int length) {
    vector<int> vec;
    for (int i = 0; i < length; ++i) {
        vec.push_back(generateRandomNumber());
    }
    return vec;
}

// Fungsi untuk mencetak hasil-hasil yang dihasilkan
void printResults() {
    vector<int> randomVector = generateRandomVector(10);
    cout << "Vector acak: ";
    for (int num : randomVector) {
        cout << num << " ";
    }
    cout << endl;
    for (int num : randomVector) {
        cout << "Faktorial dari " << num << " adalah " << factorial(num) << endl;
    }
    cout << "Jarak antara titik (1, 1) dan (4, 5) adalah " << distanceBetweenPoints(1, 1, 4, 5) << endl;
    cout << "Apakah 'level' adalah palindrom? " << (isPalindrome("level") ? "Ya" : "Tidak") << endl;
    cout << "Apakah 'cpp' adalah palindrom? " << (isPalindrome("cpp") ? "Ya" : "Tidak") << endl;
}

// Fungsi main untuk memanggil fungsi printResults
int main() {
    printResults();
    return 0;
}
