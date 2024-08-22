<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down").mb-4 Este componente formativo aborda la importancia de la alimentación en diferentes etapas de la vida, #[b como la gestación, el embarazo], la infancia y la adolescencia. Cada etapa presenta requerimientos nutricionales específicos para asegurar el desarrollo y funcionamiento óptimo del organismo.
            .row.justify-content-center.align-items-center      
              .col-lg-7.my-3.order-1               
                .row.justify-content-center.bg1.brad.p-4.mb-4(data-aos="fade-right")
                  .col-auto
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')        
                  .col
                    p(data-aos="fade-down").mb-0 Se proporcionarán recomendaciones dietéticas detalladas para cubrir las necesidades nutricionales de cada etapa. Además, se analizarán los cambios fisiológicos y metabólicos que ocurren durante estas fases cruciales del crecimiento y desarrollo humano.   

                p(data-aos="fade-down") También se abordará la anorexia nerviosa, un trastorno alimentario prevalente entre mujeres adultas que suele comenzar en la adolescencia. Se discutirán sus causas, manifestaciones clínicas y estrategias de tratamiento, destacando la importancia de la prevención y el apoyo integral para quienes la padecen. 
              .col-lg-5.my-3.order-lg-2            
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
