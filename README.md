# VivaCondo

Sistema de gestão condominial para organizar cadastros, reservas de áreas comuns, chamados de manutenção e consulta ao regimento por um assistente virtual.

**Deploy:** [https://vivacondo.onrender.com](https://vivacondo.onrender.com) — verificado em 23/11/2026 (HTTP 200); a API reportou banco inicializado em `GET /api/setup`.<br>
**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047) · Felipe Savegnago Pires (RA 2840482421034) · Marcus Vinicius Milan (RA 2840482421001) · Laboratório de Engenharia de Software · ADS Fatec Ribeirão Preto

## Stack

- Frontend: HTML, CSS e JavaScript, servido pela API.
- Backend: C# com ASP.NET Core .NET 8.
- Banco de dados: PostgreSQL 15+.
- Assistente: API da OpenAI, opcional e configurada por variáveis de ambiente.
- Testes unitários auxiliares: Jest 29.

## Pré-requisitos

- .NET 8 SDK.
- PostgreSQL 15+ e `psql` (ou uma ferramenta equivalente de administração).
- Node.js 20+ e npm 10+ para executar os testes Jest.

## Como rodar localmente

1. Clone o repositório e entre na pasta raiz:

   ```powershell
   git clone https://github.com/marcus0milan/vivacondo.git
   cd vivacondo
   ```

2. Crie um banco vazio chamado `vivacondo`:

   ```powershell
   psql -h localhost -U postgres -c "CREATE DATABASE vivacondo;"
   ```

3. Configure as variáveis no terminal. O arquivo `.env.example` é apenas uma referência; ASP.NET Core não o carrega automaticamente.

   **PowerShell:**

   ```powershell
   $env:ConnectionStrings__Default = "Host=localhost;Port=5432;Database=vivacondo;Username=postgres;Password=SUBSTITUA"
   $bytes = New-Object byte[] 32
   $rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()
   $rng.GetBytes($bytes)
   $env:JWT_SIGNING_KEY = [Convert]::ToBase64String($bytes)
   $rng.Dispose()
   $env:ASPNETCORE_URLS = "http://localhost:5080"
   ```

   **Bash:**

   ```bash
   export ConnectionStrings__Default='Host=localhost;Port=5432;Database=vivacondo;Username=postgres;Password=SUBSTITUA'
   export JWT_SIGNING_KEY="$(openssl rand -base64 32)"
   export ASPNETCORE_URLS='http://localhost:5080'
   ```

4. Inicie a API:

   ```powershell
   dotnet run --project backend\VivaCondo.Api\VivaCondo.Api.csproj
   ```

   A API aplica [`schema.sql`](backend/VivaCondo.Api/database/schema.sql) na inicialização. Abra `http://localhost:5080`; no primeiro acesso, configure o condomínio e a conta do síndico.

5. Para habilitar o assistente, configure também `OPENAI_API_KEY` e `REGIMENTO_PATH`, apontando para um arquivo de texto local com o regimento. Sem essas configurações, o restante do sistema pode ser executado, mas o assistente não estará disponível.

Não use senhas, chaves de API ou dados pessoais reais em demonstrações. Não faça commit de valores secretos.

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `ConnectionStrings__Default` | Sim | String de conexão PostgreSQL |
| `JWT_SIGNING_KEY` | Sim | Chave aleatória de pelo menos 32 bytes para assinar tokens |
| `ASPNETCORE_URLS` | Não | Endereço local; exemplo `http://localhost:5080` |
| `OPENAI_API_KEY` | Não | Chave para chamadas ao assistente |
| `REGIMENTO_PATH` | Não | Caminho para o arquivo de texto do regimento |

## Estrutura do repositório

```text
/backend/VivaCondo.Api  — API ASP.NET Core e schema PostgreSQL
/frontend               — interface web
/docs                   — entregas E1–E10, modelagem e evidências
/test                   — testes unitários Jest
/backlog                — backlog e termo de aceite do projeto
```

## Testes e build

Testes unitários Jest (regras isoladas em JavaScript):

```powershell
npm ci
npm test
```

Esses testes não substituem a validação funcional da API e do PostgreSQL. Os cenários manuais e o estado de execução estão em [`docs/plano-de-testes.md`](docs/plano-de-testes.md) e nos relatórios de sprint.

Build da API:

```powershell
dotnet build backend\VivaCondo.Api\VivaCondo.Api.csproj
```

O workflow de CI está em [`.github/workflows/ci.yml`](.github/workflows/ci.yml) e executa o build .NET e os testes Jest.

## Convenções da equipe

- Branches: `feature/nome-da-feature`.
- Commits: Conventional Commits.
- Pull requests devem ter revisão de ao menos um integrante.

## Documentação da disciplina

- [Índice das entregas E1–E10](docs/README.md)
- [Documento de Visão](docs/documento-de-visao.md)
- [Declaração de Escopo Compartilhado](docs/declaracao-escopo-compartilhado.md)
- [Backlog Priorizado](backlog/sprint1/e2a.md)
- [Termo de Aceite do Projeto](backlog/sprint1/e2b.md)
- [UML](docs/modelagem/e3a.md) · [DER](docs/modelagem/e3b.md) · [DDL](docs/modelagem/e3c.md)
- [Roteiro do Protótipo](docs/prototipo.md)
- [Plano de Testes](docs/plano-de-testes.md)
- [Relatório de Testes](docs/relatorio-testes-final.md)
- [Termo de Aceite do Cliente](docs/termo-aceite-cliente.md)
- [Documentação Final](docs/documentacao-final.md)
- [Manual do Usuário](docs/manual-do-usuario.md)
- [Roteiro de Apresentação](docs/roteiro-apresentacao.md)

## Uso acadêmico

Projeto desenvolvido para a disciplina de Laboratório de Engenharia de Software — ADS, Fatec Ribeirão Preto, 2026.
