---
title: 'Guía'
description: 'Instrucciones y explicaciones sobre el funcionamiento del sitio web logicdan.com'
---

![logo](../assets/logicdan_logo.svg "Logo de Logicdan")

[Logicdan](https://logicdan.com) es una plataforma de pruebas lógicas. El objetivo de sus usuarios es descifrar la relación entre el número y el texto presentados en cada desafío. Una vez resuelto el enigma, deberán deducir cuál es el texto exacto correspondiente al siguiente nivel.

Si el intento es correcto, se registrarán recompensas e indicadores de progreso, y se presentará un desafío ligeramente más difícil. En caso contrario, se pueden realizar nuevos intentos, o alternativamente, se puede reiniciar el ciclo, presentando una nueva secuencia de desafíos [probablemente] inéditos.

Consulte los siguientes temas para obtener más detalles sobre la plataforma Logicdan:

- [¿Cómo funciona?](#how-it-works) (explicación detallada)
- [¿Cómo obtener bolts (<span class="bolt"></span>)?](#how-to-get-bolts)
- [¿Cómo modera Logicdan a los tramposos?](#how-cheaters-are-moderated)
- [¿Cómo proponer un buen desafío?](#how-to-propose-good-challenges)
- [Glosario](#glossary)

## <a name="how-it-works"></a>¿Cómo funciona?

El concepto principal a entender es que cada desafío de Logicdan está compuesto por un conjunto de nivel y enigma:

- **Nível** es un número del `1` al `9` que se muestra en el círculo central, sobre el enigma, entre otros dos círculos que representan el nivel anterior y posterior
- **Enigma** es un texto compuesto por letras, números y/o caracteres diversos, que se muestra de manera destacada en el centro de la página del modo clasificado

Considere el siguiente ejemplo:

|   |   |
|---|:-:|
| 1 →|One|
| 2 →| 	<font color=#26c9d1>?</font> |

Este desafío de nivel `1` presenta el enigma `One`. El texto que, siguiendo la misma lógica, permite avanzar al siguiente nivel (en este ejemplo `2`) probablemente es `Two`. Note que la secuencia de caracteres debe seguir el mismo patrón, manteniendo la primera letra en mayúscula.

La complejidad de los desafíos aumenta a medida que el número del nivel se vuelve más alto. El siguiente ejemplo demuestra esta evolución:

|   |   |
|---|:-:|
| 4 →|dw|
| 5 →| 	<font color=#26c9d1>?</font> |

Este desafío de nivel `4` presenta el enigma `dw`. Por lo tanto, es probable que el texto correspondiente al nivel `5`, siguiendo la misma lógica, sea `fv`, porque "d" es la cuarta letra del alfabeto latino, mientras que "w" es la cuarta letra en orden inverso.

### Modo clasificado

Es la principal manera de interactuar con los desafíos de la plataforma Logicdan. En la pestaña correspondiente, si está conectado, se presentará el mismo desafío hasta que se resuelva o se reinicie el nivel.

Resolver un desafío puede generar tres tipos de recompensas:

- **Bolts <span class="bolt"></span>**: por cada desafío superior al nivel 2 resuelto, la recompensa es de 1 bolt. Los bolts se pueden obtener de diversas maneras y se pueden utilizar para desbloquear funciones. [Lea la sección "¿Cómo obtener bolts" para obtener más información](#how-to-get-bolts).
- **Unlocks <span class="unlock"></span>**: se suma un número de desbloqueos equivalente al nivel para cada desafío resuelto superior al nivel 2. La cantidad de desbloqueos de cada usuario es el segundo criterio en la clasificación de los rankings.
- **Stars <span class="star"></span>**: la única manera de obtener la recompensa de 1 star es resolviendo un desafío de nivel 9. La cantidad de stars de cada usuario es el criterio principal en la clasificación.

Reiniciar el nivel puede ser recomendable si sientes que la dificultad del desafío actual está impidiendo su progreso. Tenga en cuenta que reiniciar el desafío requiere bolts (<span class="bolt"></span>), excepto en desafíos de nivel 1, debido a su carácter didáctico e introductorio. También tenga en cuenta que reiniciar el desafío cuando ya está en un nivel avanzado lo dejará más lejos de completar un desafío de nivel 9 y obtener su recompensa de 1 <span class="star"></span> y 10 <span class="bolt"></span>.

Hay dos tipos de desafíos presentados en el modo clasificado: los oficiales, creados por el equipo de desarrolladores de Logicdan; y los desafíos propuestos por la comunidad que han sido evaluados y aprobados por moderadores.

### Modo creativo

Los desafíos propuestos por la comunidad que aún no han sido revisados o que no han sido aprobados por moderadores se pueden compartir y probar libremente. Si se resuelven, no generan recompensas.

## <a name="how-to-get-bolts"></a>¿Cómo obtener bolts <span class="bolt"></span>?

| | |
|:---|:---|
|1 <span class="bolt"></span>|Resolviendo desafíos de nivel superior a 1|
|10 <span class="bolt"></span>|Ganando <span class="star"></span> al completar desafíos de nivel 9|
|10 <span class="bolt"></span>|Teniendo un bug reportado, revisado y corrigido|
|3<font color=#26c9d1>x</font> <span class="bolt"></span>|Teniendo desafíos propuestos aprobados. Siendo <font color=#26c9d1>x</font> el nivel del desafío|
|<font color=#26c9d1>y</font> <span class="bolt"></span>|Haciendo donaciones. Siendo <font color=#26c9d1>y</font> un número entre 1 y 250|

Los bolts (<span class="bolt"></span>) se pueden utilizar para reiniciar ciclos de desafíos en el modo clasificado y enviar propuestas de desafíos.


## <a name="how-cheaters-are-moderated"></a>¿Cómo se moderan los tramposos?

Como se describe en la [página de términos](/es/terms), está prohibida la divulgación, por cualquier medio, de resoluciones de desafíos de nivel superior a 4, así como su uso para progresos ilegítimos. El incumplimiento de esta regla podría resultar en la desactivación de las cuentas.

## <a name="how-to-propose-good-challenges"></a>¿Cómo proponer buenos desafíos?

Los tres criterios principales considerados en la evaluación de desafíos propuestos por la comunidad son:

- La solución registrada debe ser coherente con el texto del enigma, y el razonamiento debe estar satisfactoriamente libre de ambigüedades.
- El nivel de dificultad debe corresponder al nivel del desafío.
- La solución aplicada para el razonamiento propuesto debe ser inmutable. Se deben evitar condiciones no definitivas, por ejemplo: el país con el PIB más alto.

Para seguir el proceso de revisión, verifique el estado de su desafío en la pantalla del modo creativo.

|estado|descripción|
|:---|:---|
|NR|No revisado: una vez evaluado, se asignará otro estado a su desafío|
|RE|Regularizado: su desafío se ha añadido al modo clasificado|
|DU|Duplicado: hay otro idéntico, por lo que no se añadirá al modo clasificado|
|NA|No aprobado: el desafío no se añadirá al modo clasificado|
|XM|Eliminado: el desafío no se podrá probar ni compartir|


## <a name="glossary"></a>Glosario

- **Enigma**: texto cifrado relacionado con el número del nivel del desafío.
- **Nivel**: número del 1 al 9 que representa la dificultad del desafío.
- **Solución**: texto que corresponde al siguiente nivel, siguiendo la misma lógica que relaciona el enigma actual con el nivel actual.
- **Desafío**: conjunto de nivel, enigma y solución correspondiente.
- **Ciclo**: una secuencia completa de desafíos, desde el nivel 1 hasta el 9.
- **Razonamiento**: descripción de la lógica aplicada en el desafío.
- **Bolts <span class="bolt"></span>**: recompensa que desbloquea acciones especiales, como enviar propuestas de desafíos y reiniciar ciclos.
- **Stars <span class="star"></span>**: es el número que representa la cantidad de ciclos que un usuario ha completado en el modo de juego clasificado.
- **Unlocks <span class="unlock"></span>**: suma de los niveles ya resueltos por un usuario.
