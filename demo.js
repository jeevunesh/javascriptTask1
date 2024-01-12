let arr = [];
let editId;
function validation(event) {
    let uname = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    if (uname == "") {
        document.getElementById('error').innerHTML = "Enter the user name";
        document.getElementById('error').style.color = "red";
    } else {
        document.getElementById('error').innerHTML = "";
    }
    if (age == "") {
        document.getElementById('error1').innerHTML = "Name and age must be filled correctly";
        document.getElementById('error1').style.color = "red";
    }
    else if (age < 5) {
        document.getElementById('error1').innerHTML = "Age must be minimum five";
        document.getElementById('error1').style.color = "red";
    }
    else {
        document.getElementById('error1').innerHTML = "";
    }


    if (uname != "" && age != ""&&age >= 5) {
        if (age < 5) {
            document.getElementById('error1').innerHTML = "Age must be minimum five";
            document.getElementById('error1').style.color = "red";
        } else {
            document.getElementById('error1').innerHTML = "";

            let num = {
                
                username: uname,
                age: age
            };
            if(editId===undefined){
                arr.push(num);
            }
            else{
               
                arr[editId].username=uname
                arr[editId].age=age
                editId=undefined
            }
            console.log(arr);
           
            // resetform()
            document.getElementById('name').value = "";
            document.getElementById('age').value = "";
            table()
        }
    }
}    
 function table(){
    // console.log(arr);
    let datatable="";
    for(let i=0;arr.length>i;i++){ 
        // arr[i]
        // console.log(arr)
        datatable+="<tr>"
        // datatable+="<td>"+arr[i].id+ +"</td>"

        datatable+="<td>"+arr[i].username +"</td>"
        datatable+="<td>"+arr[i].age +"</td>"
        datatable+="<td>"+'<button class="edit" type="button" style="padding:5px 13px 5px 13px;margin-right:5px;background-color:green;color:white;" onclick="edit(' + i + ')">Edit</button>'
        +'<button class="edit" type="button" style="padding:5px 13px 5px 13px;background-color:red;color:white;" onclick="deleteRow(' + i + ')">Delete</button>'+"</td>"
        datatable+="</tr>"

    }

    document.getElementById('tabledata').innerHTML=datatable;
    console.log(datatable)
 }

 function edit(index){
    editId=index
    // console.log(index)
    for (let i = 0; i < arr.length; i++) {
        if (index==i) {
        document.getElementById('name').value=arr[i].username
        document.getElementById('age').value=arr[i].age
            
        }
    console.log(index)

        
    }
 }

 function deleteRow(indexe){
    arr.splice(indexe,1)
    table(arr)
 }
// function table(){
//     let tablevalue="";
//     arr.map((res,index,arr)=>{
//         // res.name
//         // console.log(res)
//         tablevalue+="<tr>"
//         tablevalue+="<td>"+ res.id++ +"</td>"
//         tablevalue+="<td>"+ res.username +"</td>"
//         tablevalue+="<td>"+ res.age +"</td>"
       
//         tablevalue+="</tr>"
//         console.log("name",arr[index].username)
//     })
//     document.getElementById('tabledata').innerHTML=tablevalue;
// }

// function table(){
//     let data=""
//     for(let x of arr){

//         data+="<tr>"
//         data+="<td>"+x.username+"</td>"
//         data+="<td>"+x.age+"</td>"
//         x.uname
//         console.log(x);

//     }
//     document.getElementById('tabledata').innerHTML=data
// }

// function table(){
//     let dada=""

//     for(let x in arr){
//         dada+="<tr>"
//         dada+="<td>"+x.username +"</td>"
//         dada+="<td>"+x.age +"</td>"
//         dada+="</tr>"
//         console.log(x)
//     }
    
//     document.getElementById('tabledata').innerHTML=dada
// }


