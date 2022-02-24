module.exports = function check(str, bracketsConfig) {
 if (str.length % 2 !== 0) return false;
 if (str.length === 0) return true;

 let arrStr = str.split('');
            
 for (let j = 0; j < arrStr.length; j++) {
     for (let i = 0; i < bracketsConfig.length; i++) {
         if (arrStr[j] == bracketsConfig[i][0] && arrStr[j + 1] == bracketsConfig[i][1]) {
              arrStr.splice(j, 2);
              j = - 1;
                }
             }
         }
     return arrStr.length == 0;
}
