import style from '../styles/Home.module.css'

export default function Layouts({children}) {
  return (
    <div className={style.container}>
        
        <main className={style.main}>
        <h1>Layouts</h1>
            {children}
        </main>
    </div>
  )
}
