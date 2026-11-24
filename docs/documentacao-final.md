# Documentação Final — VivaCondo

**Repositório:** https://github.com/marcus0milan/vivacondo<br>
**Deploy público:** [https://vivacondo.onrender.com](https://vivacondo.onrender.com) — HTTP 200 e API confirmou banco inicializado em 23/11/2026.<br>
**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047) · Felipe Savegnago Pires (RA 2840482421034) · Marcus Vinicius Milan (RA 2840482421001)

## 1. Índice de artefatos do semestre

| Entrega | Artefatos |
|---|---|
| E1 | [Documento de Visão](documento-de-visao.md) · [Declaração de Escopo Compartilhado](declaracao-escopo-compartilhado.md) |
| E2 | [Backlog](../backlog/sprint1/e2a.md) · [Termo de Aceite do Projeto](../backlog/sprint1/e2b.md) |
| E3 | [UML](modelagem/e3a.md) · [DER](modelagem/e3b.md) · [DDL/schema usado pela API](../backend/VivaCondo.Api/database/schema.sql) · [seed de desenvolvimento](../backend/VivaCondo.Api/database/seed-dev.sql) |
| E4 | [README](../README.md) · [Roteiro do Protótipo](prototipo.md) · [Plano de Testes](plano-de-testes.md) |
| E5 | [Sprint 1](sprint1/sprint1-relatório-de-entrega.md) · [Retrospectiva](sprint1/sprint1-ata-de-retrospectiva.md) · [Evidências](sprint1/sprint1-evidencias-testes.md) · [Contribuição](sprint1/sprint1-contirbuicao.md) |
| E6 | [Sprint 2](<sprint2/sprint2-relatório de entrega.md>) · [Retrospectiva](<sprint2/sprint2-ata de retrospectiva.md>) · [Evidências](<sprint2/sprint2-evidencias teste.md>) · [Contribuição](sprint2/sprint2-contribuicao.md) |
| E7 | [Sprint 3](sprint3/sprint-3-relatorio.md) · [Retrospectiva](sprint3/sprint-3-retrospectiva.md) · [Evidências](sprint3/sprint-3-evidencias-teste.md) · [Contribuição](sprint3/sprint-3-contribuicao.md) |
| E8 | [Sprint 4](sprint4/sprint-4-relatorio.md) · [Retrospectiva](sprint4/sprint-4-retrospectiva.md) · [Evidências](sprint4/sprint-4-evidencias-teste.md) · [Contribuição](sprint4/sprint-4-contribuicao.md) |
| E9 | [Relatório de Testes](relatorio-testes-final.md) · [Termo de Aceite do Cliente](termo-aceite-cliente.md) |
| E10 | Este documento · [Manual do Usuário](manual-do-usuario.md) · [Roteiro de Apresentação](roteiro-apresentacao.md) |
| Complementar | [Mostra Virtual](mostra-virtual.md) · [Roteiro complementar de vídeo](roteiro-video-mostra.md) |

## 2. Desvios do escopo (E2)

| História | Situação observada no backend | Observação |
|---:|---|---|
| #1 Autenticação por perfil | Implementada | Login, token e autorização por perfil |
| #2 Unidades e moradores | Implementada | Cadastro com vínculo de unidade e validações |
| #3 Áreas comuns | Implementada | Cadastro e listagem |
| #4 Reservas | Implementada | Regras no endpoint; teste integrado ainda precisa de evidência |
| #5 Chamados | Implementada | Abertura por morador |
| #6 Assistente do regimento | Implementada com configuração | Requer regimento PDF enviado (ou arquivo de texto legado) e chave OpenAI |
| #7 Gestão de chamados | Código adicionado nesta revisão | Síndico lista chamados e atualiza status/observação; validação funcional integrada pendente |
| #8 Painel agregado | Código adicionado nesta revisão | `/api/dashboard/calls` agrega contagens por categoria/status no PostgreSQL; validação pendente |
| #9 Upload de PDF | Código adicionado nesta revisão | PDF e texto extraído são armazenados por condomínio no PostgreSQL; validação pendente |
| #10 Histórico | Código adicionado nesta revisão | `/api/history` retorna registros do morador autenticado; validação pendente |
| #11 Exportação CSV | Não implementada | Teste isolado não constitui exportação integrada |
| #12 Boletos/PIX | Fora de escopo | Prioridade Won't |

As implementações das histórias #7–#10 foram adicionadas nesta revisão, após os registros originais das Sprints 3 e 4; isso não comprova que foram entregues ou demonstradas naquelas sprints. A história #11 continua sem exportação integrada e está priorizada como Could no backlog. Não há registro verificável de renegociação formal do escopo.

## 3. Deploy e aceite

O deploy público foi acessível em 23/11/2026. A consulta somente de leitura `GET /api/setup` retornou `initialized=true`, confirmando que a API alcançou um banco inicializado. Isso não substitui testes funcionais de persistência nem aceite do cliente; o [Termo de Aceite](termo-aceite-cliente.md) permanece sem parecer e assinatura.

## 4. Arquitetura final

- Frontend estático em HTML, CSS e JavaScript.
- API ASP.NET Core .NET 8.
- PostgreSQL acessado com Npgsql.
- Assistente opcional via OpenAI, consultando texto extraído do PDF persistido no PostgreSQL ou, por compatibilidade, de um arquivo de texto configurado no servidor.

O schema real contém nove tabelas: `condominio`, `usuario`, `unidade`, `sindico`, `morador`, `area_comum`, `reserva`, `chamado` e `regimento`. A tabela `regimento` persiste o PDF, o texto extraído, a quantidade de páginas e a data de atualização por condomínio.

## 5. Rastreabilidade requisito → código → teste

| História | Código/API | Teste/evidência |
|---:|---|---|
| #1 | `/api/auth/login`, `/api/me`, autorização por perfil | Evidências manuais da Sprint 1 |
| #2 | `/api/units`, `/api/residents` | Evidências manuais da Sprint 1 |
| #3 | `/api/areas` | Evidências manuais da Sprint 1 |
| #4 | `/api/reservations` | T15–T18 pendentes de validação integrada; CT07/CT08 são unitários isolados |
| #5 | `/api/calls` | T19/T20 pendentes de validação integrada |
| #6 | `/api/assistant/questions` | T21/T22 pendentes com ambiente de IA configurado |
| #7 | `GET /api/calls`, `PUT /api/calls/{id}` | T25–T27 pendentes de validação integrada |
| #8 | `GET /api/dashboard/calls` | T28 pendente de validação integrada; CT10 é apenas teste unitário em memória |
| #9 | `POST /api/regulation`, `/api/assistant/questions` | T29/T30/T32 pendentes; CT16 não prova upload de PDF |
| #10 | `GET /api/history` | T31 pendente de validação integrada |
| #11 | Sem exportação integrada | CT16 é teste unitário em memória, não comprova exportação do sistema |

O build .NET e os testes integrados ainda não foram repetidos nesta revisão porque o .NET SDK não está instalado no ambiente disponível. Os novos endpoints devem ser considerados implementados no código, mas não validados, até que build, testes com PostgreSQL e revisão funcional sejam executados.

## 6. Como executar

Consultar [README.md](../README.md) para pré-requisitos, variáveis de ambiente, criação do banco e comandos de build/teste.

## 7. Observação sobre registros históricos

Os relatórios individuais das Sprints 3 e 4 citam PRs sem links verificáveis e descrevem entregas que não aparecem no backend atual. Os relatos históricos de deploy e testes CT14–CT18 não têm evidências datadas da época; a URL atualmente disponível não comprova quando o deploy foi realizado nem valida aqueles testes.
