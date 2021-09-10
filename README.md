# Projeto Final - Reprograma

## O Projeto <3

A alta demanda de departamentos jurídicos e escritórios de advogacia que tem como principais atribuições a elaboração de contratos, faz com que os advogados fiquem sobrecarregados e tenham que dividir o tempo entre atender os clientes, estudar e entender a demanda, e fazer a gestão das cláusulas e minutas, que devem estar sempre atualizadas.

![Homer Simpson] (https://github.com/KellyCSR/Projeto_Final_Reprograma/blob/main/tenor-13.gif)

Diante desse cenário, a ideia deste projeto é oferecer um software de soluções e automação de rotinas jurídicas, sobretudo a gestão de cláculas, através de um clausulado e de contratos, através de um minutário.
Com essa ferramenta é possível que departamentos jurídico e escritórios de advocacia possam organizar melhor seus documentos, garantindo economia de tempo, redução de riscos e atualização das minutas. 
<br>
<br>

### ` Mas porque um clausulado?`

Vantagens: 
* A tecnologia traz uma série de benefícios para a área jurídica, como:
* Otimização de atividade operacionais;
* Praticidade;
* Redução de tempo, com gestão de banco de cláusulas;

Permitindo assim que os advogados foquem nas demandas que trazem impacto para os negócios.

<br>
<br>

## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Robo 3T` | Interface gráfica para verificar se os dados foram persistidos|
 `Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Estrutura do Projeto

```
 📁 Projeto-final-reprograma
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 clausulaController.js
   |         |- 📄 contratoController.js
   |
   |    |- 📁 models
   |         |- 📄 clausula.js
   |         |- 📄 contratp.js
   |
   |    |- 📁 routes
   |         |- 📄 clausulaRoutes.js 
   |         |- 📄 contratoRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .gitignore
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 server.js

```

<br>
<br>


## INFORMAÇÕES SOBRE AS ROTAS

| OPERAÇÃO | VERBO | RECURSO | DESCRIÇÃO
| --- | --- | --- | --- |
| `C`REATE | POST | `/clausulas` ou `/contratos |
| `R`EAD | GET | `/clausulas` ou `/contratos |
| `U`PDATE | PATCH | clausulas` ou `/contratos |
| `D`ELETE | DELETE | | clausulas` ou `/contratos |

<br>
<br>

### Dados para Collection Contratos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- contrato: texto e obrigatório
- criadaEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[ {
  ({ 
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  contrato: {
    type: Array,
    required: true
  },
  criadaEm: {
    type: Date,
    required: true,
    default: new Date
  }
})
]
```
<br>
<br>

### Dados para Collection Contratos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- descricao: texto e obrigatório
- clausulas: texto e obrigatóriobrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  clausula: {
    type: Array,
    required: true,
    ref: 'clausula'
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})
]
```
<br>
<br>



### Requisitos 
- [ ]  **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [ ]  **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [x]  **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar

- [x]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [x]  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [x]  "**/estudios**" Deverá criar um estudio 
- [x]  "**/titulos**"  Deverá criar um título 

- [ ]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- [ ]  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- [x]  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado


## Kelly Cristina <3
