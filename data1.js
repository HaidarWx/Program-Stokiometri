function programMol1() {
  let massa = document.diketMassa.massa.value;
  let mr = document.diketMassa.mr.value;
  let hasil = massa / mr;
  let hasilMol = document.getElementById("hasilMol");

  if (isNaN(massa) && isNaN(mr)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil + " Mol";
    return (hasilMol.innerHTML = hasilbaru);
  }
}
//Diketahui Molaritas X Volume
function programMol2() {
  let molaritas = document.diketMolaritas.molaritas.value;
  let volume = document.diketMolaritas.volume.value;
  let hasil = molaritas * volume;
  let hasilMol2 = document.getElementById("hasilMol2");

  if (isNaN(molaritas) && isNaN(volume)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol2.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil + " Mol";
    return (hasilMol2.innerHTML = hasilbaru);
  }
}
//Diketahui Volume Gas (VSTP) : 22.4
function programMol3() {
  let vstp = document.diketVSTP.vstp.value;
  let hasil = vstp / 22.4;
  let hasilMol3 = document.getElementById("hasilMol3");

  if (isNaN(vstp)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol3.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil + " Mol";
    return (hasilMol3.innerHTML = hasilbaru);
  }
}
//
function programMol4() {
  let jp = document.diketJP.jp.value;
  let hasil = jp / 6.02;
  let hasilMol3 = document.getElementById("hasilMol3");

  if (isNaN(jp)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol4.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil + " Mol X 10<sup>23</sup>";
    return (hasilMol4.innerHTML = hasilbaru);
  }
}
//Non-STP
function programMol5() {
  let tekanan = document.diketVNonSTP.tekanan.value;
  let volume = document.diketVNonSTP.volumeX.value;
  let tetapanGas = 0.082;
  let suhu = document.diketVNonSTP.suhuX.value;
  let kanan = tekanan * volume;
  let kiri = tetapanGas * suhu;
  let hasil = kanan / kiri;
  let hasilMol5 = document.getElementById("hasilMol5");

  if (isNaN(tekanan) && isNaN(volume) && isNaN(suhu)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol5.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil;
    return (hasilMol5.innerHTML = hasilbaru + " Mol");
  }
}
//Molaritas
function programMol6() {
  let mol = document.Molaritas.molMolaritas.value;
  let volume = document.Molaritas.volumeMolaritas.value;

  let hasil = mol / volume;
  let hasilMol6 = document.getElementById("hasilMol6");

  if (isNaN(mol) && isNaN(volume)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol6.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil;
    return (hasilMol6.innerHTML = hasilbaru);
  }
}
//
function programMol7() {
  let mol = document.JumlahPartikel.molJP.value;

  let hasil = mol * 6.02;
  let hasilMol7 = document.getElementById("hasilMol7");

  if (isNaN(mol)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol7.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil;
    return (hasilMol7.innerHTML = hasilbaru + " X " + "10 <sup>23</sup>");
  }
}
//
function programMol8() {
  let mol = document.vstp.molVSTP.value;

  let hasil = mol * 22.4;
  let hasilMol8 = document.getElementById("hasilMol8");

  if (isNaN(mol)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol8.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil;
    return (hasilMol8.innerHTML = hasilbaru + " L");
  }
}
//
function programMol9() {
  let mol = document.massa.molMassa.value;
  let mr = document.massa.mrMassa.value;

  let hasil = mol * mr;
  let hasilMol9 = document.getElementById("hasilMol9");

  if (isNaN(mol)) {
    hasilbaru = "Hanya Bilangan";
    return (hasilMol9.innerHTML = hasilbaru);
  } else {
    hasilbaru = hasil;
    return (hasilMol9.innerHTML = hasilbaru + " Gr");
  }
}

function reset1() {
  let hasilbaru = "";
  let hasilMol = document.getElementById("hasilMol");
  console.log("on");
  return (hasilMol.innerHTML = hasilbaru);
}
function reset2() {
  let hasilbaru = "";
  let hasilMol2 = document.getElementById("hasilMol2");
  console.log("on");
  return (hasilMol2.innerHTML = hasilbaru);
}
function reset3() {
  let hasilbaru = "";
  let hasilMol3 = document.getElementById("hasilMol3");
  console.log("on");
  return (hasilMol3.innerHTML = hasilbaru);
}
function reset4() {
  let hasilbaru = "";
  let hasilMol4 = document.getElementById("hasilMol4");
  console.log("on");
  return (hasilMol4.innerHTML = hasilbaru);
}
function reset5() {
  let hasilbaru = "";
  let hasilMol5 = document.getElementById("hasilMol5");
  console.log("on");
  return (hasilMol5.innerHTML = hasilbaru);
}
function reset6() {
  let hasilbaru = "";
  let hasilMol6 = document.getElementById("hasilMol6");
  console.log("on");
  return (hasilMol6.innerHTML = hasilbaru);
}
function reset7() {
  let hasilbaru = "";
  let hasilMol7 = document.getElementById("hasilMol7");
  console.log("on");
  return (hasilMol7.innerHTML = hasilbaru);
}
function reset8() {
  let hasilbaru = "";
  let hasilMol8 = document.getElementById("hasilMol8");
  console.log("on");
  return (hasilMol8.innerHTML = hasilbaru);
}
function reset9() {
  let hasilbaru = "";
  let hasilMol9 = document.getElementById("hasilMol9");
  console.log("on");
  return (hasilMol9.innerHTML = hasilbaru);
}

//CONTACT

const scriptURL = "https://script.google.com/macros/s/AKfycbzPcXejOXyZLJbtXIHiNZn2pk0Ka2TBqRma3ehKAonQ-GsT_lYoFc4ipbbVvmKYvbwO/exec";
const form = document.forms["me-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit di klik
  //tampilkan tombol loading, hilangkan tombol kirim

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampilkan tombol kirim, hilangkan tombol loading

      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");

      //tampilkan alert
      myAlert.classList.toggle("d-none");

      //hapus form

      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
