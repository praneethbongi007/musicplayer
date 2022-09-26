var a=document.getElementById("location-input");
var b=document.getElementById("btn");
var c=document.getElementById("cloud");
var d=document.getElementById("temp");
var e=document.getElementById("wind");
var f=document.getElementById("cityoutput");


const apikey="3045dd712ffe6e702e3245525ac7fa38";

b.onclick=function()
{

if(a.value=="")
{
alert("please enter the city!!!")
}

else{

var g=a.value;
var url = 'https://api.openweathermap.org/data/2.5/weather?q='+a.value+'&appid='+apikey

fetch(url)
.then(res => res.json())
.then(data =>
    {

console.log(data);

var{name}=data;
var{feels_like}=data.main;
var{description}=data.weather[0];
d.innerText=Math.floor(feels_like-273);
e.innerText=description;
f.innerText=name;

});


}

}


