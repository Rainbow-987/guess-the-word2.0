player_1_score = 0;
player_2_score = 0;

p1_name = localStorage.getItem("user_1");

p2_name = localStorage.getItem("user_2");

document.getElementById("player1_name").innerHTML = p1_name;
document.getElementById("player2_name").innerHTML=p2_name;

document.getElementById("player1_score").innerHTML =  " : " + player_1_score;
document.getElementById("player2_score").innerHTML =  " : " + player_2_score;

ques_turn = "P1";
ans_turn = "P2";

document.getElementById("question_turn").innerHTML =  "Question Turn : " +  p1_name;
document.getElementById("Answer_turn").innerHTML =  "Answer Turn : " +  p2_name;

function ask_ques(){
    get_word = document.getElementById("question").value; // Treat
    word = get_word.toLowerCase(); // treat // 0 -t , 1 - r , 2 - e, 3 -a , 4 - t, length - 5

 // 2nd letter _
char_1 = word.charAt(1); // r

 //mid letter  _
mid_point = Math.floor(word.length / 2); // 2.5 floor = 2
char_2 = word.charAt(mid_point); // e

 // last letter  _

 last_point = word.length - 1;
 char_3 = word.charAt(last_point);  // t

 // replace with _

 replace_1 = word.replace(char_1, "_"); // word = treat // replace_1 = t_eat

 replace_2 = replace_1.replace(char_2, "_"); // replace_1 = t_eat // replace_2 = t_ _ at

 replace_3 = replace_2.replace(char_3, "_");// replace_2 = t_ _at // replace_3 = t_ _ a_

//mam i am here but i cannot join class //its ok
 question_box = "<h4 id = 'word_display'> Q. - "+ replace_3 + " ?  </h4>" ;
 answer_box = "<br>Answer : <input id = 'answer_word' type = 'text'>";
 submit_button = "<br> <button class = 'btn btn-primary' onclick = 'check()'> CHECK <button>";



  output_ques = question_box +answer_box +  submit_button;
  document.getElementById("output").innerHTML = output_ques;
  document.getElementById("question").value = "";
}