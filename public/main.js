const update = document.querySelector('#update-button')



var rowNum = 1;
function addRow() {

    for(var i = 0; i < songs.length; i++){
      console.log(songs[i].name)
    }

    //Need to check if ytlink has already been added
    var table = document.getElementById("myTableData");

    var link = (document.getElementById("ytlink")).value;
    if(link.length > 50){
      alert("Foh nga");
      return; //use this in real code -- leave along for testing purposes
    }
    var user = 'Update later';
    var song = "Update later";

    //Buttons
    var playAll = '<input type="button" value = "Play" onClick="Javacsript:playRow(this)">';  //Change to button
    var deleteButton = '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';

    //Buttons need to retrieve data and (update database)
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    let tableHeader2 = [rowNum,user, song, link, playAll, deleteButton]

    var i;
    for(i = 0; i < tableHeader2.length; i++){
        row.insertCell(i).innerHTML = tableHeader2[i];
    }
    rowNum++;
    document.getElementById("ytlink").value = "";
    document.getElementById("ytlink").focus();
    //Need to implement this button to also delete from database
} //end addRow()


// update.addEventListener('click', _=>{
//
// })
