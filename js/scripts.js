$(function(){
  var input1 = prompt('Enter a sentence');

  function firstLast (){
    var firstLet = input1.charAt(0).toUpperCase();
    var lastLet = input1.charAt(input1.length-1).toUpperCase();
    return lastLet+firstLet;
  }


  function count(){
    var inputLen = input1.length-1;
    return (inputLen/2).toFixed();
  }

  function end(){
    var begin = input1.charAt(count());
    return begin+input1+firstLast();
  }

  function swap(){
    return end().split("").reverse().join("");
  }

  console.log(swap());
 $("#ip").click(function(){
     alert(input1);
  });
  $("#et").click(function(){
      alert(swap());
   });



});
