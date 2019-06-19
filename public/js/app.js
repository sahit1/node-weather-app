
console.log("sahith")

var form = document.querySelector('form')
var search = document.querySelector('input')
var msg1 = document.querySelector('#msg1')
var msg2 = document.querySelector('#msg2')
var temp = document.querySelector('#temp')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    var location = search.value
    fetch("/weather?address=" + location).then((res) => {
        res.json().then((data) => {
            if (data.error) console.log(data.error)
            else {
                console.log(data)
                msg1.textContent = data.Location
                msg2.textContent = data.summary
                temp.textContent =data.temperature+' .c'

            }
        })
    })

})