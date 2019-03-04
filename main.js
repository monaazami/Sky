function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
		}
	};
	xmlhttp.open('GET', 'data.xml', true);
	xmlhttp.send();
}

function myFunction(xml) {
	let x, i, xmlDoc, place, file;
	xmlDoc = xml.responseXML;
	place = '';
	file = [];
	x = xmlDoc.getElementsByTagName('movie');
	for (i = 0; i < x.length; i++) {
		file.push(x[i].getElementsByTagName('genre')[0].childNodes[0].nodeValue);
		place +=
			'<div><p class="box">' +
			x[i].getElementsByTagName('title')[0].childNodes[0].nodeValue +
			'</p><img src="' +
			x[i].getElementsByTagName('image')[0].childNodes[0].nodeValue +
			'" alt="" class="myimg" height="300" width="200"> <p class="box t" >' +
			x[i].getElementsByTagName('genre')[0].childNodes[0].nodeValue +
			'</p></div>';
	}
	let sliderValueOne = document.getElementById('one').value;
	if (sliderValueOne > 0) {
		// also I can use filter()
		var num = file.indexOf('Drama');
		place +=
			'<div><p class="box">' +
			x[num].getElementsByTagName('title')[0].childNodes[0].nodeValue +
			'</p><img src="' +
			x[num].getElementsByTagName('image')[0].childNodes[0].nodeValue +
			'" alt="" class="myimg" height="300" width="200"> <p class="box t" >' +
			x[num].getElementsByTagName('genre')[0].childNodes[0].nodeValue +
			'</p></div>';
	}
	if (sliderValueOne < 0) {
		var num = file.indexOf('Relaxing');
		place +=
			'<div><p class="box">' +
			x[num].getElementsByTagName('title')[0].childNodes[0].nodeValue +
			'</p><img src="' +
			x[num].getElementsByTagName('image')[0].childNodes[0].nodeValue +
			'" alt="" class="myimg" height="300" width="200"> <p class="box t" >' +
			x[num].getElementsByTagName('genre')[0].childNodes[0].nodeValue +
			'</p></div>';
	}

	document.getElementById('demo').innerHTML = place;
	document.getElementById('demo').classList.remove('hidden');
}

const resetPage = () => {
	document.getElementById('demo').classList.add('hidden');
	// document.getElementById('myForm').reset();
};
