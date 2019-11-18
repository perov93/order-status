const numItemsToGenerate = 1;

(function renderItem(){
    fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {   
      
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?beach')";
    }) 
  })()

  

function copyLink() {
    var copyText = document.getElementById("linkTransfer");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

  function contactView() {

        document.getElementById("mainDiv").style.display = "none";
        document.getElementById("contactLayout").style.display = "block";
        document.getElementById("contact").setAttribute("class", "nav-link active")
        document.getElementById("home").setAttribute("class", "nav-link")
    }

    function homeView() {

      document.getElementById("mainDiv").style.display = "block";
      document.getElementById("contactLayout").style.display = "none";
      document.getElementById("home").setAttribute("class", "nav-link active")
      document.getElementById("contact").setAttribute("class", "nav-link")
  }
    

 // document.getElementById('result').innerHTML = $('#linkTransfer').val();

return fetch(`https://source.unsplash.com/1600x900/?beach`)
    .then(response => response.json())
    .then(result => {
      return result.results;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?beach')";
    });

