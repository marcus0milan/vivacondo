# Evidências de Validação — Sprint 2

**Escopo:** histórias #4, #5 e #6 do [backlog](../../backlog/sprint1/e2a.md).

## Verificações registradas

| Verificação | Resultado registrado |
|---|---|
| Build `dotnet build backend\VivaCondo.Api\VivaCondo.Api.csproj` | Aprovado na execução registrada: 0 erros e 0 avisos |
| Reserva/chamado com PostgreSQL | Não executado no ambiente registrado: connection string local indisponível |
| Assistente com arquivo e API de IA | Não executado no ambiente registrado: `OPENAI_API_KEY` e `REGIMENTO_PATH` indisponíveis |

## Cenários funcionais

| História | Cenário | Resultado esperado | Situação |
|---:|---|---|---|
| #4 | Reserva livre, futura e dentro dos limites | Criada com status `PENDENTE` | Pendente |
| #4 | Reserva sobreposta na mesma área/data | Rejeitada sem duplicação | Pendente |
| #4 | Terceira reserva ativa da unidade no mês | Rejeitada pelo limite | Pendente |
| #4 | Reserva após o limite de horário da área | Rejeitada | Pendente |
| #5 | Chamado completo | Salvo com status `ABERTO` | Pendente |
| #5 | Chamado incompleto | Rejeitado | Pendente |
| #6 | Pergunta respondida pelo regimento | Resposta baseada no texto | Pendente; requer chave |
| #6 | Pergunta fora do conteúdo | Mensagem de informação não encontrada | Pendente |

Os cenários não são considerados aprovados até serem executados, datados e acompanhados de evidência.
