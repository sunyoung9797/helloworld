
let xhtp = new XMLHttpRequest();
xhtp.onload = function() {
	let data = JSON.parse(xhtp.responseText);
	showEmpList(data);
}
xhtp.open('get', '../empJsonServlet.json');
xhtp.send();

function showEmpList(data) {
	let table, tr, td, txt;
	table = document.createElement('table');
	table.setAttribute('border', '1');

	//타이틀 생성
	let titles = ['사원번호', '이름', '이메일', '입사일자', '직무', '기능'];
	tr = document.createElement('tr');
	for (let title of titles) {
		th = document.createElement('th');
		txt = document.createTextNode(title);
		th.appendChild(txt);
		tr.appendChild(th);
	}
	table.appendChild(tr);

	//데이터 생성
	for (let obj of data) { //데이터 한건 처리
		tr = document.createElement('tr');
		table.appendChild(tr);
		for (let field in data[0]) {
			td = document.createElement('td');
			txt = document.createTextNode(obj[field]);
			td.appendChild(txt);
			tr.appendChild(td);

		}
	//삭제버튼
	let btn = document.createElement('botton');
	btn.innerHTML = '삭제';
	td = document.createElement('td');
	td.appendChild(btn);
	tr.appendChild(td);
	}

	document.getElementById('show').appendChild(table);
}