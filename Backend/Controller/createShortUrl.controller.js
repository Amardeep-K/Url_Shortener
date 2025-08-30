

import createShortUrlService from "../Services/createShortUrlServices.js";

const createShortUrl=async (req, res) => {
 const {url} = req.body;
  const short =await createShortUrlService(url);
  res.send(process.env.APP_URL + short)
 
}
export default createShortUrl;

