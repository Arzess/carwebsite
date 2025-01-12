const cookieHTML = `<form class="cookie">
      <header class="top">
        <p>Цей сайт використовує файли cookie</p>
        <button class="close-button" type="button">&#10006;</button>
      </header>
      <article>
        <p>
          Ми використовуємо файли cookie, щоб зробити ваш досвід таким же
          приємним, як свіжоспечене печиво. 🍪 Залишаючись тут, ви погоджуєтесь
          на ці смачні «крихти радості». Ви завжди можете дізнатися більше або
          змінити свої налаштування файлів cookie.
        </p>
      </article>
      <section class="options">
        <ul class="options-list">
          <li>
            <button type="button">Прийняти</button>
          </li>
          <li>
            <button type="button">Відхилити</button>
          </li>
        </ul>
      </section>
    </form>`;


document.addEventListener("DOMContentLoaded", ()=>{
    document.body.insertAdjacentHTML("beforeend", cookieHTML);
    const cookie = document.querySelector(".cookie");
    const cookieClose = cookie.querySelector("button");
    document.body.classList.add("steady");
    document.body.classList.add("overlay");
    const closeCookie = () => {
      cookie.classList.add("closed")
        document.body.classList.remove("steady")
        document.body.classList.remove("overlay")
    }
    
    cookieClose.addEventListener("click", ()=>{
      closeCookie();
    })
    document.addEventListener("click", (e)=>{
        if(!cookie.classList.contains("closed") && !e.target.closest(".cookie")){
            e.preventDefault();
        }
    })
})
