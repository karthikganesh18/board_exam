users=[]
city=['bangalore','chennai','mumbai','hyderabad']
function chan(){
    let n= document.getElementById('name')
    let e= document.getElementById('email')
    user={
        name: n.value ,
        email: e.value
    }
    let k=users.filter(u=>{
        return u.email==email.value
    })
    if (k.length>0){
        alert('User already exist')
    }
    else{
        users.push(user)
        let p= users.map(u=>{
            return {
                name1:u.name,
                email1:u.email,
                center: city[Math.floor(Math.random()*city.length)]
    
            }
        })
        let a=document.createElement('div')
        let b=document.createElement('h4')
        let c=document.createElement('h4')
        let d=document.createElement('h4')
        b.innerText=p[p.length -1].name1
        c.innerText=p[p.length -1].email1
        d.innerText=p[p.length -1].center

        a.appendChild(b)
        a.appendChild(c)    
        a.appendChild(d)


        let a1=document.getElementById('cont1')
        a1.appendChild(a)
        a.classList.add('title')
    }

    
    
    
    
}
