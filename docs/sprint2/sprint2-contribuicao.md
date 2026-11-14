# Relatório Individual de Contribuição — Sprint 2

**Papel nesta sprint:** Desenvolvedor Full Stack / Facilitador

## 1. O que fiz
| Item | PR/commit | Status |
|---|---|---|
| Implementação da regra de negócio de validação e bloqueio de conflito de reservas | PR #11 | Mergeado |
| Integração do frontend de reservas e listagem de áreas comuns | PR #12 | Mergeado |
| Documentação do relatório, evidências de teste e ata da Sprint 2 | branch `feature/docs-sprint-2` | Mergeado |

## 2. Rituais que participei
- [x] Dailies/weeklies
- [x] Sprint Review
- [x] Retrospectiva

## 3. PRs de colegas que revisei
| PR | Autor | Comentário resumido |
|---|---|---|
| PR #10 (Listagem de áreas comuns) | Marcus milan | Verifiquei os filtros de status ativo e aprovei o merge |
| PR #13 (Testes de reserva) | Felipe Savegnago Pires | Sugeri adicionar caso de teste para tentativa de reserva no mesmo horário exato |

## 4. Dificuldades e o que aprendi
Garantir que a validação de sobreposição de horários funcionasse tanto na lógica da aplicação como na constraint do banco de dados exigiu cuidado com os formatos ISO de data/hora. Aprendi a isolar a função de validação de conflitos para facilitar os testes unitários.