# Documento de Visão - VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

**Trilha:** A1

**Origem do problema:** Necessidade acadêmica de organizar processos comuns de administração condominial.

**Data:** 21/08/2026

## 1. Problema

Administradores de condomínios podem tratar reservas de áreas comuns, solicitações de manutenção e dúvidas sobre o regimento por canais separados, como grupos de mensagens, planilhas e atendimento presencial. Esse processo pode gerar conflitos de horário, dificuldade para acompanhar solicitações e respostas inconsistentes às regras internas. O repositório não contém levantamento quantitativo de um condomínio cliente; por isso, o impacto ainda não está medido.

O VivaCondo busca centralizar esses fluxos em uma aplicação web e permitir que síndico e moradores tenham ações apropriadas ao seu perfil.

## 2. Público-alvo e perfis de usuário

| Perfil | Quem é | O que faz no sistema |
|---|---|---|
| Síndico | Responsável pela administração do condomínio | Cadastra o condomínio, unidades, moradores e áreas comuns |
| Morador | Pessoa vinculada a uma unidade | Consulta áreas comuns, solicita reservas, abre chamados e consulta o regimento |

## 3. Visão da solução

O VivaCondo é um sistema web para gerenciamento condominial com autenticação por perfil, cadastro de unidades e moradores, controle de áreas comuns, reservas, chamados de manutenção e consulta ao regimento interno por meio de assistente com inteligência artificial.

Na versão entregue nesta disciplina, o sistema integra frontend em HTML, CSS e JavaScript, API em ASP.NET Core .NET 8 e banco PostgreSQL.

## 4. Objetivos do MVP

- Permitir acesso seguro com perfis Morador e Síndico.
- Impedir reservas com conflito de horário na mesma área e data.
- Permitir o cadastro e vinculação de unidades e moradores.
- Permitir que moradores registrem chamados de manutenção.
- Disponibilizar consulta ao regimento por meio de um assistente virtual.
- Persistir dados em PostgreSQL.

## 5. Fora de escopo

- Cobranças financeiras e emissão de boletos ou PIX.
- Integração com sistemas externos de cobrança.
- Monitoramento de acesso por reconhecimento ou equipamentos físicos.
- Upload e processamento de PDF do regimento nesta implementação atual.

## 6. Requisitos mínimos do Manual

| Requisito mínimo | Como o projeto cobre |
|---|---|
| Autenticação com 2+ perfis | Perfis MORADOR e SINDICO, com rotas e validações no backend |
| 6+ entidades com relacionamento N:N | Usuários, condomínio, unidade, morador, síndico, área comum, reserva e chamado; reserva relaciona morador e área comum |
| Regra de negócio não trivial | Validação de CPF, conflito de reserva, limite mensal e permissões por perfil |
| Consulta agregada (relatório/dashboard) | Parcial: `/api/units` retorna a contagem de moradores por unidade com `COUNT`/`GROUP BY`; o painel da história #8 não foi implementado |
| Validações em interface e banco | Validação de campos no frontend/API e constraints, índices e checks no PostgreSQL |
| Deploy público por URL | [https://vivacondo.onrender.com](https://vivacondo.onrender.com) respondeu HTTP 200 em 23/11/2026; `GET /api/setup` informou banco inicializado |
| Repositório Git com README | Repositório público no GitHub, com instruções de instalação e execução |

## 7. Riscos identificados

| Risco | Impacto | Mitigação |
|---|---|---|
| Configuração incorreta do PostgreSQL | API não inicia ou perde dados | Documentar connection string e testes com banco local |
| Credencial da OpenAI exposta | Uso indevido ou custo inesperado | Manter chave somente em variável de ambiente |
| Divergência entre escopo planejado e entregue | Avaliação inadequada do incremento | Registrar explicitamente entregas e desvios |
| Dependência de validação manual | Cobertura limitada de regressões | Manter suíte Jest para regras isoladas |
| Indisponibilidade do deploy durante a apresentação | Impede a demonstração pública | Verificar o site e a API antes da apresentação |
