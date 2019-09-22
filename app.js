 
  const orderList = document.querySelector('#demo');
  const form = document.querySelector('#entry-data');
  
  function renderOrder(doc) {
    let tr = document.createElement('tr');
    let client = document.createElement('td');
    let date = document.createElement('td');
    let price = document.createElement('td');
    let project = document.createElement('td');
    let kin = document.createElement('td');
    let status = document.createElement('td');
    let cross = document.createElement('td');
  
  
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute("id", "dataTableFire")
    kin.textContent = doc.data().kin;
    client.textContent = doc.data().client;
    date.textContent = doc.data().date;
    price.textContent = doc.data().price;
    project.textContent = doc.data().project;
    status.textContent = doc.data().status;
    cross.textContent = 'x';
  
  
  
    cross.setAttribute("class", "cross_btn");
    price.setAttribute("class", "count-me")
  
  
    tr.appendChild(kin);
    tr.appendChild(date);
    tr.appendChild(client);
    tr.appendChild(project);
    tr.appendChild(price);
    tr.appendChild(status);
    tr.appendChild(cross);
  
  
    orderList.appendChild(tr);
  
 
  
  }
  
  
  
  //Getting Data
  db.collection('orders').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      renderOrder(doc);
  
    });
  });


  (function () {
    setTimeout(
      function() {
        $('.count-me').each(function() {
          //alert($(this).html());
          
          sum += parseFloat( $(this).html());
          
        });
        console.log(sum.toFixed(2));
         document.getElementById('result').innerHTML += "Общо: " + sum + " лв";
      }, 3000);
  })()
  
  


  
  
  
  // Disable F12 and Right Click
  // $(document).keydown(function (event) {
  //   if (event.keyCode == 123) { // Prevent F12
  //       return false;
  //   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
  //       return false;
  //   }
  // });
  
  //   document.addEventListener('contextmenu', event => event.preventDefault());
  
  
  