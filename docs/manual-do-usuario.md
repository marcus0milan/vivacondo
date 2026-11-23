# Manual do Usuário - VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

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

## 5. Perguntas frequentes

**Minha reserva foi recusada por conflito**

Outra reserva já ocupa parte do mesmo horário na área e na data selecionadas.

**Posso usar a mesma unidade para reservar mais de duas vezes no mês?**

No limite atual, cada unidade pode ter até duas reservas ativas por mês. Reservas pendentes e confirmadas contam nesse limite.

**O assistente não respondeu minha dúvida**

Confirme se a chave da OpenAI e o caminho do arquivo do regimento estão configurados no ambiente. O assistente responde apenas com base no conteúdo disponível.

**Não consigo iniciar a aplicação**

Confirme que o PostgreSQL está ativo, que o banco foi criado e que a connection string foi configurada corretamente.
