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

var liitem1=null;
var liitem2=null;
var liitem3=null;
var liitem4=null;

var calreqval=0;
var calreqval2=0;
var ageval=0;
var weightval=0;
var heightval=0;
var delcount=0;

var listno1=-1;
var listno2=0;
var listno3=0;
var listno4=0;

function calcal(){
  calreqval2=calreqval2-liitem4;
  calreq.innerHTML="<br><br><h2>"+calreqval2 +" Calories more to go</h2>" ;

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

del.addEventListener("click", function(){
if(listno1>=-1)
{
	if(delcount>0)
{
	
	list1[listno1].innerHTML="";
    list2[listno1].innerHTML="";
    list3[listno1].innerHTML="";
    list4[listno1].innerHTML="";
    listno1=listno1-1;

}

if(delcount===0)
{
list1[listno1].innerHTML="";
list2[listno1].innerHTML="";
list3[listno1].innerHTML="";
list4[listno1].innerHTML="";
delcount=delcount+1;
listno1=listno1-1;
/*listno1=listno1-1;*/
}


}
});



age.addEventListener("keyup", function(event)
{   
	/*if(event.which===13)*/
		ageval=this.value;
       
	
});

weight.addEventListener("keyup", function(event)
{   
	/*if(event.which===13)*/
		weightval=this.value;
		

});

height.addEventListener("keyup", function(event)
{   
	/*if(event.which===13)*/
		heightval=this.value;
	

});

click.addEventListener("click" ,function(){

calreqval=(10*weightval)+(6.25*heightval)-(5*ageval)+5;
calreqval2=calreqval;
calreq.innerHTML="<br><br><br><h1>CAlROIE REQUIREMENT  "+ calreqval;

});

add1.addEventListener("click" , function()
{ 
  delcount=0;	
  ++listno1;
  liitem1=prompt("Enter your food items");
  list1[listno1].innerHTML=liitem1;

  if(liitem1=="samosa")
  {
   list1[listno1].innerHTML=liitem1;
   list2[listno1].innerHTML="5";/*listno1++;*/
   list3[listno1].innerHTML="13";
   list4[listno1].innerHTML="260";
   liitem4=260;
   calcal();
  
  }

  if(liitem1=="naan")
  {
   list1[listno1].innerHTML=liitem1;
   list2[listno1].innerHTML="11.5";/*listno1++;*/
   list3[listno1].innerHTML="2.1";
   list4[listno1].innerHTML="78";
   liitem4=78;
   calcal();
  }

  if(liitem1=="palak paneer")
  {
   list1[listno1].innerHTML=liitem1;
   list2[listno1].innerHTML="43";/*listno1++;*/
   list3[listno1].innerHTML="14";
   list4[listno1].innerHTML="350";
   liitem4=350;
   calcal();

  }

  if(liitem1=="daal")
  {
   list1[listno1].innerHTML=liitem1;
   list2[listno1].innerHTML="24";/*listno1++;*/
   list3[listno1].innerHTML="12";
   list4[listno1].innerHTML="108";
   liitem4=108;
   calcal();
  }

  if(liitem1=="kurma")
  {
   list1[listno1].innerHTML=liitem1;
   list2[listno1].innerHTML="52";/*listno1++;*/
   list3[listno1].innerHTML="9";
   list4[listno1].innerHTML="330";
   liitem4=330;
   calcal();
  }

  if(liitem1=="bhaji")
  {
   list1[listno1].innerHTML=liitem1;
   list2[listno1].innerHTML="57";/*listno1++;*/
   list3[listno1].innerHTML="16";
   list4[listno1].innerHTML="190";
   liitem4=190;  
   calcal();
  }

  if(liitem1=="briyani")
  {
   list1[listno1].innerHTML=liitem1;
   list2[listno1].innerHTML="59";/*listno1++;*/
   list3[listno1].innerHTML="25";
   list4[listno1].innerHTML="550";
   liitem4=550;
   calcal();
  }

})

add2.addEventListener("click" , function()
{ 
 
  console.log("working");
 
  if(list1[listno1].innerHTML!="")
  {
  	liitem2=prompt("Enter Carbs Content(in g)");
    list2[listno1].innerHTML=liitem2;
   /* listno2++;*/
  }

})
add3.addEventListener("click" , function()
{ 
  if(list1[listno1].innerHTML!="")
 {
  liitem3=prompt("Enter Fat Content(in g)");
  list3[listno1].innerHTML=liitem3;
  /*listno3++;*/
}

})
add4.addEventListener("click" , function()
{ 
if(list1[listno1].innerHTML!="")
 {
  liitem4=prompt("Enter Calorie Content");

  list4[listno1].innerHTML=liitem4;
  calcal();
  /*listno4++;*/
 }

 
  

 

})


