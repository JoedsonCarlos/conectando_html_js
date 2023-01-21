let nume="";


function number(){

  nume=document.getElementById('numero');
  let  res= document.getElementById('Resultado');
  let num=Number(nume.value);
   
   

if( num >= 90 && num < 1000){

   res.innerHTML= 'letra A'
}
 else if ( num>= 80 && num<=89){

   res.innerHTML='letra B'
 }
 else if (num>= 70 && num<= 79){

   res.innerHTML= 'letra c'
 }
 else if (num>=60 && num<=69){

   res.innerHTML= 'letra d'
 }
 else{

   res.innerHTML= ' letra F'
 }

}
