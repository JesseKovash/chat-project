var responses = [
  'It is certain', 
  'It is decidedly so', 
  'Without a doubt', 
  'Yes-definitely',
  'You may rely on it', 
  'As I see it, yes', 
  'Most likely', 
  'Outlook good', 
  'Yes',
  'Signs point to yes', 
  'Reply hazy', 
  'try again', 
  'Ask again later', 
  'Better not tell you now', 
  'Cannot predict now', 
  'Concentrate and ask again',
  'Don\'t count on it', 
  'My reply is no', 
  'My sources say no', 
  'Outlook not so good',
  'Very doubtful'
];

//Step2: checks if input text is an acceptable length
  //if it is, calls on another function for formatting
  //if too short, error message, time delay, and removes error message
  //if too long, error message, time delay, and removes error message
function tooLong(str){
  if (str.length <= 75 && str.length > 0){
    inputText(str);
  } else if (str.length === 0){
//next line is jquery
    $(".chat").append('<div class="error"><b>Despite my infinite wisdom, I\'m not a mind reader. Please type a question.</b></div>');
    autoScroll();
    setTimeout(function(){
      //next line is jquery
      $(".error").remove();
      autoScroll();
      //next line is jquery
      $('.textbox').val('');
    }, 3000);
  } else {
    //next line is jquery
    $(".chat").append('<div class="error"><b>Despite my infinite wisdom, you\'ll need limit questions to 75 characters</b></div>');
    autoScroll();
    setTimeout(function(){
      //next line is jquery
      $(".error").remove();
      autoScroll();
      //next line is jquery
      $('.textbox').val('');
    }, 3000);
  }
}

//Step3: properly formats the user input and attaches a date time. 
  //appends the formatted string so it displays and calls on the final function for a response
function inputText(str){
  var time = getTime(new Date());
  var textTime = '<div class="user"><p class="usershift"><b>User</b>: '+str+ "<br>" +time+'</p>';      
    //next line is jquery
    $(".chat").append(textTime); 
    autoScroll();
    autoResponse(responses);
}

//Step4: creates processing message, time delay, and removes processing message
  //Generates a random response from the input array and attaches a date time. 
  //appends the formatted string so it displays. Resets input field to be blank. The end!
function autoResponse(arr){
  var msg = 'Please be patient while I consult the most powerful sources of wisdom in the Universe';
  //next line is jquery 
  $(".chat").append('<div class="processing">'+msg+'</div>');
  setTimeout(function(){
    //next line is jquery
    $(".processing").remove();    
    var randomIndex = Math.floor(Math.random() * 20);
    var randomResp = arr[randomIndex];
    var compTime = getTime(new Date());
    var compTextTime = '<div class="computer"><p class="computershift"><b>Response</b>: '+randomResp+ "<br>" +compTime+'</p></div>';
      //next line is jquery
      $(".chat").append(compTextTime);
      autoScroll();
      //next line is jquery
      $('.textbox').val('');
  },2000);
}

//Properly formats the input time
function getTime(num){
  return `${num.getFullYear()}/${num.getMonth() + 1}/${num.getDate()} Time: ${num.getHours()}:${num.getMinutes()}:${num.getSeconds()}`;
}

//automatically scrolls to bottom of chat <div> with each question/response
function autoScroll(){
//nextline is jquery & https://www.skillsugar.com/javascript-scroll-to-bottom-of-div
  $(".chat").animate({scrollTop: $(".chat")[0].scrollHeight});
}

//Step1: This is triggered by the click of the button
  //passes the value of the input text to a function for a length check
//next line is jquery
$( ".btn" ).click(function() {
  //next line is jquery
  var userText = $(".textbox").val();
  tooLong(userText);
  });

//Alternate step1: This is triggered by hitting enter while typing in the input box
  //passes the value of the input text to a function for a length check
//following code is jquery
  $(".textbox").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#id_of_button").click();
        var userText = $(".textbox").val();
        tooLong(userText);
    }
});