function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Brown") {
		correct++;
}
	if (question2 == "Oval") {
		correct++;
}	
	if (question3 == "Albany") {
		correct++;
	}
	

	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	

	
