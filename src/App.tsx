import styles from './App.module.css'
import logo from './assets/logos/logo.png'
import instagram from './assets/logos/instagram.png'
import whats from './assets/logos/whats.png'
import drinks from './helpers/drinks'

const App = () => {
  return (
    <div className={styles.main}>
      <header>
       <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <img src={logo} alt="" width={100}/>
            <h1>Black Beer</h1>
          </div>
          <div className={styles.socialMedia}>
            <a href='https://www.instagram.com/blackbeer_adega/'><img src={instagram} alt='' width={30}/></a>
            <a href='/'><img src={whats} alt='' width={30}/></a>
          </div>
        </div>
      </header>
      <main> 
        <div className={styles.mainContainer}>
          {drinks.map((item, key) => (
            <div key={key}>{item.name}</div>
          ))}
        </div>        
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default App