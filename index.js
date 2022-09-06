
 let selectedRow=null;
const submitForm=()=>{
    const formData=readFormData();

   if(selectedRow==null){

    insertRecord(formData);
   }
 else{
    saveUpdate(formData);
 }

  
}



const readFormData=()=>{

const formData={};
formData["code"]=document.getElementById("code").value;
formData["name"]=document.getElementById("name").value;
formData["qty"]=document.getElementById("qty").value;
formData["price"]=document.getElementById("price").value;

return formData

}

const insertRecord=(data)=>{
    const table=document.getElementById("products").getElementsByTagName("tbody")[0];
    const newRow=table.insertRow(table.length);
console.log(table)
   const cell1=newRow.insertCell(0);
   cell1.innerHTML=data.code;
   
   const cell2=newRow.insertCell(1);
   cell2.innerHTML=data.name;

   const cell3=newRow.insertCell(2);
   cell3.innerHTML=data.qty;

   const cell4=newRow.insertCell(3);
   cell4.innerHTML=data.price;
   
    const cell5=newRow.insertCell(4);
    cell5.innerHTML=`<button onClick="onEdit(this)" class="btn btn-primary btn-sm"><i class="fa-light fa-folder-open"></i></button>
    <button onClick="onDelete(this)"  class="btn btn-danger btn-sm">delete</button>`
}



const onEdit=(td)=>{
     selectedRow=td.parentElement.parentElement;
    document.getElementById("code").value=selectedRow.cells[0].innerHTML;
    document.getElementById("name").value=selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value=selectedRow.cells[2].innerHTML
    document.getElementById("price").value=selectedRow.cells[3].innerHTML
   
}

const saveUpdate=(formData)=>{
selectedRow.cells[0].innerHTML=formData.code;
selectedRow.cells[1].innerHTML=formData.name;
selectedRow.cells[2].innerHTML=formData.qty;
selectedRow.cells[3].innerHTML=formData.price;
}

const onDelete=(td)=>{
selectedRow=td.parentElement.parentElement;
if(confirm('Are you sure you want to delete this record ? once deleted, it will be lost forever')){
    document.getElementById("products").deleteRow(selectedRow.rowIndex);
}


}