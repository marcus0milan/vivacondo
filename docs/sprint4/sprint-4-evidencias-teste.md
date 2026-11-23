# Evidências de Teste — Sprint 4 — VivaCondo

| ID | Caso | Tipo | Resultado observado | Evidência |
|---|---|---|---|---|
| CT07 | Reserva sobreposta | Unitário Jest | Passou em 23/11/2026 | `test/vivacondo.test.js`; dados em memória |
| CT08 | Horário final inválido | Unitário Jest | Passou em 23/11/2026 | `test/vivacondo.test.js`; dados em memória |
| CT09 | Justificativa de recusa | Unitário Jest | Passou em 23/11/2026 | `test/vivacondo.test.js`; operação não existe na API atual |
| CT10 | Agrupamento agregado em memória | Unitário Jest | Passou em 23/11/2026 | `test/vivacondo.test.js`; não testa SQL/API |
| CT15 | Sanitização HTML no módulo legado | Unitário Jest | Passou em 23/11/2026 | `test/vivacondo.test.js`; não testa endpoint real de chamados |
| CT16 | Geração CSV em memória | Unitário Jest | Passou em 23/11/2026 | `test/vivacondo.test.js`; não há exportação integrada |

## Cobertura automatizada

Seis de seis testes passaram na execução local de 23/11/2026. A cobertura de linhas medida foi 78,4% para `frontend/vivacondo-app.js`. Não há evidência de que estes testes tenham rodado em CI durante a Sprint 4.
