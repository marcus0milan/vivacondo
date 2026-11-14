# Relatório de Testes Executados — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires, Marcus Vinicius Milan
**Data do relatório:** 14/11/2026
**Escopo testado:** Histórias #1 a #6 implementadas no sistema (API .NET + PostgreSQL + Frontend) e bateria de 6 testes unitários automatizados.

## 1. Resumo executivo
| Métrica | Valor real no repositório |
|---|---|
| Total de casos de teste automatizados implementados | 6 (`CT07`, `CT08`, `CT09`, `CT10`, `CT15`, `CT16`) |
| Passaram | 6 (100% dos testes implementados) |
| Falharam | 0 |
| Cobertura automatizada (linhas) | ~74% no módulo testado (execução local; sem CI configurado) |

## 2. Casos de teste automatizados — visão consolidada
| ID | Cenário testado | Tipo | Resultado | Arquivo |
|---|---|---|---|---|
| CT07 | Bloqueio de reserva duplicada/sobreposta na mesma área e data | Unitário | Passou | `tests/vivacondo.test.js` |
| CT08 | Rejeição de reserva com hora de término menor ou igual à hora de início | Unitário | Passou | `tests/vivacondo.test.js` |
| CT09 | Exigência de justificativa obrigatória ao recusar uma reserva | Unitário | Passou | `tests/vivacondo.test.js` |
| CT10 | Agrupamento correto de ocorrências e reservas por bloco | Unitário | Passou | `tests/vivacondo.test.js` |
| CT15 | Sanitização de tags HTML contra XSS básico na criação de ocorrência | Unitário | Passou | `tests/vivacondo.test.js` |
| CT16 | Exportação de dados agregados em formato CSV válido | Unitário | Passou | `tests/vivacondo.test.js` |

## 3. Estado real de implementação (Backend/Frontend vs. Testes)
- **Implementado de ponta a ponta (Frontend + API `Program.cs` + PostgreSQL):** Histórias #1 a #6 (Autenticação, cadastros base, áreas comuns e criação de reservas com validação de conflito).
- **Não implementado no `Program.cs` (Backend):** Histórias #7 (aprovação/recusa pelo síndico na API), #8 (endpoint SQL de consulta agregada), #9 (alertas de vencimento na API), #10 (histórico detalhado de ocorrências na API) e #11 (exportação CSV via API). Os testes `CT09`, `CT10`, `CT15` e `CT16` validam apenas a lógica unitária isolada em JavaScript, não endpoints do backend C#.

## 4. Testes de aceitação com cliente/PO
A validação de aceitação presencial e o preenchimento do parecer oficial serão realizados diretamente pelo professor avaliador na apresentação do projeto, utilizando o modelo em branco em `docs/termo-aceite-cliente.md`.