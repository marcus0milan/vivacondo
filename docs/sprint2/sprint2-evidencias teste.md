# Evidências de Teste — Sprint 2 — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires, Marcus Vinicius Milan

| ID | Caso de teste | Tipo | Resultado | Evidência |
|---|---|---|---|---|
| CT07 | Bloquear reserva duplicada/sobreposta na mesma área e data | Unitário | Passou | `tests/vivacondo.test.js` (execução local) |
| CT08 | Rejeitar reserva com hora fim menor ou igual à hora início | Unitário | Passou | `tests/vivacondo.test.js` (execução local) |
| CT09 | Exigir justificativa ao recusar uma reserva (teste de unidade da regra) | Unitário | Passou | `tests/vivacondo.test.js` (execução local) |

## Cobertura automatizada nesta sprint
Execução local dos testes unitários: 6 testes executados no arquivo de testes, todos passando (cerca de 74% de cobertura de linhas na lógica testada). Não há pipeline de CI configurado no repositório.