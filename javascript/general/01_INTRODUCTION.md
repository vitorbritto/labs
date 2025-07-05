# Uma Introdução ao JavaScript

Vamos entender o que torna o JavaScript tão especial, o que podemos fazer com ele e com quais outras tecnologias ele se integra bem.

⸻

# O que é JavaScript?

O JavaScript foi criado inicialmente para “dar vida às páginas web”.

Os programas nessa linguagem são chamados de scripts. Eles podem ser escritos diretamente no HTML da página e executados automaticamente quando a página é carregada.

Scripts são fornecidos e executados como texto simples. Eles não precisam de nenhuma preparação especial ou compilação para funcionar.

Nesse ponto, o JavaScript é bem diferente de outra linguagem chamada Java.

⸻

# Por que se chama JavaScript?

Quando o JavaScript foi criado, ele tinha outro nome: LiveScript. Mas como o Java era muito popular na época, decidiram posicionar a nova linguagem como o “irmão mais novo” do Java para atrair mais atenção.

Com o tempo, o JavaScript evoluiu e se tornou uma linguagem totalmente independente, com sua própria especificação chamada ECMAScript, e hoje não tem mais relação com o Java.

Atualmente, o JavaScript pode ser executado não só no navegador, mas também em servidores ou em qualquer dispositivo que tenha um programa especial chamado de motor JavaScript (JavaScript engine).

O navegador possui um motor embutido, às vezes chamado de “máquina virtual JavaScript”.

Motores diferentes têm codinomes diferentes, por exemplo:
	•	V8 – no Chrome, Opera e Edge.
	•	SpiderMonkey – no Firefox.
	•	Outros codinomes incluem “Chakra” (IE), “JavaScriptCore”, “Nitro” e “SquirrelFish” (Safari).

Esses nomes são úteis de lembrar, pois aparecem com frequência em artigos de desenvolvimento. Vamos usá-los também. Por exemplo, se “um recurso X é suportado pelo V8”, então provavelmente funciona no Chrome, Opera e Edge.

⸻

# Como funcionam os motores?

Os motores são complexos, mas o básico é simples:
	1.	O motor (embutido no navegador) lê (parseia) o script.
	2.	Depois, converte (compila) o script para código de máquina.
	3.	E então o código de máquina é executado, de forma rápida.

O motor aplica otimizações em cada etapa do processo. Ele observa a execução do código, analisa os dados que passam por ele e ajusta o código de máquina para melhorar ainda mais o desempenho.

⸻

# O que o JavaScript no navegador pode fazer?

O JavaScript moderno é uma linguagem de programação “segura”. Ele não dá acesso direto à memória ou ao processador, porque foi feito para navegadores, que não precisam disso.

As capacidades do JavaScript dependem muito do ambiente onde está sendo executado. Por exemplo, o Node.js permite ler/escrever arquivos, fazer requisições de rede, etc.

No navegador, o JavaScript pode fazer tudo relacionado à manipulação da página, interação com o usuário e comunicação com o servidor:
	•	Adicionar ou alterar elementos HTML, modificar estilos.
	•	Reagir a ações do usuário: cliques, movimentos do mouse, teclas pressionadas.
	•	Enviar e receber dados pela rede (AJAX, COMET).
	•	Manipular cookies, mostrar mensagens, fazer perguntas ao usuário.
	•	Armazenar dados localmente (localStorage).

⸻

# O que o JavaScript no navegador não pode fazer?

As limitações existem para proteger o usuário. Uma página maliciosa não pode:
	•	Ler/gravar arquivos arbitrários no disco rígido ou executar programas.
	•	Acessar diretamente o sistema operacional.

O navegador permite alguma interação com arquivos, mas só quando o usuário age, por exemplo, soltando um arquivo na tela ou selecionando com <input>.

É possível acessar câmera, microfone e outros dispositivos, mas sempre com permissão explícita do usuário. Uma página JavaScript não pode ativar a webcam secretamente.

Abas e janelas geralmente não se conhecem. Em alguns casos, se uma aba abrir a outra, pode haver comunicação, mas só se forem do mesmo domínio (mesma origem: domínio, protocolo e porta).

Essa é a chamada “Política de Mesma Origem” (Same Origin Policy). Para se comunicarem entre si, duas páginas devem concordar e usar código JavaScript específico para isso — abordaremos isso no tutorial.

JavaScript pode se comunicar facilmente com o servidor de onde a página veio, mas só pode acessar outros sites se o servidor permitir explicitamente (com cabeçalhos HTTP apropriados).

Fora do navegador (como no servidor), essas limitações não existem. Plugins e extensões podem ter permissões estendidas.

⸻

# O que torna o JavaScript único?

Pelo menos três coisas tornam o JavaScript especial:
	1.	Integração total com HTML e CSS.
	2.	Coisas simples são fáceis de fazer.
	3.	Suportado por todos os navegadores modernos e habilitado por padrão.

Nenhuma outra tecnologia para navegador junta essas três qualidades. Por isso, o JavaScript é a ferramenta mais usada para criar interfaces web.

Mas ele também pode ser usado para criar servidores, apps mobile e muito mais.

⸻

# Linguagens “acima” do JavaScript

A sintaxe do JavaScript não agrada a todos. Por isso, surgiram várias linguagens que são convertidas (transpiled) para JavaScript antes de serem executadas no navegador.

As ferramentas modernas fazem essa conversão de forma rápida e quase invisível.

Alguns exemplos:
	•	CoffeeScript: traz uma sintaxe mais curta e limpa. Muito usada por quem vem do Ruby.
	•	TypeScript: adiciona tipagem estática para facilitar o desenvolvimento de sistemas grandes. Criada pela Microsoft.
	•	Flow: também adiciona tipagem, mas de outra forma. Criado pelo Facebook.
	•	Dart: linguagem independente com motor próprio, mas também pode ser convertida para JavaScript. Criada pelo Google.
	•	Brython: transpila Python para JavaScript, permitindo escrever apps web só com Python.
	•	Kotlin: linguagem moderna, segura e concisa que pode rodar no navegador ou no Node.js.

Mesmo usando essas linguagens, é essencial conhecer JavaScript para entender o que está acontecendo.

⸻

# Resumo
	•	O JavaScript foi criado para rodar em navegadores, mas hoje é usado em muitos outros contextos.
	•	Ele é a linguagem mais adotada para criar interfaces web, com total integração com HTML/CSS.
	•	Existem várias linguagens que são convertidas para JavaScript e adicionam recursos extras — vale a pena conhecê-las após dominar o JavaScript.
