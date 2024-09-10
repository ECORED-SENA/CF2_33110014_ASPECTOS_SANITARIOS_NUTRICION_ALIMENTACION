<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Alimentación en las diferentes etapas de la vida',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar la importancia de la nutrición en las etapas de gestación, lactancia, infancia y adolescencia, así como sobre los cambios fisiológicos y nutricionales específicos de cada etapa y la identificación de trastornos alimentarios comunes.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la duración del periodo de embarazo?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: '240 días.', esCorrecta: false },
            { id: 'b', texto: '250 días.', esCorrecta: false },
            {
              id: 'c',
              texto: '280 días.',
              esCorrecta: true,
            },
            { id: 'd', texto: '300 días.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué hormona aumenta la progesterona para hacer más resistente el útero?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estrógeno.', esCorrecta: false },
            { id: 'b', texto: 'Gonadotropina coriónica.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Somatotropina coriónica humana.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Progesterona.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el requerimiento energético adicional diario recomendado a partir del segundo trimestre del embarazo?',
          imagen: require('@/assets/actividad/3.png'),
          opciones: [
            { id: 'a', texto: '200 kcal/día.', esCorrecta: false },
            { id: 'b', texto: '300 kcal/día.', esCorrecta: true },
            { id: 'c', texto: '400 kcal/día.', esCorrecta: false },
            { id: 'd', texto: '500 kcal/día.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué mineral debe aumentarse durante el embarazo para fortalecer el desarrollo óseo del bebé?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hierro.', esCorrecta: false },
            { id: 'b', texto: 'Yodo.', esCorrecta: false },
            { id: 'c', texto: 'Calcio.', esCorrecta: true },
            { id: 'd', texto: 'Magnesio.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué porcentaje de lípidos se recomienda en una dieta equilibrada durante el embarazo?',
          imagen: require('@/assets/actividad/1.png'),
          opciones: [
            { id: 'a', texto: '20 % a 25 %.', esCorrecta: false },
            { id: 'b', texto: '25 % a 30 %.', esCorrecta: false },
            { id: 'c', texto: '30 % a 35 %.', esCorrecta: true },
            { id: 'd', texto: '35 % a 40 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el requerimiento energético diario para niños de 7 a 10 años?',
          imagen: require('@/assets/actividad/2.png'),
          opciones: [
            { id: 'a', texto: '1500 kcal/día.', esCorrecta: false },
            { id: 'b', texto: '2000 kcal/día.', esCorrecta: true },
            { id: 'c', texto: '2500 kcal/día.', esCorrecta: false },
            { id: 'd', texto: '3000 kcal/día.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué cantidad diaria de fibra se recomienda para un niño de 7 años?',
          imagen: require('@/assets/actividad/3.png'),
          opciones: [
            { id: 'a', texto: '10 gramos.', esCorrecta: false },
            { id: 'b', texto: '12 gramos.', esCorrecta: true },
            { id: 'c', texto: '14 gramos.', esCorrecta: false },
            { id: 'd', texto: '16 gramos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué porcentaje de carbohidratos se recomienda en la dieta de un adolescente?',
          imagen: require('@/assets/actividad/4.png'),
          opciones: [
            { id: 'a', texto: '40 % a 50 %.', esCorrecta: false },
            { id: 'b', texto: '50 % a 60 %.', esCorrecta: false },
            { id: 'c', texto: '55 % a 66 %.', esCorrecta: true },
            { id: 'd', texto: '60 % a 70 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el principal objetivo de la dieta en la adolescencia?',
          imagen: require('@/assets/actividad/1.png'),
          opciones: [
            { id: 'a', texto: 'Perder peso.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Cubrir las necesidades de energía y nutrientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el consumo de grasas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Aumentar la masa muscular.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué trastorno alimentario es común en mujeres adultas y comienza en la adolescencia?',
          imagen: require('@/assets/actividad/2.png'),
          opciones: [
            { id: 'a', texto: 'Bulimia nerviosa.', esCorrecta: false },
            { id: 'b', texto: 'Ortorexia.', esCorrecta: false },
            { id: 'c', texto: 'Anorexia nerviosa.', esCorrecta: true },
            { id: 'd', texto: 'Vigorexia.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
