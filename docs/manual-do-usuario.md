# Manual do Usuário - VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

**Ambiente publicado:** [https://vivacondo.onrender.com](https://vivacondo.onrender.com), acessível em 23/11/2026; a API reportou banco inicializado. A validação das novas funções e as capturas reais de produção ainda estão pendentes. As instruções de instalação local estão no [README](../README.md).

## 1. Introdução

O VivaCondo ajuda moradores e síndicos a organizar reservas de áreas comuns, chamados de manutenção e consultas ao regimento.

## 2. Primeiro acesso

1. Abra o endereço local informado pelo responsável pelo sistema.
2. Configure o condomínio na primeira execução.
3. Cadastre o primeiro síndico.
4. Após o login, cadastre unidades, moradores e áreas comuns.

Os dados de demonstração não devem usar CPF, e-mail ou senha reais.

## 3. Para o Morador

### Como entrar no sistema

1. Selecione o perfil Morador.
2. Informe e-mail e senha.
3. Confirme o acesso.

### Como consultar áreas comuns

Após entrar, consulte as áreas disponíveis, incluindo nome, capacidade e horário limite.

### Como solicitar uma reserva

1. Selecione a área comum.
2. Escolha data, horário de início e horário de término.
3. Confirme a solicitação.

O sistema impede que a reserva termine antes de começar e bloqueia horários sobrepostos na mesma área.

### Como abrir um chamado

1. Informe a categoria.
2. Informe a localização do problema.
3. Descreva o ocorrido.
4. Confirme a abertura.

O chamado inicia com o status ABERTO.

### Como consultar o regimento

Use o assistente e faça uma pergunta sobre uma regra existente no arquivo de regimento configurado pelo administrador.

Se o conteúdo não estiver no documento, o assistente informa que não encontrou a resposta.

## 4. Para o Síndico

### Como cadastrar unidades

Informe condomínio, bloco e número da unidade. O mesmo bloco e número não podem ser cadastrados duas vezes no condomínio.

### Como cadastrar moradores

Informe nome, e-mail, CPF e unidade. CPF e e-mail não podem pertencer a outro cadastro inválido ou duplicado.

### Como cadastrar áreas comuns

Informe nome da área, capacidade máxima e horário limite de uso.

### Como gerenciar chamados

1. Acesse **Gestão de chamados**.
2. Confira a descrição, a categoria, a localização e a unidade do morador.
3. Escolha um próximo status permitido: um chamado aberto pode ir para **Em andamento** ou **Cancelado**; um chamado em andamento pode ir para **Concluído** ou **Cancelado**.
4. Registre uma observação. Para cancelar, a justificativa é obrigatória.
5. Chamados concluídos ou cancelados não podem ser reabertos nesta versão.

### Como consultar o painel de chamados

1. Acesse **Painel de chamados**.
2. Consulte os totais por status e a tabela agrupada por categoria e status.
3. Os números são calculados a partir dos chamados registrados para o condomínio.

### Como atualizar o regimento

1. Acesse **Regimento PDF**.
2. Selecione um PDF com texto selecionável, de até 10 MB e 300 páginas.
3. Envie o arquivo. O PDF e o texto extraído substituem a versão anterior e ficam armazenados no banco do condomínio.
4. Para responder perguntas, o assistente ainda precisa da chave de API da OpenAI configurada pelo responsável técnico.

## 5. Histórico do Morador

1. Acesse **Meu histórico**.
2. Consulte suas próprias reservas e chamados, com os dados e status atuais.
3. O histórico é filtrado pela conta autenticada; não mostra solicitações de outros moradores.

## 6. Perguntas frequentes

**Minha reserva foi recusada por conflito**

Outra reserva já ocupa parte do mesmo horário na área e na data selecionadas.

**Posso usar a mesma unidade para reservar mais de duas vezes no mês?**

No limite atual, cada unidade pode ter até duas reservas ativas por mês. Reservas pendentes e confirmadas contam nesse limite.

**O assistente não respondeu minha dúvida**

Confirme se a chave da OpenAI está configurada e se o síndico enviou um PDF de regimento. Como alternativa de compatibilidade, o responsável técnico pode configurar `REGIMENTO_PATH` para um arquivo de texto. O assistente responde apenas com base no conteúdo disponível.

**Não consigo iniciar a aplicação**

Confirme que o PostgreSQL está ativo, que o banco foi criado e que a connection string foi configurada corretamente.
