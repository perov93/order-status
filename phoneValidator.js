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
  // console.log(data);
  
  // // filter the fields needed for Daktela
  let {
    Phone,

  }=data;
  return Phone
}


const getValidPhoneNumber = async () => {
    let phone = await getLeadData();
    console.log(phone);
    let country_code = 'gb';
    const url = `https://api.phone-validator.net/api/v2/verify?PhoneNumber=${phone}&CountryCode=${country_code}&APIKey=${PHONE_VALIDATOR_API_KEY}`;
    const response = await fetch(url);
    let commits = await response.json();
    
    console.log(commits.formatinternational);
  return commits.formatinternational
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
