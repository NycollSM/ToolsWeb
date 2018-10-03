let btnmodal = document.getElementsByClassName('modal');
 for (let i = 0 ; i < btnmodal.length; i++){
     btnmodal[i].onclick = function(){
         let bigdiv = document.createElement('div');
         bigdiv.className = 'big';
         let close = document.createElement('button');
         close.className = 'close-div';
         close.innerHTML = 'X';

        /**Close modal function*/
        close.onclick = function(){
            document.body.removeChild(bigdiv);
        }
     }
 }