<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Adolescencia

    .row.justify-content-center.mb-4   
      .col-lg-9.my-3
        .bg12                                              
          .row.justify-content-center   
            .col-lg-6
              img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/58.png', alt='')
            .col-lg-6.my-3.j1.p-3
              p(data-aos="fade-down") La adolescencia es la etapa comprendida entre los 13 y 19 años, se puede considerar la etapa de transición de la niñez a la edad adulta. Sin embargo, los cambios físicos y psicológicos que se producen en la adolescencia pueden comenzar antes, durante la preadolescencia, que va de los 9 a los 12 años.

              p(data-aos="fade-down") Esta etapa puede ser una época de desorientación y descubrimiento, debido a cuestiones de independencia e identidad propia.
      .col-lg-3.my-3
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='')  

    p(data-aos="fade-down") Los cambios físicos y metabólicos en la adolescencia son:  

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Hombres" :icono="require('@/assets/curso/temas/60.png')") 
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Hombres
            ul.lista-ul.fa-ul.mb-0
              li 
                i.fas.fa-carrot.color1
                span Estructuras genitales.
              li 
                i.fas.fa-carrot.color1
                span Desarrollo de las mamas.
              li 
                i.fas.fa-carrot.color1
                span Vello corporal.
              li 
                i.fas.fa-carrot.color1
                span Glándulas sebáceas.
              li 
                i.fas.fa-carrot.color1
                span Masa muscular.
              li 
                i.fas.fa-carrot.color1
                span Crecimiento del esqueleto.
              li 
                i.fas.fa-carrot.color1
                span Metabolismo proteico.
              li 
                i.fas.fa-carrot.color1
                span Metabolismo lipídico. 
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/62.png', alt='')               

      .py-4.py-md-5(titulo="Mujeres" :icono="require('@/assets/curso/temas/61.png')") 
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Mujeres
            ul.lista-ul.fa-ul.mb-0
              li 
                i.fas.fa-carrot.color1
                span Estructuras genitales.
              li 
                i.fas.fa-carrot.color1
                span Desarrollo de las mamas.
              li 
                i.fas.fa-carrot.color1
                span Vello corporal.
              li 
                i.fas.fa-carrot.color1
                span Glándulas sebáceas.
              li 
                i.fas.fa-carrot.color1
                span Masa muscular.
              li 
                i.fas.fa-carrot.color1
                span Crecimiento del esqueleto.
              li 
                i.fas.fa-carrot.color1
                span Metabolismo proteico.
              li 
                i.fas.fa-carrot.color1
                span Metabolismo lipídico. 
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/63.png', alt='')  

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Cambios psicológicos en la adolescencia   

    p(data-aos="fade-down") Etapa de grandes contradicciones, pensamientos radicales y conflictividad:   

    .bg6.mb-5                                              
      .row.justify-content-center   
        .col-lg-6
          img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/64.png', alt='')
        .col-lg-6.my-3.j1
          ul.lista-ul.fa-ul.mb-0
            li 
              i.fas.fa-carrot.color1
              span Adquisición de independencia.
            li 
              i.fas.fa-carrot.color1
              span Búsqueda de la propia identidad.
            li 
              i.fas.fa-carrot.color1
              span Desarrollo intelectual.
            li 
              i.fas.fa-carrot.color1
              span Madurez y maduración sexual. 

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Necesidades de energía y nutrientes

    p(data-aos="fade-down") Durante la adolescencia, las necesidades de energía y nutrientes son elevadas debido al rápido crecimiento y desarrollo. A continuación, se detallan las recomendaciones específicas para la ingesta de energía, lípidos, carbohidratos, proteínas y otros alimentos esenciales.

    .titulo-sexto.color-secundario(data-aos="fade-left")
      h5 Tabla 4.
      span Requerimientos energéticos por género y edad
    .tabla-a.color-acento-botones.text-center.mb-5 
      table        
        thead.bgth
          tr
            th Género 
            th Edad (años)
            th Kcal/Kg/d
            th Kcal/d

        tbody
          tr
            td Hombres         
            td 11-14  
            td 60         
            td 2500     
          tr
            td Hombres         
            td 15-19  
            td 50        
            td 3000
          tr
            td Mujeres         
            td 11-14  
            td 50        
            td 2200
          tr
            td Mujeres         
            td 15-19  
            td 40        
            td 2200 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-1 Lípidos            

    .bg2.mb-5                                              
      .row.justify-content-center 
        .col-lg-7.my-3.j1
          .p-4
            p(data-aos="fade-down") Los lípidos son una parte esencial de la dieta, especialmente durante la adolescencia, cuando el cuerpo está en rápido crecimiento y desarrollo. Deben constituir entre el 30 % y el 35 % de la ingesta diaria de calorías. Es crucial mantener un equilibrio adecuado entre los diferentes tipos de ácidos grasos: saturados, monoinsaturados y poliinsaturados, para apoyar el desarrollo celular, la producción de hormonas y la absorción de vitaminas liposolubles.       
        .col-lg-5
          img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/65.png', alt='')   

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-1 Carbohidratos            

    .bg12.mb-5                                              
      .row.justify-content-center 
        .col-lg-7.my-3.j1
          .p-4
            p(data-aos="fade-down") Los carbohidratos son la principal fuente de energía para el cuerpo y juegan un papel fundamental en el apoyo a las actividades diarias y el crecimiento durante la adolescencia. Deben representar entre el 55 % y el 66 % de la ingesta diaria de calorías, preferiblemente provenientes de hidratos de carbono complejos. Estos proporcionan una liberación de energía sostenida y son beneficiosos para la salud digestiva y el control del peso.       
        .col-lg-5
          img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/66.png', alt='') 

    p(data-aos="fade-down") Las recomendaciones de alimentación saludable son:

    .titulo-sexto.color-secundario(data-aos="fade-left")
      h5 Tabla 5.
      span Consumo de alimentos diario y semanal en adolescentes 
    .tabla-a.color-acento-botones.text-center.mb-5 
      table        
        thead.bgth
          tr
            th Consumo diario  
            th Consumo semanal
        tbody
          tr
            td 
              ul.lista-ul.fa-ul.mb-0
                li 
                  i.fas.fa-carrot.color1
                  span Leche, yogurt y queso: 2 a 4 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Aceite de oliva: 4 a 6 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Verduras y hortalizas: 2 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Frutas: 3 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Pan, cereales integrales, arroz, pasta, papas: 4 a 6 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Agua: 6 a 8 raciones.             
            td 
              ul.lista-ul.fa-ul.mb-0
                li 
                  i.fas.fa-carrot.color1
                  span Pescado: 3 a 4 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Carnes magras: 3 a 4 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Huevos: 3 a 4 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Legumbres: 2 a 4 raciones.
                li 
                  i.fas.fa-carrot.color1
                  span Frutos secos: 3 a 7 raciones.  

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-1 Situaciones de riesgo nutricional
            
    p(data-aos="fade-down").mb-5 La adolescencia es una etapa crítica para el crecimiento y el desarrollo, donde la nutrición juega un papel fundamental. Sin embargo, diversos factores pueden poner en riesgo una nutrición adecuada durante este periodo. Estos factores se presentan a continuación: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg3.brad.p-4
          .row.justify-content-center.align-items-center
            .col-lg-5
              img.img-a.img-t(src='@/assets/curso/temas/pod.svg', alt='')
            .col-lg-7        
                h5(data-aos="fade-down") #[i Pódcast]
                p(data-aos="fade-down") La adolescencia es una etapa crítica para el crecimiento y el desarrollo, donde la nutrición juega un papel fundamental. Sin embargo, diversos factores pueden poner en riesgo una nutrición adecuada durante este periodo. Estos factores se presentan a continuación:
                  TarjetaAudio.color-secundario.mt-4(
                  texto="Situaciones de riesgo nutricional"
                  :audio="require('@/assets/componentes/audios/riesgo.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )  


    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Anorexia nerviosa
    .row.bg11.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down") La anorexia nerviosa es un trastorno de la conducta alimentaria que se caracteriza por un deseo irrefrenable de estar delgado, llevándolo a extremos peligrosos. Las personas que padecen este trastorno tienen una percepción distorsionada de su imagen corporal, viéndose a sí mismas con sobrepeso incluso cuando están peligrosamente delgadas. #[b Este deseo de delgadez se traduce en una restricción severa de la ingesta alimentaria, llevando a una pérdida de peso significativa y a menudo insalubre.]	 


            .row.justify-content-center
              .col-lg-7
                h5(data-aos="fade-down") Práctica voluntaria de procedimientos para conseguirlo:
                .bg6.brad.p-2.mb-3(data-aos="fade-right")
                  .row.justify-content-center.mb-3
                    .col-auto
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')        
                    .col.j1
                      p(data-aos="fade-down").mb-0 Dieta restrictiva estricta.     
                .bg6.brad.p-2.mb-3(data-aos="fade-right")
                  .row.justify-content-center
                    .col-auto
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')        
                    .col.j1
                      p(data-aos="fade-down").mb-0 Acciones compensatorias: conductas purgativas o hiperactividad física. 
                      
                p(data-aos="fade-down") La persona afectada presenta un intenso temor a estar obesa y distorsión de su imagen corporal. No suelen tener conciencia de la enfermedad ni del riesgo que corren por su conducta.

                p(data-aos="fade-down") En general, se suele presentar en la adolescencia, aunque progresivamente se observa con mayor frecuencia en la edad adulta. Afecta a 1 hombre por cada 9 mujeres.                                                    
              .col-lg-5
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/68.png', alt='')        

          h5(data-aos="fade-down") ¿Cuáles son las manifestaciones clínicas?

    TabsB.color-acento-contenido.my-5
      .py-4.py-md-5(titulo="Disminución importante del peso" :icono="require('@/assets/curso/temas/69.png')") 
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Disminución importante del peso 
            p Pérdida significativa de peso corporal.
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/73.png', alt='')     

      .py-4.py-md-5(titulo="Rechazo al peso normal" :icono="require('@/assets/curso/temas/70.png')") 
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Rechazo al peso normal 
            p Temor fóbico a engordar que se intensifica a medida que el paciente pierde peso, deseo severo de adelgazar, control de ingesta y ejercicio para mantener el peso, y autoadministración de fármacos.
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/74.png', alt='')   

      .py-4.py-md-5(titulo="Distorsión de imagen personal" :icono="require('@/assets/curso/temas/71.png')") 
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Distorsión de imagen personal 
            p Percepción distorsionada del propio cuerpo, que es el principal motivo para la pérdida de peso, exacerbada por la falta de autoestima.
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/75.png', alt='')   

      .py-4.py-md-5(titulo="Temor a perder el control sobre la comida" :icono="require('@/assets/curso/temas/72.png')") 
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Temor a perder el control sobre la comida 
            p Miedo constante a no poder controlar la ingesta de alimentos.
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/76.png', alt='')


    .row.bg11.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            h5(data-aos="fade-down") Otras manifestaciones son: 
            .bg6                                              
              .row.justify-content-center   
                .col-lg-6
                  img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/77.png', alt='')
                .col-lg-6.my-3.j1
                  ul.lista-ul.fa-ul.mb-0
                    li 
                      i.fas.fa-carrot.color1
                      span Humor depresivo, apatía, ansiedad, irritabilidad, aislamiento social.
                    li 
                      i.fas.fa-carrot.color1
                      span Amenorrea.
                    li 
                      i.fas.fa-carrot.color1
                      span Hiperactividad física, voluntaria e involuntaria.
                    li 
                      i.fas.fa-carrot.color1
                      span Alteraciones fisiológicas derivadas de desnutrición: intolerancia al frío y síntomas gastrointestinales.    

            .row.justify-content-start.mb-4
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4
                    h3.mb-1 Tratamiento 

            p(data-aos="fade-down") El tratamiento de la anorexia nerviosa requiere un enfoque integral y coordinado que involucra a un equipo multidisciplinario. Los profesionales clave en el tratamiento incluyen: 

            .row.justify-content-center.text-center.mb-4   
              .col-lg-4.my-3
                .bgw.sha.p-3.brad.h-100
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/78.png', alt='')        
                  h5.my-4(data-aos="fade-down") Psicólogos
                  p(data-aos="fade-down") Para abordar las distorsiones de la imagen corporal y los comportamientos alimentarios desordenados.

              .col-lg-4.my-3
                .bgw.sha.p-3.brad.h-100
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')        
                  h5.my-4(data-aos="fade-down") Psiquiatras
                  p(data-aos="fade-down") Para manejar cualquier condición mental subyacente, como la depresión o la ansiedad, y proporcionar medicación si es necesario.

              .col-lg-4.my-3
                .bgw.sha.p-3.brad.h-100
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/80.png', alt='')        
                  h5.my-4(data-aos="fade-down") Nutricionistas
                  p(data-aos="fade-down") Para establecer una dieta equilibrada y saludable, educar sobre la nutrición adecuada y supervisar la recuperación del peso. 

            p(data-aos="fade-down") Aunque el apoyo familiar es crucial, en algunos casos se puede considerar temporalmente el aislamiento familiar si la dinámica en casa contribuye negativamente al trastorno. Sin embargo, es importante trabajar eventualmente en la reintegración y el fortalecimiento del apoyo familiar.
            p(data-aos="fade-down") Los objetivos clave del tratamiento son: 

    .bg6.p-4.brad1
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Mejorar el estado nutricional 
            p Restablecer un peso saludable y asegurar una ingesta adecuada de nutrientes esenciales. 
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/81.png', alt='')
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Establecer hábitos alimenticios saludables 
            p Crear y mantener patrones de alimentación que apoyen la salud a largo plazo. 
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/82.png', alt='')  
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Prevenir recaídas 
            p Desarrollar estrategias y habilidades para evitar la recurrencia del trastorno. 
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/83.png', alt='')  
        .row.justify-content-center
          .col-lg-6.my-2 
            h5.mb-4 Modificar alteraciones del comportamiento 
            p Abordar las conductas alimentarias problemáticas y desarrollar una relación más saludable con la comida. 
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/84.png', alt='')  
        .row.justify-content-center
          .col-lg-6.my-2
            h5.mb-4 Tratar trastornos de personalidad 
            p Trabajar en cualquier alteración subyacente de la personalidad que pueda estar contribuyendo al trastorno alimentario. 
          .col-lg-5.my-2 
            img.img-a.img-t(src='@/assets/curso/temas/85.png', alt='')                                                                                      
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
