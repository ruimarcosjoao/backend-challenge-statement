# API de Gerenciamento de Estacionamento

Desenvolvi esta API para gerenciamento de estacionamento de veículos como parte de um desafio técnico. A API permite o cadastro e gerenciamento de estabelecimentos, veículos e controle de entrada/saída de veículos nos estacionamentos.

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Fastify
- Prisma (PostgreSQL)
- Zod (Validação)
- JWT (Autenticação)
- Swagger (Documentação)

## ⚠️ Limitações e Observações

Desenvolvi este projeto em um curto período de tempo, focando na implementação das funcionalidades principais do desafio. Algumas considerações importantes:

1. **Arquitetura**:
   - Planejei inicialmente seguir Clean Architecture
   - Devido ao tempo limitado, a implementação final não seguiu completamente os princípios do Clean Architecture
   - A estrutura atual está mais direta e funcional, sem a separação completa de camadas

2. **Pontos de Melhoria Futuros**:
   - Implementar Clean Architecture adequadamente
   - Adicionar testes unitários e de integração
   - Implementar cache
   - Adicionar mais validações de negócio
   - Melhorar a documentação
   - Implementar rate limiting
   - Adicionar mais logs e monitoramento

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL
- npm ou yarn

### Configuração do Ambiente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/backend-challenge-statement.git
cd backend-challenge-statement
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

4. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```

5. Inicie o servidor:
```bash
npm run dev
# ou
yarn dev
```

## 📚 Documentação da API

A documentação da API está disponível através do Swagger UI na rota:
```
http://localhost:3000/reference
```

## 🔑 Rotas Principais

### Autenticação
- `POST /auth/login` - Login de usuário

### Estabelecimentos
- `GET /establishment` - Listar estabelecimentos (com paginação)
- `POST /establishment/create` - Criar estabelecimento
- `PUT /establishment/:id` - Atualizar estabelecimento
- `DELETE /establishment/:id` - Deletar estabelecimento

### Veículos
- `GET /vehicle` - Listar veículos (com paginação)
- `POST /vehicle/create` - Cadastrar veículo
- `PUT /vehicle/:id` - Atualizar veículo
- `DELETE /vehicle/:id` - Deletar veículo

### Estacionamento
- `GET /parking` - Listar registros de estacionamento (com paginação)
- `POST /parking/entry` - Registrar entrada de veículo
- `POST /parking/entry-with-registration` - Cadastrar veículo e registrar entrada
- `PUT /parking/:id/exit` - Registrar saída de veículo
- `GET /parking/establishment/:establishmentId/parked` - Listar veículos estacionados por estabelecimento

### Relatórios
- `GET /reports/occupation` - Relatório de ocupação por estabelecimento
  - Parâmetros opcionais: establishmentId, startDate, endDate, page, limit
  - Retorna taxa de ocupação, vagas disponíveis e estatísticas por tipo de veículo

- `GET /reports/revenue` - Relatório de faturamento por período
  - Parâmetros obrigatórios: startDate, endDate
  - Parâmetros opcionais: establishmentId
  - Retorna faturamento total, médias e detalhamento por tipo de veículo e estabelecimento

- `GET /reports/frequent-vehicles` - Relatório de veículos mais frequentes
  - Parâmetros opcionais: establishmentId, startDate, endDate, page, limit
  - Retorna lista de veículos ordenada por número de visitas

- `GET /reports/frequent-cars/:establishmentId` - Relatório de carros mais frequentes por estabelecimento
  - Parâmetros opcionais: startDate, endDate, page, limit
  - Retorna lista de carros com estatísticas detalhadas de visitas e gastos

## 🧪 Exemplos de Uso

### 1. Autenticação
```http
POST /auth/login
{
  "username": "admin",
  "password": "admin123"
}
```

### 2. Criar um Estabelecimento
```http
POST /establishment/create
{
  "name": "Estacionamento Centro",
  "address": "Rua Principal, 123",
  "phone": "+24494732154",
  "motorcycleSlots": 20,
  "carSlots": 50
}
```

### 3. Cadastrar um Veículo
```http
POST /vehicle/create
{
  "plate": "ABC-12-34",
  "type": "CAR",
  "brand": "Toyota",
  "model": "Corolla",
  "color": "Prata"
}
```

### 4. Registrar Entrada de Veículo (já cadastrado)
```http
POST /parking/entry
{
  "plate": "ABC-12-34",
  "establishmentId": "123e4567-e89b-12d3-a456-426614174000",
  "entryDate": "2024-03-20T10:00:00Z"
}
```

### 5. Cadastrar e Registrar Entrada de Veículo Novo
```http
POST /parking/entry-with-registration
{
  "plate": "XYZ-56-78",
  "type": "MOTORCYCLE",
  "brand": "Honda",
  "model": "CG 160",
  "color": "Vermelho",
  "establishmentId": "123e4567-e89b-12d3-a456-426614174000",
  "entryDate": "2024-03-20T10:00:00Z"
}
```

### 6. Registrar Saída de Veículo
```http
PUT /parking/123e4567-e89b-12d3-a456-426614174000/exit
{
  "exitDate": "2024-03-20T12:00:00Z"
}
```

### 7. Listar Veículos Estacionados por Estabelecimento
```http
GET /parking/establishment/123e4567-e89b-12d3-a456-426614174000/parked
```

### 8. Atualizar Dados do Veículo
```http
PUT /vehicle/123e4567-e89b-12d3-a456-426614174000
{
  "color": "Preto",
  "model": "Corolla XEi"
}
```

### 9. Listar Registros de Estacionamento com Filtros
```http
GET /parking?vehicleType=CAR&isParked=true&establishmentId=123e4567-e89b-12d3-a456-426614174000
```

### 10. Relatório de Faturamento
```http
GET /reports/revenue?startDate=2024-03-01T00:00:00Z&endDate=2024-03-31T23:59:59Z
```

### 11. Relatório de Carros Frequentes
```http
GET /reports/frequent-cars/123e4567-e89b-12d3-a456-426614174000?page=1&limit=10
```

## 📝 Notas Adicionais

- Todas as rotas (exceto login) requerem autenticação via JWT
- O token deve ser enviado no header `Authorization: Bearer <token>`
- As datas devem seguir o formato ISO 8601
- As placas devem seguir o formato AAA-99-99, AA-99-99-AA ou AAA-99-99-AA
- Não é possível deletar veículos que estão estacionados
- O sistema controla automaticamente a disponibilidade de vagas
- Todas as rotas de listagem incluem paginação (page e limit)
- Os relatórios administrativos requerem permissão de ADMIN
- Valores monetários são retornados em AOA (Kwanza)
- Taxas de cobrança: Carros - 150 AOA/hora, Motos - 75 AOA/hora
