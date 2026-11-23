# Backlog Priorizado - VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

| # | História | Critérios de aceite | Prioridade | Estimativa | Sprint alvo |
|---|---|---|---|---|---|
| 1 | Como morador ou síndico, quero autenticar-me com e-mail e senha, para acessar as funções do meu perfil. | - Permissões separadas por perfil<br>- Senha com mínimo 8 caracteres<br>- Mensagem clara para credenciais inválidas | Must | 3 | Sprint 1 |
| 2 | Como síndico, quero cadastrar unidades e moradores vinculados ao condomínio, para reconhecer moradores legítimos. | - Bloco e número únicos por condomínio<br>- CPF válido<br>- Morador vinculado a uma unidade existente | Must | 5 | Sprint 1 |
| 3 | Como síndico, quero cadastrar áreas comuns, para disponibilizá-las para reserva. | - Nome, capacidade e horário limite obrigatórios<br>- Nome único no condomínio | Must | 3 | Sprint 1 |
| 4 | Como morador, quero solicitar a reserva de uma área comum, para utilizá-la em uma data e horário específicos. | - Bloqueia horários sobrepostos<br>- Limite de duas reservas ativas por unidade por mês | Must | 5 | Sprint 2 |
| 5 | Como morador, quero abrir um chamado de manutenção, para solicitar o conserto de um problema. | - Categoria, localização e descrição obrigatórias<br>- Status inicial ABERTO | Must | 3 | Sprint 2 |
| 6 | Como morador, quero consultar o regimento em linguagem natural, para tirar dúvidas sobre as regras internas. | - Responde com base no conteúdo fornecido localmente<br>- Informa quando não encontrar resposta no documento | Must | 8 | Sprint 2 |
| 7 | Como síndico, quero atualizar o status e adicionar observações aos chamados, para acompanhar a resolução. | - Transição controlada de status<br>- Justificativa obrigatória ao cancelar | Must | 5 | Sprint 3 |
| 8 | Como síndico, quero visualizar chamados agrupados por categoria e status, para identificar os principais gargalos. | - Agrupamento por categoria e status<br>- Dados atualizados ao carregar o painel | Must | 5 | Sprint 3 |
| 9 | Como síndico, quero atualizar o regimento usado pelo assistente, para manter a base de conhecimento atualizada. | - Atualização controlada do documento local<br>- Novo conteúdo usado nas próximas consultas | Should | 5 | Sprint 3 |
| 10 | Como morador, quero acompanhar minhas reservas e chamados, para consultar seus estados. | - Lista vinculada à unidade do usuário<br>- Exibe o status atualizado | Should | 3 | Sprint 3 |
| 11 | Como síndico, quero exportar dados consolidados de chamados em CSV, para apresentar em assembleias. | - Exporta os dados apresentados no painel | Could | 3 | Sprint 4 |
| 12 | Como síndico, quero emitir boletos e cobranças PIX, para automatizar a taxa condominial. | Fora de escopo neste semestre. | Won't | — | — |
