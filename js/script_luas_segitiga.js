function hitung_luas_segitiga() {
    let a = document.getElementById("alas").value;
    let t = document.getElementById("tinggi").value;
  
    let hasil = 0.5 * a * t;
    document.getElementById("hasil").innerHTML = hasil;
  }