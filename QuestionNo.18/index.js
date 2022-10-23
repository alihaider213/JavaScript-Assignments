
// Question # 18
let places = ["Murry", "Toba", "Gojra", "Kashmir", "Sargodha", "Abtabad"]

for(i=0; i < places.length ; i++){
    document.write(places[i]+"<br>")
}

orderedList = places.sort()
for(i=0; i < places.length ; i++){
    document.write("<br>"+orderedList[i])
}

for(i=0; i < places.length ; i++){
    document.write("<br>"+places[i])
}

let reverse = places.reverse();
for(i=0; i < places.length ; i++){
    document.write("<br>"+reverse[i])
}

