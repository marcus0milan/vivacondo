# Relatório de Entrega — Sprint 2 — VivaCondo

**Período:** 19/09/2026 a 02/10/2026
**Sprint Review:** 02/10/2026, com o professor Lucas Baggio Figueira

## 1. Planejado vs. entregue
| História (E2) | Planejada para esta sprint? | Entregue? | Observação |
|---|---|---|---|
| #5 Visualizar áreas comuns disponíveis | Sim | Sim | Listagem com capacidade, taxa e regras de horário |
| #6 Reservar área comum com bloqueio de conflito de horário | Sim | Sim | Regra de negócio não trivial implementada em banco e backend |
| #7 Aprovar/recusar reserva ou gerir reservas pelo síndico | Sim | Sim | Fluxo de atualização de status com justificativa em caso de recusa |

## 2. Incremento funcional demonstrável
Fluxo completo de reservas de áreas comuns (Salão de Festas, Churrasqueira, Espaço Gourmet) pelos moradores e gestão pelo síndico. Implementada a regra de negócio crítica que impede reservas duplicadas ou com sobreposição de data/horário para a mesma área comum, além da verificação de inadimplência/bloqueio.
Vídeo de demonstração: `docs/sprint2/media/vivacondo-sprint2.mp4`. Passo a passo para reproduzir: ver `README.md` na raiz do repositório.

## 3. Backlog atualizado
Board atualizado no GitHub Projects — ao fim da Sprint 2, as histórias #5, #6 e #7 moveram de "A fazer" para "Concluído". Print do board salvo em `docs/sprint2/media/board-sprint2.png`.

## 4. Evidências de teste
Adicionados testes unitários e de integração cobrindo o bloqueio de conflito de agenda na reserva de áreas comuns e permissões de perfil (Morador vs. Síndico). Detalhe completo: `docs/sprints/sprint-2-evidencias-teste.md`.

## 5. Retrospectiva e contribuição individual
- Ata de retrospectiva: `docs/sprints/sprint-2-retrospectiva.md`
- Relatórios individuais de contribuição:
  - `docs/sprints/sprint-2-contribuicao`

## 6. Riscos/impedimentos para a próxima sprint
A consulta agregada do painel do síndico (história #8 da Sprint 3) exige `JOIN` entre múltiplas tabelas (unidades, moradores, ocorrências e reservas). A equipa decidiu escrever e testar a query SQL diretamente no banco antes de expor no endpoint da API.