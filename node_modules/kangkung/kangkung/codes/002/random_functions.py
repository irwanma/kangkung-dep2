import random
import math

# Fungsi untuk menghasilkan bilangan bulat acak antara 1 dan 100
def generate_random_number():
    return random.randint(1, 100)

# Fungsi untuk menghitung faktorial dari suatu bilangan
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Fungsi untuk menghitung jarak absolut dari dua titik di dalam koordinat kartesian
def distance_between_points(x1, y1, x2, y2):
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

# Fungsi untuk mengecek apakah suatu string adalah palindrom atau tidak
def is_palindrome(s):
    return s == s[::-1]

# Fungsi untuk menghasilkan list dengan bilangan bulat acak
def generate_random_list(length):
    return [generate_random_number() for _ in range(length)]

# Fungsi untuk mencetak hasil-hasil yang dihasilkan
def print_results():
    random_list = generate_random_list(10)
    print("List acak:", random_list)
    for num in random_list:
        print(f"Faktorial dari {num} adalah {factorial(num)}")
    print(f"Jarak antara titik (1, 1) dan (4, 5) adalah {distance_between_points(1, 1, 4, 5)}")
    print("Apakah 'level' adalah palindrom?", is_palindrome("level"))
    print("Apakah 'python' adalah palindrom?", is_palindrome("python"))

# Memanggil fungsi untuk mencetak hasil-hasil
print_results()
