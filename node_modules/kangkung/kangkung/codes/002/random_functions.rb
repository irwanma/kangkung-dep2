# Fungsi untuk menghasilkan angka acak antara 1 dan 100
def generate_random_number
    rand(1..100)
  end
  
  # Fungsi untuk menghitung faktorial dari suatu bilangan
  def factorial(n)
    n == 0 ? 1 : n * factorial(n - 1)
  end
  
  # Fungsi untuk menghitung jarak antara dua titik dalam koordinat kartesian
  def distance_between_points(x1, y1, x2, y2)
    Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
  end
  
  # Fungsi untuk mengecek apakah suatu string adalah palindrom atau tidak
  def is_palindrome?(s)
    s == s.reverse
  end
  
  # Fungsi untuk menghasilkan array dengan angka acak
  def generate_random_array(length)
    Array.new(length) { generate_random_number }
  end
  
  # Fungsi untuk mencetak hasil-hasil yang dihasilkan
  def print_results
    random_array = generate_random_array(10)
    puts "Array acak: #{random_array}"
    random_array.each do |num|
      puts "Faktorial dari #{num} adalah #{factorial(num)}"
    end
    puts "Jarak antara titik (1, 1) dan (4, 5) adalah #{distance_between_points(1, 1, 4, 5)}"
    puts "Apakah 'level' adalah palindrom? #{is_palindrome?('level')}"
    puts "Apakah 'ruby' adalah palindrom? #{is_palindrome?('ruby')}"
  end
  
  # Memanggil fungsi untuk mencetak hasil-hasil
  print_results
  