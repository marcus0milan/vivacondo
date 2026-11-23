# Relatório Individual de Contribuição — Sprint 4 

> **Verificação documental:** os números de PR e estados abaixo são autodeclarados; não há links para conferi-los. O repositório atual não contém exportação CSV integrada nem URL de deploy verificável. Confirmar os PRs e a relação deles com a versão final antes de usar este documento como evidência.

**Papel nesta sprint:** Desenvolvedor Full Stack / Facilitador

## 1. O que fiz
| Item | PR/commit | Status |
|---|---|---|
| Implementação da exportação de relatórios em CSV no painel do síndico | PR #21 | Mergeado |
| Configuração do deploy público, ajustes de CORS e segurança de rotas | PR #22 | Mergeado |
| Revisão final do README.md e consolidação dos relatórios da Sprint 4 (E8) | PR #24 | Mergeado |

## 2. Rituais que participei
- [x] Dailies/weeklies
- [x] Sprint Review
- [x] Retrospectiva

## 3. PRs de colegas que revisei
| PR | Autor | Comentário resumido |
|---|---|---|
| PR #20 (Testes de segurança e permissões) | Felipe Savegnago Pires | Excelente cobertura de rotas protegidas por perfil |
| PR #23 (Refinamento visual do frontend) | Marcus Vinicius Milan | Ajustes de responsividade aprovados |

## 4. Dificuldades e o que aprendi
Configurar o deploy servindo o frontend e a API com regras corretas de CORS e variáveis de ambiente exigiu ajustes no servidor, garantindo que a aplicação rodasse tanto localmente via script como na nuvem sem alterar o código-fonte.