<<<<<<< HEAD
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



 


=======
var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDescription=document.getElementById("productDescription");
var addBtn=document.getElementById("addBtn");
var inputs=document.getElementsByClassName("form-control");
var searchInput=document.getElementById("search");
var nameAlert=document.getElementById("nameAlert");
var descriptionAlert=document.getElementById("descriptionAlert");
var categoryAlert=document.getElementById("categoryAlert");
var priceAlert=document.getElementById("priceAlert");
var products=[];
var val;
var tnp;
var nameRegex= /^[a-zA-Z][a-zA-Z- ]{2}/;
var priceRegex = /[0-9][0-9][0-9]/
var descriptionRegex=/^[a-zA-Z][a-zA-Z- ]{4,20}$/;
var categoryRegex=/^[a-zA-Z][a-zA-Z- ]{3}/;

if( JSON.parse(localStorage.getItem("productList")) !=null ){
  products = JSON.parse(localStorage.getItem("productList"))  
  displayProduct()
}

productName.onkeyup=function(){
if(( nameRegex.test(productName.value) && descriptionRegex.test(productDescription.value) && 
    priceRegex.test(productPrice.value) && categoryRegex.test(productCategory.value)) ){
    addBtn.removeAttribute("disabled");
}
else addBtn.disabled=true;
if(!nameRegex.test(productName.value)){
  nameAlert.classList.remove("d-none");
  productName.classList.remove("is-valid");
  productName.classList.add("is-invalid");
}
else
{
    nameAlert.classList.add("d-none");
    productName.classList.add("is-valid");
    productName.classList.remove("is-invalid");
}
}

productPrice.onkeyup = function (){  
  if(( nameRegex.test(productName.value) && descriptionRegex.test(productDescription.value) && 
      priceRegex.test(productPrice.value) && categoryRegex.test(productCategory.value)) ){
      addBtn.removeAttribute("disabled");
 }
 else addBtn.disabled=true;
 
 if(( nameRegex.test(productName.value) && descriptionRegex.test(productDescription.value) && 
  priceRegex.test(productPrice.value) && categoryRegex.test(productCategory.value)) ){
   addBtn.disabled=true;
 }
if(!priceRegex.test(productPrice.value)){
  priceAlert.classList.remove("d-none");
  productPrice.classList.remove("is-valid");
  productPrice.classList.add("is-invalid");
 }
else{
    priceAlert.classList.add("d-none");
    productPrice.classList.add("is-valid");
    productPrice.classList.remove("is-invalid");
  }
}

productCategory.onkeyup = function (){  
  if(( nameRegex.test(productName.value) && descriptionRegex.test(productDescription.value) && 
       priceRegex.test(productPrice.value) && categoryRegex.test(productCategory.value)) ){
        addBtn.removeAttribute("disabled");
}
else addBtn.disabled=true;
if(!categoryRegex.test(productCategory.value)){
  categoryAlert.classList.remove("d-none");
  productCategory.classList.remove("is-valid");
  productCategory.classList.add("is-invalid");
}
else{
    categoryAlert.classList.add("d-none");
    productCategory.classList.add("is-valid");
    productCategory.classList.remove("is-invalid");
}
}

productDescription.onkeyup = function (){  
  if(( nameRegex.test(productName.value) && descriptionRegex.test(productDescription.value) && 
priceRegex.test(productPrice.value) && categoryRegex.test(productCategory.value)) ){
    addBtn.removeAttribute("disabled");
}
else addBtn.disabled=true;
if(!descriptionRegex.test(productDescription.value)){
  descriptionAlert.classList.remove("d-none");
  productDescription.classList.remove("is-valid");
  productDescription.classList.add("is-invalid");
}
else{
    descriptionAlert.classList.add("d-none");
    productDescription.classList.add("is-valid");
    productDescription.classList.remove("is-invalid");
}
>>>>>>> db65710 (Add validation part when entering data and improvements to the code)
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
<<<<<<< HEAD
  <td><button onclick="update(${i})" class="btn btn-warning">update</button></td>
  </tr>
`

=======
  <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
  </tr>
`
>>>>>>> db65710 (Add validation part when entering data and improvements to the code)
}
tnp=i;
  }
document.getElementById("tableBody").innerHTML=trs;
<<<<<<< HEAD

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
=======
}

addBtn.onclick=function(){
  if(document.getElementById("addBtn").innerHTML=="add Product")
  {
    productName.classList.remove("is-valid");
    productPrice.classList.remove("is-valid");
    productCategory.classList.remove("is-valid");
    productDescription.classList.remove("is-valid");
    addBtn.disabled=true;
    addProduct();
  }
  else{
    displayUpdate(tnp);
    addBtn.disabled=true;
    productName.classList.remove("is-valid");
    productPrice.classList.remove("is-valid");
    productCategory.classList.remove("is-valid");
    productDescription.classList.remove("is-valid");
    document.getElementById("addBtn").innerHTML="add Product";
  }
  
  displayProduct();
  clearList();
}

function addProduct(){
  var product =
  {
    names:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    description:productDescription.value,
  }
  products.push(product);
  localStorage.setItem("productList",JSON.stringify(products));
}

function displayProduct(){
>>>>>>> db65710 (Add validation part when entering data and improvements to the code)
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
<<<<<<< HEAD
  <td><button onclick="update(${i})" class="btn btn-warning">update</button></td>
  </tr>
`
}


document.getElementById("tableBody").innerHTML=trs;
}

=======
  <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
  </tr>
`
}
document.getElementById("tableBody").innerHTML=trs;
}

function updateProduct(index)
{
      productName.value=products[index].names;
      productPrice.value=products[index].price;
      productCategory.value=products[index].category;
      productDescription.value=products[index].description;
      document.getElementById("addBtn").innerHTML="update";
      addBtn.removeAttribute("disabled");
      productName.classList.add("is-valid");
      productPrice.classList.add("is-valid");
      productCategory.classList.add("is-valid");
      productDescription.classList.add("is-valid");
      tnp=index; 
}

function displayUpdate(tn){
  var product=
      {
        names:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        description:productDescription.value,
      }
      products[tn]=product;
      localStorage.setItem("productList",JSON.stringify(products));
}
   
>>>>>>> db65710 (Add validation part when entering data and improvements to the code)
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
<<<<<<< HEAD
    
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
=======










>>>>>>> db65710 (Add validation part when entering data and improvements to the code)
    

    


    
    
    
    
    
  

