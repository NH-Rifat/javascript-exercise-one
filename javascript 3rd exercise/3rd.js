//Fundamental javascript 3rd Assignment on object


// 1st exercise...... 
//I am Hasan and 22. I want to be a professional web developer. I love "javascript".

const newObject = {
    name:'Rifat',
    age:22,
    profession:'web developer',
    programmingLanguage:'"javascript "'
  }
  const objectKeyAccess= 'I am '+newObject.name+' and '+newObject.age+'. I want to be a professional '+newObject.profession+'. I love '+newObject.programmingLanguage+'.'
  console.log(objectKeyAccess);
  
  // 2nd Exercise....
  //Invalid key object construct 
  const someObject={
   'first invalid key' :'Hello',
   'second invalid key':'Hi',
   'third invalid key':'Welcome'
  }
  console.log(someObject['first invalid key']);
  console.log(someObject['second invalid key']);
  console.log(someObject['third invalid key']);
  
  //which of the following are invalid
  someObject._name='Heading'//This are invalid
  someObject.age=6;//This is also valid
  const prop='color'
  someObject[prop]='red'//This is also valid 
  //someObject.123=true //This is not valid because key name can't strat by any kind of digit and some special charactet like(@,#,%,&,*,?,!)etc.
  console.log(someObject);
  
  
  //3rd exercise..........
  const movieReviewObject = [
    {
      name:'Harry potter',
      part:1,
      category:'magician-story ', 
      rating:8.5
    },
    {
      name: 'Harry potter',
      part: 2,
      category: 'magician-story ',
      rating: 9
    },
    {
     name: 'Harry potter',
     part: 3,
     category: 'magician-story ',
     rating: 9.5
    }
    //.... we can add more object
    ]
  
    
    //Now we access all the property by using for loop and it will dynamic.
    for(let i=0; i<movieReviewObject.length;i++){
      console.log('Name: '+(movieReviewObject[i].name)+' Part: '+   (movieReviewObject[i].part)+' Categories: '+(movieReviewObject[i].category)+ ' Rating: '+ (movieReviewObject[i].rating));
    }
  
    
    //also we can access the property in the below system but it Won't be dynamic. 
    console.log('Name: '+(movieReviewObject[0].name)+' Part: '+   (movieReviewObject[0].part)+' Categories: '+(movieReviewObject[0].category)+ ' Rating: '+ (movieReviewObject[0].rating));
    //now we have to access to the 2nd object property
    console.log('Name: '+(movieReviewObject[1].name)+' Part: '+   (movieReviewObject[1].part)+' Categories: '+(movieReviewObject[1].category)+ ' Rating: '+ (movieReviewObject[1].rating));
    //Again we have to access the 3rd given object property
  console.log('Name: '+(movieReviewObject[2].name)+' Part: '+(movieReviewObject[2].part)+' Categories: '+(movieReviewObject[2].category)+ ' Rating: '+ (movieReviewObject[2].rating));
  
  
  
  