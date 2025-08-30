import urlSchema from "../models/shortUrl.model.js";
import generateNanoid from "../utils/helper.js";
const createShortUrlService = (url)=>{
 const short = generateNanoid(7);
const newUrl= new urlSchema({
    full_url : url,
    short_url:short
  })
  newUrl.save()
  return short;

  
}
export default createShortUrlService;