/* ============================================
   FAREWELL PAGE - MAIN SCRIPT
   ============================================ */

// SVGs para cada profesor (iconos elegantes)
const teacherSVGs = {
    fran: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><circle cx="12" cy="12" r="3" fill="none"/><path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke-linecap="round"/></svg>`,
    javier: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    concha: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    amador: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    adriana: `<svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3V3H2v12l3-3 7 7z"/><path d="M2 19v.01M22 19v.01"/></svg>`,
    vanesa: `<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/></svg>`,
    jesus: `<svg viewBox="0 0 24 24"><path d="M8 12l3 3 5-5"/><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8" stroke-linecap="round" opacity="0.3"/></svg>`
};

// ============================================
// DATA: Teachers & Letters
// ============================================
const teachers = [
    {
        id: 'fran',
        name: 'Fran',
        role: 'Biología y Geología',
        icon: teacherSVGs.fran,
        quote: '"La clase siempre empezaba con una sonrisa."',
        letter: `<h3>Querido Fran,</h3>

<p>Te voy a ser sincero desde el primer párrafo. Cuando vi que me tocaba Biología y Geología este año, pensé que iba a ser un suplicio. Me imaginaba memorizando fósiles, cadenas alimentarias y nombres de ríos que ni siquiera sabría pronunciar, todo mientras me quedaba dormido en clase con la boca abierta. Y mira tú por dónde, al final del año me di cuenta de que estaba deseando que no terminara.</p>

<p>Y no porque la asignatura no fuera dura, eh. Que la asignatura era dura. Pero tú tenías esa forma tuya de hacer que todo pareciera menos abrumador. Recuerdo perfectamente el primer día de clase. que me presente por primera vez para delegado, pero no importaba por que no tenñia verguenza en aquel momento, o cuando me dijiste que nunca tocaría una teta. La clase entera se quedó en shock como dos segundos y luego estalló en carcajadas. Yo me reí tanto que casi me caigo de la silla. Y es que todavía hoy, cuando me acuerdo, me río. Esa frase se ha quedado conmigo para siempre. Es el tipo de cosa que solo un profe como tú se atreve a decir, y por eso funcionaba. No eras el típico profesor que se esconde detrás de un imponente, ni tampoco el que intenta ser el amigo molón de los alumnos para que le hagan caso. Simplemente eras tú. Punto. Con tu humor, con tu forma de ver las cosas, con tu autenticidad que no la compras ni con un millón de euros.</p>

<p>Y eso es lo que más admiro de ti, Fran. Que ibas a clase incluso cuando sabíamos que no era tu día. Que sonreías cuando otros habrían tirado la toalla hace ya tres curvas. Que hacías que Biología, algo que para muchos es aburrido hasta decir basta, se convirtiera en algo que recordaríamos con cariño. Eso no es talento. Eso es entrega pura y dura. Eso es levantarte cada mañana y decidir que vas a dar lo mejor de ti aunque tengas ganas de quedarte en casa viendo series bajo una manta.</p>

<p>Pero hay algo que no me puedo permitir dejar de mencionar, y sé que es algo que ya he dicho antes pero lo voy a repetir porque es importante. Cuando hubo las inundaciones en mi pueblo, tú no dudaste. Quisiste saber como estaba. Preguntaste por mi familia. Y no eres consciente de lo mucho que eso significó. En medio de todo el caos, de ver cómo el agua se llevaba todo lo que conocíamos, no sé, como que alguien te da un abrazo sin tocarte. Esas cosas no se olvidan, Fran. Esas cosas son las que marcan la diferencia entre un profesor y alguien que se preocupa de verdad.</p>

<p>Y luego está lo de la hamburguesería. Cuando pudiste, nos invitaste a comer con Javier, a mí y a mis amigos a la hamburguesería más cara de la zona (al Verme). No me esperaba algo así. Nadie te lo pidió. Simplemente quisiste hacerlo. Y mientras comíamos y reíamos, me di cuenta de que esos son los momentos que importan. No las notas, no los exámenes, no las fechas de entrega. Los momentos en los que alguien demuestra que le importas sin que haya una razón académica de por medio. Los momentos en los que un profe te trata como a un amigo, no como a un alumno más del montón.</p>

<p>Gracias por hacer que Biología no fuera un infierno. Gracias por enseñarme que puedes ser profesional y humano a la vez, que no tienes que elegir entre uno u otro. Gracias por demostrar que el buen humor no es incompatible con el respeto, y que puedes ser estricto cuando toca sin dejar de ser accesible. Profesores como tú hacen que incluso las asignaturas más duras se queden en el recuerdo como algo bueno, como algo que mereció la pena.</p>

<p>Y nunca lo olvidaré.</p>

<p>Estoy seguro de que esto no es un adiós. Algún día volveremos a cruzarnos. Quizá por los pasillos del instituto, cuando ya no esté ni siquiera estudiando ahí. Quizá por la calle, en algún lugar random, y nos pararemos a hablar como si no hubiera pasado el tiempo. Quizá dentro de unos años cuando ya ni siquiera nos esperemos, y me resultará imposible no sonreír alrecordar las clases de Biología (o me veras por las noticias con alguna cosa hecha por mi o siendo detenido).</p>

<p class="signature">Gracias por formar parte de una etapa que nunca voy a olvidar.</p>`
    },
    {
        id: 'javier',
        name: 'Javier',
        role: 'Matemáticas',
        icon: teacherSVGs.javier,
        quote: '"Las matemáticas no mienten, pero nosotros sí que podemos reírnos."',
        letter: `<h3>Querido Javier,</h3>

<p>Voy a ser honesto desde el primer momento. Al principio del curso, probablemente eras el profesor con el que yo más me metía. No porque fueras malo, sino porque literalmente no te dejaba terminar una frase sin decir algo. Y eso que yo era de los más tranquilos de los chicos. Con Blas era una yema de dolor constante, de verdad. Cada vez que pasaba algo en clase, tú le encontrabas su gracia. Y aunque en su momento parecía que os estabais matando, creo que hasta él se reía por dentro... bueno, a veces. No se libraba nadie. Ni siquiera Fran se salvaba de tus pullas. El ambiente en clase era surrealista, de lo mejor que he visto en un aula. Un día soltabas alguna de esas bromas que sonaban a ofensa pero iban con cariño, y aunque negábamos con la cabeza entre risas, todos sabíamos que era el toque mágico que hacía que Matemáticas no fuera un suplicio de cuatro horas seguidas.</p>

<p>Pero claro, eso era cuando todo iba bien. Me acuerdo del día que cruzamos la línea. Mis amigos y yo estábamos en turbomodo aquella mañana. Bromas, risas, ni siquiera levantando la mano para responder, sino simplemente interrumpiendo con comentarios estúpidos que no venían a cuento. Y tú, que siempre habías tenido paciencia de santo con nosotros, ese día lo explotaste. Nos gritaste. Y no un grito de esos teatrales que algunos profesores hacen para que se les oiga desde la otra punta del pasillo. Un grito de esos que callan. De los que duele porque sabes que viene de alguien que ha aguantado demasiado tiempo, que ha intentado ser comprensivo pero que ya no podía más. La clase se quedó en silencio absoluto.</p>

<p>Y yo me quedé con la sensación de haber tirado algo al suelo sin querer. Porque tú no eres de los que gritan por gusto. Y si llegaste a ese punto, es porque nos lo habíamos ganado a pulso. Ese día aprendí algo que ninguna fórmula matemática me habría enseñado nunca. Que el respeto no se gana haciendo el tonto. Que hay un límite, y que cruzarlo tiene consecuencias reales. Y que cuando alguien como tú, que siempre bromea y siempre pasa del tema de las tonterías, se pone serio... es porque de verdad le importa. Eso me hizo querer cambiar. No solo por las notas ni por el miedo a reprobar. Sino porque no quería defraudarte. Porque al final, tú eras el que más cae bien, y no quería que pensaras que éramos unos inútiles sin remedio.</p>

<p>Pero la conversación que más me marcó fue la del final de curso. Solo una conversación entre dos personas. Y casi me haces llorar. Lo digo en serio, estuve a punto de llorar frente a ti como una persona normal. Sentí que te el tiempo pasa muy rápido, y no todo es solo lo que sacaba en un examen o si había aprobado. Eso es lo más valioso que me has dado este año.</p>

<p>Gracias por enseñarme que no todo en la vida es una broma. Que a veces hay que ponerse serio. Que el respeto se gana y se mantiene, y que hay que trabajar por él. Y gracias por, aun así, mantener ese sentido del humor que hacía que incluso los lunes a primera hora de Matemáticas fueran soportables, incluso agradable. Porque no hay muchos profesores que sepan hacer las dos cosas a la vez sin caer en el cliché del profe gruñón o del profe amigo.</p>

<p>El próximo año seré mejor estudiante, lo prometo. O al menos intentaré no meter tanto la pata... aunque no puedo prometer nada.</p>

<p class="signature">Gracias por formar parte de una etapa que nunca voy a olvidar, espero vernos en un futuro (capaz me veras por las noticias con alguna cosa hecha por mi o siendo detenido).</p>`
    },
    {
        id: 'concha',
        name: 'Concha',
        role: 'Computación y Robótica',
        icon: teacherSVGs.concha,
        quote: '"En clase se aprende, pero también se ríe mucho."',
        letter: `<h3>Querida Concha,</h3>

<p>La verdad es que no esperaba mucho de Robótica y Computación (Sin Manolo). Pensaba que sería otra asignatura aburrida y de hacer ejercicios aburridos que no servirían para nada en la vida real. Y la primera semana, cuando empezamos a hablar de forma normal, sin copiar nada del libro ni hacer las típicas fichas de rellenar huecos, me di cuenta de que esto iba a ser distinto. Pero tú, Concha, lo llevaste a otro nivel completamente distinto.</p>

<p>Tenías esta forma de hablar que no parecía de profesora. Parecía que hablabas con un amigo, con alguien con quien te sientes cómoda y no necesitas fingir. Simplemente natural. Porque eso era lo mejor: que no parecía que estuvieras dando clase. Parecía que estábamos hablando y, de paso, aprendíamos algo. Eso es un talento que no tiene todo el mundo, Concha. De hecho, creo que casi nadie lo tiene. Y tú lo tienes.</p>

<p>Y aunque me gustaría decir que lo mejor del año fueron las clases, lo cierto es que uno de los recuerdos que más me río es el del Kahoot. Os lo juro, hasta el día de hoy me hace gracia solo de pensarlo. Creamos un Kahoot repleto de preguntas sobre mierdas y cacas. Literalmente. No me da vergüenza decirlo, porque fue genial. Y tú, en lugar de regañarnos o hacernos sentir infantiles como habría hecho cualquier otro profesor que se toma demasiado en serio su trabajo, te metiste en el juego. Contestaste. Te reíste. Y ganaste, por cierto. Pensar que una profesora puede meterse en semejante tontería con nosotros sin perder la autoridad... eso es magia pura. Eso no se aprende en la universidad. Eso se tiene o no se tiene, y no se puede inventar.</p>

<p>Pero hay otro recuerdo que quiero mencionar, y este va en serio. La excursión aquella en la que los monitores se negaron a darnos pan. ¿Recuerdas? No me acuerdo ni de qué excursión era ni de qué íbamos, lo reconozco, pero sí recuerdo perfectamente tu cara cuando les empezaste a decir que no tenían derecho a negarnos algo tan básico como un poco de pan. Y no te contuviste. No te quedaste callada. Defender a la clase en voz alta, delante de todos, cuando bien podrías haber mirado para otro lado y no haber dicho nada... eso significó mucho para todos nosotros.</p>

<p>Nos hiciste sentir que valíamos la pena. Que nuestra voz importaba, que lo que queríamos no era una tontería. Y en un mundo donde los adultos suelen actuar como si los niños y los adolescentes no dieran para mucho, eso es revolucionario. Eso es algo que no se olvida.</p>

<p>Y luego está la foto. Al final de curso te pediste que nos hiciéramos una foto juntos. Me sonreíste, y no fue una sonrisa de foto forzada de esas que todo el mundo hace para Instagram. Fue una sonrisa de verdad, de esas que se ven en los ojos. Y en ese momento me di cuenta de que algunas personas simplemente están destinadas a enseñar, no porque sepan más que nadie, sino porque se preocupan más. Se interesan más. Y tú, Concha, te preocupas más que nadie que conozca.</p>

<p>Gracias por no ser solo una profesora. Por ser una persona antes que eso, por enseñarme que la educación va mucho más allá del currículum. Por escuchar. Por reírte con nosotros, no de nosotros. Por defendernos cuando nadie más lo iba a hacer. Por hacernos sentir importantes en un mundo que muchas veces nos hace sentir invisibles, como si no importáramos.</p>

<p class="signature">Gracias por formar parte de una etapa que nunca voy a olvidar.</p>`
    },
    {
        id: 'amador',
        name: 'Amador',
        role: 'Geografía e Historia',
        icon: teacherSVGs.amador,
        quote: '"La historia se repite, pero cada clase es diferente."',
        letter: `<h3>Querido Amador,</h3>

<p>Te voy a ser totalmente sincero. Al principio del curso, cuando entraste en clase y vimos tu cara seria y tu forma de hablar pausada, casi todos pensamos lo mismo: "Este es de los estrictos. Este va a ser otro año de copiar mapas y memorizar fechas hasta que me duela la cabeza." Y bueno, sí, hubo mapas. Hubo líneas temporales que parecían interminables. Y sí, hubo fechas, muchas fechas. Pero me equivoqué en lo más importante. No eras ni la mitad de serio que aparentabas. Y eso, Amador, fue una de las sorpresas más gratas del año.</p>

<p>Eso fue lo primero que me sorprendió de ti. Que debajo de esa mampara de profesor formal y correcto, escondías un humor que aparecía de forma súbita y que, cuando surgía, era imposible de parar. Me encantaban esas puyas que soltabas de repente en mitad de una explicación. Esas pullas que dejaban a la clase pensando "¿ha dicho lo que creo que ha dicho? ¿ha sido en serio?". Esas son las mejores. Porque no son bromas preparadas de dominguero. Son pura espontaneidad, cosas que te salen en el momento. Y eso es lo que te hace único, lo que te hace diferente del resto de profesores que se toman demasiado en serio su trabajo.</p>

<p>Pero quiero hablarte de algo más concreto, porque hay un momento que se quedó conmigo. El juego de adivinar personajes históricos al principio de curso. Yo, con mi voz más rara y gangosa que podía poner, solté: "¿Es europeo? ¿Nació antes de 1750?". No sé por qué elegí esa voz. Supongo que me dio vergüenza participar normal y pensé que si hablaba raro, parecería que era un personaje o algo así. Error, un completo error que me hizo el rey de las burlas ese día. Pero el caso es que funcionó, de alguna manera funcionó. Me acuerdo de que adivinasteis quién era y de que la clase se rio. Y no de burla, sino de la buena. Y me reí yo también. Esos son los momentos que me quedan.</p>

<p>Ahora imagínate esto: al final del curso volvimos a jugar al mismo juego, como si el círculo se hubiera cerrado solo. Y sin pensarlo mucho, aprieto para hablar y repito exactamente la misma frase. "¿Es europeo? ¿Nació antes de 1750?". Con la misma voz, con el mismo tono ridículo. Y la clase se dio cuenta antes que yo de lo que acababa de hacer. Y explotó en risas. Y yo me quedé un segundo en blanco hasta que caí en lo que acababa de hacer. Y fue como cerrar un círculo. El mismo juego, el mismo yo, el mismo Amador, la misma clase... pero un año después. Y todo diferente, pero todo igual. Ese momento se quedó conmigo.</p>

<p>Porque eso son los buenos profesores: los que te hacen conscientes de que el tiempo pasa, pero que las buenas cosas perduran. Los que te hacen ver que las rutinas pueden convertirse en rituales, y los rituales en recuerdos. Porque pensándolo bien, la Historia es exactamente eso: recuerdos colectivos que se transmiten de generación en generación.</p>

<p>No te has convertido en uno de esos profesores amargados que transmiten su descontento a la asignatura, que hacen que una materia fascinante se convierta en una tortura. Y eso es un logro enorme. Porque es fácil odiar la Historia si te la enseña alguien que la odia o que simplemente no le interesa. Pero tú... tú la intentas que nos guste. Y a veces lo consigues. Y eso es lo único que puede pedir un alumno: que alguien intente que algo le guste, que alguien pase de la simple transmisión de información a la verdadera enseñanza.</p>

<p>Gracias por tu seriedad cuando era necesaria. Por tu humor cuando podía serlo. Y por siempre ser tú mismo, sin disculpas, sin pretender ser lo que no eres.</p>

<p class="signature">Gracias por formar parte de una etapa que nunca voy a olvidar.</p>`
    },
    {
        id: 'adriana',
        name: 'Adriana',
        role: 'Plástica',
        icon: teacherSVGs.adriana,
        quote: '"El arte no necesita filtros, y yo tampoco."',
        letter: `<h3>Querida Adriana,</h3>

<p>No sé si elegiría la palabra "miedo" para describirte, pero sí diría que cuando te enfadas... se nota. Y se nota mucho. Esa honestidad tuya, esa forma de decir las cosas sin filtro ni rodeos, es lo que al final nos hace respetarte de verdad. Porque alguien que te dice la verdad a la cara, aunque duela, siempre va a merecer más que alguien que te da palmaditas en la espalda mientras por dentro piensa exactamente lo contrario. Y tú, Adriana, ni siquiera te molestas en disimular. Y eso es, en el fondo, un regalo. Uno de los mejores regalos que te pueden hacer en la vida.</p>

<p>Pero no quiero que pienses que solo te recuerdo por eso. Quiero hablarte de algo que pasó durante una excursión. No recuerdo ni siquiera a dónde íbamos exactamente, se que suena mal pero la verdad es que no me acuerdo del destino. Lo único que recuerdo es que llevaba un ramo de flores para una chica de mi clase. Sí, ya sé, muy típico de película romántica barata. Y sí, me rechazó. Vale, lo reconozco, fue un poco dramático, pero eso no es lo importante.</p>

<p>Lo importante es lo que pasó después. Mi regalo, mi intento de gesto romántico se convirtió en el espectáculo de la excursión. Todo el mundo se enteró, todo el mundo se rio un poco a mis espaldas (aunque algunos a la cara), y yo me moría de vergüenza mientras intentaba hacer como que no me importaba, que era un chiste, que no pasaba nada. Y luego, cuando creía que el día no podía ir peor y que simplemente quería que se tragara la tierra, apareciste tú.</p>

<p>Me llevaste aparte. Me separaste del grupo. Y en lugar de reírte de mí o hacerme sentir peor, como habría hecho cualquier otro, me hablaste. Me dijiste que el gesto había sido bonito. Que le había parecido valiente. Y que no debía avergonzarme de haber intentado algo, porque mucha gente ni siquiera se atreve a eso. Ni siquiera intentan nada por miedo al rechazo, se quedan en su zona de confort sin arriesgar nunca.</p>

<p>Y me diste las gracias. Las gracias. Por algo que era un ridículo monumental en el fondo, algo que parecía apenas entrar dentro del plano de lo sensato. Y en ese momento no lo entendí del todo. Pensé que simplemente me estaba intentando hacer sentir mejor, porque es lo que hacen los adultos cuando ven a un crío con la moral por los suelos. Pero ahora sí lo entiendo. Me hiciste sentir mejor en un día en el que, objetivamente, debería haberme sentido peor. Me hiciste sentir que no había hecho nada malo por intentarlo, que lo malo hubiera sido no intentarlo. Eso no es algo que cualquiera puede hacer, Adriana. Especialmente no a un adolescente que acaba de ser rechazado en público practicamente delante de medio instituto.</p>

<p>Esa tarde, cuando me fui a casa, pasé de querer desaparecer a querer que alguien me hubiera grabado lo que me dijiste para recordarlo para siempre. Porque esa conversación fue arte. Y no el tipo de arte que se enseña en Plástica. El tipo de arte que hace que alguien siga adelante cuando cree que todo está perdido. El tipo de arte que salva a las personas cuando más lo necesitan.</p>

<p>Gracias por tu brutal honestidad. Y gracias por hacerme sentir que, aunque las cosas salgan mal, intentarlo ya es suficiente. Que el cambio, el riesgo, el intentarlo es lo que importa.</p>

<p class="signature">Gracias por formar parte de una etapa que nunca voy a olvidar.</p>`
    },
    {
        id: 'vanesa',
        name: 'Vanesa',
        role: 'Lengua',
        icon: teacherSVGs.vanesa,
        quote: '"Las mejores clases son las que parecen conversaciones."',
        letter: `<h3>Querida Vanesa,</h3>

<p>Este año, venir a clase de Lengua no parecía venir a clase. Parecía quedar con un amigo a hablar de libros, de películas, de la vida, de lo que fuese que se nos pasara por la cabeza en ese momento. Y aun así, de alguna forma mágica que todavía no entiendo del todo, estábamos aprendiendo gramática, literatura y comprensión lectora sin que se nos diera cuenta. No sé cómo lo hacías. Sinceramente, no quiero saberlo. Prefiero pensar que era magia y dejarlo ahí, porque a veces las cosas más bonitas son las que no se explican.</p>

<p>Lo que sí que sé es que tuviste una paciencia que yo no tengo ni para mí mismo, y eso es mucho decir. Y eso que en clase pasaban cosas todos los días. Gente hablando por encima, móviles sonando con tonos ridículos, interrupciones constantes, alguno que otro lanzando bolitas de papel en momentos poco oportunos. Y tú, sin dejar de sonreír, mantenías el orden sin perder la calma. Incluso cuando el caos general parecía imposible de controlar, tú seguías ahí, con esa voz tranquila, como si nada te pudiera alterar. Eso es algo que me flipa de ti. No pierdes los papeles. Nunca. O si lo haces, nosotros no nos enteramos jamás, lo que demuestra que eres una maestra del autocontrol.</p>

<p>Quiero darte las gracias por algo que puede parecer una tontería, pero que para mí lo es todo. Cada vez que tenías un problema con la tecnología, con el proyector que no funcionaba, con el ordenador que se había quedado colgado, con el wifi que se caía cada dos por tres, recurriste a mí. "¿Puedes venir un momento? Ando perdida con esto." Y yo iba. Y lo arreglaba. O lo intentaba. Y cuando funcionaba, me dabas las gracias como si hubiera movido montañas, cuando en realidad solo le había dado a reiniciar o a cambiar un cable de sitio. Pero lo que quería decir con esto es que... sí. Me hizo sentir útil.</p>

<p>En un mundo donde la mayoría de las veces te sientes como que no aportas nada, que eres solo una boca más en clase o un número más en la lista, que alguien recurra a ti, que te necesite para algo, que confíe en ti... eso es oro puro. Y tú no lo sabías, pero esas pequeñas veces en las que me pedías ayuda eran las que más me subían el ánimo del día. Porque me hacían pensar que, aunque a veces me portaba mal o no era el mejor estudiante de la clase, valía algo. Que tenía algo que ofrecer, que no era completamente inútil.</p>

<p>Y es que eso eres tú, Vanesa. La profesora que hace que todo el mundo se sienta válido, importante. Que hace que aprender Lengua no sea memorizar reglas aburridas, sino disfrutar de las palabras, de su poder, de lo que pueden hacer. Que hace que un simple "¿me ayudas con esto?" se convierta en el mejor momento del día de alguien.</p>

<p>Gracias por esa confianza sin pedirla. Por esas risas que contagiabas. Por hacer que las clases de Lengua sean el momento del día en el que me olvido de todo lo demás.</p>

<p class="signature">Gracias por formar parte de una etapa que nunca voy a olvidar.</p>`
    },
    {
        id: 'jesus',
        name: 'Jesús',
        role: 'Siempre presente',
        icon: teacherSVGs.jesus,
        quote: '"A veces las mejores lecciones vienen de donde menos lo esperas."',
        letter: `<h3>Querido Jesús,</h3>

<p>Voy a ser honesto desde el principio: tú no has sido mi profesor. No te he tenido en clase. Ni siquiera te he visto detrás de una pizarra enseñando algo con un rotulador en la mano. Y, aun así, aquí estás incluido en esto. Porque este proyecto no es solo para las personas que han estado en mi horario escolar, ni para los que me han puesto notas o han revisado mis exámenes. Es para las personas que han estado en mi año de alguna forma, que han formado parte del paisaje de este curso. Y tú, Jesús, has estado en mi año de una forma que no me esperaba pero que ha sido muy real y muy importante.</p>

<p>Eres amigo de Fran, de Javier, de Vanesa y de Concha. Eso significa que has estado ahí de forma constante, aunque no siempre visible para todos nosotros. Compartiendo esos momentos de profes, esos cafés entre clases, esas charlas en los pasillos que nosotros, los alumnos, solo captábamos a medias porque siempre hay algo que no nos cuentan. Y aunque fueras un espectador en mi vida académica, eras parte del decorado de este año. Y un buen decorado es lo que hace que una obra sea memorable, que un año se quede para siempre en la memoria.</p>

<p>Y no puedo hablarte de ti sin mencionar la broma. La de llamarte Raúl. No sé de dónde salió, nunca lo he entendido del todo. No sé por qué se le ocurrió a alguien ni en qué momento se convirtió en meme colectivo. Pero me acuerdo de la primera vez que alguien te llamó Raúl y tú, con esa paciencia de santo que parece que tienes, respondiste como si fuera lo más natural del mundo. Como si realmente hubiera un Raúl ahí. Y desde entonces, cada vez que te veíamos en los pasillos o en algún evento, alguien soltaba un "¡Hola, Raúl!" y te reías. Sonreías. Como si fuera un chiste interno que solo entendíamos nosotros y tú. Y esa es la clave: no te enfadaste, no te molestó, no intentaste corregir a nadio decir que eso no era así. Simplemente... jugaste. Y eso dice mucho de ti.</p>

<p>Me hace pensar que las personas que pueden reírse de sí mismas son las más fuertes del-development. Porque no necesitan tomarse todo en serio para ser importantes, para tener valor. Y tú, sin darme una sola clase ni un solo examen, me enseñaste eso. Que puedes ser alguien que está ahí para los demás sin estar en el centro de atención. Que la amistad real no necesita una asignatura ni un aula para existir. Que a veces las mejores lecciones vienen de donde menos lo esperas, de la gente que no está en tu lista de contactos académicos pero que está ahí de todas formas.</p>

<p>No sé qué haces en tu día a día, ni siquiera sé exactamente cuál es tu trabajo. Pero sé que eres buena persona. Y en un mundo lleno de gente que solo se preocupa de sí misma, que va a su bola sin mirar a quien pisa, eso ya es mucho. Estarás ahí, en el recuerdo de este año, como alguien que formaba parte del ambiente sin ser consciente de cuánto contribuía a él. Como alguien que, sin quererlo, hizo que todo fuera un poco mejor.</p>

<p>Gracias por los momentos que ni siquiera sabes que me diste. Por las risas que me hiciste pasar sin estar en mi lista de asignaturas. Y por demostrarme que no hace falta ser profesor para dejar huella.</p>

<p class="signature">Gracias por formar parte de una etapa que nunca voy a olvidar.</p>`
    }
];

// ============================================
// STATE
// ============================================
let openedCards = new Set();
let isMuted = true;
let audioContext = null;
let currentOscillator = null;
let currentGain = null;
let isTransitioning = false;

// ============================================
// DOM ELEMENTS
// ============================================
const els = {
    introScreen: document.getElementById('intro-screen'),
    mainScreen: document.getElementById('main-screen'),
    startBtn: document.getElementById('start-btn'),
    cardsGrid: document.getElementById('cards-grid'),
    cardsProgress: document.getElementById('cards-progress'),
    progressFill: document.getElementById('progress-fill'),
    openedCount: document.getElementById('opened-count'),
    totalCount: document.getElementById('total-count'),
    muteBtn: document.getElementById('mute-btn'),
    modal: document.getElementById('letter-modal'),
    letterText: document.getElementById('letter-text'),
    modalClose: document.querySelector('.modal-close'),
    modalBackdrop: document.querySelector('.modal-backdrop'),
    finalMessage: document.getElementById('final-message'),
    cursorOuter: document.getElementById('cursor-outer'),
    cursorInner: document.getElementById('cursor-inner'),
    cursorDot: document.getElementById('cursor-dot'),
    starsContainer: document.getElementById('stars-container'),
    particlesContainer: document.getElementById('particles-container'),
    cloudsContainer: document.getElementById('clouds-container'),
    petalsContainer: document.getElementById('petals-container'),
    floatingPhrases: document.getElementById('floating-phrases'),
    confettiCanvas: document.getElementById('confetti-canvas'),
    envelope: document.getElementById('envelope'),
    letter: document.getElementById('letter'),
};

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    generateBackgroundEffects();
    initCursor();
    renderCards();
    bindEvents();
    animateIntroStars();
    addSVGGradient();
});

// ============================================
// SVG GRADIENT DEFINITION
// ============================================
function addSVGGradient() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('icon-gradient-def');
    svg.innerHTML = `
        <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ffb7c5;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#b19cd9;stop-opacity:1" />
            </linearGradient>
        </defs>
    `;
    document.body.appendChild(svg);
}

// ============================================
// BACKGROUND EFFECTS
// ============================================
function generateBackgroundEffects() {
    // Stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1;
        star.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            --duration: ${Math.random() * 3 + 2}s;
            --opacity: ${Math.random() * 0.7 + 0.3};
            animation-delay: ${Math.random() * 5}s;
        `;
        els.starsContainer.appendChild(star);
    }

    // Shooting stars (rare)
    for (let i = 0; i < 3; i++) {
        const shooting = document.createElement('div');
        shooting.className = 'shooting-star';
        shooting.style.cssText = `
            top: ${Math.random() * 50}%;
            animation-delay: ${Math.random() * 10 + 5}s;
            animation-duration: ${Math.random() * 2 + 2}s;
        `;
        els.starsContainer.appendChild(shooting);
    }

    // Particles with different types
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        const type = `type-${(i % 3) + 1}`;
        particle.className = `particle ${type}`;
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            --duration: ${Math.random() * 15 + 10}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        els.particlesContainer.appendChild(particle);
    }

    // Clouds
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        const width = Math.random() * 300 + 200;
        const height = width * 0.4;
        cloud.style.cssText = `
            width: ${width}px;
            height: ${height}px;
            top: ${Math.random() * 60}%;/n            --duration: ${Math.random() * 60 + 60}s;
            animation-delay: -${Math.random() * 60}s;
        `;
        els.cloudsContainer.appendChild(cloud);
    }

    // Cherry blossom petals
    for (let i = 0; i < 35; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const size = Math.random() * 12 + 8;
        petal.style.cssText = `
            left: ${Math.random() * 100}%;
            --size: ${size}px;
            --duration: ${Math.random() * 8 + 12}s;
            --delay: -${Math.random() * 20}s;
            --drift: ${(Math.random() - 0.5) * 200}px;
            --rotation: ${Math.random() * 720 + 360}deg;
        `;
        els.petalsContainer.appendChild(petal);
    }

    // Floating phrases
    const phrases = [
        'Gracias por todo', 'Un año inolvidable', 'Siempre adelante',
        'Recuerdos para siempre', 'El mejor curso', 'Nuevas aventuras',
        'Hasta la próxima', 'Esto no es un adiós', 'Sonrisas eternas',
        'Momentos únicos', 'Amistad verdadera', 'Aprender a vivir',
        'Nunca olvidaré', 'Gracias por existir', 'Lo mejor está por venir'
    ];

    phrases.forEach((phrase, i) => {
        const el = document.createElement('div');
        el.className = 'floating-phrase';
        el.textContent = phrase;
        el.style.cssText = `
            top: ${Math.random() * 80 + 10}%;
            --duration: ${Math.random() * 30 + 30}s;
            --delay: -${Math.random() * 60}s;
            --yStart: ${Math.random() * 20 - 10}px;
            --yEnd: ${Math.random() * 20 - 10}px;
        `;
        els.floatingPhrases.appendChild(el);
    });
}

function animateIntroStars() {
    const stars = document.querySelectorAll('.intro-star');
    stars.forEach((star, i) => {
        setTimeout(() => {
            star.style.opacity = '1/Trusthecar';
        }, i * 300);
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;
    let innerX = 0, innerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        outerX += (mouseX - outerX) * 0.15;
        outerY += (mouseY - outerY) * 0.15;
        innerX += (mouseX - innerX) * 0.3;
        innerY += (mouseY - innerY) * 0.3;

        els.cursorOuter.style.transform = `translate(${outerX - 20}px, ${outerY - 20}px)`;
        els.cursorInner.style.transform = `translate(${innerX - 4}px, ${innerY - 4}px)`;
        els.cursorDot.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hover effects
    const hoverTargets = document.querySelectorAll('button, a, .card');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
}

// ============================================
// RENDER CARDS
// ============================================
function renderCards() {
    els.totalCount.textContent = teachers.length;
    updateProgress();

    teachers.forEach((teacher, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon">${teacher.icon}</div>
            <h3 class="card-name">${teacher.name}</h3>
            <p class="card-role">${teacher.role}</p>/n            <p class="card-quote">${teacher.quote}</p>/n            <button class="card-btn" data-id="${teacher.id}">Leer carta</button>
        `;
        els.cardsGrid.appendChild(card);

        // Staggered reveal
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150 + 200);
    });
}

// ============================================
// EVENTS
// ============================================
function bindEvents() {
    // Start button
    els.startBtn.addEventListener('click', startExperience);

    // Card clicks (delegation)
    els.cardsGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.card-btn');
        if (btn) {
            const id = btn.dataset.id;
            openLetter(id);
        }
    });

    // Modal close
    els.modalClose.addEventListener('click', closeModal);
    els.modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Mute button
    els.muteBtn.addEventListener('click', toggleMusic);
}

// ============================================
// TRANSITION TO MAIN SCREEN
// ============================================
function startExperience() {
    if (isTransitioning) return;
    isTransitioning = true;

    // Play music if not muted
    if (!isMuted) {
        startAmbientMusic();
    }

    // Cinematic transition
    els.introScreen.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out';
    els.introScreen.style.transform = 'scale(1.1) translateY(-20px)';
    els.introScreen.style.opacity = '0';

    setTimeout(() => {
        els.introScreen.classList.remove('active');
        els.introScreen.style.visibility = 'hidden';
        els.introScreen.style.transform = 'scale(1)';

        els.mainScreen.classList.add('active');
        els.mainScreen.style.opacity = '0';
        els.mainScreen.style.transition = 'opacity 1s ease';

        setTimeout(() => {
            els.mainScreen.style.opacity = '1';
            isTransitioning = false;
        }, 50);
    }, 1500);
}

// ============================================
// LETTER MODAL - ENVELOPE OPENING
// ============================================
function openLetter(id) {
    const teacher = teachers.find(t => t.id === id);
    if (!teacher) return;

    // Reset envelope state
    resetEnvelope();

    // Show modal first
    els.letterText.innerHTML = teacher.letter;
    els.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Start envelope animation sequence
    setTimeout(() => {
        openEnvelope();
    }, 300);

    // Mark as opened
    if (!openedCards.has(id)) {
        openedCards.add(id);
        updateProgress();

        const btn = document.querySelector(`.card-btn[data-id="${id}"]`);
        if (btn) {
            btn.textContent = 'Carta leída ✓';
            btn.classList.add('opened');
        }
    }

    // Confetti if last card
    if (openedCards.size === teachers.length) {
        setTimeout(() => {
            triggerConfetti();
        }, 2500);
    }
}

function openEnvelope() {
    if (!els.envelope) return;
    els.envelope.classList.add('opening');

    setTimeout(() => {
        els.envelope.classList.add('opened');
    }, 1600);
}

function resetEnvelope() {
    if (!els.envelope) return;
    els.envelope.classList.remove('opening', 'opened');
}

function closeModal() {
    els.modal.classList.remove('active');
    document.body.style.overflow = '';

    // Reset envelope after animation
    setTimeout(() => {
        resetEnvelope();
    }, 500);
}

function updateProgress() {
    const count = openedCards.size;
    const total = teachers.length;

    els.openedCount.textContent = count;

    // Update progress bar
    const percentage = (count / total) * 100;
    if (els.progressFill) {
        els.progressFill.style.width = `${percentage}%`;
    }

    if (count === total) {
        setTimeout(() => {
            els.finalMessage.classList.remove('hidden');
            setTimeout(() => {
                els.finalMessage.classList.add('visible');
            }, 100);
        }, 1000);
    }
}
// ============================================
// RETRO 8-BIT MUSIC (Web Audio API) - CORREGIDO
// ============================================

// El listado de notas que formará la melodía real en lugar de un zumbido fijo
const melody = [
    { note: 261.63, dur: 0.4 }, { note: 329.63, dur: 0.4 }, { note: 392.00, dur: 0.4 }, { note: 523.25, dur: 0.6 },
    { note: 440.00, dur: 0.4 }, { note: 523.25, dur: 0.4 }, { note: 392.00, dur: 0.8 },
    { note: 349.23, dur: 0.4 }, { note: 440.00, dur: 0.4 }, { note: 523.25, dur: 0.4 }, { note: 493.88, dur: 0.6 },
    { note: 392.00, dur: 0.4 }, { note: 440.00, dur: 0.4 }, { note: 293.66, dur: 0.8 }
];

let audioLoopInterval = null; // Guardará el temporizador del bucle

function toggleMusic() {
    isMuted = !isMuted;
    if (els.muteBtn) {
        els.muteBtn.classList.toggle('muted', isMuted);
        const icon = els.muteBtn.querySelector('.icon');
        if (icon) icon.textContent = isMuted ? '🔇' : '🎵';
    }

    if (!isMuted) {
        startAmbientMusic();
    } else {
        stopAmbientMusic();
    }
}

function startAmbientMusic() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    stopAmbientMusic(); // Nos aseguramos de apagar todo lo anterior

    let currentNoteIndex = 0;

    function playNextNote() {
        if (isMuted) return;

        const item = melody[currentNoteIndex];
        
        // Creamos un oscilador único que cambiará y se destruirá en cada nota
        const osc = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        osc.type = 'square'; // Onda cuadrada para el sonido puro nintendo/retro
        osc.frequency.setValueAtTime(item.note, audioContext.currentTime);
        
        // Configuración de volumen muy suave (2%) para que no sature
        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
        // Fade-out sutil al final de la nota para que no haga "clics" de audio ruidosos
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + item.dur - 0.05);

        osc.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        osc.start();
        osc.stop(audioContext.currentTime + item.dur); // ¡Obligatorio! Aquí se apaga la nota

        // Avanzar a la siguiente nota de la melodía de manera infinita
        currentNoteIndex = (currentNoteIndex + 1) % melody.length;
        
        // Programamos el inicio de la siguiente nota justo cuando termina esta
        audioLoopInterval = setTimeout(playNextNote, item.dur * 1000);
    }

    playNextNote();
}

function stopAmbientMusic() {
    // Si hay notas programadas en cola, las cancelamos por completo
    if (audioLoopInterval) {
        clearTimeout(audioLoopInterval);
        audioLoopInterval = null;
    }
// ============================================
// CONFETTI
// ============================================
function triggerConfetti() {
    const canvas = els.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ffb7c5', '#b19cd9', '#ff6b6b', '#ffd700', '#87ceeb', '#98fb98', '#ffa07a', '#e6e6fa'];
    const shapes = ['circle', 'square', 'heart'];
    const particles = [];

    for (let i = 0; i < 300; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: (Math.random() - 0.5) * 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: Math.random() * 0.05 + 0.02,
            shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
    }

    let frame = 0;
    const maxFrames = 400;

    function animate() {
        if (frame >= maxFrames) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.y += p.speedY;
            p.wobble += p.wobbleSpeed;
            p.x += Math.sin(p.wobble) * 2 + p.speedX;
            p.rotation += p.rotationSpeed;

            const opacity = Math.max(0, 1 - (frame / maxFrames));
            ctx.globalAlpha = opacity;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);

            if (p.shape === 'circle') {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.shape === 'square') {
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            } else if (p.shape === 'heart') {
                ctx.fillStyle = p.color;
                const s = p.size / 2;
                ctx.beginPath();
                ctx.moveTo(0, s * 0.3);
                ctx.bezierCurveTo(-s, -s * 0.5, -s, -s * 1.2, 0, -s * 1.5);
                ctx.bezierCurveTo(s, -s * 1.2, s, -s * 0.5, 0, s * 0.3);
                ctx.fill();
            }

            ctx.restore();

            // Sparkle effect
            if (i % 7 === 0 && Math.random() > 0.6) {
                ctx.globalAlpha = opacity * 0.8;
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(p.x, p.y - 10, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        frame++;
        requestAnimationFrame(animate);
    }

    animate();
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe cards after render
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });
    }, 500);
});

// Resize handler for canvas
window.addEventListener('resize', () => {
    if (els.confettiCanvas) {
        els.confettiCanvas.width = window.innerWidth;
        els.confettiCanvas.height = window.innerHeight;
    }
});
