const axios = require('axios');
const https = require('https');

const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});
const checkToken = (req, res, next) => {

  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send('Authorization header is missing');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send('Access token is missing');
  }
  let data = new URLSearchParams();
data.append('token', token);
data.append('client_id', '787m3mq1uxfdk7');
data.append('client_secret', 'awCEFciPGYVKQ3Ba');

let config = {
  method: 'post',
  url: 'https://www.linkedin.com/oauth/v2/introspectToken',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
  },
  data: data,
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response?.data));
  if (response.data.status=='active') {
    res.status(200).json({ status: 'success', data:response.data });
  }else{
    res.status(401).json({ status: 'failed', data:response.data });
  }
})
.catch((error) => {
  //console.log(error);
  res.status(500).json({ status: 'failed'});
});

};

module.exports = checkToken;
