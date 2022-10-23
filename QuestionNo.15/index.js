
// Question # 15
let name = ["Amir Aslam", "Ali Haider", "Wahab", "Musharaf"]

let invitation  = "are you availabe for dinner this Friday, Let's meet at 8pm";

for(i=0; i < name.length; i++){
    document.write('Mr. '+ name[i] + invitation +"<br>")
}

document.write("<br>"+'Mr. '+name[2]+ "will not come to dinner this Friday, due to some reason"+"<br><br>");

name[2] = "Nouman Tariq";

for(i=0; i < name.length; i++){
    document.write('Mr. '+ name[i] + invitation +"<br>")
}



