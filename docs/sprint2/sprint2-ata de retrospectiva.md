# Retrospectiva — Sprint 2 — VivaCondo

**Data registrada:** 03/10/2026<br>
**Presentes registrados:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

## 1. Ações da retrospectiva anterior

| Ação | Situação registrada | Evidência |
|---|---|---|
| Definir limite mensal de reservas | Aplicada no código e backlog | Duas reservas ativas por unidade/mês; pendentes e confirmadas contam |
| Implementar reservas | Implementada; teste funcional pendente | API valida conflito, limite e horário da área |
| Implementar abertura de chamados | Implementada; teste funcional pendente | Endpoint cria chamado com status `ABERTO` |
| Configurar regimento e validar assistente | Implementação disponível; teste externo pendente | Requer arquivo de texto e chave da OpenAI |

## 2. O que funcionou bem

- As histórias #4, #5 e #6 têm interface e endpoints no código.
- Foi registrada a regra de limite mensal para reduzir ambiguidade.

## 3. O que precisa melhorar

- Executar e registrar testes funcionais com PostgreSQL.
- Validar o assistente com arquivo de regimento e chave de teste.
- Manter os relatórios de sprint vinculados aos caminhos reais do repositório.

## 4. Fechamento

O build da API foi registrado como aprovado no relatório da sprint. Os testes funcionais das histórias #4–#6 não foram registrados como executados. Consulte [evidências da Sprint 2](sprint2-evidencias%20teste.md).
