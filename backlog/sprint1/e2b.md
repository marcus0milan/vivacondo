# Termo de Aceite do Projeto — Sistema Inteligente de Gerenciamento de Condomínios

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

**Trilha:** A1

**Data:** 21/08/2026<br>
**Situação:** Rascunho; não há aprovação/assinatura registrada no repositório.

## 1. Escopo aceito para o semestre (funcionalidades Must + Should)

1. Histórias #1 a #6 do backlog: autenticação, cadastros, reservas, chamados e consulta do regimento.
2. História #7: atualização de chamados pelo síndico.
3. História #8: painel agregado de chamados.
4. História #9: atualização do regimento por PDF.
5. História #10: histórico de reservas e chamados do morador.

## 2. Critérios de pronto do MVP

- [ ] Morador consegue autenticar-se e consultar o regimento por meio do assistente.
- [ ] Sistema impede agendamento com conflito de horário na mesma área comum.
- [ ] Morador consegue abrir chamado de manutenção.
- [ ] Síndico consegue cadastrar unidades, moradores e áreas comuns.
- [ ] Síndico visualiza o painel agregado de chamados definido na história #8.
- [ ] Dados são persistidos em PostgreSQL.
- [ ] Requisitos de deploy público e documentação do §3 do Manual são verificados.
- [ ] Repositório no GitHub contém README, código, DDL e documentação.

## 3. Stack tecnológica definida

| Camada | Tecnologia |
|---|---|
| Frontend | HTML5, CSS3 e JavaScript |
| Backend | C# com ASP.NET Core .NET 8 |
| Banco de dados | PostgreSQL 15+ |
| Inteligência artificial | API da OpenAI |
| Deploy | Não há URL pública confirmada neste rascunho |

## 4. Papéis iniciais da equipe (Sprint 1)

| Integrante | Papel |
|---|---|
| Guilherme Rastelli Fernandes | Product Owner e responsável pela integração com IA |
| Felipe Savegnago Pires | Desenvolvimento backend e banco de dados |
| Marcus Vinicius Milan | Frontend e garantia da qualidade |

## 5. Aprovação

- Professor: __________________________________________
- Data: ___/___/2026
- Situação: [ ] Aprovado  [ ] Aprovado com ressalvas  [ ] Não aprovado