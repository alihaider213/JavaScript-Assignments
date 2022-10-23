

// question no 3
let name = "M. Ali Haider"
let lowerCaseName = name.toLowerCase();
let upperCaseName = name.toUpperCase();
document.write(lowerCaseName +"<br>" +upperCaseName + "<br>"+ titleCase(name));

function titleCase (name) {
    name = name.toLowerCase();
    name = name.split(" ");
    for(let i=0; i<name.length; i++){
        name[i]=name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join(" ");
}