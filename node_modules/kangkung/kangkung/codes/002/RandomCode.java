import java.util.*;

public class RandomCode {

    // Fungsi untuk menghasilkan string acak dengan panjang tertentu
    public static String generateRandomString(int length) {
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (int i = 0; i < length; i++) {
            sb.append(characters.charAt(random.nextInt(characters.length())));
        }
        return sb.toString();
    }

    // Fungsi untuk menghitung jumlah huruf vokal dalam sebuah string
    public static int countVowels(String str) {
        int count = 0;
        for (char c : str.toCharArray()) {
            if ("AEIOUaeiou".indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }

    // Fungsi untuk mengecek apakah sebuah string adalah palindrom atau tidak
    public static boolean isPalindrome(String str) {
        StringBuilder reversed = new StringBuilder(str).reverse();
        return str.equalsIgnoreCase(reversed.toString());
    }

    // Fungsi untuk menghasilkan list dengan string acak
    public static List<String> generateRandomStrings(int count, int length) {
        List<String> strings = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            strings.add(generateRandomString(length));
        }
        return strings;
    }

    // Fungsi untuk mencetak hasil-hasil yang dihasilkan
    public static void printResults() {
        List<String> randomStrings = generateRandomStrings(5, 10);
        System.out.println("Strings acak:");
        for (String str : randomStrings) {
            System.out.println(str);
        }
        System.out.println("Jumlah huruf vokal dalam setiap string:");
        for (String str : randomStrings) {
            System.out.println(countVowels(str));
        }
        System.out.println("Apakah setiap string adalah palindrom?");
        for (String str : randomStrings) {
            System.out.println(isPalindrome(str) ? "Ya" : "Tidak");
        }
    }

    // Method main untuk menjalankan program
    public static void main(String[] args) {
        printResults();
    }
}
