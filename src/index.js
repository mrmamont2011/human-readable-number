module.exports = function toReadable (number) {
  let str ='';

  let sec3 = Math.floor(number/100);
  let sec2 = Math.floor((number-sec3*100)/10);
  let sec1 = number - sec2*10 - sec3*100;
     if(number==0) return ('zero');
   switch(sec3) {
    case 1:  
      str += 'one hundred';
    break;
    case 2:  
      str += 'two hundred';
    break;   
    case 3:  
        str += 'three hundred';
    break;    
    case 4:  
        str += 'four hundred';
    break;    
    case 5:  
        str += 'five hundred';
    break;    
    case 6:  
        str += 'six hundred';
    break;    
    case 7:  
        str += 'seven hundred';
    break;    
    case 8:  
        str += 'eight hundred';
    break;    
    case 9:  
        str += 'nine hundred';
    break;    
   }
   if ( (sec1!=0 || sec2!=0) && sec3!=0) str +=' ';

if((sec1+sec2*10)<20) {

    switch(sec1+sec2*10) {
    case 1:  
    str += 'one';
    break;
    case 2:  
    str += 'two';
    break;
    case 3:  
    str += 'three';
    break;
    case 4:  
    str += 'four';
    break;
    case 5:  
    str += 'five';
    break;
    case 6:  
    str += 'six';
    break;
    case 7:  
    str += 'seven';
    break;
    case 8:  
    str += 'eight';
    break;
    case 9:  
    str += 'nine';
    break;
    case 10:  
    str += 'ten';
    break;
    case 11:  
    str += 'eleven';
    break;
    case 12:  
    str += 'twelve';
    break;
    case 13:  
    str += 'thirteen';
    break;
    case 14:  
    str += 'fourteen';
    break;
    case 15:  
    str += 'fifteen';
    break;
    case 16:  
    str += 'sixteen';
    break;
    case 17:  
    str += 'seventeen';
    break;
    case 18:  
    str += 'eighteen';
    break;
    case 19:  
    str += 'nineteen';
    break;
    }
} else {

switch(sec2) {
   
    case 2:  
      str += 'twenty';
    break;   
    case 3:  
        str += 'thirty';
    break;    
    case 4:  
        str += 'forty';
    break;    
    case 5:  
        str += 'fifty';
    break;    
    case 6:  
        str += 'sixty';
    break;    
    case 7:  
        str += 'seventy';
    break;    
    case 8:  
        str += 'eighty';
    break;    
    case 9:  
        str += 'ninety';
    break;    
   }
   
   switch(sec1) {
    case 1:  
    str += ' one';
    break;
    case 2:  
    str += ' two';
    break;
    case 3:  
    str += ' three';
    break;
    case 4:  
    str += ' four';
    break;
    case 5:  
    str += ' five';
    break;
    case 6:  
    str += ' six';
    break;
    case 7:  
    str += ' seven';
    break;
    case 8:  
    str += ' eight';
    break;
    case 9:  
    str += ' nine';
    break;
   }
}

return(str);

}


 





