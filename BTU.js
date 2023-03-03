function calcular() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n3 = document.getElementById("n3").value

    let result = (n1 * 600) + (n2 * 600) + (n3 * 600)

    window.alert("O resultado é: " + result )
    //document.getElementsByTagName("span")[0].innerHTML = "Resultado = "+ result + " BTU";
    
 }