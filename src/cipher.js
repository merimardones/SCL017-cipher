
const cipher = {
  
  encode: (txt, offset) => { 
    console.log(offset);
    console.log (txt);

    let messageCode = '';
    let offsetEncode= parseInt(offset);
    console.log(offsetEncode);
      
    for (let i=0; i < txt.length; i++) { 
  
      let codeAscii = txt.charCodeAt(i);
      console.log(codeAscii);

      if (codeAscii >= 65 && codeAscii <= 90) {
  
        messageCode += String.fromCharCode((codeAscii - 65 + offsetEncode) % 26 + 65);
        console.log(messageCode);
        }
  
        else if (codeAscii >= 97 && codeAscii <= 122) { 

        messageCode += String.fromCharCode((codeAscii - 97 + offsetEncode)%26+97);
          
        } 

        else if (codeAscii ===32){

          messageCode += String.fromCharCode(codeAscii);
        } 
        
         else { 
            
          messageCode += String.fromCharCode((codeAscii - 33 + offsetEncode) % 26 + 33);
          
        } 

        
      }
      console.log(messageCode);
      return messageCode;

    },
  
      
  
  decode: (txt,offset) => {
    console.log(txt);
    console.log(offset);
    
    let messageDecode = '';
    let offsetDecode = parseInt(offset);
    console.log(offsetDecode);
  
      for (let i = 0; i < txt.length; i++) {
  
        let decoAscii = txt.charCodeAt(i); 
       
        if (decoAscii >= 65 && decoAscii <= 90) {
  
          messageDecode += String.fromCharCode((decoAscii - 90 - offsetDecode) % 26 + 90);
  
        } 
        
          else if (decoAscii >= 97 && decoAscii <= 122) {
  
          messageDecode += String.fromCharCode((decoAscii - 122 - offsetDecode) % 26 + 122);
  
          } 
        
          else if (decoAscii === 32) {
  
          messageDecode += String.fromCharCode(decoAscii);
  
          } 
          
          else if (decoAscii >= 33 && decoAscii <= 64) {
  
          messageDecode += String.fromCharCode((decoAscii - 64 - offsetDecode) % 26 + 64);
          }

        console.log(messageDecode);
      }

      return messageDecode;

    }

};

     
  
    export default cipher