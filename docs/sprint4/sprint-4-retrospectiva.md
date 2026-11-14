# Ata de Retrospectiva — Sprint 4 — VivaCondo

**Data:** 30/10/2026
**Presentes:** Guilherme Rastelli Fernandes (RA 2840482421047) – Felipe Savegnago Pires (RA 2840482421034) – Marcus Vinicius Milan (RA 2840482421001)

## 1. Ações da retrospectiva anterior — foram aplicadas?
| Ação decidida | Aplicada? | Evidência/comentário |
|---|---|---|
| Realizar o deploy público antecipado no início da Sprint 4 para testar em produção | Sim | Deploy configurado e testado com banco de produção populado (PR #22) |
| Executar bateria de testes de segurança (OWASP básico) e regressão ponta a ponta | Sim | Testes CT14 a CT18 executados e documentados nas evidências da Sprint 4 |

## 2. O que funcionou bem
- O congelamento de escopo na Sprint 3 permitiu dedicar a Sprint 4 à qualidade, segurança, exportação de CSV e estabilidade do deploy.
- O trabalho em equipa manteve um ritmo constante de entregas sem acumular dívida técnica para a reta final.

## 3. O que não funcionou
- O serviço gratuito de hospedagem apresenta *cold start* (demora cerca de 15 segundos no primeiro acesso após inatividade).

## 4. Ações para a próxima sprint
| Ação | Responsável |
|---|---|
| Acessar a URL do deploy 5 minutos antes da demonstração ao vivo e dos testes de aceitação | Toda a equipa |
| Consolidar todos os casos de teste no Relatório Final de Testes (E9a) | Guilherme Rastelli Fernandes |