var conf = true;
while (conf) {
  //Rule Kesempatan
  var kesempatan = 3;
  //Membangkitkan angka 1-10 dari komputer
  var comp = Math.floor(Math.random() * 10 + 1);
  console.log(comp);
  //set Masukkan awal
  var user = "";
  //Rule Game
  var hasil = "";

  while (kesempatan != 0 && user != comp) {
    var user = prompt(
      `Masukkan Angka 1-10\n anda memiliki ${kesempatan} kesempatan`
    );
    if (user == comp) {
      hasil = "Selamat Tebakan Anda Benar";
      kesempatan = 0;
    } else {
      kesempatan--;
      if (kesempatan != 0) {
        hasil = `Tebakan anda salah, anda masih memiliki ${kesempatan} kesempatan`;
      } else
        hasil =
          "Kesempatan anda telah habis\n angka yang dicari adalah " + comp;
    }
    alert(hasil);
  }
  conf = confirm("Apakah Ingin bermain Lagi?");
}
