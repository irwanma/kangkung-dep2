// Fungsi untuk menambahkan elemen HTML secara dinamis
function addDynamicElement() {
    // Membuat elemen <p>
    var paragraph = document.createElement("p");
    
    // Menambahkan teks ke dalam elemen <p>
    paragraph.textContent = "Ini adalah teks yang ditambahkan secara dinamis menggunakan JavaScript.";

    // Menambahkan elemen <p> ke dalam elemen dengan id="content"
    document.getElementById("content").appendChild(paragraph);
}
