console.log("IT's workding!")
let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
} else {
    setTheme(theme)
}
let themeDots = document.getElementsByClassName("theme-dot")

for (let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode== 'light'){
        document.getElementById('theme-style').href = "{{a}}"
    }
    if(mode== 'blue'){
        document.getElementById('theme-style').href = "{{b}}"
    }
    if(mode== 'green'){
        document.getElementById('theme-style').href = './green.css'
    }
    if(mode== 'purple'){
        document.getElementById('theme-style').href = './purple.css'
    }
    localStorage.setItem('theme', mode)
}