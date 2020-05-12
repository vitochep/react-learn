 export const get=()=>(dispatch)=>{

    //ссылка по которой приходит ответ с новостями
const responce=fetch('http://127.0.0.1:3006/news')

     //в ответе содержатся промисы
     console.log("responce", responce)


     responce.then((data)=>{
         data.text().then((data)=>{
             console.log('data', data)
         })
     })
};


