function verificar () {
    let data = new Date()
    let ano = data.getFullYear();
    let fano = document.getElementById('txtAno').value
    let res = document.getElementById('res')
    

    if (fano.length == 0 || fano > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radSex')
        let idade = ano - Number(fano)
        let sexo = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            sexo = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'homem_crianca.jpg') 
            } else if (idade < 21) {
                img.setAttribute('src', 'homem_jovem.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'homem_adulto.jpg')
            } else {
                img.setAttribute('src', 'homem_idoso.jpg')
            }

        } else if (fsex[1]){
            sexo = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'mulher_crianca.jpg') 
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher_jovem.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulher_adulta.jpg')
            } else {
                img.setAttribute('src', 'mulher_idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img)
        
    }
}