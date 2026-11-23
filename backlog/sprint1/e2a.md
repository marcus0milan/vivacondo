# Backlog Priorizado — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047) · Felipe Savegnago Pires (RA 2840482421034) · Marcus Vinicius Milan (RA 2840482421001)<br>
**Trilha:** A1

| # | História | Critérios de aceite | Prioridade | Estimativa | Sprint alvo |
|---|---|---|---|---:|---|
| 1 | Como morador ou síndico, quero autenticar-me com e-mail e senha, para acessar as funções do meu perfil. | - Permissões separadas por perfil<br>- Senha com mínimo de 8 caracteres<br>- Erro claro para credenciais inválidas | Must | 3 | Sprint 1 |
| 2 | Como síndico, quero cadastrar unidades e moradores, para reconhecer quem está vinculado ao condomínio. | - Unidade única por bloco/número no condomínio<br>- CPF validado e único<br>- Morador vinculado a unidade existente | Must | 5 | Sprint 1 |
| 3 | Como síndico, quero cadastrar áreas comuns, para disponibilizá-las para reserva. | - Nome, capacidade e horário limite obrigatórios<br>- Nome único no condomínio | Must | 3 | Sprint 1 |
| 4 | Como morador, quero solicitar reserva de área comum, para usar o espaço em data e horário específicos. | - Bloqueia sobreposição na mesma área/data<br>- Máximo de 2 reservas `PENDENTE` ou `CONFIRMADA` por unidade/mês<br>- Respeita o horário limite da área | Must | 5 | Sprint 2 |
| 5 | Como morador, quero abrir chamado de manutenção, para solicitar reparo de um problema. | - Categoria, localização e descrição obrigatórias<br>- Status inicial `ABERTO` | Must | 3 | Sprint 2 |
| 6 | Como morador, quero consultar o regimento em linguagem natural, para tirar dúvidas sobre as regras. | - Usa trechos de arquivo de texto configurado localmente<br>- Informa quando não encontra resposta no texto | Must | 8 | Sprint 2 |
| 7 | Como síndico, quero atualizar status e observações dos chamados, para acompanhar sua resolução. | - Transições de status controladas<br>- Justificativa obrigatória ao cancelar | Must | 5 | Sprint 3 |
| 8 | Como síndico, quero visualizar chamados agrupados por categoria e status, para identificar gargalos. | - Consulta agregada por categoria e status<br>- Métricas atualizadas ao carregar | Must | 5 | Sprint 3 |
| 9 | Como síndico, quero enviar um PDF atualizado do regimento, para manter o conteúdo do assistente atualizado. | - Aceita PDF<br>- Atualiza o conteúdo usado pelo assistente | Should | 5 | Sprint 3 |
| 10 | Como morador, quero consultar o histórico de reservas e chamados, para acompanhar minhas solicitações. | - Dados filtrados pelo usuário/unidade autenticada<br>- Exibe o status atual | Should | 3 | Sprint 3 |
| 11 | Como síndico, quero exportar o relatório consolidado em CSV, para apresentá-lo em assembleias. | - Exporta os mesmos dados do painel | Could | 3 | Sprint 4 |
| 12 | Como síndico, quero emitir boletos e cobranças via PIX, para automatizar a taxa condominial. | Fora de escopo neste semestre. | Won't | — | — |

## Atualização de status — fim da Sprint 4

| # | Prioridade | Situação observada no código | Observação |
|---|---|---|---|
| 1 | Must | Entregue | Login e autorização por perfil |
| 2 | Must | Entregue | Cadastro de unidades e moradores |
| 3 | Must | Entregue | Cadastro de áreas comuns |
| 4 | Must | Entregue | Reserva com validações no backend |
| 5 | Must | Entregue | Abertura de chamados |
| 6 | Must | Entregue com configuração | Requer arquivo de regimento e chave da OpenAI |
| 7 | Must | Implementação adicionada após o registro original da Sprint 4; validação pendente | Síndico lista chamados e atualiza status/observação; transições finais não podem ser reabertas |
| 8 | Must | Implementação adicionada após o registro original da Sprint 4; validação pendente | `/api/dashboard/calls` agrega chamados por categoria e status no PostgreSQL |
| 9 | Should | Implementação adicionada após o registro original da Sprint 4; validação pendente | Síndico envia PDF; arquivo e texto extraído são persistidos por condomínio no PostgreSQL |
| 10 | Should | Implementação adicionada após o registro original da Sprint 4; validação pendente | `/api/history` retorna apenas reservas e chamados do morador autenticado |
| 11 | Could | Não entregue | A lógica de teste isolada não é exportação integrada |
| 12 | Won't | Fora de escopo | Conforme planejado |

O board do projeto não foi localizado nos arquivos versionados; esta tabela registra a situação do código nesta revisão, não substitui o histórico do board nem comprova entrega durante as sprints originais.
