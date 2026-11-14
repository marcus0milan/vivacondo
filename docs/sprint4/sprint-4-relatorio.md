# Relatório de Entrega — Sprint 4 — VivaCondo

**Período:** 17/10/2026 a 30/10/2026
**Sprint Review:** 

## 1. Planejado vs. entregue
| História (E2) | Planejada para esta sprint? | Entregue? | Observação |
|---|---|---|---|
| #11 Exportação do relatório do painel em CSV pelo síndico | Sim | Sim | Exporta os dados agregados diretamente pelo navegador/API |
| Refinamento de segurança (OWASP básico, proteção de rotas e sanitização) + Deploy público | Sim | Sim | Aplicação publicada e acessível por URL pública |

## 2. Incremento funcional demonstrável
MVP completo do VivaCondo em funcionamento: autenticação por perfil (Morador e Síndico), gestão de blocos/unidades e áreas comuns, reserva de áreas comuns com bloqueio automático de conflito de horário, registo e tratamento de ocorrências, painel analítico com consulta agregada, alertas de vencimento/pendências e exportação em CSV.
Vídeo de demonstração final da Sprint 4: `docs/sprint4/media/vivacondo-sprint4.mp4`.

## 3. Backlog atualizado
Board do projeto com 100% das histórias *Must*, *Should* e *Could* planeadas concluídas. Escopo congelado para a bateria final de testes de aceitação (E9).

## 4. Evidências de teste
Adicionados testes de segurança (bloqueio de acesso não autorizado entre perfis, proteção contra SQL Injection e XSS básico), exportação CSV e regressão ponta a ponta. Detalhe completo: `docs/sprints/sprint-4-evidencias-teste.md`.

## 5. Retrospectiva e contribuição individual
- Ata de retrospectiva: `docs/sprints/sprint-4-retrospectiva.md`
- Relatórios individuais de contribuição: `docs/sprints/sprint-4-contribuicao-{guilherme,felipe,marcus}.md`

## 6. Riscos/impedimentos para a próxima sprint
Nenhum impedimento técnico bloqueante. O foco da Semana 13 (E9) será a execução do roteiro de aceitação e recolha do Termo de Aceite do Cliente.