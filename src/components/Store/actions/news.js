 export const get=()=>(dispatch)=>{

    //ссылка по которой приходит ответ с новостями
const responce=fetch('http://127.0.0.1:3006/news');


     //в ответе содержатся промисы
     console.log("responce", responce);

     //then - функция, ожидающая ответ от fetch. Это и есть асинхронность.
     responce.then((data)=>{
         data.text().then((data)=>{
             console.log('data', data)
         })
     })
};


