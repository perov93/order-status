 console.log('%c STOP!', 'color: red; font-size: 32px; font-weight: 700;');

 console.log('%c I SEE U!', 'color: red; font-size: 62px; font-weight: 700; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: black;');


 const orderList = document.querySelector('tbody');
 const form = document.querySelector('#entry-data');

 function renderOrder(doc) {
   let tr = document.createElement('tr');
   let client = document.createElement('td');
   let date = document.createElement('td');
   let price = document.createElement('td');
   let project = document.createElement('td');
   let kin = document.createElement('td');
   let status = document.createElement('td');



   tr.setAttribute('data-id', doc.id);
   tr.setAttribute("id", "dataTableFire")
   tr.setAttribute("data-toggle", "modal")
   tr.setAttribute("data-target", "#exampleModal")
   kin.textContent = doc.data().kin;
   client.textContent = doc.data().client;
   date.textContent = doc.data().date;
   price.textContent = doc.data().price;
   project.textContent = doc.data().project;
   status.textContent = doc.data().status;




   price.setAttribute("class", "count-me")
   status.setAttribute("class", "status")


   tr.appendChild(kin);
   tr.appendChild(date);
   tr.appendChild(client);
   tr.appendChild(project);
   tr.appendChild(price);
   tr.appendChild(status);

   orderList.appendChild(tr);


 }

 $(document).ready(function () {
   $('tbody').on('click', 'tr', function () {
     //get row contents into an array
     var tableData = $(this).children("td").map(function () {
       return $(this).text();
     }).get();
     
     document.getElementById("exampleModalLabel").innerHTML = doc.data().id + ' | ' + tableData[0] + ' | ' + tableData[5]; 
     document.getElementById("showCD").innerHTML = 'KIN: ' + tableData[0] + '<br>' + 'Date: ' + tableData[1] + '<br>' + 'Client: ' + tableData[2] + '<br>' + 'Description: ' + tableData[3] + '<br>' + 'Price: ' + tableData[4] + 'лв.' + '<p id="statusModal">';
     document.getElementById("statusModalLabel").innerHTML = tableData[5]

     if(document.getElementById("statusModalLabel").innerHTML === "Завършено"){
     document.getElementById("paymentBtn").style.display = "none";
        
     } else {
       console.log('false');
       document.getElementById("paymentBtn").style.display = "block";
     }

     $('#statusModalLabel:contains("Завършено")').css('color', 'green').append("<i class='fa fa-check' aria-hidden='true'></i>").append("<div class='checkIcon'><svg class='checkmark' id='check' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'/><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg></div>");
     $('#statusModalLabel:contains("Очаква одобрение")').css('color', 'orange').append("<i class='fa fa-clock-o' aria-hidden='true'></i>");
     $('#statusModalLabel:contains("Изпратен за печат")').css('color', 'blue').append("<i class='fa fa-paper-plane-o' aria-hidden='true'></i>");
     $('#statusModalLabel:contains("Очаква плащане")').css('color', 'green').append("<i class='fa fa-money' aria-hidden='true'></i>");
   });
 });


 //Getting Data
 db.collection('orders').get().then((snapshot) => {
   snapshot.docs.forEach(doc => {
     renderOrder(doc);

   });
 });


 (function () {
   setTimeout(
     function () {
       $('.count-me').each(function () {
         //alert($(this).html());

         sum += parseFloat($(this).html());

       });
       console.log(sum.toFixed(2));
       document.getElementById('result').innerHTML += "Общо: " + sum.toFixed(2) + " лв";
     }, 3000);
 })()


 //Status Icons 

 setTimeout(function () {
   $('.status:contains("Завършено")').css('color', 'green').append("<i class='fa fa-check' aria-hidden='true'></i>");
   $('.status:contains("Очаква одобрение")').css('color', 'orange').append("<i class='fa fa-clock-o' aria-hidden='true'></i>");
   $('.status:contains("Изпратен за печат")').css('color', 'blue').append("<i class='fa fa-paper-plane-o' aria-hidden='true'></i>");
   $('.status:contains("Очаква плащане")').css('color', 'green').append("<i class='fa fa-money' aria-hidden='true'></i>");
 }, 3000);







 //setTimeout(function(){ 
 //alert("Orders with status finished will disapear!")
 //$('tr:contains("Завършено")').css('display', 'none')
 // 
 //}, 6000);


 // Disable F12 and Right Click
 // $(document).keydown(function (event) {
 //   if (event.keyCode == 123) { // Prevent F12
 //       return false;
 //   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
 //       return false;
 //   }
 // });

 //   document.addEventListener('contextmenu', event => event.preventDefault());

 //Calc function  
 //function calc(){
 //let n1 = $('#num1').val();
 //let n2 = $('#num2').val();
 //let sum = n1 * n2;

 //let result = $('#result');
 //result.append(sum)
 //}
