"use strict";

var attGora = document.getElementById('att_gora');
var laggTill = document.getElementById('lagg_till_btn');
var fardiga = document.getElementById('fardiga');
/* Scenario 1 (Lägga till) */

laggTill.addEventListener("click", function (e) {
  e.preventDefault();
  var attGoraList = document.createElement('li');
  var attGoraSyssla = document.createElement('input');
  attGoraSyssla.value = document.getElementById('syssla').value;
  attGoraSyssla.setAttribute('type', 'text');
  attGoraSyssla.setAttribute('id', 'attGoraListItem');
  attGoraSyssla.setAttribute('readonly', '');
  /* Scenario 2 (Redigera syssla) */

  var btnAndra1 = document.createElement('button');
  btnAndra1.setAttribute('type', 'button');
  btnAndra1.setAttribute('id', 'andra');
  btnAndra1.innerHTML = "Ändra";
  btnAndra1.addEventListener('click', function () {
    attGoraSyssla.setAttribute('readonly', '');
    attGoraSyssla.removeAttribute('readonly');
    attGoraList.appendChild(btnAndra1);
    attGora.appendChild(attGoraList);
  });
  /* Scenario 3 (Radera syssla) */

  var btnRadera = document.createElement('button');
  btnRadera.setAttribute('type', 'button');
  btnRadera.setAttribute('id', 'radera');
  btnRadera.innerHTML = "Radera";
  btnRadera.addEventListener('click', function () {
    attGoraList.remove();
  });
  /* Scenario 4 (Markera syssla som klar) */

  var btnFardig = document.createElement('button');
  btnFardig.setAttribute('type', 'button');
  btnFardig.setAttribute('id', 'fardig');
  btnFardig.innerHTML = "Färdig";
  btnFardig.addEventListener('click', function () {
    var fardigaList = document.createElement('li');
    var fardigaSyssla = document.createElement('input');
    fardigaSyssla.value = attGoraSyssla.value;
    fardigaSyssla.setAttribute('type', 'text');
    fardigaSyssla.setAttribute('id', 'fardigaListItem');
    fardigaSyssla.setAttribute('readonly', '');
    var btnAndra2 = document.createElement('button');
    btnAndra2.setAttribute('type', 'button');
    btnAndra2.setAttribute('id', 'andra');
    btnAndra2.innerHTML = "Ändra";
    btnAndra2.addEventListener('click', function () {
      fardigaSyssla.setAttribute('readonly', '');
      fardigaSyssla.removeAttribute('readonly');
      fardigaList.appendChild(btnAndra2);
      fardiga.appendChild(fardigaList);
    });
    btnRadera.addEventListener('click', function () {
      fardigaList.remove();
    });
    fardigaList.appendChild(fardigaSyssla);
    fardigaList.appendChild(btnAndra2);
    fardigaList.appendChild(btnRadera);
    fardiga.appendChild(fardigaList);
    attGoraSyssla.remove();
    btnAndra1.remove();
    btnFardig.remove();
    attGoraList.remove();
  });
  attGoraList.appendChild(attGoraSyssla);
  attGoraList.appendChild(btnAndra1);
  attGoraList.appendChild(btnRadera);
  attGoraList.appendChild(btnFardig);
  attGora.appendChild(attGoraList);
});
/* Visa lämpliga felmeddelande via HTML */

function errorMessage(e) {
  var error = document.getElementById("fel_namn");

  if (document.getElementById("syssla").value == "") {
    error.innerHTML = "<span style='color: red; font-size: 1.2em;'>" + "Får ej skapa tomma sysslar</span>";
    e.preventDefault();
  } else {
    error.innerHTML = "";
  }
}