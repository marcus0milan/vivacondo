# Relatório de Entrega — Sprint 3 — VivaCondo

**Período:** 03/10/2026 a 16/10/2026
**Sprint Review:** 16/10/2026, com o professor Lucas Baggio Figueira

## 1. Planejado vs. entregue
| História (E2) | Planejada para esta sprint? | Entregue? | Observação |
|---|---|---|---|
| #8 Painel do síndico com consulta agregada (ocorrências e reservas por bloco/categoria) | Sim | Sim | Implementado com `GROUP BY` e `JOIN` de 4 tabelas |
| #9 Registo de ocorrências/chamados pelo morador e alertas de pendências/manutenção | Sim | Sim | Destaque visual automático para ocorrências críticas ou reservas próximas |
| #10 Acompanhamento do histórico e status de reservas e ocorrências pelo morador | Sim | Sim | Exibe status (Pendente, Em Análise, Resolvida / Aprovada, Recusada) e resposta do síndico |

## 2. Incremento funcional demonstrável
Painel analítico (Dashboard) do síndico com indicadores em tempo real gerados por consulta agregada no banco de dados (total de ocorrências abertas/resolvidas agrupadas por categoria e bloco, e taxa de ocupação de áreas comuns), além do módulo completo de abertura e acompanhamento de ocorrências pelos moradores e painel de alertas.
Vídeo de demonstração: `docs/sprint3/media/vivacondo-sprint3.mp4`.

## 3. Backlog atualizado
Board atualizado no GitHub Projects — histórias #8, #9 e #10 movidas para "Concluído". Na retrospectiva desta Sprint 3 (Semana 10), a equipa revisou o escopo da Sprint 4 para focar em estabilização, exportação de relatórios e segurança.

## 4. Evidências de teste
Adicionados testes para a consulta agregada do painel (`GROUP BY`), abertura de ocorrências e geração de alertas. Detalhe completo: `docs/sprints/sprint-3-evidencias-teste.md`.

## 5. Retrospectiva e contribuição individual
- Ata de retrospectiva: `docs/sprints/sprint-3-retrospectiva.md`
- Relatórios individuais de contribuição: `docs/sprints/sprint-3-contribuicao-{guilherme,joao,felipe,marcus}.md`

## 6. Riscos/impedimentos para a próxima sprint
Preparação do ambiente de produção (Render/Vercel) e configuração de variáveis de ambiente e CORS para o deploy público final na Sprint 4.