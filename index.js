const estados = [
  AC = {
    cidade: 'Rio Branco',
    estado: 'Acre',
    regiao: 'Norte',
    temp: 25.2
  },
  AL = {
    cidade: 'Maceió',
    estado: 'Alagoas',
    regiao: 'Nordeste',
    temp: 26.7
  },
  AP = {
    cidade: 'Macapá',
    estado: 'Amapá',
    regiao: 'Norte',
    temp: 26.5
  },
  AM = {
    cidade: 'Manaus',
    estado: 'Amazonas',
    regiao: 'Norte',
    temp: 26.3
  },
  BA = {
    cidade: 'Salvador',
    estado: 'Bahia',
    regiao: 'Nordeste',
    temp: 26.4
  },
  CE = {
    cidade: 'Fortaleza',
    estado: 'Ceará',
    regiao: 'Nordeste',
    temp: 27.6
  },
  DF = {
    cidade: 'Brasília[',
    estado: 'Distrito Federal',
    regiao: 'Centro-Oeste',
    temp: 20.5
  },
  ES = {
    cidade: 'Vitória',
    estado: 'Espírito Santo',
    regiao: 'Sudeste',
    temp: 25.8
  },
  GO = {
    cidade: 'Goiânia',
    estado: 'Goiás',
    regiao: 'Centro-Oeste',
    temp: 23.2
  },
  MA = {
    cidade: 'São Luís',
    estado: 'Maranhão',
    regiao: 'Nordeste',
    temp: 27.5
  },
  MT = {
    cidade: 'Cuiabá',
    estado: 'Mato Grosso',
    regiao: 'Centro-Oeste',
    temp: 26.8
  },
  MS = {
    cidade: 'Campo Grande',
    estado: 'Mato Grosso do Sul',
    regiao: 'Centro-Oeste',
    temp: 24.6
  },
  MG = {
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    regiao: 'Sudeste',
    temp: 22.5
  },
  PA = {
    cidade: 'Belém',
    estado: 'Pará',
    regiao: 'Norte',
    temp: 26.4
  },
  PB = {
    cidade: 'João Pessoa',
    estado: 'Paraíba',
    regiao: 'Nordeste',
    temp: 27.5
  },
  PR = {
    cidade: 'Curitiba',
    estado: 'Paraná',
    regiao: 'Sul',
    temp: 20.4
  },
  PE = {
    cidade: 'Recife',
    estado: 'Pernambuco',
    regiao: 'Nordeste',
    temp: 26.5
  },
  PI = {
    cidade: 'Teresina',
    estado: 'Piauí',
    regiao: 'Nordeste',
    temp: 27.2
  },
  RJ = {
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
    regiao: 'Sudeste',
    temp: 26.6
  },
  RN = {
    cidade: 'Natal',
    estado: 'Rio Grande do Norte',
    regiao: 'Nordeste',
    temp: 27.3
  },
  RS = {
    cidade: 'Porto Alegre',
    estado: 'Rio Grande do Sul',
    regiao: 'Sul',
    temp: 24.8
  },
  RO = {
    cidade: 'Porto Velho',
    estado: 'Rondônia',
    regiao: 'Norte',
    temp: 26.5
  },
  RR = {
    cidade: 'Boa Vista',
    estado: 'Roraima',
    regiao: 'Norte',
    temp: 28.1
  },
  SC = {
    cidade: 'Florianópolis',
    estado: 'Santa Catarina',
    regiao: 'Sul',
    temp: 24.5
  },
  SP = {
    cidade: 'São Paulo',
    estado: 'São Paulo',
    regiao: 'Sudeste',
    temp: 21.5
  },
  SE = {
    cidade: 'Aracajú',
    estado: 'Sergipe',
    regiao: 'Nordeste',
    temp: 27.3
  },
  TO = {
    cidade: 'Palmas',
    estado: 'Tocantins',
    regiao: 'Norte',
    temp: 24.9
  }
]

const h1 = document.querySelector('.h1')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const divResult = document.createElement('div')
divResult.className = 'teste'
const sectionResult = document.querySelector('.resultado')
sectionResult.appendChild(divResult)
//divResult é uma const por isso não se usa ''
