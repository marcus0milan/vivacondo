# Ata de Retrospectiva — Sprint 2 — VivaCondo 

**Data:** 02/10/2026
**Presentes:** Guilherme Rastelli Fernandes (RA 2840482421047) – Felipe Savegnago Pires (RA 2840482421034) – Marcus Vinicius Milan (RA 2840482421001)

## 1. Ações da retrospectiva anterior — foram aplicadas?
| Ação decidida | Aplicada? | Evidência/comentário |
|---|---|---|
| Padronizar validação de campos obrigatórios no backend e frontend | Sim | Aplicado nos endpoints e formulários de áreas comuns e reservas (PR #11) |
| Realizar merges semanais na branch `main` para evitar conflitos | Sim | Merges realizados nas duas semanas da Sprint 2 sem conflitos críticos |

## 2. O que funcionou bem
- A divisão clara entre quem desenvolvia a regra de conflito de datas no backend e quem criava o ecrã de reservas no frontend acelerou a entrega.
- Revisão rápida de Pull Requests no mesmo dia em que eram abertos.

## 3. O que não funcionou
- O tratamento de fuso horário nas datas de reserva gerou falsos positivos nos primeiros testes locais.
- Algumas mensagens de erro da API estavam genéricas e dificultaram a exibição clara no frontend.

## 4. Ações para a próxima sprint
| Ação | Responsável |
|---|---|
| Padronizar retorno de erros da API em JSON com `{ erro, codigo, detalhes }` | Guilherme Rastelli Fernandes |
| Preparar massa de dados (seed) maior para testar o dashboard e alertas da Sprint 3 | Felipe Savegnago Pires e Marcus Vinicius Milan |