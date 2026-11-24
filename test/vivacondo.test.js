const VivaCondoService = require('../frontend/vivacondo-app');

describe('VivaCondo — Testes Automatizados Sprints 2, 3 e 4 (E6 a E8)', () => {
  beforeEach(() => {
    const store = {};
    global.localStorage = {
      getItem: (key) => store[key] || null,
      setItem: (key, val) => { store[key] = String(val); },
      clear: () => { Object.keys(store).forEach(k => delete store[k]); }
    };
    VivaCondoService.initSeed();
  });

  // SPRINT 2 (E6)
  test('CT07 - Deve bloquear reserva duplicada/sobreposta na mesma área e data', () => {
    const dataReserva = new Date();
    dataReserva.setDate(dataReserva.getDate() + 1);
    const data = dataReserva.toISOString().split('T')[0];

    VivaCondoService.criarReserva({
      areaId: 1,
      moradorNome: 'Morador Teste 1',
      bloco: 'Bloco A',
      unidade: '105',
      data,
      horaInicio: '18:00',
      horaFim: '20:00'
    });

    expect(() => {
      VivaCondoService.criarReserva({
        areaId: 1,
        moradorNome: 'Morador Teste 2',
        bloco: 'Bloco A',
        unidade: '106',
        data,
        horaInicio: '19:00',
        horaFim: '22:00'
      });
    }).toThrow(/Conflito de agenda/);
  });

  test('CT08 - Deve rejeitar reserva com hora fim menor ou igual à hora início', () => {
    expect(() => {
      VivaCondoService.criarReserva({
        areaId: 2,
        moradorNome: 'Morador Teste',
        bloco: 'Bloco A',
        unidade: '101',
        data: '2026-12-10',
        horaInicio: '18:00',
        horaFim: '14:00'
      });
    }).toThrow('A hora de término deve ser posterior à hora de início.');
  });

  test('CT09 - Deve exigir justificativa ao recusar uma reserva', () => {
    expect(() => {
      VivaCondoService.avaliarReserva(102, 'recusada', '');
    }).toThrow('A recusa de uma reserva exige justificativa.');
  });

  // SPRINT 3 (E7)
  test('CT10 - Consulta agregada deve agrupar ocorrências e reservas por bloco corretamente', () => {
    const relatorio = VivaCondoService.obterRelatorioAgregado();
    expect(relatorio.agrupadoPorBloco.length).toBeGreaterThanOrEqual(2);
    const blocoA = relatorio.agrupadoPorBloco.find(b => b.bloco === 'Bloco A');
    expect(blocoA.totalOcorrencias).toBe(2);
    expect(blocoA.reservasAtivas).toBe(1);
  });

  // SPRINT 4 (E8)
  test('CT15 - Deve sanitizar tags HTML ao criar ocorrência (Segurança XSS)', () => {
    const ocorrencia = VivaCondoService.criarOcorrencia({
      titulo: '<script>alert("xss")</script>Vazamento no teto',
      categoria: 'Hidráulica',
      bloco: 'Bloco C',
      unidade: '301',
      moradorNome: 'Marcus Milan'
    });
    expect(ocorrencia.titulo).toBe('alert("xss")Vazamento no teto');
  });

  test('CT16 - Deve exportar o relatório agregado em formato CSV válido', () => {
    const csv = VivaCondoService.gerarCSVRelatorio();
    expect(csv).toContain('Bloco,Total_Ocorrencias,Ocorrencias_Abertas,Ocorrencias_Resolvidas,Reservas_Ativas');
    expect(csv).toContain('Bloco A,2,1,1,1');
  });
});