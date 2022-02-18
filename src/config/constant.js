export const flattenJSON = (obj = {}, res = {}, extraKey = '', key= '') => {
  for(key in obj){
     if(typeof obj[key] !== 'object'){
        res[extraKey + key] = obj[key];
     }else{
        flattenJSON(obj[key], res, `${extraKey}${key}.`);
     };
  };
  return res;
};