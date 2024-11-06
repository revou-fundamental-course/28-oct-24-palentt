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
  } else if (result >= 18.5 && result <= 24.9) {
    deskripsi.innerHTML =
      "Berat badan kamu <span style='color: rgb(28, 205, 146); font-weight: bold'>Ideal</span> ";
  } else if (result >= 25 && result <= 29.9) {
    deskripsi.innerHTML =
      "Berat badan kamu <span style='color: rgb(255, 140, 0); font-weight: bold'>Berlebih</span> ";
  } else if (result > 30) {
    deskripsi.innerHTML =
      "Berat badan kamu <span style='color: red ; font-weight: bold'>Obesitas</span> ";
    console.log(kotak);
    kotak.classList.add("bg-merah");
  }
});
