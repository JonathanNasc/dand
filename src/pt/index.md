---
title: 'Guia'
description: 'Instruções e explicações sobre o funcionamento do site logicdan.com'
---

![logo](../assets/logicdan_logo.svg "Logo do Logicdan")

[Logicdan](https://logicdan.com) é uma plataforma de testes lógicos. O objetivo de seus usuários é decifrar a relação entre o número e o texto apresentados em cada desafio. Assim que solucionado o enigma, deverão deduzir qual exato texto correspondente ao nível seguinte.

Se a tentativa estiver correta, recompensas e indicadores de progresso serão registrados, e um desafio de dificuldade ligeiramente maior será apresentado. Caso contrário, novas tentativas podem ser aplicadas, ou, alternativamente, o ciclo pode ser reiniciado, apresentando uma nova sequência de desafios [provavelmente] inéditos.

Confira os seguintes tópicos para ler mais detalhes sobre a plataforma Logicdan:

- [Como funciona?](#how-it-works) (explicação detalhada)
- [Como obter bolts (<span class="bolt"></span>)?](#how-to-get-bolts)
- [Como Logicdan modera trapaceiros?](#how-cheaters-are-moderated)
- [Como propor um bom desafio?](#how-to-propose-good-challenges)
- [Glossário](#glossary)

## <a name="how-it-works"></a>Como funciona?

O principal conceito a ser compreendido é que cada desafio de Logicdan é composto por um conjunto de nível e enigma:

- **Nível** é um número de `1` a `9` exibido no círculo central, acima do enigma, entre outros dois círculos que representam o nível anterior e posterior
- **Enigma** é um texto composto por letras, números e/ou caracteres diversos, exibido de maneira destacada no centro da página do modo ranqueado

Considere o seguinte exemplo:

|   |   |
|---|:-:|
| 1 →|One|
| 2 →| 	<font color=#26c9d1>?</font> |

Este desafio de nível `1` apresenta o enigma `One`. O texto que, obedecendo à mesma lógica, permite avançar para o nível seguinte (neste exemplo `2`) provavelmente é `Two`. Note que a sequência de caracteres deve obedecer ao mesmo padrão, neste caso, mantendo a primeira letra maiúscula.

A complexidade dos desafios aumenta na mesma proporção em que o número do nível se torna mais elevado. O exemplo a seguir demonstra uma evolução na lógica que precisa ser aplicada:

|   |   |
|---|:-:|
| 4 →|dw|
| 5 →| 	<font color=#26c9d1>?</font> |

Este desafio de nível `4` apresenta o enigma `dw`. Portanto, é provável que o texto correspondente ao nível `5`, seguindo a mesma lógica, seja `fv`, porque "d" é a quarta letra do alfabeto latino, enquanto "w" é a quarta letra na ordem inversa (começando pela letra z).

### Modo ranqueado

É a principal maneira de interagir com os desafios da plataforma Logicdan. Na aba correspondente, caso esteja logado, um mesmo desafio será apresentado até que seja resolvido ou que o nível seja reiniciado.

Resolver um desafio pode gerar três tipos de recompensa:

- **Bolts <span class="bolt"></span>**: para cada desafio superior ao nível 2 resolvido, a recompensa é de 1 bolt. Bolts podem ser obtidos de diversas maneiras e podem ser utilizados para desbloquear funcionalidades. [Leia a sessão "Como obter bolts" para saber mais](#how-to-get-bolts).
- **Unlocks <span class="unlock"></span>**: o número de unlocks equivalente ao do nível é somado para cada desafio superior ao nível 2 resolvido. A quantidade de unlocks de cada usuário é o segundo critério na ordenação dos rankings.
- **Stars <span class="star"></span>**: a única maneira de obter a recompensa de 1 star é resolvendo um desafio de nível 9. A quantidade de stars de cada usuário é o principal critério na ordenação dos rankings.

Reiniciar o nível pode ser recomendável caso você sinta que a dificuldade do desafio atual está impedindo o seu progresso. Note que reiniciar o desafio requer bolts (<span class="bolt"></span>), exceto em desafios de nível 1, devido ao seu caráter didático e introdutório. Note também que reiniciar o desafio quando você já está em um nível avançado te deixará mais longe de completar um desafio de nível 9 e obter sua recompensa de 1 <span class="star"></span> e 10 <span class="bolt"></span>.

Existem dois tipos de desafios apresentados no modo ranqueado: os oficiais, criados pela equipe de desenvolvedores do Logicdan; e os desafios propostos pela comunidade que foram avaliados e aprovados por moderadores.

### Modo criativo

Desafios propostos pela comunidade que ainda não foram revisados ou que não foram aprovados por moderadores podem ser compartilhados e testados livremente. Se resolvidos, não geram recompensas.

## <a name="how-to-get-bolts"></a>Como obter bolts <span class="bolt"></span>?

| | |
|:---|:---|
|1 <span class="bolt"></span>|Resolvendo desafios de nível maior que 1|
|10 <span class="bolt"></span>|Ganhando <span class="star"></span> ao completar desafios de nível 9|
|10 <span class="bolt"></span>|Tendo bugs reportados, revisados e corrigidos|
|3<font color=#26c9d1>x</font> <span class="bolt"></span>|Tendo desafios propostos aprovados. Sendo <font color=#26c9d1>x</font> o nível do desafio|
|<font color=#26c9d1>y</font> <span class="bolt"></span>|Fazendo doações. Sendo <font color=#26c9d1>y</font> um número entre 1 e 250|

Bolts (<span class="bolt"></span>) podem ser utilizados para reiniciar ciclos de desafios no modo ranqueado e enviar propostas de desafios.

## <a name="how-cheaters-are-moderated"></a>Como trapaceiros são moderados?

Conforme descrito na [página de termos](/pt/terms), é proibida a divulgação, por qualquer meio, de resoluções dos desafios de nível superior a 4, bem como sua utilização para progresso ilegítimo. O descumprimento desta regra poderá resultar na desativação da conta.

## <a name="how-to-propose-good-challenges"></a>Como propor bons desafios?

Os três principais critérios considerados na avaliação de desafios propostos pela comunidade são:

- A solução registrada deve ser coerente com o texto do enigma, e o racional deve ser satisfatoriamente livre de ambiguidades;
- O grau de dificuldade deve corresponder ao nível do desafio;
- A solução aplicada para o racional proposto deve ser imutável. Condições não definitivas (por exemplo: ranking de empresas mais valiosas na bolsa de valores), devem ser evitadas;

Para acompanhar o processo de revisão, verifique o status do seu desafio na tela do modo criativo.

|status|descrição|
|:---|:---|
|NR|Não revisado: assim que avaliado, outro status será atribuído ao seu desafio|
|RE|Regularizado: o seu desafio foi adicionado ao modo ranqueado|
|DU|Duplicado: há outro idêntico, por isso, não será adicionado ao modo ranqueado|
|NA|Não aprovado: o desafio não será adicionado ao modo ranqueado|
|XM|Removido: o desafio não poderá ser testado e compartilhado|


## <a name="glossary"></a>Glossário

- **Enigma**: texto cifrado relacionado ao número do nível do desafio
- **Nível**: número de 1 a 9 que representa a dificuldade do desafio
- **Solução**: texto que corresponde ao nível seguinte, obedecendo à mesma lógica que relaciona o enigma atual com o nível atual
- **Desafio**: conjunto de nível, enigma e solução correspondente
- **Ciclo**: uma sequência de desafios completa, partindo do nível 1 até o 9
- **Racional**: descrição da lógica aplicada no desafio
- **Bolts <span class="bolt"></span>**: recompensa que desbloqueia ações especiais como o envio de propostas de desafios e reinício de ciclos
- **Stars <span class="star"></span>**: é o número que representa a quantidade de ciclos que um usuário já completou no modo de jogo ranqueado
- **Unlocks <span class="unlock"></span>**: soma dos níveis já solucionados por um usuário (excluindo desafios de nível 1)
