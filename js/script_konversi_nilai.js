function konversi() {
    let nilai_angka = document.getElementsByClassName("nilai_angka");
    if (nilai_angka[0].value >= 90) grade = "A";
    else if (nilai_angka[0].value >= 80) grade = "B+";
    else if (nilai_angka[0].value >= 70) grade = "B";
    else if (nilai_angka[0].value >= 60) grade = "C+";
    else if (nilai_angka[0].value >= 50) grade = "C";
    else if (nilai_angka[0].value >= 40) grade = "D";
    else if (nilai_angka[0].value >= 30) grade = "E";
    else grade = "F";
    document.getElementById("hasil2").innerHTML = grade;
  }