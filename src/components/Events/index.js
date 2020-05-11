//называется синглтон
let isMobile = window.innerWidth < 780;

//функция возврращает isMobile
export const checkMobile = () => isMobile;

//функция принимает в себя flag  и возвращает изменённый isMobile на новый flag
export const changeMobile = (flag) => (isMobile = flag);
