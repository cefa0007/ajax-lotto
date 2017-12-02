document.addEventListener('DOMContentLoaded', init);

function init() {
    //when the DOMContentLoaded event happens to the webpage run the init function
document.getElementById('btnSend').addEventListener('click', getNumbers);
document.getElementById('btnBack').addEventListener('click', nav);
    
}

function nav(ev) {
    ev.preventDefault();
    //this function runs when either one is clicked
    let btn = ev.target;
//    console.log(btn.id);
    if(btn.id=='btnBack'){
    document.getElementById('home').classList.add('active'); 
    document.getElementById('list').classList.remove('active'); 
        
    }else if(btn.id=='btnSend'){
        //hide the forms display the numbers
    document.getElementById('home').classList.remove('active'); 
    document.getElementById('list').classList.add('active');   
    //getNumbers();
        
    }else{
        //no one else should be calling this function
    }
}

function getNumbers(ev){
//  let url ="http://localhost/mad9014-lotto/nums.php";
  let url ="http://10.70.172.62/mad9014-lotto/nums.php";
    //removed ?digits=3&max=50
    let fd =new FormData();
    let digits =document.getElementById('digits');//the input tag
    let max = document.getElementById('max');//the input tag
    let d = digits.value;//the value from the input
    let m = max.value; // the value from the input
    
//   if( parseInt(d) != NaN )//means it was not an empty string 
//    if(!d=== true)//means it was not an empty string 
//    if ( typeof d == 'string' && d.length >0 )
    
    if( parseInt(d)  && parseInt(m) ){
    fd.append("digits",d);
    fd.append("max",m);
    
    let info = {
        method:'POST',
        body:fd
    };
    nav(ev);
    
    fetch(url,info)
    .then(response => response.json() )
    .then(data=> {
        if(data.code ==0){
            let ul = document.querySelector('ul.num_list');
            ul.innerHTML="";
            console.log(data.num);
            data.numbers.forEach(num=>{
                let li =document.createElement('li');
                li.className='num';
                li.textContent=num;
                
                 ul.appendChild (li);
            });
            
        }else{ 
        }
            
        }
    )
    }
}
    
  
    
    
