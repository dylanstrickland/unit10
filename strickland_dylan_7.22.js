function reverse(a){
	var reversed = "";

	for (i = (a.length-1); i > -1; i--){
		reversed = reversed + a.charAt(i);
	}

	return reversed;
}