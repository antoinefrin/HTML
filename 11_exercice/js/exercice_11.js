let entier;

function multiplication(){
    entier=prompt("Saisissez un nombre entier");
    /*do{
        a=prompt("Saisissez un nombre entier");
     }while(isNaN(a) || a%1!==0);*/
    if(isNaN(entier) || entier%1!==0){
        alert("Veuillez saisir un nombre entier.");
    }else{
        document.write("<h4>La table de multiplication du nombre: "+entier+"</h4>");
        document.write("<table border >");

        for(var i=1;i<=10;i++){
            document.write("<tr>");
            document.write("<td>"+entier+" x "+i+" =</td>");
            document.write("<td>"+entier*i+"</td>");
            document.write("</tr>");
        }
    }
    document.write("</table>");
}