var age=document.querySelector("#age");
var weight=document.querySelector("#weight");
var height=document.querySelector("#height");
var calreq=document.querySelector("#calreq");
var click=document.querySelector("#click");
var add1=document.querySelector("#add1");
var add2=document.querySelector("#add2");
var add3=document.querySelector("#add3");
var add4=document.querySelector("#add4");
var del=document.querySelector("#del");
var list1=document.querySelectorAll(".list1");
var list2=document.querySelectorAll(".list2");
var list3=document.querySelectorAll(".list3");
var list4=document.querySelectorAll(".list4");
var retreive=document.querySelector("#retreive");
var deleteall=document.querySelector("#deleteall");


var liitem1=null;
var liitem2=null;
var liitem3=null;
var liitem4=null;
var arr= new Array;
var calreqval=0;
var calreqval2=0;
var ageval=0;
var weightval=0;
var heightval=0;
var delcount=0;
var valueno2=0;
var listno1=-1;
var listno2=0;
var listno3=0;
var listno4=0;

function calcal(){
  calreqval2=calreqval2-liitem4;
  calreq.innerHTML="<br><br><h2>"+calreqval2 +" Calories more to go</h2>" ;
  localStorage.setItem("calreqval",calreqval2);

  if(calreqval2<50&&calreqval2>30)
  {
  	alert("Slow do your pace less than 50 calories  more to go");
  }


  if(calreqval2<30&&calreqval2>30)
  {
  	alert("Slow do your pace less than 30 calories  more to go");
  }

  if(calreqval2<10)
  {
  	alert("Slow do your pace less than 10 calories  more to go");
  }
}

retreive.addEventListener("click",function(){
  valueno2=Number(localStorage.getItem("valueno"));
  
  console.log(valueno2);

  for(var k=0;k<valueno2;k++)
  {
  	list1[k].innerHTML=localStorage.getItem("food["+k+"]");
    list2[k].innerHTML=localStorage.getItem("Carbs["+k+"]");
    list3[k].innerHTML=localStorage.getItem("Fat["+k+"]");
    list4[k].innerHTML=localStorage.getItem("Calorie["+k+"]");
  }
  listno1=valueno2-1;
  calreqval2=localStorage.getItem("calreqval");
});

del.addEventListener("click", function(){
if(listno1>=-1)
{
	if(delcount>0)
{
	
	list1[listno1].innerHTML="";
    list2[listno1].innerHTML="";
    list3[listno1].innerHTML="";
    list4[listno1].innerHTML="";
    calreqval2=calreqval2+arr[listno1];
    calreq.innerHTML="<br><br><h2>"+calreqval2 +" Calories more to go</h2>" ;
    listno1=listno1-1;
    localStorage.setItem("valueno",listno1+1);
}

if(delcount===0)
{
list1[listno1].innerHTML="";
list2[listno1].innerHTML="";
list3[listno1].innerHTML="";
list4[listno1].innerHTML="";
calreqval2=calreqval2+arr[listno1];
calreq.innerHTML="<br><br><h2>"+calreqval2 +" Calories more to go</h2>" ;
delcount=delcount+1;
listno1=listno1-1;
localStorage.setItem("valueno",listno1+1);
/*listno1=listno1-1;*/
}


}
});



age.addEventListener("keyup", function(event)
{   
		ageval=this.value;
       
	
});

weight.addEventListener("keyup", function(event)
{   
		weightval=this.value;
		

});

height.addEventListener("keyup", function(event)
{   
		heightval=this.value;
	

});

click.addEventListener("click" ,function(){

calreqval=(10*weightval)+(6.25*heightval)-(5*ageval)+5;
calreqval2=calreqval;
calreq.innerHTML="<br><br><br><h2>CAlROIE REQUIREMENT  "+ calreqval+"</h2>";

});

add1.addEventListener("click" , function()
{ 
  delcount=0;	
  ++listno1;
  liitem1=prompt("Enter your food items");

   if(liitem1==null)
   	listno1=listno1-1;

  else
  {	
  	list1[listno1].innerHTML=liitem1;
  	localStorage.setItem("food["+listno1+"]",liitem1);
   	localStorage.setItem("valueno",listno1+1);
  }
});

add2.addEventListener("click" , function()
{ 
 
  if(list1[listno1].innerHTML!="")
  {
  	liitem2=prompt("Enter Carbs Content(in g)");
    list2[listno1].innerHTML=liitem2;
    localStorage.setItem("Carbs["+listno1+"]",liitem2); 
 
  }

});

add3.addEventListener("click" , function()
{ 
  if(list1[listno1].innerHTML!="")
 {
  liitem3=prompt("Enter Fat Content(in g)");
  list3[listno1].innerHTML=liitem3;
  localStorage.setItem("Fat["+listno1+"]",liitem3); 
}

});

add4.addEventListener("click" , function()
{ 
if(list1[listno1].innerHTML!="")
 {
  liitem4=Number(prompt("Enter Calorie Content"));
  list4[listno1].innerHTML=liitem4;
  localStorage.setItem("Calorie["+listno1+"]",liitem4); 
  arr[listno1]=liitem4;
  calcal();
 }

 });


