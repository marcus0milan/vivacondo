# Relatório Individual de Contribuição — Sprint 3 

> **Verificação documental:** os números de PR e estados abaixo são autodeclarados; não há links para conferi-los. Além disso, o backend no estado atual não contém o painel integrado descrito nesta contribuição. Confirmar os PRs e a relação deles com a versão final antes de usar este documento como evidência.

**Papel nesta sprint:** Desenvolvedor Full Stack / Facilitador

## 1. O que fiz
| Item | PR/commit | Status |
|---|---|---|
| Endpoint e query SQL da consulta agregada do Painel do Síndico (`GROUP BY` + `JOIN`) | PR #16 | Mergeado |
| Interface do Dashboard do Síndico, módulo de ocorrências e alertas visuais | PR #18 | Mergeado |
| Testes de integração do painel e consolidação da documentação da Sprint 3 | PR #19 | Mergeado |

## 2. Rituais que participei
- [x] Dailies/weeklies
- [x] Sprint Review
- [x] Retrospectiva

## 3. PRs de colegas que revisei
| PR | Autor | Comentário resumido |
|---|---|---|
| PR #15 (Atualização do seed de dados) | FELIPE SAVEGNAGO | Validei a integridade das chaves estrangeiras no script SQL |
| PR #17 (Abertura de ocorrências) | Marcus Vinicius Milan | Sugeri sanitização do campo de descrição da ocorrência |

## 4. Dificuldades e o que aprendi
Construir a consulta agregada combinando dados de unidades, moradores, reservas e ocorrências sem gerar duplicação nas contagens exigiu o uso cuidadoso de subqueries e `LEFT JOIN` com `GROUP BY`. Isso reforçou o domínio prático de consultas analíticas em SQL.