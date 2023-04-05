 
 let result = document.getElementById('inputtext');

 let calculate=(number)=>{
    result.value +=number;
 }

 let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid result ")
    }
    
    console.log(eval(result.value));
 }

 function clr(){
    result.value = "";
 }

 function del(){
    result.value = result.value.slice(0,-1);
 }