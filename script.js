function insert_Row() {
    //Write your code here
  let ele_tbl = document.getElementById("sampleTable");

	let row1 = ele_tbl.insertRow(0);

	let col1 = row1.insertCell(0);
	let col2 = row1.insertCell(1);

	col1.textContent = "New Cell1";
	col2.textContent = "New Cell2";
	
  
}
