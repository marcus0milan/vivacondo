# Plano de Testes - VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

**Versão:** 1.0

**Data:** 13/11/2026

## 1. Objetivo

Definir os testes necessários para verificar o MVP do VivaCondo e registrar o comportamento esperado das funcionalidades implementadas.

## 2. Escopo

Serão testados:

- Autenticação de Morador e Síndico.
- Cadastro de unidades e moradores.
- Cadastro de áreas comuns.
- Solicitação e conflito de reservas.
- Abertura de chamados.
- Consulta ao regimento pelo assistente.
- Regras administrativas e permissões por perfil.

Não integram o escopo desta versão:

- Cobrança financeira.
- Emissão de PIX ou boletos.
- Upload de PDF do regimento.
- Implantação pública permanente.

## 3. Estratégia

Os testes são divididos em:

- Unitários para regras de negócio no frontend com Jest.
- Integração manual da API ASP.NET Core com PostgreSQL.
- Testes funcionais pela interface web.
- Testes de banco com CPF, unicidade e relacionamentos.

## 4. Ambiente

- Windows, macOS ou Linux.
- .NET 8 SDK.
- PostgreSQL 15 ou superior.
- Navegador moderno.
- OpenAI configurada apenas para testes do assistente.

## 5. Casos de teste

| ID | História | Pré-condições | Procedimento | Resultado esperado |
|---|---|---|---|---|
| CT01 | #1 | Usuários cadastrados | Autenticar Morador e Síndico | Cada perfil recebe acesso às suas funções |
| CT02 | #1 | Usuário válido | Informar senha incorreta | Acesso negado |
| CT03 | #2 | Síndico autenticado | Cadastrar unidade duplicada | Cadastro recusado |
| CT04 | #2 | Morador | Informar CPF inválido | Cadastro recusado |
| CT05 | #3 | Síndico autenticado | Cadastrar área sem campos obrigatórios | Cadastro recusado |
| CT06 | #3 | Área cadastrada | Cadastrar área com mesmo nome no mesmo condomínio | Cadastro recusado |
| CT07 | #4 | Área já reservada | Criar reserva sobreposta | Reserva bloqueada |
| CT08 | #4 | Dados válidos | Informar hora fim menor ou igual ao início | Reserva recusada |
| CT09 | #7 | Reserva pendente | Recusar sem justificativa | Recusa bloqueada |
| CT10 | #8 | Chamados e reservas cadastrados | Solicitar relatório agregado | Dados agrupados por bloco |
| CT11 | #5 | Morador autenticado | Abrir chamado obrigatório | Chamado criado com status ABERTO |
| CT12 | #6 | Regimento configurado localmente | Fazer pergunta existente no documento | Resposta baseada no regimento |
| CT13 | #6 | Regimento configurado localmente | Fazer pergunta fora do conteúdo | Mensagem padrão de informação não encontrada |
| CT14 | Acesso | Usuário Morador autenticado | Tentar operação administrativa | Operação negada |
| CT15 | Segurança | Título com tag HTML | Criar ocorrência | HTML perigoso removido |
| CT16 | #11 | Dados agregados disponíveis | Exportar CSV | Arquivo contém cabeçalhos e dados válidos |

## 6. Critérios de entrada

- API compilando.
- PostgreSQL disponível.
- Banco criado.
- Dados mínimos de condomínio, usuário e área cadastrados.

## 7. Critérios de saída

- Casos críticos CT01 a CT14 executados.
- Nenhuma falha crítica aberta.
- Evidências registradas no relatório final.
- Desvios documentados.
