const calcular = document.getElementById('calcular');


function investir(){
    const nome = document.getElementById('nome').value
    const mensal = document.getElementById('Rmensal').value
    const tjuros = document.getElementById('Txjuros').value
    const meses = document.getElementById('Nparcelas').value
    const juros = tjuros/100    
    const resultado = document.getElementById("resultado")

   
    let p = ((1+juros)**meses-1)/juros 
    let vf = mensal*p.toFixed(2)
  
    resultado.innerHTML  = `${nome}, se você aplicar Renda mensal de R$ ${mensal}, 
    com uma taxa de juros de ${tjuros}% ao mês,
    durante ${meses} meses,
    acumulará uma poupança de R$ ${vf}`
    
}

calcular.addEventListener('click', investir); 
