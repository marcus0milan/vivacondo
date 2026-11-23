# Documentação Final — VivaCondo

**Repositório:** https://github.com/marcus0milan/vivacondo<br>
**Deploy definitivo:** não há URL verificável registrada nos arquivos atuais; preencher após confirmar acesso público.<br>
**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047) · Felipe Savegnago Pires (RA 2840482421034) · Marcus Vinicius Milan (RA 2840482421001)

## 1. Índice de artefatos do semestre

| Entrega | Artefatos |
|---|---|
| E1 | [Documento de Visão](documento-de-visao.md) · [Declaração de Escopo Compartilhado](declaracao-escopo-compartilhado.md) |
| E2 | [Backlog](../backlog/sprint1/e2a.md) · [Termo de Aceite do Projeto](../backlog/sprint1/e2b.md) |
| E3 | [UML](modelagem/e3a.md) · [DER](modelagem/e3b.md) · [DDL/schema usado pela API](../backend/VivaCondo.Api/database/schema.sql) |
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
| #6 Assistente do regimento | Implementada com configuração | Requer arquivo de texto e chave OpenAI |
| #7 Gestão de chamados | Não implementada | Sem endpoint no backend |
| #8 Painel agregado | Não implementado | Sem endpoint/tela integrados no backend |
| #9 Upload de PDF | Não implementado | Regimento configurado por arquivo de texto |
| #10 Histórico | Não implementado | Sem consulta de histórico no backend |
| #11 Exportação CSV | Não implementada | Teste isolado não constitui exportação integrada |
| #12 Boletos/PIX | Fora de escopo | Prioridade Won't |

O repositório não contém registro verificável de renegociação formal das histórias não entregues. A justificativa e a aprovação de eventual redução de escopo devem ser confirmadas com o professor.

## 3. Deploy e aceite

Não foi fornecida uma URL que permita confirmar a publicação. O README descreve execução local; portanto, esta documentação não declara o deploy público como concluído. O Termo de Aceite do Cliente permanece sem parecer e assinatura.

## 4. Arquitetura final

- Frontend estático em HTML, CSS e JavaScript.
- API ASP.NET Core .NET 8.
- PostgreSQL acessado com Npgsql.
- Assistente opcional via OpenAI, lendo trechos de arquivo de texto configurado no servidor.

O schema real contém oito tabelas: `condominio`, `usuario`, `unidade`, `sindico`, `morador`, `area_comum`, `reserva` e `chamado`. O regimento não é uma tabela.

## 5. Rastreabilidade requisito → código → teste

| História | Código/API | Teste/evidência |
|---:|---|---|
| #1 | `/api/auth/login`, `/api/me`, autorização por perfil | Evidências manuais da Sprint 1 |
| #2 | `/api/units`, `/api/residents` | Evidências manuais da Sprint 1 |
| #3 | `/api/areas` | Evidências manuais da Sprint 1 |
| #4 | `/api/reservations` | T15–T18 pendentes de validação integrada; CT07/CT08 são unitários isolados |
| #5 | `/api/calls` | T19/T20 pendentes de validação integrada |
| #6 | `/api/assistant/questions` | T21/T22 pendentes com ambiente de IA configurado |
| #7–#11 | Sem implementação integrada | Não considerar CT09/CT10/CT16 evidência dos endpoints ausentes |

## 6. Como executar

Consultar [README.md](../README.md) para pré-requisitos, variáveis de ambiente, criação do banco e comandos de build/teste.

## 7. Observação sobre registros históricos

Os relatórios individuais das Sprints 3 e 4 citam PRs sem links verificáveis e descrevem entregas que não aparecem no backend atual. Os relatos de deploy e testes CT14–CT18 também não têm URL ou logs associados. Esses itens estão identificados nos respectivos documentos como autodeclarados e pendentes de confirmação; não são usados aqui como prova de implementação.
