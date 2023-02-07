function validForm() {
    var title = document.getElementById('title').value;
    var descriptiopn = document.getElementById('description').value;
    var sdate = document.getElementById('sdate').value;
    var edate = document.getElementById('edate').value;
    var status = document.getElementById('status').value;

    if (title == "") {
        alert("Title is Required")
        return false;
    }
    if (descriptiopn == "") {
        alert("description is Required")
        return false;
    }
    if (sdate == "") {
        alert("Start Date Is Required")
        return false;
    }
    if (edate == "") {
        alert("End Date is Required")
        return false;
    }
    if (status == "") {
        alert("Status is Require")
        return false;
    }

    return true;


}
function showData() {
    var todolist;
    if (localStorage.getItem("todolist") == null) {
        todolist = [];

    } else {
        todolist = JSON.parse(localStorage.getItem("todolist"))
    }

    var html = "";

    todolist.forEach(function (element, index) {
        html += "<tr>";



        html += "<td>" + element.title + "</td>"
        html += "<td>" + element.description + "</td>"
        html += "<td>" + element.status + "</td>"
        html += "<td>" + element.sdate + "</td>"
        html += "<td>" + element.edate + "</td>"
        html += '<td><button  onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button id = "Update"onclick="updateData(' + index + ')" class="btn btn-primary">Update</button></td>';

        html += "</tr>"
    });
    document.querySelector("#todotable tbody").innerHTML = html;

}
document.onload = showData()

function AddData() {
    if (validForm() == true) {
        var title = document.getElementById('title').value;
        var description = document.getElementById('description').value;
        var sdate = document.getElementById('sdate').value;
        var edate = document.getElementById('edate').value;
        var status = document.getElementById('status').value;

        var todolist;
        if (localStorage.getItem("todolist") == null) {
            todolist = [];

        } else {
            todolist = JSON.parse(localStorage.getItem("todolist"))
        }


        todolist.push({
            title: title,
            description: description,
            status: status,
            sdate: sdate,
            edate: edate,
        });

        localStorage.setItem("todolist", JSON.stringify(todolist));
        showData();

        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("status").value = "";
        document.getElementById("sdate").value = "";
        document.getElementById("edate").value = "";



    }
}

 function deleteData(index) {
    var todolist;
    if (localStorage.getItem("todolist") == null) {
        todolist = [];

    } else {
        todolist = JSON.parse(localStorage.getItem("todolist"))
    }

    todolist.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(todolist));
    showData();

} 


function updateData(index){
    //document.getElementById("add").style.display = "none";
    document.getElementById("Update").style.display = "block";
    if (localStorage.getItem("todolist") == null) {
        todolist = [];

    } else {
        todolist = JSON.parse(localStorage.getItem("todolist"))
    }
    document.getElementById("title").value = todolist[index].title;
    document.getElementById("description").value = todolist[index].description;
    document.getElementById("status").value = todolist[index].status;
    document.getElementById("sdate").value = todolist[index].sdate;
    document.getElementById("edate").value = todolist[index].edate;
   
    document.querySelector("#add").onclick = function(){
        if(validForm() == true){
            todolist[index].title = document.getElementById("title").value;
            todolist[index].description = document.getElementById("description").value;
            todolist[index].status = document.getElementById("status").value;
            todolist[index].sdate = document.getElementById("sdate").value;
            todolist[index].edate = document.getElementById("edate").value;

            localStorage.setItem("todolist",JSON.stringify(todolist));

            showData();

            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
            document.getElementById("status").value = "";
            document.getElementById("sdate").value = "";
            document.getElementById("edate").value = "";
            
            

        }
    }

}






















/* add = document.getElementById("add");
        add.addEventListener("click",()=>{
            console.log("updating list...")
            tit = document.getElementById('title').value;
            desc = document.getElementById('description').value;
            sdate = document.getElementById('sdate').value;
            edate = document.getElementById('edate').value;
            status = document.getElementById('status').value;

            if(localStorage.getItem('itemJson')==null){
                itemJsonArray = [];
                itemJsonArray.push([tit,desc,sdate,edate,status])
                localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
            }
            else{
                itemJsonArraystr = localStorage.getItem('itemJson')
                itemJsonArray = JSON.parse(itemJsonArraystr)
                itemJsonArray.push([tit,desc,sdate,edate,status])
                localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
            }
            //let tabel = document.getElementById('tabel').value;
           // var html = "";
            
           
        })

 */