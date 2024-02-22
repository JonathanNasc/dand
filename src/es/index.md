---
title: 'Guía'
description: 'Instrucciones y explicaciones sobre el funcionamiento del sitio logicdan.com'
---

<a href="https://logicdan.com">
  <img class="logo" src="{{ meta.url }}/assets/logicdan-logo.svg" alt="Logo do Logicdan" />
</a>

[Logicdan](https://logicdan.com) es una plataforma de pruebas lógicas. Consulte los siguientes temas para obtener más detalles:

- [¿Cómo funciona?](#how-it-works)
- [¿Cómo obtener bolts (<span class="bolt"></span>)?](#how-to-get-bolts)
- [¿Cómo proponer un buen desafío?](#how-to-propose-good-challenges)
- [Glosario](#glossary)

## <a name="how-it-works"></a>¿Cómo funciona?

El principal concepto a entender es que cada desafío de Logicdan está compuesto por un conjunto de nivel y enigma, como se explica a continuación:

<img class="print-screen" src="{{ meta.url }}/assets/logicdan-screen.png" alt="logicdan printscreen">

- **Nivel** <span class="screen-index">A</span> es un número del `1` al `9` que se muestra en el círculo central, sobre el enigma. Haz clic en él para ver información sobre el desafío presentado.
- **Enigma** <span class="screen-index">B</span> es un texto compuesto por letras, números y/o caracteres diversos.

Considera el siguiente racional:

|   |   |
|---|:-:|
| 1 →|uno|
| 2 →| 	<font color=#26c9d1>?</font> |

Este desafío de nivel `1` presenta el enigma `uno`. El texto que debe ingresarse en el campo de solución <span class="screen-index">D</span> probablemente sea `dos`. Al presionar la llave <span class="screen-index">E</span> (haciendo clic en ella o presionando la tecla Enter), su color cambiará a tonos de verde y se presentará un nuevo desafío del siguiente nivel.

Ten en cuenta que la solución propuesta debe seguir el mismo patrón lógico; en este caso, la regla más perceptible es que todas las letras son minúsculas. Si se ingresa una solución incorrecta, como `Dos`, en el campo de solución <span class="screen-index">D</span>, al realizar la prueba, el color de la llave <span class="screen-index">E</span> cambiará a tonos de rojo y se mantendrá el desafío actual.

La complejidad de los desafíos aumenta a medida que el número del nivel se vuelve más alto. El siguiente racional demuestra una evolución de complejidad lógica proporcional al nivel del desafío:

|   |   |
|---|:-:|
| 4 →|awbXcydz|
| 3 →| 	<font color=#26c9d1>?</font> |

Este nuevo desafío hipotético de nivel `4` presenta el enigma `awbXcydz`. El razonamiento a descifrar es "las cuatro primeras y cuatro últimas letras del alfabeto latino se intercalan formando una palabra cuya cuarta letra es la única mayúscula". Por lo tanto, el razonamiento equivalente al siguiente nivel es "las cinco primeras y cinco últimas letras del alfabeto latino se intercalan formando una palabra cuya quinta letra es la única mayúscula", es decir, `avbwCxdyez`.

### Modo clasificado

Es la principal forma de interactuar con los desafíos de la plataforma Logicdan. En la pestaña correspondiente, si estás registrado, se presentará un mismo enigma <span class="screen-index">A</span> hasta que se resuelva o se reinicie el nivel <span class="screen-index">C</span>.

Resolver un desafío puede generar tres tipos de recompensas:

- **Bolts <span class="bolt"></span>**: por cada desafío superior al nivel 1 resuelto, la recompensa es de 1 bolt. Los bolts se pueden obtener de varias maneras y se pueden utilizar para desbloquear funcionalidades. [Lee la sección "¿Cómo obtener bolts?" para obtener más información](#how-to-get-bolts).
- **Unlocks <span class="unlock"></span>**: se suma el número de unlocks equivalente al del nivel por cada desafío superior al nivel 2 resuelto. La cantidad de unlocks de cada usuario es el segundo criterio en la clasificación de los rankings.
- **Stars <span class="star"></span>**: la única forma de obtener la recompensa de 1 star es resolviendo un desafío de nivel 9. La cantidad de stars de cada usuario es el criterio principal en la clasificación de los rankings.

Reiniciar el nivel <span class="screen-index">C</span> puede ser recomendable si sientes que la dificultad del desafío actual está impidiendo tu progreso. Ten en cuenta que reiniciar el desafío requiere bolts (<span class="bolt"></span>), excepto en desafíos de nivel 1, debido a su carácter didáctico e introductorio. También ten en cuenta que reiniciar el desafío cuando ya estás en un nivel avanzado te dejará más lejos de completar un desafío de nivel 9 y obtener tu recompensa de 1 <span class="star"></span> y 5 <span class="bolt"></span>.

Hay dos tipos de desafíos presentados en el modo clasificado: los oficiales, creados por el equipo de desarrolladores; y los desafíos propuestos por la comunidad que han sido evaluados y aprobados por moderadores.

### Modo creativo

Los desafíos propuestos por la comunidad que aún no han sido revisados o que no han sido aprobados por moderadores se pueden compartir y probar libremente. Si se resuelven, no generan recompensas.

## <a name="how-to-get-bolts"></a>¿Cómo obtener bolts <span class="bolt"></span>?

| | |
|:---|:---|
|1 <span class="bolt"></span>|Resolviendo desafíos de nivel superior a 1|
|5 <span class="bolt"></span>|Ganando <span class="star"></span> al completar desafíos de nivel 9|
|10 <span class="bolt"></span>|Registrándote en la plataforma|
|15 <span class="bolt"></span>|Teniendo errores reportados, revisados y corregidos|
|3<font color=#26c9d1>x</font> <span class="bolt"></span>|Teniendo desafíos propuestos aprobados. Siendo <font color=#26c9d1>x</font> el nivel del desafío|
|<font color=#26c9d1>y</font> <span class="bolt"></span>|Haciendo donaciones. Siendo <font color=#26c9d1>y</font> un número entre 1 y 250|

Los bolts (<span class="bolt"></span>) se pueden utilizar para reiniciar ciclos de desafíos en el modo clasificado y enviar propuestas de desafíos.

## <a name="how-to-propose-good-challenges"></a>¿Cómo proponer buenos desafíos?

Los tres criterios principales considerados en la evaluación de desafíos propuestos por la comunidad son:

- La solución registrada debe ser coherente con el texto del enigma, y la explicación debe estar satisfactoriamente libre de ambigüedades;
- El nivel de dificultad debe corresponder al nivel del desafío;
- La solución aplicada al razonamiento propuesto debe ser inmutable. Se deben evitar condiciones no definitivas (por ejemplo, clasificación de las empresas más valiosas en la bolsa de valores);

Para seguir el proceso de revisión, verifica el estado de tu desafío en la pantalla del modo creativo.

|estado|descripción|
|:---|:---|
|NR|No revisado: una vez evaluado, se asignará otro estado a tu desafío|
|RE|Regularizado: tu desafío se ha agregado al modo clasificado|
|DU|Duplicado: hay otro idéntico, por lo que no se agregará al modo clasificado|
|NA|No aprobado: el desafío no se agregará al modo clasificado|
|XM|Eliminado: el desafío no se puede probar ni compartir|


## <a name="glossary"></a>Glosario

- **Enigma** <span class="screen-index">B</span>: texto cifrado relacionado con el número del nivel del desafío
- **Nivel** <span class="screen-index">A</span>: número del 1 al 9 que representa la dificultad del desafío
- **Solución** <span class="screen-index">D</span>: texto que corresponde al siguiente nivel, siguiendo la misma lógica que relaciona el enigma actual con el nivel actual
- **Desafío**: conjunto de nivel, enigma y solución correspondiente
- **Llave** <span class="screen-index">E</span>: botón utilizado para probar una solución
- **Ciclo**: una secuencia de desafíos completa, desde el nivel 1 hasta el 9
- **Razonamiento**: o explicación, es la descripción de la lógica aplicada en el desafío
- **Racional**: es la conjunción del nivel actual, enigma, nivel siguiente e incógnita que resulta en una fórmula similar a la [regla de tres](https://es.wikipedia.org/wiki/Regla_de_tres). Sirve para ayudar al razonamiento a través de una representación visual.
- **Bolts <span class="bolt"></span>**: recompensa que desbloquea acciones especiales como el envío de propuestas de desafíos y el reinicio de ciclos
- **Stars <span class="star"></span>**: es el número que representa la cantidad de ciclos que un usuario ha completado en el modo de juego clasificado
- **Unlocks <span class="unlock"></span>**: suma de los niveles ya resueltos por un usuario (excluyendo desafíos de nivel 1)
