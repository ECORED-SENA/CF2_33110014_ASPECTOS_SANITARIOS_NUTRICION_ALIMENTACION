(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"055a":function(e,t,a){e.exports=a.p+"img/2.4a06f77e.png"},"0b0d":function(e,t,a){"use strict";a("4cb3")},"25c1":function(e,t,a){e.exports=a.p+"img/4.53aefdd2.png"},"27ba":function(e,t,a){},4298:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t("div",{attrs:{id:"Actividad"}},[t("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta--blanca"},[t("div",{staticClass:"row align-items-center mb-4"},[e._m(0),t("div",{staticClass:"col"},[t("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),t("p",{staticClass:"mb-0"},[e._v(" "+e._s(e.cuestionario.introduccion)+" ")])])]),t("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?t("ActividadResultados",{attrs:{respuestas:e.respuestas}}):t("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),t("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-auto"},[t("img",{attrs:{src:a("8da0"),alt:""}})])}],c=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"mb-4 pb-4"},[t("b",[e._v(e._s(e.pregunta.texto))])]),t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col-5"},[t("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),t("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(a,s){return t("div",{key:a.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":a.correcta,"tarjeta-respuesta--incorrecta":a.incorrecta,"tarjeta-respuesta--disabled":a.disabled},on:{click:function(t){return e.onRespuestaSelected(a)}}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===a.id?a.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),t("div",{staticClass:"col"},[e._v(" "+e._s(a.texto)+" ")])])])})),0)]),e.respuestaSelected.id?[t("hr"),e.respuestaSelected.esCorrecta?t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),n=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(t=>({...t,correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(a("5c20"),a("2877")),p=Object(l["a"])(u,c,n,!1,null,"4a5e71aa",null),m=p.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta-avance"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col"},[t("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[t("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),t("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),t("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?t("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[t("span",[e._v("Reiniciar")])]):t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Continuar")]),t("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],C={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"}}},v=C,x=(a("c2dc"),Object(l["a"])(v,b,g,!1,null,"7a0121ad",null)),h=x.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row align-items-center justify-content-around"},[t("div",{staticClass:"col-5"},[(e.aprobado,t("img",{attrs:{src:a("a46c"),alt:""}}))]),t("div",{staticClass:"col-4"},[t("div",{staticClass:"d-flex align-items-center flex-column"},[t("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[t("h3",[e._v("¡BUEN TRABAJO!")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[t("h3",[e._v("VUELVE A INTENTARLO")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],t("hr",{staticClass:"w-100"}),t("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},f=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},A=j,y=(a("4d40"),Object(l["a"])(A,_,f,!1,null,"360ec089",null)),S=y.exports,R={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:h,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:t}=this.cuestionario;if(!e)return[];const a=t?this.shuffle(e):e;return a.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let t,a=e.length;while(a>0)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},k=R,w=(a("0b0d"),Object(l["a"])(k,o,i,!1,null,"1bb53ccc",null)),L=w.exports,I={name:"ActividadDidactica",components:{Actividad:L},data:()=>({cuestionario:{tema:"Alimentación en las diferentes etapas de la vida",titulo:"Cuestionario",introduccion:"Evaluar la importancia de la nutrición en las etapas de gestación, lactancia, infancia y adolescencia, así como sobre los cambios fisiológicos y nutricionales específicos de cada etapa y la identificación de trastornos alimentarios comunes.",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Cuál es la duración del periodo de embarazo?",imagen:a("46d4"),barajarRespuestas:!1,opciones:[{id:"a",texto:"240 días.",esCorrecta:!1},{id:"b",texto:"250 días.",esCorrecta:!1},{id:"c",texto:"280 días.",esCorrecta:!0},{id:"d",texto:"300 días.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Qué hormona aumenta la progesterona para hacer más resistente el útero?",imagen:a("055a"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Estrógeno.",esCorrecta:!1},{id:"b",texto:"Gonadotropina coriónica.",esCorrecta:!0},{id:"c",texto:"Somatotropina coriónica humana.",esCorrecta:!1},{id:"d",texto:"Progesterona.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Cuál es el requerimiento energético adicional diario recomendado a partir del segundo trimestre del embarazo?",imagen:a("875f"),opciones:[{id:"a",texto:"200 kcal/día.",esCorrecta:!1},{id:"b",texto:"300 kcal/día.",esCorrecta:!0},{id:"c",texto:"400 kcal/día.",esCorrecta:!1},{id:"d",texto:"500 kcal/día.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué mineral debe aumentarse durante el embarazo para fortalecer el desarrollo óseo del bebé?",imagen:a("25c1"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Hierro.",esCorrecta:!1},{id:"b",texto:"Yodo.",esCorrecta:!1},{id:"c",texto:"Calcio.",esCorrecta:!0},{id:"d",texto:"Magnesio.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Qué porcentaje de lípidos se recomienda en una dieta equilibrada durante el embarazo?",imagen:a("46d4"),opciones:[{id:"a",texto:"20 % a 25 %.",esCorrecta:!1},{id:"b",texto:"25 % a 30 %.",esCorrecta:!1},{id:"c",texto:"30 % a 35 %.",esCorrecta:!0},{id:"d",texto:"35 % a 40 %.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Cuál es el requerimiento energético diario para niños de 7 a 10 años?",imagen:a("055a"),opciones:[{id:"a",texto:"1500 kcal/día.",esCorrecta:!1},{id:"b",texto:"2000 kcal/día.",esCorrecta:!0},{id:"c",texto:"2500 kcal/día.",esCorrecta:!1},{id:"d",texto:"3000 kcal/día.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué cantidad diaria de fibra se recomienda para un niño de 7 años?",imagen:a("875f"),opciones:[{id:"a",texto:"10 gramos.",esCorrecta:!1},{id:"b",texto:"12 gramos.",esCorrecta:!0},{id:"c",texto:"14 gramos.",esCorrecta:!1},{id:"d",texto:"16 gramos.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Qué porcentaje de carbohidratos se recomienda en la dieta de un adolescente?",imagen:a("25c1"),opciones:[{id:"a",texto:"40 % a 50 %.",esCorrecta:!1},{id:"b",texto:"50 % a 60 %.",esCorrecta:!1},{id:"c",texto:"55 % a 66 %.",esCorrecta:!0},{id:"d",texto:"60 % a 70 %.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Cuál es el principal objetivo de la dieta en la adolescencia?",imagen:a("46d4"),opciones:[{id:"a",texto:"Perder peso.",esCorrecta:!1},{id:"b",texto:"Cubrir las necesidades de energía y nutrientes.",esCorrecta:!0},{id:"c",texto:"Reducir el consumo de grasas.",esCorrecta:!1},{id:"d",texto:"Aumentar la masa muscular.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Qué trastorno alimentario es común en mujeres adultas y comienza en la adolescencia?",imagen:a("055a"),opciones:[{id:"a",texto:"Bulimia nerviosa.",esCorrecta:!1},{id:"b",texto:"Ortorexia.",esCorrecta:!1},{id:"c",texto:"Anorexia nerviosa.",esCorrecta:!0},{id:"d",texto:"Vigorexia.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},M=I,H=Object(l["a"])(M,s,r,!1,null,null,null);t["default"]=H.exports},"46d4":function(e,t,a){e.exports=a.p+"img/1.721745b7.png"},"4cb3":function(e,t,a){},"4d40":function(e,t,a){"use strict";a("27ba")},"5c20":function(e,t,a){"use strict";a("8199")},8199:function(e,t,a){},"875f":function(e,t,a){e.exports=a.p+"img/3.8065f542.png"},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},c2dc:function(e,t,a){"use strict";a("f4e0")},f4e0:function(e,t,a){}}]);
//# sourceMappingURL=actividad.59402c60.js.map