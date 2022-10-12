import '@/styles/UI.scss'
import '@/styles/components/notify.scss'
document.querySelector('#main').innerHTML = `
  <div class="container">
    <section class="product">
      <div  class="slider">
      </div>
      <div class="product__description">
      </div>
    </section>
  </div>
  <div class="notify">
    <div class="notify__inner">
      <h3>Товар добавлен в корзину</h3>
      <div class="notify__scrollbar"></div>
    </div>
    <div class="close">
      <div class="close__inner">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
`

