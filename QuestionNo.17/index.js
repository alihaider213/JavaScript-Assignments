
// Question # 17 

let name = ["Amir Aslam", "Ali Haider", "Wahab", "Musharaf"]

let invitation  = " are you availabe for dinner this Friday, Let's meet at 8pm";

for(i=0; i < name.length; i++){
    document.write('Mr. '+ name[i] + invitation +"<br>")
}

document.write("<br>"+'Mr. '+name[2]+ "will not come to dinner this Friday, due to some reason"+"<br><br>");

name[2] = "Nouman Tariq";

for(i=0; i < name.length; i++){
    document.write('Mr. '+ name[i] + invitation +"<br>")
}

name.unshift("Rana Umar");
name.splice(2,0, "Tamoor");
name.push("Waqas");

document.write("<br>"+"I have found a bigger dinning tabel, so im inviting more guests"+"<br><br>");

for(i=0; i < name.length; i++){
    document.write('Mr. '+ name[i] + invitation +"<br>")
}


document.write("<br>"+"Due to unexpected circumstance new Dinner Table will not arrive on time, so I can invite only two guests" +"<br><br>");

let newMessage = "I am really sorry to inform you that we can't have dinner this Sunday";

let only2 = name.length - 2;

for(i=0; i < only2; i++){
    document.write('Mr. '+ name.pop[i] + newMessage +"<br>")
}

for(i=0; i < 2; i++){
    document.write("<br>"+'Mr. '+ name[i] + invitation)
}


