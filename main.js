var input_name = document.getElementById("name");
var input_cat = document.getElementById("catagory");
var input_price = document.getElementById("price");
var input_desc = document.getElementById("description");
var input_capacity = document.getElementById("capacity");
var add_btn = document.getElementById("add_btn");
var tbody = document.getElementById("tbody");
var btns = document.getElementById("btns");
var search=document.getElementById("search");
var courses= [];
// add 

add_btn.onclick=function(e){
   e.preventDefault();
   var course_name = input_name.value;
   var course_cat = input_cat.value;
   var  course_price=input_price.value;
   var course_desc=input_desc.value;
   var course_capacity=input_capacity.value;

    var course = {
        name :course_name ,
        price:course_price ,
        cat:course_cat  ,
        desc: course_desc ,
        capacity: course_capacity

    }
    courses.push(course);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'course added successfully',
        showConfirmButton: false,
        timer: 1500
      })
    clear();
    display();


}
// clear input
function clear(){
    input_name.value='';
    input_capacity.value='';
    input_cat.value='';
    input_desc.value='';
    input_price.value='';
}
// display
function display(){
var result= " ";
for(var i=0 ; i < courses.length ; i++){
    result+=`
    <tr>
        <th scope="col">${i+1}</th>
        <td scope="col">${courses[i].name}</td>
        <td scope="col">${courses[i].cat}</td>
        <td scope="col">${courses[i].price}</td>
        <td scope="col">${courses[i].desc}</td>
        <td scope="col">${courses[i].capacity}</td>
        <td scope="col"><a class="btn btn-primary" href="#" role="button" onclick= "update(${i})">update</a></td>.
        <td scope="col"><a class="btn btn-danger" href="#" role="button" onclick="Delete(${i})">delete</a></td>
     </tr>
    
    `
}
tbody.innerHTML=result;
}
//delete function
  function Delete(i){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice(i,1);
            display();
            Swal.fire(
            'Deleted!',
            'Your course has been deleted.',
            'success'
          )
        }
      })
  
  }
// delete all function
 function delete_all(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses=[];
            display();
            Swal.fire(
            'Deleted!',
            'Your courses has been deleted.',
            'success'
          )
        }
      })
    
  }
  // update function 
  function update(i){

    input_name.value=courses[i].name;
    input_cat.value=courses[i].cat;
    input_price.value=courses[i].price;
    input_desc.value=courses[i].desc;
    input_capacity.value=courses[i].capacity;
   
    btns.innerHTML=`
<button class="btn btn-primary " type="submit" id="update_btn">update</button>
<input class="btn btn-secondary" type="reset" value="clear">
`;
var update_btn = document.getElementById("update_btn");
update_btn .onclick = function(){

    courses[i].name=input_name.value;
    courses[i].price=input_price.value;
    courses[i].cat=input_cat.value;
    courses[i].desc=input_desc.value;
    courses[i].capacity=input_capacity.value;
}
  
   display();
   
}
 
//search function
search.onkeyup = function(){
    var data = search .value;
    var result=" ";
    for (var i=0 ;i<courses.length ; i++){
        if(courses[i].name.toLowerCase().includes(data.toLowerCase())){
            result+=`
    <tr>
        <th scope="col">${i+1}</th>
        <td scope="col">${courses[i].name}</td>
        <td scope="col">${courses[i].cat}</td>
        <td scope="col">${courses[i].price}</td>
        <td scope="col">${courses[i].desc}</td>
        <td scope="col">${courses[i].capacity}</td>
        <td scope="col"><a class="btn btn-primary" href="#" role="button" onclick= "update(${i})">update</a></td>.
        <td scope="col"><a class="btn btn-danger" href="#" role="button" onclick="Delete(${i})">delete</a></td>
     </tr>
    
    `
}
    }
tbody.innerHTML=result; 
        
    }
    
 