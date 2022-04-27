const button = document.getElementById('Calcule');
console.log(button); 

button.onclick = function() {
    var a = prompt('Qual o seu a?');
    if (isNaN(a)) {
        alert("Por favor insira apenas números")
    }
    else{
        var b = prompt('Qual o seu b?');
        if (isNaN(b)) {
            alert("Por favor insira apenas números")
        }
        else{
            var c = prompt('Qual o seu c?');
            if (isNaN(c)) {
                alert("Por favor insira apenas números")
            }
            else{
                var d = a*c;
                var delta = b*b-4*d;
                var x1 = (-b+Math.sqrt(delta))/(2*a);
                var x2 = (-b-Math.sqrt(delta))/(2*a);
                if (isNaN(x1)) {
                    alert("Delta negativo")
                }
                else{
                    alert('Seu X1 é ' + x1 + ', e seu X2 é ' + x2);
                }
            }
        }
    }
}