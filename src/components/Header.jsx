const Header = () => {
   return (
      <div>{(window.location.pathname === '/news') ? <span>Новости</span> : <span>Темы</span>}</div>
   )
}

export default Header