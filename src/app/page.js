import Confetti from '@/components/Confetti'
import WelcomeMessage from '@/components/WelcomeMessage'
import GrandMaImage from '@/components/GrandMaImage'

export default function Home() {
  return (
    <main className='container grid'>
      <Confetti />
      {/** 
        Opciones de styling: para el menu carta 
        https://codepen.io/1wdtv/pen/avKEOo
        https://codepen.io/Garypickles/pen/VjYRXj  
      */}
      <section id='meal-menu'>
        <h2 className='module-title'>Menú principal</h2>

        {/* <div className="item-wrapper">
              <div className="item">
                <div className="title">1. Salmon Zab(Cold Dish)</div>
                <div className="space"></div>
                <div className="price">7.90</div>
              </div>
              <p className="description">Thin sliced fresh salmon topped with Thai style spicy sauce and fresh garlic.</p>
            </div> */}
        <div className="meal-list">

          <div className="meal__item">
            <h3>Pre-Entrada</h3>
            <div className='menu'>
              <h4 className='menu-title'>Sándwiches de miga, Piononos de Atún</h4>
            </div>
          </div>

          <div className="meal__item">
            <h3>Entrada</h3>
            <div className='menu'>
              <h4 className='menu-title'>Arrollado de Pollo con Ensalada Rusa</h4>
              <h6 className='menu-detail'>Carne de Pollo / Huevo / Papas / Zanahorias / Arbejas{' '}</h6>
            </div>
          </div>

          <div className="meal__item">
            <h3>Plato Principal</h3>
            <div className='menu'>
              <h4 className='menu-title'>Peceto Relleno (con Salsa Opcional)*</h4>
              <h6 className='menu-detail'>Carne de Vaca / Ajo / Cebolla / Morrón{' '}</h6>
              <small>*Crema de Verdeo o Crema Champiñón</small>
            </div>
          </div>


          <div className="meal__item">
            <h3>Postre</h3>
            <div className='menu'>
              <h4 className='menu-title'>Tartas</h4>
              <h6 className='menu-detail'>De Gelatina / De Frutos Rojos / De Bon o Bon{' '}</h6>
            </div>
          </div>

          <div className="meal__item">
            <h3>Torta de Cumpleaños</h3>
            <div className='menu'>
              <h4 className='menu-title'>Torta de 80</h4>
              <h6 className='menu-detail'>Bizcochuelo de Vainilla / Crema Oreo / Mousse de Limón / Crema de Frutilla / Frutos Rojos{' '}</h6>
            </div>
          </div>
        </div>

        <h3>Bebidas</h3>
        <ul>
          <li>Vino</li>
          <li>Cerveza</li>
          <li>Agua Mineral</li>
        </ul>
        {/** CTA Button: Ver menu smooth scroll*/}
      </section>

      <section id='banner'>
        <GrandMaImage />
        <WelcomeMessage />

        {/*Animations: https://codepen.io/allenfantasy1018/pen/eeVRYg */}
        {/** Heading: Gracias por venir! */}
        {/** paragrahp: Te invito a que conozcas el menu de esta noche*/}
        {/** CTA Button: Ver menu smooth scroll*/}
      </section>
    </main>
  )
}
