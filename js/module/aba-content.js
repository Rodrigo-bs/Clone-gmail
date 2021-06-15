export default function abaContent() {
  const navs = document.querySelectorAll('[data-content="op-nav"]')

  function handleClick(event) {
    event.preventDefault();
    navs.forEach(nav => nav.classList.remove('ativo'))
    this.classList.add('ativo');
  }

  navs.forEach(nav => nav.addEventListener('click', handleClick))
}