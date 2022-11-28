// Write solution code here to dynamically add the form fields 
let orderItems=[];
let customerDetails=[];
let id=0;
let id1=0;

function inputMenu(){

    //create a div container
    let mydiv3=document.querySelector("#div3");
    let mydiv=document.createElement("div");
    mydiv3.appendChild(mydiv);

    // create category
    let myCategory=document.createElement("label");
    let myCategoryText=document.createTextNode("Category : ");
    myCategory.appendChild(myCategoryText);
    mydiv.appendChild(myCategory);

    let myinputCategory=document.createElement("input");
    myinputCategory.required;
    myinputCategory.setAttribute("id","category");
    mydiv.appendChild(myinputCategory);

    // mybr=document.createElement("br");
    // mydiv.appendChild(mybr);

    //create Item Name
    let myItemName=document.createElement("label");
    let myItemNameText=document.createTextNode("Item Name : ");
    myItemName.appendChild(myItemNameText);
    myItemName.style.marginLeft="15px"
    mydiv.appendChild(myItemName);

    let myinputItemName=document.createElement("input");
    myinputItemName.required;
    myinputItemName.setAttribute("id","itemName");
    mydiv.appendChild(myinputItemName);

    // mybr1=document.createElement("br");
    // mydiv.appendChild(mybr1);
   

    // create price
    let myprice=document.createElement("label");
    let mypricetext=document.createTextNode("price : ");
    myprice.appendChild(mypricetext);
    myprice.style.marginLeft="15px"
    mydiv.appendChild(myprice);

    let myinputprice=document.createElement("input");
    myinputprice.required;
    myinputprice.type="number";
    myinputprice.setAttribute("id","price");
    mydiv.appendChild(myinputprice);

    // mybr2=document.createElement("br");
    // mydiv.appendChild(mybr2);


    //create quantity
    let myQuantity=document.createElement("label");
    let myQuantityText=document.createTextNode("Quantity : ");
    myQuantity.appendChild(myQuantityText);
    myQuantity.style.marginLeft="15px"
    mydiv.appendChild(myQuantity);

    let myinputQuantity=document.createElement("input");
    myinputQuantity.required;
    myinputQuantity.type="number";
    myinputQuantity.setAttribute("id","quantity")
    mydiv.appendChild(myinputQuantity);

    // mybr3=document.createElement("br");
    // mydiv.appendChild(mybr3);
    
    //create a button 
    let mybtn=document.createElement("button");
    let mybtnText=document.createTextNode("Save");
    mybtn.appendChild(mybtnText);
    mybtn.style.backgroundColor="blue";
    mybtn.style.color="aqua";
    mybtn.onclick=saveItems;
    mybtn.style.marginLeft="30px"
    mydiv.appendChild(mybtn);

}
function saveItems(){
    let mycategory=document.querySelector("#category").value;
    let myItemName=document.querySelector("#itemName").value;
    let myprice=document.querySelector("#price").value;
    let myquantity=document.querySelector("#quantity").value;

    let a=myprice*myquantity;
    let id=0
    let item={
        id:id,
        category:mycategory,
        itemName:myItemName,
        price:myprice,
        quantity:myquantity,
        amount:a
    }
    orderItems.push(item);
    alert("menu items saved");
    document.getElementById("totalAmount").value=a;

    console.log(orderItems);
    return false;
}

// Save the order details on clicking the submit button
function submitForm(){

    let myorderid=document.querySelector("#orderId").value;
    let mycustomerName=document.querySelector("#customerName").value;
    let myemailId=document.querySelector("#emailId").value;
    let myContactNumber=document.querySelector("#contactNo").value;
    let myorderDate=document.querySelector("#orderDate").value;
    let myAddress=document.querySelector("#address").value;

    let details={
        id:id1,
        orderid:myorderid,
        customerName:mycustomerName,
        emailId:myemailId,
        contactNumber:myContactNumber,
        orderDate:myorderDate,
        Address:myAddress
    }
    customerDetails.push(details);
    console.log(customerDetails);
    alert("form submitted");
    return true;
}