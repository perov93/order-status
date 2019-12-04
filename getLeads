const fetch = require('node-fetch');
const fs = require('fs');
//GET TOKEN
const CRM_TOKEN_REQ =
"https://accounts.zoho.com/oauth/v2/token?client_id=1000.6EJYLGFBLO0250439MEEWBADJFBYZH&grant_type=refresh_token&refresh_token=1000.a7164248454a8c7b7025f372ae66ff68.9e8fde479f3290125e965a744ba7ae0d&client_secret=9563e60145f2f97ee56c97b2a7a7884e0294071413&redirect_url=https://www.zoho.com";
const gen_crm_token = async () => {
let res = await fetch(CRM_TOKEN_REQ, {
  method: "POST"
});
let data = await res.json();
return data.access_token;
};

// Fetching data for a certain contact
let ArchiveJSON = async () => {
let token = await gen_crm_token();

let res = await fetch(`https://www.zohoapis.com/crm/v2/Leads`, { 
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json"
  }
});

let data = await res.json();
//let toFile = await JSON.stringify(data);
//fs.writeFileSync('leads.json', toFile);
let arrExportLeads = [];

// data.data.forEach(element => {
//     arrExportLeads.push(`${element.Name + " " + element.Last_Name}, ${element.Del_City}, ${element.Coll_City}, ${element.Phone}, ${element.Delivery_Country}, ${element.Collection_Country}, ${element.Email}`)
// });

data.data.forEach(function(elem) {
    arrExportLeads.push({ 
      ContactID: elem.id, 
      Full_Name: elem.Name + " " + elem.Full_Name,
      Coll_City: elem.Coll_City,
      Del_City:elem.Del_City,
      Collection_Country: elem.Collection_Country,
      Delivery_Country: elem.Delivery_Country,
      Phone: elem.Phone,
      Email: elem.Email,
      Notes: elem.Notes
    })
  });

  

console.log(arrExportLeads)
await fs.writeFileSync('arrExportLeads.json', JSON.stringify(arrExportLeads));

//console.log('file created!');
//
// let {
//   CRMSystemStatus:
//   Name,
//   Last_Name,
//   Email,
//   Collection_Country,
//   Called,
//   Delivery_Country,
//   Job_Reference,
//   Nifty_Price1,
//   Load_Size,
//   Owner,
//   Booking_Date,
//   Collection_Date_s
// } = data.data[0];

// return data
};

ArchiveJSON();
