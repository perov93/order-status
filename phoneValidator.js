const fetch = require('node-fetch')

// const params = event.request.parameters
// const LEAD_ID = params.LeadID
const LEAD_ID = '1884630000107702692'
const PHONE_VALIDATOR_API_KEY = 'pv-7d71cfb52065d3f973dc35485fe26440';

// GET TOKEN
const CRM_TOKEN_REQ =
  'https://accounts.zoho.com/oauth/v2/token?client_id=1000.6EJYLGFBLO0250439MEEWBADJFBYZH&grant_type=refresh_token&refresh_token=1000.a7164248454a8c7b7025f372ae66ff68.9e8fde479f3290125e965a744ba7ae0d&client_secret=9563e60145f2f97ee56c97b2a7a7884e0294071413&redirect_url=https://www.zoho.com'
const gen_crm_token = async () => {
  const res = await fetch(CRM_TOKEN_REQ, {
    method: 'POST'
  })
  const data = await res.json()
  return data.access_token
}

// Fetching data for a certain lead
const getLeadData = async () => {
  const token = await gen_crm_token()

  const res = await fetch(`https://www.zohoapis.com/crm/v2/Leads/${LEAD_ID}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  })
  let data = await res.json()
  data = data.data[0]
  //console.log(data);
  
  // // filter the fields needed for Daktela
  let responce = {
    Phone: data.Phone,
    Collection_Country: data.Collection_Country,
    Delivery_Country: data.Delivery_Country,

  };
  return responce;
}


let getCountryCode = async (country_name) => {
  let COUNTRY_CODE_URL = `https://restcountries.eu/rest/v2/name/${country_name}`;
  let res = await fetch(COUNTRY_CODE_URL , {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  let data = await res.json();
  return await data[0].alpha2Code;

};

const getValidPhoneNumber = async () => {
    let leadData = await getLeadData();
    let country_code = await getCountryCode(leadData.Collection_Country);
    console.log(leadData.Collection_Country);
    
    const url = `https://api.phone-validator.net/api/v2/verify?PhoneNumber=${leadData.Phone}&CountryCode=${country_code}&APIKey=${PHONE_VALIDATOR_API_KEY}`;
    const response = await fetch(url);
    let commits = await response.json();
    if(commits.status == "VALID_CONFIRMED"){
      console.log("Valid");
      return commits.formatinternational
    } 
    else {
      console.log("Invalid");
      country_code = await getCountryCode(leadData.Collection_Country);
      response = await fetch(url);
      commits = await response.json();
      return commits.formatinternational;
    }   
}

const updateRecordWithValidPhone = async () => {
  let Valid_Phone = await getValidPhoneNumber();

  const token = await gen_crm_token()

  const res = await fetch(`https://www.zohoapis.com/crm/v2/Leads/${LEAD_ID}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            Valid_Phone
          }
        ]
      })
    });
  const data = await res.json();
  console.log(data);
  
  return data;
}

updateRecordWithValidPhone();
