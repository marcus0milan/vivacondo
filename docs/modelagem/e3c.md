# DDL — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

O DDL PostgreSQL usado pela aplicação está em [`backend/VivaCondo.Api/database/schema.sql`](../../backend/VivaCondo.Api/database/schema.sql). A API executa esse arquivo na inicialização; use PostgreSQL 15 ou superior. Ele cria as tabelas `chamado.observacao_sindico` e `regimento`, incluindo atualização incremental em bancos já existentes.

O script cria as tabelas, chaves estrangeiras, índices de unicidade e validações de domínio documentadas no [DER](e3b.md). Ele não inclui seed no schema de produção: o primeiro condomínio e o primeiro síndico são criados pelo fluxo `/api/setup`, portanto inserir usuários de exemplo impediria a configuração inicial normal. O seed isolado para desenvolvimento está em [`backend/VivaCondo.Api/database/seed-dev.sql`](../../backend/VivaCondo.Api/database/seed-dev.sql) e deve ser executado somente depois do primeiro acesso.

Para validar em ambiente local, crie um banco vazio e inicie a API seguindo o [README](../../README.md). O script deve ser executado por completo antes de considerar a entrega E3c concluída.
