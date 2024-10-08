<img src='/img/logo.png' alt='logo da empresa' width='50px' heidth='50px'/>

# *Diários de treinos💪🏋️‍♂️😘*

# PROJETO DE SOFTWARE

## *Stakeholders*
|NOME|CARGO|E-MAIL|
|:---|:---|:---|
|Beatriz Baltazar da Silva|Programadora Front-end|bebaltazar891@gmail.com
|Luan Campos Clemente Alves|desnvolvedor front-end|luanalves6543@gmail.com|
|Ordac Libaino Trindade Neto|Gerente de Projeto|ordac.neto@estudante.ifro.edu.br|
|Emanuel Gonçalves|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Jose Sbaraini |Gerente de Proto|josesbarainips@gmail.com|


# Sumário

* [RESUMO DO PROJETO](#resumo-do-projeto)
* [INTRODUÇÃO](#introdução)
  * [PROPÓSITO DESTE DOCUMENTO](#propósito-deste-documento)
* [DESCRIÇÃO GERAL](#descrição-geral)
  * [USUÁRIOS DO SISTEMA](#usuários-do-sistema)
  * [ABRANGÊNCIA E SISTEMAS SIMILARES](#abrangência-e-sistemas-similares)
  * [SUPOSIÇÕES E DEPENDÊNCIAS](#suposições-e-dependências)
* [METODOLOGIA ADOTADA NO DESENVOLVIMENTO](#metodologia-adotada-no-desenvolvimento)
* [REQUISITOS DO SOFTWARE](#requisitos-do-software)
  * [REQUISITOS FUNCIONAIS](#requisitos-funcionais)
  * [REQUISITOS NÃO FUNCIONAIS](#requisitos-não-funcionais)
* [PROTOTIPAGEM](#prototipagem)
* [DIAGRAMA DE CASOS DE USO](#diagrama-de-casos-de-uso)
* [DIAGRAMA DE CLASSES](#diagrama-de-classes)
* [REFERÊNCIAS](#referências)


# RESUMO DO PROJETO
| ITEM | DESCRIÇÃO|
|:---|:---|
| NOME DO PROJETO | Fibonacci Management System |
| GERENTE DO PROJETO | Wagner Ferreira |
| PRINCIPAL OBJETIVO | Auxiliar o sistema de ensino através de ferramentas síncronas e assíncronas que serão usadas por funcionários e alunos da instituição de ensino. |
| BENEFÍCIOS ESPERADOS |* Melhor acompanhamento pedagógico;<br/>* Redução da evasão escolar;<br/>* Aumento do número de matrículas;<br/>* Redução da inadimplência escolar;<br/>* Automatização dos processos financeiross|
| INÍCIO E TÉRMINO PREVISTOS | 14/03/2023 - 07/12/2023 |

[ [INÍCIO](#-my virtual gym) ]

# INTRODUÇÃO

## PROPÓSITO DESTE DOCUMENTO

Este documento destina-se aos clientes, engenheiros, gerentes e demais stakeholders deste projeto. O propósito deste documento é apresentar a descrição dos serviços e funções que o sistema **_Fibonacci Management System_** deve prover, bem como as suas restrições de operação e propriedades gerais, a fim de ilustrar uma descrição detalhada do sistema para um auxílio durante as etapas de análise, projeto e testes. O documento especifica todos os requisitos funcionais e não funcionais do sistema e contém a prototipagem, além de diagramas UML que foram construídos levando-se em conta as funcionalidades identificadas durante a fase de concepção do sistema.

[ [INÍCIO](#-my virtual gym) ]

# DESCRIÇÃO GERAL

## Usuários do sistema
|USUÁRIO|DESCRIÇÃO|
|:---|:---|
|**Usuário Padrão:**|Realizam as tarefas comuns a todos os usuários, tal como: logar e enviar mensagens. Todos demais usuários estendem as funcionalidades do UsuárioPadrão|
|**Administrador:**|Responsáveis pelo gerenciamento das entidades pertinentes à instituição e pela alocação de outros administradores|
|**Coordenador:**|Responsáveis pela aprovação de disciplinas, turmas e matrículas realizadas pela secretaria do curso, além de ser responsável pela alocação da secretaria|
|**Secretaria:**|Responsáveis pelo cadastramento de disciplinas e turmas, pela alocação de professores e monitores de um curso e matrículas dos alunos|
|**Professor:**|Responsáveis pela criação do programa da disciplina através de ferramentas de planejamento e criação de atividades|
|**Aluno:**|Seguem o programa da disciplina criada pelo professor, tendo como apoio ferramentas de comunicação, tal como: chat e fórum|


[ [INÍCIO](#-my virtual gym) ]

# Metodologia Adotada no Desenvolvimento


[ [INÍCIO](#-my virtual gym) ]

# Requisitos do Software

A especificação dos requisitos deste documento deve seguir as recomendações da norma IEEE Std-830-1998, levando em conta as recomentações do documento de [características dos requisitos](caracteristicas_requisitos.md).

## Requisitos Funcionais

A tabela a seguir contém a relação dos Requisitos Funcionais elicitados, com as colunas: identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
:---|:---|:---|
|RF-001 |Cadastrar o usuario |inserir os dados do usuario como nome, cpf, email. |
|RF-002 |Cadastrar os dadaos fisicos| cadastro como: altura, circunferências.|
|RF-003 |atualizar dados fisicos| atualização de dados. |
|RF-004 |Atualizar diario de treinos| atualização de treinos  |
|RF-005 |Cancelar usuário | poder apagar seus dados a qualquer momento.|
|RF-006 |colocar tipos de exercicios| poder escolher os tipos de exercicios.  |
|RF-007 |conseguir ver a sua evolução| A pessoa vai conseguir ver a sua evolução |
|RF-008 |Marcar os dias de treinamento |A pessoa vai conseguir marcar os dias que está treinando  |
|RF-009 |Adicionar Sistema de progreção|Sistema de recomendação de aumento nas dificuldades|
|RF-010 |Criar sistema de adaptação a idade| O treino vai mudar dependendo da idade |
|RF-011 |Cadastro de maquinario| Possibilidade de especificar equipamento disponivel |
|RF-012 |Criar uma Pagina de informações gerais| Uma pagina com todos os dados gerais do usuario |
|RF-013 |Criar uma identidade visual para todo o site| Criar um padrão visual chamativo  |
|RF-014 |Criar Uma aba social| Uma aba com,amigos,comunidades,grupos etc |
|RF-015 |Sistema de notificações| Um sistema que manda notificações |
|RF-016 |Desativar e Reativar usuários da plataforma| A desativação de usuários descrito neste requisito |
|RF-017 |Compartilhar conteúdo da plataforma nas redes sociais facebook, twitter,googleyoutube e whatsapp.| O usuario vai poder comparartilhar resultados nessas plataformas |
|RF-018 |Criar, manter e excluir agenda de eventos| usuario vai poder criar uma aba de agente com eventos e a editar |
|RF-019 |Crias, manter e excluir salas de chat online (mensagens instantâneas)| Um chat intantaneo entre varios usuarios |
|RF-020|Buscar conteúdo na plataforma| Por meio da busca o usuario podera buscar por conteudos especificos |



## Requisitos Não Funcionais
A tabela a seguir contém a relação com os Requisitos Não Funcionais identificados, contendo identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
|:---|:---|:---|
|RNF-001 |Nome do Requisito |Descreva aqui as informações sobre o requisito |
|RNF-002 |Nome do Requisito |Descreva aqui as informações sobre o segundo requisito |


[ [INÍCIO](#-my virtual gym) ]


# Prototipagem

[Protótipo criado no FIGMA em 2022 por estudantes](https://www.figma.com/file/iNC7wyX9zP7Kmn3BhiCFGf/Fals6Hood-(Prot%C3%B3tipo-criado-por-estudantes-em-2022)?node-id=0%3A1&t=B16hgeZP3MSURCCa-1)

![Imagem do Protótipo](/Class Diagram0.png)

[ [INÍCIO](#my virtual gym) ]


# Diagrama de Casos de Uso


![Diagrama de Casos de Uso](/img/use_case_placas.png)

[ [INÍCIO](#-my virtual gym) ]

# Diagrama de Classes

[ [INÍCIO](#-my virtual gym) ]


# REFERÊNCIAS

Esta subseção apresenta as referências aos documentos que utilizamos no auxílio à construção deste documento.
* [UML](https://www.omg.org/spec/UML/2.5/About-UML/)
* [Práticas para Especificação de Requisitos IEEE-830](https://ieeexplore.ieee.org/document/720574)
