



function getselectedvaluetel(){
    var value=document.getElementById('telugu1').value
    grade=value*3
    localStorage.setItem('telugu',grade)
  
}

function getselectedvalueeng(){
    var value=document.getElementById('english1').value
    grade=value*4
    localStorage.setItem('english',grade)
  
}

function getselectedvalueit(){
    var value=document.getElementById('it1').value
     grade=value*2
     localStorage.setItem('it',grade)

  
}

function getselectedvaluemath(){
    var value=document.getElementById('math1').value
     grade=value*5
     localStorage.setItem('math',grade)

  
}

function getselectedvaluephy(){
    var value=document.getElementById('phy1').value
     grade=value*4
     localStorage.setItem('phy',grade)

  
}

function getselectedvalueche(){
    var value=document.getElementById('che1').value
     grade=value*4
     localStorage.setItem('che',grade)

  
}

function getselectedvaluephylab(){
    var value=document.getElementById('phylab1').value
     grade=value*1
     localStorage.setItem('phylab',grade)

  
}

function getselectedvaluechelab(){
    var value=document.getElementById('chelab1').value
     grade=value*1
     localStorage.setItem('chelab',grade)

  
}

function getselectedvalueitlab(){
    var value=document.getElementById('itlab1').value
     grade=value*1
     localStorage.setItem('itlab',grade)

  
}

getselectedvaluetel()
getselectedvalueeng()
getselectedvalueit()
getselectedvaluemath()
getselectedvaluephy()
getselectedvalueche()
getselectedvaluephylab()
getselectedvaluechelab()
getselectedvalueitlab()


function getdata(){
     telugudata=localStorage.getItem('telugu')
     englishdata=localStorage.getItem('english')
     itdata=localStorage.getItem('it')
     mathdata=localStorage.getItem('math')
     phydata=localStorage.getItem('phy')
     chedata=localStorage.getItem('che')
     phylabdata=localStorage.getItem('phylab')
     chelabdata=localStorage.getItem('chelab')
     itlabdata=localStorage.getItem('itlab')

     telugudata1=parseInt(telugudata)
     englishdata1=parseInt(englishdata)
     itdata1=parseInt(itdata)
     mathdata1=parseInt(mathdata)
     phydata1=parseInt(phydata)
     chedata1=parseInt(chedata)
     phylabdata1=parseInt(phylabdata)
     chelabdata1=parseInt(chelabdata)
     itlabdata1=parseInt(itlabdata)

    
  
     let total=telugudata1+englishdata1+itdata1+mathdata1+phydata1+chedata1+phylabdata1+chelabdata1+itlabdata1
     

     sgpa=total/25


     let getdetails=document.getElementById('result')

     getdetails.innerText=`the sgpa you secured: ${sgpa}`






}












