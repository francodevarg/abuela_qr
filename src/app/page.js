import styles from './page.module.css'

export default function Home() {
  return (
    <main className='container grid'>
      <section id='banner'>
        {/** Imagen de la abuela  */}
        {/** Heading: Gracias por venir! */}
        {/** paragrahp: Te invito a que conozcas el menu de esta noche*/}
        {/** CTA Button: Ver menu smooth scroll*/}

      </section>
      <section id='meal-menu'>
        <h2 class="module-title">Menú principal</h2>

          {/* <div class="item-wrapper">
            <div class="item">
              <div class="title">1. Salmon Zab(Cold Dish)</div>
              <div class="space"></div>
              <div class="price">7.90</div>
            </div>
            <p class="description">Thin sliced fresh salmon topped with Thai style spicy sauce and fresh garlic.</p>
          </div> */}

        <h3>Pre-Entrada</h3>
        <div class="menu">
								<h4 class="menu-title">Empanadas , Sandwiches , Capanes</h4>
				</div>

        <h3>Entrada</h3>
        <div class="menu">
								<h4 class="menu-title">Arroyado de Pollo con Ensalada Rusa</h4>
								<div class="menu-detail">Pollo al horno / Huevo / Papas / Zanahorias </div>
				</div>

        <h3>Plato Principal</h3>
        <div class="menu">
								<h4 class="menu-title">Peceto con Crema Champiniong y Papas Noisette</h4>
								<div class="menu-detail">Pollo al horno / Huevo / Papas / Zanahorias </div>
				</div>


        <h3>Bebidas</h3>
          <ul>
            <li>Vino</li>
            <li>Cerveza</li>
            <li>Agua Mineral</li>
          </ul>
       {/** CTA Button: Ver menu smooth scroll*/}
      </section>
    </main>
  )
}
