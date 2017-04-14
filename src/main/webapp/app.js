/**
 * Realiza o cálculo do valor do IMC de acordo com a altuera e o peso informados no formulário 
 * @returns 
 */
function calcIMC() {
    var form = document.imcForm;
    var height = form.height.value.replace(',','.');
    var weight = form.weight.value.replace(',','.');
    var message = "Informe uma altura e um peso válido.";
    if (height != "" && weight !== "" && !isNaN(height) && !isNaN(weight)) {
        var imc = weight / Math.pow(height, 2);
        message = "Seu IMC é de " + imc;
    } 
    alert(message);
    return false;
}