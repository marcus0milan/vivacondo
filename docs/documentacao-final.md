# Documentação Final Consolidada - VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

**Data:** 13/11/2026

## 1. Escopo avaliado

Este documento consolida o estado final do VivaCondo em relação ao Termo de Aceite e ao backlog.

| História | Estado |
|---|---|
| #1 Autenticação por perfil | Entregue |
| #2 Cadastro de unidades e moradores | Entregue |
| #3 Cadastro de áreas comuns | Entregue |
| #4 Reserva de áreas comuns | Entregue |
| #5 Cadastro de chamados | Entregue |
| #6 Assistente com regimento | Entregue localmente |
| #7 Gestão de chamados pelo síndico | Não entregue no backend |
| #8 Painel agregado | Parcial; lógica existente em testes/modelagem, sem endpoint final completo |
| #9 Upload de PDF do regimento | Não entregue |
| #10 Histórico detalhado | Não entregue no backend |
| #11 Exportação CSV | Parcial; lógica unitária isolada, sem integração completa |

## 2. Desvios do escopo original

- Não há deploy público ativo. O README declara que o sistema ainda não está publicado.
- A consulta do assistente usa arquivo de texto local no ambiente atual, não upload de PDF.
- A implementação final não inclui todas as histórias #7 a #11 no backend.
- Os testes unitários existentes cobrem regras em JavaScript, mas não substituem testes completos da API C#.
- Não há evidência de workflow de CI configurado no repositório.

## 3. Arquitetura final

- Frontend: HTML, CSS e JavaScript.
- Backend: ASP.NET Core com C#.
- Banco: PostgreSQL.
- Assistente: API da OpenAI com contexto carregado de arquivo local.
- Persistência de usuários, unidades, áreas comuns, reservas e chamados no PostgreSQL.

## 4. Rastreabilidade

| Artefato | Local |
|---|---|
| Documento de Visão | [documento-de-visao.md](./documento-de-visao.md) |
| Backlog | [../backlog/sprint1/e2a.md](../backlog/sprint1/e2a.md) |
| UML | [modelagem/e3a.md](./modelagem/e3a.md) |
| DER | [modelagem/e3b.md](./modelagem/e3b.md) |
| DDL | [modelagem/e3c.md](./modelagem/e3c.md) |
| Plano de testes | [plano-de-testes.md](./plano-de-testes.md) |
| Testes finais | [relatorio-testes-final.md](./relatorio-testes-final.md) |
| Termo de Aceite | [termo-aceite-cliente.md](./termo-aceite-cliente.md) |
| Sprints | [sprint1](./sprint1), [sprint2](./sprint2), [sprint3](./sprint3), [sprint4](./sprint4) |

## 5. Como executar

Consultar a seção "Como rodar localmente" no README. A execução precisa de .NET 8 SDK e PostgreSQL 15 ou superior.

## 6. Próximos passos

- Publicar o sistema em ambiente acessível por URL.
- Finalizar endpoints do síndico para gestão de chamados e painel.
- Integrar exportação CSV à API.
- Implementar upload seguro de PDF do regimento.
- Criar testes automatizados para endpoints C#.
- Configurar CI para build e testes.
- Recolher aceite formal do cliente/avaliador.
