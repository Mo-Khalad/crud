//toLowerCase
var productName=document.getElementById("productName");
var productprice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDescription=document.getElementById("productDescription");
var addProduct=document.getElementById("addbtn");
var inputs=document.getElementsByClassName("form-control");
var searchInput=document.getElementById("search");
var nameAlert=document.getElementById("nameAlert");
var products=[];
var val;
var tnp;



productName.onkeyup=function()
{
var nameRejex= /^[A][a-z]{2,6}$/;

  if(!nameRejex.test(productName.value))

{

  addProduct.disabled=true;
  productName.classList.add("is-invalid");
  productName.classList.remove("is-valid");
  nameAlert.classList.remove("d-none");

}


else

{

  addProduct.removeAttribute("disabled");
  productName.classList.add("is-valid");
  productName.classList.remove("is-invalid");
  nameAlert.classList.add("d-none");

 
}
  
}


productprice.onkeyup=function()
{
 
 
 
 
 var nameRejex= /^[A]/;
 var n=nameRejex.test(productprice.value)
 console.log(n)

  
 
}
if(JSON.parse(localStorage.getItem("productList"))!=null)
{
products=JSON.parse(localStorage.getItem("productList"))

displayProduct();
}

addProduct.onclick=function(){

  if(document.getElementById("addbtn").innerHTML=="add Product")
  {
    add();
  }


  else
  {
    updates(tnp);

    document.getElementById("addbtn").innerHTML="add Product";

   
  }
  
  displayProduct();
  clearList();



 


}

searchInput.onkeyup=function(val)
{
  var trs="";
val=searchInput.value;
  for(var i=0;i<products.length;i++)
  {
    if(products[i].names.toLowerCase().includes(val.toLowerCase()))
{
  trs+=
   `
  <tr>
  <td>${i+1}</td>
  <td>${products[i].names}</td>
  <td>${products[i].price}</td>
  <td>${products[i].category}</td>
  <td>${products[i].description}</td>
  <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
  <td><button onclick="update(${i})" class="btn btn-warning">update</button></td>
  </tr>
`

}
tnp=i;
  }
document.getElementById("tableBody").innerHTML=trs;

}
function add()
{
  var product=
  {
    names:productName.value,
    price:productprice.value,
    category:productCategory.value,
    description:productDescription.value,
  }
    products.push(product);

  localStorage.setItem("productList",JSON.stringify(products));
}

function displayProduct()
{
  var trs="";
  for(var i=0;i<products.length;i++)
  {
  trs+= `
  <tr>
  <td>${i+1}</td>
  <td>${products[i].names}</td>
  <td>${products[i].price}</td>
  <td>${products[i].category}</td>
  <td>${products[i].description}</td>
  <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
  <td><button onclick="update(${i})" class="btn btn-warning">update</button></td>
  </tr>
`
}


document.getElementById("tableBody").innerHTML=trs;
}

function clearList()
{
for(var i=0;i<inputs.length;i++)
{
  inputs[i].value="";
}
}

function deleteProduct(index)
{
  products.splice(index,1)
  displayProduct();
  localStorage.setItem("productList",JSON.stringify(products));

}
    
    function update(index)
    {
      productName.value=products[index].names;
      productprice.value=products[index].price;
      productCategory.value=products[index].category;
      productDescription.value=products[index].description;
      document.getElementById("addbtn").innerHTML="update";
      tnp=index; 
    }
    function updates(tn){

    
     var product=
      {
        names:productName.value,
        price:productprice.value,
        category:productCategory.value,
        description:productDescription.value,
      }

      products[tn]=product;

      localStorage.setItem("productList",JSON.stringify(products));

    }
    

    


    
    
    
    
    
  

