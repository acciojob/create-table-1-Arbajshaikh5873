function insert_Row() {
    //Write your code here
  let ele_tbl = document.getElementById("sampleTable");

	let contain = ele_tbl.innerHTML;

	let result = "<tr><td>New Cell1</td><td>New Cell2</td></tr>";

	ele_tbl.innerHTML = result + contain;
	
  
}
