# Evidências de Teste — Sprint 2 — VivaCondo

| ID | Caso de teste | Tipo | Resultado | Evidência |
|---|---|---|---|---|
| CT06 | Listar apenas áreas comuns ativas para o perfil Morador | Integração | Passou | `tests/reservas.test.js` — Execução local e CI |
| CT07 | Morador tenta reservar área comum já ocupada na mesma data/horário | Unitário + Integração | Passou | Bloqueado com HTTP 409 Conflict ("Horário indisponível para esta área") — `tests/reservas.test.js` |
| CT08 | Reserva com data de início no passado ou hora fim menor que hora início | Unitário | Passou | Rejeitado pela validação de negócio e constraint `CHECK` do banco |
| CT09 | Síndico aprova/recusa reserva pendente com registo de motivo | Integração | Passou | `tests/reservas.test.js` — Status atualizado corretamente |

## Cobertura automatizada nesta sprint
Suite automatizada executada com 14 testes totais (6 da Sprint 1 + 8 novos da Sprint 2), 100% passando, cobrindo 68% das linhas nos módulos de autenticação, cadastros base e reservas de áreas comuns.