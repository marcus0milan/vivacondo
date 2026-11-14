# Ata de Retrospectiva — Sprint 3 — VivaCondo

**Data:** 16/10/2026    
**Presentes:** Guilherme Rastelli Fernandes (RA 2840482421047) – Felipe Savegnago Pires (RA 2840482421034) – Marcus Vinicius Milan (RA 2840482421001)

## 1. Ações da retrospectiva anterior — foram aplicadas?
| Ação decidida | Aplicada? | Evidência/comentário |
|---|---|---|
| Padronizar retorno de erros da API em JSON com `{ erro, codigo, detalhes }` | Sim | Implementado middleware global de tratamento de erros no backend (PR #16) |
| Preparar massa de dados (seed) maior para testar o dashboard e alertas da Sprint 3 | Sim | Script de seed atualizado com múltiplos blocos, unidades, reservas e ocorrências (PR #15) |

## 2. O que funcionou bem
- O seed de dados realista permitiu validar imediatamente os gráficos e tabelas da consulta agregada do painel do síndico.
- O fluxo entre abertura de ocorrência pelo morador e atualização no painel do síndico funcionou de ponta a ponta sem regressões.

## 3. O que não funcionou
- A estilização responsiva das tabelas do painel em ecrãs menores precisou de ajustes de última hora.

## 4. Ações para a próxima sprint
| Ação | Responsável |
|---|---|
| Realizar o deploy público antecipado no início da Sprint 4 para testar em produção | Guilherme Rastelli Fernandes |
| Executar bateria de testes de segurança (OWASP básico) e regressão ponta a ponta | Felipe Savegnago Pires e Marcus Vinicius Milan |