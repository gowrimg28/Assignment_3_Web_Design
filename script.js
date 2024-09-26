//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

let studentCount = 3;
document.getElementById('add').addEventListener('click', function () {
  studentCount++;
  let table = document.getElementById('myTable');
  let newRow1 = table.insertRow(-1);
  newRow1.innerHTML = `
      <td><input type="checkbox" /><br /><br /><img src="down.png" width="25px" /></td>
      <td>Student ${studentCount}</td>
      <td>Teacher ${studentCount}</td>
      <td>Approved</td>
      <td>Fall</td>
      <td>TA</td>
      <td>${studentCount * 11111}</td>
      <td>100%</td>

  `;
  let newRow2 = table.insertRow(-1);
  newRow2.className = 'dropDownTextArea';
  newRow2.innerHTML = `
      <tr><td colspan="8">
			Advisor:<br /><br />
			Award Details<br />
			Summer 1-2014(TA)<br />
			Budget Number: <br />
			Tuition Number: <br />
			Comments:<br /><br /><br />
			Award Status:<br /><br /><br />
		</td></tr>
  `;
  alert(`Student ${studentCount} Record added successfully`);
}
);

document.getElementById('myTable').addEventListener('change', function (e) {
  if (e.target.type === 'checkbox') {
    let row = e.target.closest('tr');
    let anyCheckboxChecked = document.querySelector('input[type="checkbox"]:checked');
    if (e.target.checked) {
      row.style.backgroundColor = 'yellow';
      document.getElementById('button').disabled = false;
      document.getElementById('button').style.backgroundColor = 'orange';
      if (!row.cells[8]) {  
        let deleteCell = row.insertCell(-1)
        deleteCell.style.display === 'none'
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteCell.appendChild(deleteButton);

        deleteButton.addEventListener('click', function () {
          const userConfirmed = confirm(`Do you want to delete ${row.cells[1].innerText} details ?`);
          if (userConfirmed) {
            row.remove();
            alert(`${row.cells[1].innerText} Record deleted successfully`);
          }
          if (!document.querySelector('input[type="checkbox"]:checked')) {
            document.getElementById('button').disabled = true;
            document.getElementById('button').style.backgroundColor = 'grey';

            document.querySelectorAll('#myTable th:nth-child(9), #myTable td:nth-child(9), #myTable th:nth-child(10), #myTable td:nth-child(10)')
              .forEach(cell => {
                cell.style.display = 'none';
              });
          }
        });
      }

      if (!row.cells[9]) {  
        let editCell = row.insertCell(-1)
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', function () {
          prompt(`Edit details of ${row.cells[1].innerText}`);
        });
        editCell.appendChild(editButton);
      }
      document.querySelectorAll('#myTable th:nth-child(9), #myTable td:nth-child(9), #myTable th:nth-child(10), #myTable td:nth-child(10)')
        .forEach(cell => {
          cell.style.display = 'table-cell';
        });

    } else {
      row.style.backgroundColor = '';

      row.deleteCell(9);  
      row.deleteCell(8);  


      if (!anyCheckboxChecked) {
        document.getElementById('button').disabled = true;
        document.getElementById('button').style.backgroundColor = 'grey';

        document.querySelectorAll('#myTable th:nth-child(9), #myTable td:nth-child(9), #myTable th:nth-child(10), #myTable td:nth-child(10)')
          .forEach(cell => {
            cell.style.display = 'none';
          });
      }
    }
  }
}
);


document.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    let row = event.target.closest('tr').nextElementSibling;
    if (row.style.display === 'none' || !row.style.display) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
});