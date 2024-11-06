//take radio input
const radioP = document.getElementById("radioP");
const radioW = document.getElementById("radioW");

radioP.checked = false;
radioW.checked = false;
//pemilihan check
radioP.addEventListener("click", function () {
  radioW.checked = false;
});
radioW.addEventListener("click", function () {
  radioP.checked = false;
});

function validateData() {
  let bb = document.getElementById("bb").value;
  let tb = document.getElementById("tb").value;
  console.log(bb);
  console.log(tb);

  if (!bb && !tb) {
    alert("Mohon isi Berat Badan & Tinggi Badan anda");
  } else if (!bb) {
    alert("Mohon isi Berat Badan anda.");
  } else if (!tb) {
    alert("Mohon isi Tinggi Badan anda.");
  }
}

function refresh() {
  window.location.reload("Refresh");
}

// ambil data form
const hitungBtn = document.getElementById("hitung-btn");
hitungBtn.addEventListener("click", function () {
  let bb = document.getElementById("bb").value;
  let tb = document.getElementById("tb").value;
  const deskripsi = document.getElementById("deskripsi");
  const penjelasan = document.getElementById("penjelasan");
  let kotak = document.getElementById("kotak-hasil");

  //perhitungan
  tb = tb / 100;
  let result = bb / tb ** 2;
  result = result.toFixed(1);
  //ngambil nilai perhitungan
  const nilai = document.getElementById("angkaBMI");
  nilai.innerHTML = result;
  //logika penentu result
  if (result < 18.5) {
    deskripsi.innerHTML =
      "Kamu <span style='color: rgb(228, 198, 0); font-weight: bold'>Kekurangan</span>  berat badan ";
    kotak.classList.add("bg-kuning");
  } else if (result >= 18.5 && result <= 24.9) {
    deskripsi.innerHTML =
      "Berat badan kamu <span style='color: rgb(28, 205, 146); font-weight: bold'>Ideal</span> ";
    kotak.classList.add("bg-ijo");
  } else if (result >= 25 && result <= 29.9) {
    deskripsi.innerHTML =
      "Berat badan kamu <span style='color: rgb(255, 140, 0); font-weight: bold'>Berlebih</span> ";
    kotak.classList.add("bg-oren");
  } else if (result > 30) {
    deskripsi.innerHTML =
      "Berat badan kamu <span style='color: red ; font-weight: bold'>Obesitas</span> ";
    kotak.classList.add("bg-merah");
  }
  //penjelasan tetang Hasil
  if (result < 18.5) {
    penjelasan.innerHTML =
      "Badan kamu kekurangan Berat Badan, makan lah lebih banyak dan bergizi ";
  } else if (result >= 18.5 && result <= 24.9) {
    penjelasan.innerHTML =
      "Selamat Berat badan kamu sudah ideal, jagalah pola makan  ";
  } else if (result >= 25 && result <= 29.9) {
    penjelasan.innerHTML =
      "Berat Badan kamu sudah mulai berlebih sebaiknya mulailah untuk berolahraga dan mengurangi kalori harian</span> ";
  } else if (result > 30) {
    penjelasan.innerHTML =
      "Berat Badan kamu sudah berlebihan segera untuk berolahraga dan mengurangi kalori harian ";
    console.log(kotak);
    kotak.classList.add("bg-merah");
  }
});
