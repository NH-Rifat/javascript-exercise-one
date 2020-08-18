//function exercis........... 
function textFunction(name,age,profession,language) {
    return ('I am '+name+' and '+age+'. I want to be professional '+profession+'. I love '+language+'.')
  }
  const functionCall=(textFunction('Hasan',22,'web developer','javascript'));
  console.log(functionCall);
  //2nd exercise........
  
  const movie1=[
    {
      name:'Inception',
      rating:8,
      category:'science-fiction '
    },
    {
      name:'Avenger',
      rating:9.5,
      category:'Action'
    }
    ]
  
  function arrayObject(movieObject){
    return ('Movie name: '+movieObject[0].name+' rating: '+movieObject[0].rating+' Categories: '+movieObject[0].category)
  }
  const arrayObjectValue=arrayObject(movie1);
  console.log(arrayObjectValue);