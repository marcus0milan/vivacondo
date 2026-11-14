# Evidências de Teste — Sprint 3 — VivaCondo

| ID | Caso de teste | Tipo | Resultado | Evidência |
|---|---|---|---|---|
| CT10 | Consulta agregada do painel do síndico agrupa ocorrências e reservas por bloco e categoria | Integração | Passou | `tests/dashboard.test.js` — Retorno validado contra o seed do banco |
| CT11 | Morador abre ocorrência vinculada à sua unidade com validação de campos obrigatórios | Unitário + Integração | Passou | `tests/ocorrencias.test.js` — Registo criado com status inicial `aberta` |
| CT12 | Alerta de ocorrências pendentes há mais de 7 dias / manutenções a vencer em 30 dias | Unitário | Passou | `tests/dashboard.test.js` — Cálculo de datas validado |
| CT13 | Morador visualiza apenas as suas próprias ocorrências e reservas com justificativa | Integração | Passou | `tests/ocorrencias.test.js` — Isolamento de dados por perfil validado |

## Cobertura automatizada nesta sprint
CI reporta 22 testes automatizados, 100% passando, com cobertura de 73% nos módulos de regras de negócio, reservas, ocorrências e relatórios agregados.