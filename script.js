let usernamepromptudlitpotom;
usernamepromptudlitpotom = prompt("это потом удалю\n\nник свой напиши");
let username = document.getElementById('UserName').textContent;
const a = document.getElementById("UserName");
a.textContent = usernamepromptudlitpotom;
console.log(username);
let HeadUrl = `https://minotar.net/helm/${usernamepromptudlitpotom}/256.png`;
document.getElementById("head").src = HeadUrl;
document.getElementById("head2").src = HeadUrl;

document.addEventListener("DOMContentLoaded", () => {
  const logoutLink = document.querySelector('.submenu a.d45');
  const a1 = document.querySelector('.a1');
  const content = document.querySelector('.content');

  if (!logoutLink || !a1 || !content) return;

  // --- КНОПКА "ВЫЙТИ ИЗ АККАУНТА" ---
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();

    const im2 = a1.querySelector('.im2');
    if (im2) im2.remove();

    const submenu = a1.querySelector('.submenu');
    if (submenu) submenu.style.display = 'none';

    // Добавляем "войти", если её нет
    if (!a1.querySelector('.login')) {
      const loginLink = document.createElement('a');
      loginLink.classList.add('login');
      loginLink.textContent = 'войти';
      loginLink.href = '#';
      a1.appendChild(loginLink);

      // --- КНОПКА "ВОЙТИ" ---
      loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        loginLink.classList.add('Nologin');

        const oldContent = document.querySelector('.content');
        if (!oldContent) return;

        oldContent.classList.add('fade-out');

        oldContent.addEventListener('animationend', () => {
          oldContent.remove();

          const content2 = document.createElement('div');
          content2.classList.add('content2', 'fade-in');
          content2.innerHTML = `
            <div class="d53">
              <div class="d54">Вы должны авторизоваться для доступа к серверу!</div>
              <div class="d55">Вход и регистрация на Xenopia</div>
              <a href="index.html" class="d56">войти через дискорд</a>
            </div>
          `;
          document.body.insertBefore(content2, document.querySelector('.footer'));

          // Перезапуск анимации футера
          const footer = document.querySelector('.footer');
          footer.style.animation = 'none';
          footer.offsetHeight; // триггер перерисовки
          footer.style.animation = null;
        }, { once: true });
      });
    }
  });
});

