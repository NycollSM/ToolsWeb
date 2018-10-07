//modal
let btnmodal = document.getElementsByClassName('modal');
 for (let i = 0 ; i < btnmodal.length; i++){
     btnmodal[i].onclick = function(){

         /**div complete screen */
         let bigdiv = document.createElement('div');
         bigdiv.className = 'big';

         /**div w/ content and button  */
         let mediundiv = document.createElement('div');
         let content = document.createElement('p');
         p.innerHTML = 'Esto es un modal';


         /*button for close div*/
         let close = document.createElement('button');
         close.className = 'close-div';
         close.innerHTML = 'X';

         /** add elements at DOM*/
         bigdiv.appendChild(mediundiv);
         bigdiv.appendChild(content);
         bigdiv.appendChild(close);
         document.body.appendChild(bigdiv);
        /**Close modal function*/
        close.onclick = function(){
            document.body.removeChild(bigdiv);
        }
     }
 }