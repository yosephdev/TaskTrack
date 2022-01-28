let laggTill = document.getElementById('lagg_till_btn');
let attGora = document.getElementById('att_gora');
let radera = document.getElementById('radera');
let fardiga = document.getElementById('fardiga');



laggTill.addEventListener('click', function() {
    let attGoraList = document.createElement('li');

    let attGoraSyssla = document.createElement('input');
    attGoraSyssla.value = document.getElementById('syssla').value;
    attGoraSyssla.setAttribute('type', 'text');
    attGoraSyssla.setAttribute('id', 'attGoraListItem');
	attGoraSyssla.setAttribute('readonly', '');
	
	let btnAndra1 = document.createElement('button');
    btnAndra1.setAttribute('type', 'button');
    btnAndra1.setAttribute('id', 'andra');
    btnAndra1.innerHTML = "Ändra";
    btnAndra1.addEventListener('click', function() {
        attGoraSyssla.removeAttribute('readonly');
        btnAndra1.addEventListener('click', function() {
            attGoraSyssla.setAttribute('readonly', '');
        });
	});
	
	let btnAndra2 = document.createElement('button');
    btnAndra2.setAttribute('type', 'button');
    btnAndra2.setAttribute('id', 'radera');
    btnAndra2.innerHTML = "Radera";
	btnAndra2.addEventListener('click', function () {
		
		let btnAndra2 = document.createElement('li');
        
        btnAndra2.setAttribute('type', 'text');
        btnAndra2.setAttribute('id', 'fardigaListItem');
		btnAndra2.setAttribute('readonly', '');
		
		attGoraSyssla.remove();
        btnAndra1.remove();
        btnFardig.remove();
        attGoraList.remove();
       
    });
   

    let btnFardig = document.createElement('button');
    btnFardig.setAttribute('type', 'button');
    btnFardig.setAttribute('id', 'fardiga');
    btnFardig.innerHTML = "Färdig";
    btnFardig.addEventListener('click', function() {

        let fardigaList = document.createElement('li');

        let fardigaSyssla = document.createElement('input');
        fardigaSyssla.value = attGoraSyssla.value;
        fardigaSyssla.setAttribute('type', 'text');
        fardigaSyssla.setAttribute('id', 'fardigaListItem');
        fardigaSyssla.setAttribute('readonly', '');

        let btnAndra2 = document.createElement('button');
        btnAndra2.setAttribute('type', 'button');
        btnAndra2.setAttribute('id', 'andra');
        btnAndra2.innerHTML = "Ändra";
        btnAndra2.addEventListener('click', function() {
            fardigaSyssla.removeAttribute('readonly');
            btnAndra2.addEventListener('click', function() {
                fardigaSyssla.setAttribute('readonly', '');
            });
		});
		
		let btnAndra3 = document.createElement('button');
        btnAndra3.setAttribute('type', 'button');
        btnAndra3.setAttribute('id', 'radera');
        btnAndra3.innerHTML = "Radera";
        btnAndra3.addEventListener('click', function() {
            fardigaSyssla.removeAttribute('readonly');
            btnAndra3.addEventListener('click', function() {
                fardigaSyssla.setAttribute('readonly', '');
            });
        });

        fardigaList.appendChild(fardigaSyssla);
		fardigaList.appendChild(btnAndra2);
		fardigaList.appendChild(btnAndra3);
        fardiga.appendChild(fardigaList);

        attGoraSyssla.remove();
        btnAndra1.remove();
        btnFardig.remove();
        attGoraList.remove();
    });

    attGoraList.appendChild(attGoraSyssla);
    attGoraList.appendChild(btnAndra1);
    attGoraList.appendChild(btnAndra2);	
    attGoraList.appendChild(btnFardig);
    attGora.appendChild(attGoraList);
});