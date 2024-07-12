let altura;
let peso;
const formulario = document.getElementById('formulario')
const result = document.querySelector('.result')
const error = document.querySelector('.error')

formulario.addEventListener('submit', calcular)

function calcular(event) {
    event.preventDefault()

    altura = Number(document.getElementById('altura').value)
    peso = Number(document.getElementById('peso').value)

    const imc = peso / (altura * altura);
    if (!imc) {
        error.classList.remove('off')
        error.classList.add('on')
        result.textContent = ""
    }else {
        error.classList.remove('on')
        error.classList.add('off')
        if (imc < 17) {
            result.innerText = `Seu IMC é ${imc.toFixed(2)}\n Muito abaixo do peso`
        }else if (imc >= 17 && imc < 18.49) {
            result.innerText = `Seu IMC é ${imc.toFixed(2)}\n Abaixo do peso`
        }else if (imc >= 18.5 && imc < 24.99) {
            result.innerText = `Seu IMC é ${imc.toFixed(2)}\n Peso normal`
        }else {
            result.innerText = `Seu IMC é ${imc.toFixed(2)}\n Acima do peso`
        }
    }

    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
}