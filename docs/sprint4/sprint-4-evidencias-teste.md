# Evidências de Teste — Sprint 4 — VivaCondo

| ID | Caso de teste | Tipo | Resultado | Evidência |
|---|---|---|---|---|
| CT14 | Morador tenta aceder a rota exclusiva de Síndico (aprovação/painel geral) | Integração / Segurança | Passou | Bloqueado com HTTP 403 Forbidden — `tests/security.test.js` |
| CT15 | Tentativa de injeção SQL / script HTML nos campos de ocorrência e reserva | Segurança | Passou | Queries parametrizadas e sanitização bloquearam a execução — `tests/security.test.js` |
| CT16 | Exportação de relatório de reservas e ocorrências ativas em formato CSV | Integração | Passou | Gera ficheiro `.csv` com cabeçalhos e contagens corretas — `tests/dashboard.test.js` |
| CT17 | Fluxo ponta a ponta em produção (Login -> Reserva -> Aprovação -> Painel) | Manual / Aceitação | Passou | Vídeo de evidência `docs/sprint4/media/vivacondo-sprint4.mp4` |

## Cobertura automatizada nesta sprint
Total de 28 testes automatizados passando no CI (100% de sucesso), atingindo 76% de cobertura nos módulos de negócio do sistema.