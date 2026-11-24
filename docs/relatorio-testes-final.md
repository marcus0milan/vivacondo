# Relatório de Testes Executados — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)<br>
**Data desta verificação local:** 23/11/2026<br>
**Escopo planejado:** histórias #1–#10 do termo E2b. As histórias #7–#10 foram adicionadas ao código nesta revisão, mas ainda aguardam build e testes integrados; não são declaradas aprovadas.

## 1. Resumo da evidência disponível

| Verificação | Estado registrado |
|---|---|
| Testes unitários Jest | 6/6 passaram em `npm run test:coverage`; arquivo `test/vivacondo.test.js` |
| Cobertura de linhas | 78,4% de `frontend/vivacondo-app.js`; são regras isoladas, não cobertura da API |
| Testes manuais da Sprint 1 | 14 cenários registrados em `docs/sprint1/sprint1-evidencias-testes.md` |
| Testes funcionais da Sprint 2 | Pendentes conforme `docs/sprint2/sprint2-evidencias teste.md` |
| Build da API .NET | Evidência histórica de build sem erros na Sprint 1; não foi possível repetir nesta verificação porque o .NET SDK não está instalado neste ambiente |
| Histórias #7–#10 | Endpoints e telas adicionados nesta revisão; não validados por build ou execução integrada |
| Integração/aceitação com cliente | Não há aceite assinado no repositório |
| CI | Workflow adicionado em `.github/workflows/ci.yml`; ainda não há execução remota registrada |

## 2. Limites dos testes automatizados

Os testes Jest chamam funções de `frontend/vivacondo-app.js`, que opera com armazenamento em memória/localStorage. Eles não testam os endpoints C# nem o PostgreSQL. Os casos CT09, CT10, CT15 e CT16 não comprovam, respectivamente, operação de recusa, consulta agregada, chamados reais ou exportação integrada.

Na primeira execução, CT07 falhou porque usava uma data fixa já passada. O caso foi ajustado para criar uma reserva em data futura e, em seguida, testar a sobreposição. Na execução seguinte, os seis testes passaram.

## 3. Testes manuais e defeitos

Os resultados T1–T14 estão no [relatório de evidências da Sprint 1](sprint1/sprint1-evidencias-testes.md). Os cenários T15–T32 estão definidos no [Plano de Testes](plano-de-testes.md), mas permanecem pendentes até que sejam executados e acompanhados de evidência.

Não há registro confiável no repositório de uma bateria final completa, de bugs dessa bateria e de sua resolução. Esses campos devem ser preenchidos após a execução, sem estimar cobertura ou aprovações.

## 4. Aceitação com cliente/PO

Não foi localizado registro de sessão de aceite concluída. O [Termo de Aceite do Cliente](termo-aceite-cliente.md) permanece para preenchimento pelo avaliador/cliente, com data, parecer e assinatura.
