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