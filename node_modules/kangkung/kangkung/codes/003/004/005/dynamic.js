// Fungsi untuk menambahkan elemen HTML secara dinamis
function addDynamicElements() {
    // Membuat elemen <div> dengan class="card"
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    
    // Membuat elemen <h2>
    var heading = document.createElement("h2");
    heading.textContent = "Ini adalah judul kartu";

    // Membuat elemen <p> untuk teks deskripsi
    var paragraph = document.createElement("p");
    paragraph.textContent = "Ini adalah deskripsi singkat mengenai kartu ini.";

    // Menambahkan elemen <h2> dan <p> ke dalam elemen <div> dengan class="card"
    cardDiv.appendChild(heading);
    cardDiv.appendChild(paragraph);

    // Menambahkan elemen <div> dengan class="card" ke dalam elemen dengan id="content"
    document.getElementById("content").appendChild(cardDiv);
}

// Memanggil fungsi addDynamicElements() saat halaman dimuat sepenuhnya
window.onload = addDynamicElements;
