# Relatório de Entrega — Sprint 4 — VivaCondo

**Período registrado:** 17/10/2026 a 30/10/2026<br>
**Sprint Review:** data e participantes não confirmados nos registros disponíveis

> Este relatório registra o encerramento original da Sprint 4. As implementações posteriores de #7–#10 não comprovam entrega ou demonstração dentro do período registrado.

## 1. Planejado vs. entregue

| História/atividade | Planejada? | Situação observada no backend | Observação |
|---|---|---|---|
| #11 Exportação CSV | Sim | Não entregue | Existe apenas lógica unitária isolada no módulo JavaScript |
| Fechamento e regressão | Sim | Parcial | Há seis testes unitários; não cobrem API e banco |
| Deploy público | Sim | Disponível atualmente; período original não confirmado | [URL](https://vivacondo.onrender.com) respondeu HTTP 200 em 23/11/2026; API reportou banco inicializado. Isso não comprova deploy na Sprint 4 |

## 2. Incremento funcional demonstrável

As histórias #1–#6 permanecem disponíveis no escopo da aplicação. As histórias #7–#11 não estão integradas no backend atual. O site público está atualmente acessível em [vivacondo.onrender.com](https://vivacondo.onrender.com), mas não foi localizado vídeo final da Sprint 4 nem evidência que comprove que o deploy já existia naquele período.

## 3. Backlog atualizado

Consultar a [tabela de status do backlog](../../backlog/sprint1/e2a.md). Board e histórico de cards não estão versionados.

## 4. Evidências de teste

Na execução local de 23/11/2026, seis testes Jest passaram, com 78,4% de cobertura de linhas do módulo isolado `frontend/vivacondo-app.js`. Isso não é cobertura do backend nem evidência de CI da Sprint 4. Detalhes no [relatório final](../relatorio-testes-final.md).

## 5. Retrospectiva e contribuição

- [Retrospectiva](sprint-4-retrospectiva.md); revisar afirmações antigas de deploy e testes em produção.
- [Contribuição](sprint-4-contribuicao.md); confirmar PRs e relacioná-los ao estado final.

## 6. Pendências

Executar testes integrados, completar aceite do cliente e registrar a data do deploy e o motivo aprovado para a redução de escopo.
