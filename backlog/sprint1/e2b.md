# Termo de Aceite do Projeto — Sistema Inteligente de Gerenciamento de Condomínios

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

**Trilha:** A1

**Data:** 21/08/2026

## 1. Escopo aceito para o semestre (funcionalidades Must + Should)

1. Autenticação e controle de acesso para perfis Morador e Síndico.
2. Cadastro e gestão de unidades, moradores e áreas comuns do condomínio.
3. Agendamento e reserva de áreas comuns com validação automática de conflitos de horário.
4. Abertura e acompanhamento de chamados de manutenção pelos moradores.
5. Assistente virtual de Inteligência Artificial para tirar dúvidas sobre o regimento interno (RAG).
6. Dashboard gerencial do Síndico com consulta agregada do status dos chamados.
7. Atualização do contexto do assistente de acordo com o regimento disponível no ambiente.

## 2. Critérios de pronto do MVP

- [ ] Morador consegue autenticar-se e consultar o regimento por meio do assistente.
- [ ] Sistema impede agendamento com conflito de horário na mesma área comum.
- [ ] Morador consegue abrir chamado de manutenção.
- [ ] Síndico consegue cadastrar unidades, moradores e áreas comuns.
- [ ] Dados são persistidos em PostgreSQL.
- [ ] Repositório no GitHub contém README, código, DDL e documentação.
- [ ] Sistema é demonstrado em ambiente local durante a avaliação.

## 3. Stack tecnológica definida

| Camada | Tecnologia |
|---|---|
| Frontend | HTML5, CSS3 e JavaScript |
| Backend | C# com ASP.NET Core .NET 8 |
| Banco de dados | PostgreSQL 15+ |
| Inteligência artificial | API da OpenAI |
| Deploy | Pendente; aplicação demonstrada localmente |

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