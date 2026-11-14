# Relatório de Testes Executados — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047) – Felipe Savegnago Pires (RA 2840482421034) – Marcus Vinicius Milan (RA 2840482421001)
**Data da bateria final:** 06/11/2026
**Escopo testado:** Todas as histórias Must, Should e Could do Termo de Aceite do Projeto (E2b)

## 1. Resumo executivo
| Métrica | Valor |
|---|---|
| Total de casos de teste | 28 |
| Passaram | 26 (na 1ª execução) / 28 (após correção) |
| Falharam | 2 (corrigidos até 06/11, ver seção 3) |
| Cobertura automatizada (linhas/branches) | 76% nos módulos de negócio (reservas, ocorrências, painel agregado) |

## 2. Casos de teste — visão consolidada
| ID | Área | Tipo | Resultado | Observação |
|---|---|---|---|---|
| CT01–CT05 | Autenticação (2 perfis) e cadastros base (Bloco/Unidade/Morador) | Unitário / Integração | Passou | Herdados da Sprint 1 (E5) |
| CT06–CT09 | Reserva de áreas comuns e bloqueio de conflito de horário | Unitário / Integração | Passou | Herdados da Sprint 2 (E6) |
| CT10–CT13 | Ocorrências, alertas de vencimento e consulta agregada do painel | Integração | Passou | Herdados da Sprint 3 (E7) |
| CT14–CT16 | Segurança (OWASP básico, XSS, permissões de rota) e exportação CSV | Unitário / Segurança | Passou | Adicionados na Sprint 4 (E8) |
| CT17–CT20 | Regressão geral (fluxo ponta a ponta em produção) | Manual / Aceitação | 2 falharam na 1ª execução | Corrigidos antes do fechamento (ver seção 3) |

## 3. Bugs encontrados nesta bateria
| # | Descrição | Severidade | Status |
|---|---|---|---|
| 1 | Painel do síndico não atualizava o contador de reservas ativas imediatamente após aprovação sem recarregar a tela | Média | Corrigido (re-renderização automática após ação do síndico) |
| 2 | Reserva permitia hora de fim igual à hora de início (validação checava apenas `<` em vez de `<=`) | Média | Corrigido na função `criarReserva` e validado pelo teste CT08 |

## 4. Testes de aceitação com cliente/PO
Realizado em 05/11/2026 acompanhado pela equipe do projeto junto ao responsável pela validação do produto (PO/Cliente).
Roteiro executado:
1. Login com perfil Morador e visualização de áreas comuns ativas.
2. Tentativa de reserva do Salão de Festas em data/horário já ocupado (validação do bloqueio de conflito em tempo real).
3. Abertura de ocorrência de manutenção com prazo crítico.
4. Login com perfil Síndico, aprovação de reserva pendente, resposta à ocorrência e conferência da consulta agregada por bloco e exportação em CSV.
Resultado: MVP aprovado e validado conforme o Termo de Aceite do Cliente (`docs/termo-aceite-cliente.md`).