# Roteiro de Apresentação — VivaCondo

*Equipe:* Guilherme Rastelli (RA 2840482421047) · Felipe Savegnago (RA 2840482421034) · Marcus Milan (RA 2840482421001)

## Vídeo de demonstração (3–5 min)

| Tempo | Conteúdo | Quem narra |
|---|---|---|
| 0:00–0:30 | Problema e público-alvo | Felipe Savegnago e Marcus Milan |
| 0:30–3:15 | Demonstração do fluxo principal do site (configuração inicial, login, cadastros, reserva/conflito, chamado e assistente do regimento) | Guilherme Rastelli |
| 3:15–4:15 | Diferenciais técnicos (regras de negócio, persistência no PostgreSQL, assistente com OpenAI e escopo das sprints) | Felipe Savegnago e Marcus Milan |

## Pitch ao vivo (10 min + 5 min perguntas)

| Bloco | Tempo | Quem fala | Conteúdo |
|---|---|---|---|
| 1. Problema e público-alvo | 0:00–2:00 | Felipe Savegnago | Dores do condomínio e perfil de síndicos e moradores |
| 2. Demonstração do site | 2:00–5:30 | Guilherme Rastelli | Exibição e condução da demonstração prática do site em execução |
| 3. Diferenciais técnicos e sprints | 5:30–8:30 | Marcus Milan | Backend .NET 8, PostgreSQL, regras de reserva/CPF, assistente e escopo (#1–#6 vs. #7–#11) |
| 4. Fechamento e lições aprendidas | 8:30–10:00 | Felipe Savegnago e Marcus Milan | Organização do trabalho, testes e próximos passos |

## Perguntas antecipadas

| Pergunta provável | Quem responde | Resposta preparada |
|---|---|---|
| Como funciona na prática o cadastro, a reserva com bloqueio de conflito, o chamado e o assistente no site? | Guilherme Rastelli | Mostrar diretamente no fluxo do site em tela o que acontece em cada ação do síndico e do morador |
| Como a API valida conflito de horário, limite mensal de reservas e CPF? | Marcus Milan | Explicar as validações no backend C# (.NET 8) antes de persistir no PostgreSQL |
| Como o assistente do regimento evita responder fora do contexto? | Felipe Savegnago | Explicar que a consulta é feita com base em trechos do regimento fornecido localmente e que uma pergunta sem correspondência recebe a mensagem padrão de informação não encontrada |
