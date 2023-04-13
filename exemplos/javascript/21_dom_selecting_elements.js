function show(){
    // GET - ID
    let name = document.getElementById("name")
    console.log(name.value)
    // GET - NAME - RETORNA UMA LISTA COM TODOS COM AQUELE NOME
    let phone = document.getElementsByName("phone")
    console.log(phone[0].value)
    console.log(phone[1].value)
    // QUERY - REALIZA UMA PESQUISA IGUALMENTE O CSS
    let phones = document.querySelectorAll("div#phones input[name='phone']")
    console.log(phones[1].value)
    // TAG - SELECIONA ELEMENTOS DA TAG
    let elements = document.getElementsByTagName("input")
    console.log(elements)
}