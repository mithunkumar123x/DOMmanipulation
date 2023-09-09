// 
localStorage.setItem('name','Bob')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')

sessionStorage.setItem('name' , 'mithun')
console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')


document.cookie = 'name = kayla; expire = '  + new Date(9999,0,1).toUTCString()

document.cookie = 'lastName = mehra; expire =' + new Date(2000,8,1).toUTCString()