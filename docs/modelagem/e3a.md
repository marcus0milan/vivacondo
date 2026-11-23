# Diagramas UML — VivaCondo

**Equipe:** Guilherme Rastelli Fernandes (RA 2840482421047), Felipe Savegnago Pires (RA 2840482421034), Marcus Vinicius Milan (RA 2840482421001)

Os diagramas abaixo separam as funcionalidades implementadas das previstas no backlog. O assistente é um serviço que lê um arquivo de texto; não há tabela `regimento` no banco de dados atual.

## 1. Diagrama de Casos de Uso

```mermaid
flowchart LR
    Morador((Morador))
    Sindico((Síndico))
    Visitante((Primeiro acesso))

    UC1[Configurar condomínio e primeiro síndico]
    UC2[Autenticar-se]
    UC3[Gerenciar unidades e moradores]
    UC4[Gerenciar áreas comuns]
    UC5[Consultar áreas comuns]
    UC6[Solicitar reserva]
    UC7[Abrir chamado de manutenção]
    UC8[Consultar regimento pelo assistente]

    Visitante --> UC1
    Morador --> UC2
    Morador --> UC5
    Morador --> UC6
    Morador --> UC7
    Morador --> UC8
    Sindico --> UC2
    Sindico --> UC3
    Sindico --> UC4
    Sindico --> UC5
```

## 2. Diagrama de Classes

```mermaid
classDiagram
    class Usuario {
        +id: int
        +nome: string
        +email: string
        +senhaHash: string
        +perfil: string
    }
    class Condominio {
        +id: int
        +nome: string
        +endereco: string
    }
    class Unidade {
        +id: int
        +bloco: string
        +numero: string
    }
    class Sindico
    class Morador {
        +cpf: string
    }
    class AreaComum {
        +id: int
        +nome: string
        +capacidadeMaxima: int
        +horarioLimiteUso: time
    }
    class Reserva {
        +id: int
        +data: date
        +horaInicio: time
        +horaFim: time
        +status: string
    }
    class Chamado {
        +id: int
        +categoria: string
        +localizacao: string
        +descricao: string
        +status: string
        +dataAbertura: datetime
    }
    class AssistenteRegimento {
        +consultar(pergunta: string) string
    }

    Usuario "1" -- "0..1" Sindico : perfil
    Usuario "1" -- "0..1" Morador : perfil
    Condominio "1" -- "0..*" Unidade : possui
    Condominio "1" -- "0..*" AreaComum : disponibiliza
    Condominio "1" -- "0..*" Chamado : recebe
    Unidade "1" -- "0..*" Morador : vincula
    Morador "1" -- "0..*" Reserva : solicita
    AreaComum "1" -- "0..*" Reserva : recebe
    Morador "1" -- "0..*" Chamado : abre
    AssistenteRegimento ..> Usuario : atende perguntas
```

## 3. Rastreabilidade — caso de uso → história do backlog

| Caso de uso | História (E2) | Situação no código |
|---|---:|---|
| Autenticar-se | #1 | Implementado |
| Gerenciar unidades e moradores | #2 | Implementado |
| Gerenciar áreas comuns | #3 | Implementado |
| Solicitar reserva | #4 | Implementado |
| Abrir chamado de manutenção | #5 | Implementado |
| Consultar regimento pelo assistente | #6 | Implementado; depende de arquivo e chave configurados |
| Atualizar chamados | #7 | Não implementado |
| Consultar painel agregado | #8 | Não implementado no backend |
| Atualizar regimento por PDF | #9 | Não implementado |
| Consultar histórico | #10 | Não implementado |
| Exportar relatório | #11 | Não implementado no backend |
