# Plano de Testes — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047) · Felipe Savegnago Pires (RA 2840482421034) · Marcus Vinicius Milan (RA 2840482421001)<br>
**Versão:** 2.0

## 1. Estratégia

| Tipo de teste | O que cobre | Ferramenta | Quando roda |
|---|---|---|---|
| Build | Compilação da API .NET | `dotnet build` | A cada PR que altera o backend |
| Unitário | Regras isoladas do módulo JavaScript legado; não representa chamadas ao backend/API | Jest | A cada PR e antes do fechamento da sprint |
| Funcional/manual | Fluxos reais da interface, API e PostgreSQL | Navegador, API e banco de desenvolvimento | A cada Sprint Review e após mudanças no backend |
| Assistente | Consulta com regimento de teste e resposta fora do contexto | API, arquivo local e chave OpenAI de teste | Quando o ambiente estiver configurado |
| Aceitação | Comparação do incremento com o escopo do Termo E2b | Avaliador/cliente | Fechamento E9 |

## 2. Critério de bloqueio de merge

Não aceitar PR se:

- `dotnet build backend/VivaCondo.Api/VivaCondo.Api.csproj --configuration Release` falhar;
- `npm test` falhar;
- faltar revisão de ao menos um integrante.

O workflow [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) executa o build e os testes unitários em pushes para `main` e pull requests direcionadas a `main`. Os testes unitários não substituem os testes funcionais da API.

## 3. Casos de teste funcionais planejados

Os cenários T1–T14 e seus resultados manuais estão em [Evidências da Sprint 1](sprint1/sprint1-evidencias-testes.md). Os cenários abaixo ainda precisam de execução registrada; não são considerados aprovados.

| ID | História | Cenário | Resultado esperado | Situação |
|---|---:|---|---|---|
| T15 | #4 | Solicitar reserva em horário livre e futuro | Reserva criada como `PENDENTE` | Pendente de execução com PostgreSQL |
| T16 | #4 | Criar reserva sobreposta na mesma área/data | Requisição recusada; não cria segunda reserva | Pendente de execução com PostgreSQL |
| T17 | #4 | Ultrapassar limite de duas reservas ativas na unidade/mês | Requisição recusada | Pendente de execução com PostgreSQL |
| T18 | #4 | Solicitar reserva após o horário limite da área | Requisição recusada | Pendente de execução com PostgreSQL |
| T19 | #5 | Abrir chamado com dados válidos | Chamado salvo com status `ABERTO` | Pendente de execução com PostgreSQL |
| T20 | #5 | Abrir chamado com campo obrigatório vazio | Requisição recusada | Pendente de execução com PostgreSQL |
| T21 | #6 | Perguntar sobre regra presente no regimento | Resposta baseada no texto enviado à IA | Pendente; requer arquivo e chave |
| T22 | #6 | Perguntar sobre conteúdo ausente do regimento | Mensagem de informação não encontrada | Pendente de execução |
| T23 | #1 | Usuário tentar acessar operação exclusiva do outro perfil | Acesso negado | Verificar em execução integrada |
| T24 | #6 | Iniciar assistente sem `REGIMENTO_PATH` | Resposta 503 informativa | Pendente de execução |

## 4. Casos automatizados no repositório

| ID | Cenário | Tipo | Limitação |
|---|---|---|---|
| CT07 | Bloqueio de reserva sobreposta | Unitário Jest | Exercita a lógica isolada, não o endpoint C# |
| CT08 | Hora final menor ou igual à inicial | Unitário Jest | Exercita a lógica isolada |
| CT09 | Justificativa ao recusar reserva | Unitário Jest | A operação de recusa não existe na API atual |
| CT10 | Agrupamento por bloco | Unitário Jest | Não comprova consulta agregada no PostgreSQL |
| CT15 | Sanitização HTML | Unitário Jest | O modelo de ocorrência do teste não corresponde ao endpoint de chamados em produção |
| CT16 | Geração de CSV | Unitário Jest | Não comprova endpoint/exportação integrada |

## 5. Ambiente e reprodução

- .NET 8 SDK e PostgreSQL 15+ para API/build.
- Node.js 20+ e npm para Jest.
- API: `dotnet run --project backend/VivaCondo.Api/VivaCondo.Api.csproj`.
- Testes: `npm ci` e `npm test`.
- O assistente requer `OPENAI_API_KEY` e `REGIMENTO_PATH`.

## 6. Critério de saída da bateria final

- Executar e registrar resultados reais para os cenários incluídos no escopo.
- Registrar falhas e correções sem substituir resultado inicial.
- Anexar evidência verificável e obter o parecer/assinatura do cliente ou avaliador.
