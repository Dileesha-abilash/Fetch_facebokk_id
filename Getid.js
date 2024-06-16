const axios = require('axios');

const getid = async (url) =>{
      const fetchData = async () => {
        try {
          const response = await axios.get(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
              'Sec-Fetch-Mode': 'navigate'
            }
          });
          return response.data;
        } catch (err) {
          console.error('Error fetching the page: ', err);
          return null;
        }
      };


      const data = await fetchData();
    //   console.log(data)
      if (data) {
        const name = data.match(/"profile_user":{"name":"(.*?)"/)[1]
        // setName(name)
        console.log(name)
        
      const match = data.match(/"profilePhoto":{"url":"([^"]*)/)[1];
      const id = match.match(/set=a.([^&]+)/)[1]
      console.log(id)
    //   console.log("name",name)
      if (id && name) {
        // const url = match[1];
        return [id,name]
        // setProfilePhotoUrl(url);
      }
    }

}
const url = "https://www.facebook.com/user"
getid(url)