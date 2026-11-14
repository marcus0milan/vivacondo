# Relatório de Entrega — Sprint 2 — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires, Marcus Vinicius Milan
**Período:** Sprint 2
**Sprint Review:** Realizada com a equipe do projeto

## 1. Planejado vs. entregue
| História (E2) | Planejada para esta sprint? | Entregue? | Observação |
|---|---|---|---|
| #5 Visualizar áreas comuns disponíveis | Sim | Sim | Implementada no backend (`Program.cs`) e integrada ao frontend |
| #6 Reservar área comum com bloqueio de conflito de horário | Sim | Sim | Regra de negócio e validação implementadas até a história #6 |
| #7 Aprovar/recusar reserva pelo síndico | Sim | Não | Não concluída no backend (`Program.cs`); replanejada |

## 2. Incremento funcional demonstrável
Backend em C# (.NET) com PostgreSQL e frontend integrados cobrindo as histórias #1 a #6 (autenticação, cadastros base, listagem de áreas comuns e criação de reserva com validação de conflito). Como reproduzir localmente: executar `scripts/run-local.ps1` e seguir as instruções do `README.md`.

## 3. Backlog atualizado
Histórias #1 a #6 concluídas no código-fonte. A história #7 permaneceu pendente no backend ao fim da Sprint 2.

## 4. Evidências de teste
Testes executados localmente validando as regras de negócio de reserva e validações de horário. Detalhe completo em `docs/sprints/sprint-2-evidencias-teste.md`.

## 5. Retrospectiva e contribuição
- Ata de retrospectiva: `docs/sprints/sprint-2-retrospectiva.md`
- Relatórios individuais de contribuição:
  - `docs/sprints/sprint-2-contribuicao.md`
 

## 6. Riscos/impedimentos para a próxima sprint
Ritmo de implementação das rotas adicionais no `Program.cs` (histórias #7 a #11) exigiu redução do escopo funcional entregue no backend, priorizando manter as histórias #1 a #6 estáveis e integradas ao banco PostgreSQL.