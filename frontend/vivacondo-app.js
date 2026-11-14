// ============================================================================
// VIVACONDO — MÓDULO COMPLETO SPRINTS 2, 3 E 4 (E6, E7, E8)
// ============================================================================

const VivaCondoService = {
  // Dados iniciais (Seed representativo para Sprints 2, 3 e 4)
  initSeed() {
    if (!localStorage.getItem('vivacondo_areas')) {
      const areas = [
        { id: 1, nome: 'Salão de Festas', capacidade: 60, taxa: 150.00, ativa: true },
        { id: 2, nome: 'Churrasqueira Gourmet', capacidade: 25, taxa: 80.00, ativa: true },
        { id: 3, nome: 'Quadra Poliesportiva', capacidade: 20, taxa: 0.00, ativa: true }
      ];
      localStorage.setItem('vivacondo_areas', JSON.stringify(areas));
    }

    if (!localStorage.getItem('vivacondo_reservas')) {
      const reservas = [
        {
          id: 101,
          areaId: 1,
          areaNome: 'Salão de Festas',
          moradorNome: 'Guilherme Rastelli',
          bloco: 'Bloco A',
          unidade: '101',
          data: '2026-11-20',
          horaInicio: '18:00',
          horaFim: '23:00',
          status: 'aprovada',
          justificativa: ''
        },
        {
          id: 102,
          areaId: 2,
          areaNome: 'Churrasqueira Gourmet',
          moradorNome: 'João Cardoso',
          bloco: 'Bloco B',
          unidade: '204',
          data: '2026-11-22',
          horaInicio: '12:00',
          horaFim: '17:00',
          status: 'pendente',
          justificativa: ''
        }
      ];
      localStorage.setItem('vivacondo_reservas', JSON.stringify(reservas));
    }

    if (!localStorage.getItem('vivacondo_ocorrencias')) {
      const ocorrencias = [
        {
          id: 201,
          titulo: 'Infiltração na garagem subterrânea',
          categoria: 'Manutenção',
          bloco: 'Bloco A',
          unidade: '101',
          moradorNome: 'Guilherme Rastelli',
          dataCriacao: '2026-10-01',
          prazoLimite: '2026-11-25', // Alerta de vencimento próximo (<= 30 dias)
          status: 'aberta',
          respostaSindico: ''
        },
        {
          id: 202,
          titulo: 'Barulho após as 22h',
          categoria: 'Convivência',
          bloco: 'Bloco B',
          unidade: '204',
          moradorNome: 'João Cardoso',
          dataCriacao: '2026-10-10',
          prazoLimite: '2026-10-20',
          status: 'em_analise',
          respostaSindico: 'Notificação enviada à unidade.'
        },
        {
          id: 203,
          titulo: 'Lâmpada queimada no corredor',
          categoria: 'Elétrica',
          bloco: 'Bloco A',
          unidade: '102',
          moradorNome: 'Felipe Pires',
          dataCriacao: '2026-10-05',
          prazoLimite: '2026-10-12',
          status: 'resolvida',
          respostaSindico: 'Substituída pela equipa de manutenção.'
        }
      ];
      localStorage.setItem('vivacondo_ocorrencias', JSON.stringify(ocorrencias));
    }
  },

  // --------------------------------------------------------------------------
  // SPRINT 2 (E6): RESERVAS + REGRA DE NEGÓCIO NÃO TRIVIAL (CONFLITO DE AGENDA)
  // --------------------------------------------------------------------------
  listarAreasAtivas() {
    const areas = JSON.parse(localStorage.getItem('vivacondo_areas') || '[]');
    return areas.filter(a => a.ativa);
  },

  listarReservas() {
    return JSON.parse(localStorage.getItem('vivacondo_reservas') || '[]');
  },

  criarReserva({ areaId, moradorNome, bloco, unidade, data, horaInicio, horaFim }) {
    if (!areaId || !moradorNome || !bloco || !unidade || !data || !horaInicio || !horaFim) {
      throw new Error('Todos os campos da reserva são obrigatórios.');
    }

    if (horaFim <= horaInicio) {
      throw new Error('A hora de término deve ser posterior à hora de início.');
    }

    const hoje = new Date().toISOString().split('T')[0];
    if (data < hoje) {
      throw new Error('Não é permitido realizar reservas em datas passadas.');
    }

    const reservas = this.listarReservas();
    const areas = this.listarAreasAtivas();
    const area = areas.find(a => a.id === Number(areaId));
    if (!area) throw new Error('Área comum inválida ou inativa.');

    // REGRA DE NEGÓCIO NÃO TRIVIAL: Bloqueio de sobreposição de horário na mesma área e data
    const conflito = reservas.find(r =>
      r.areaId === Number(areaId) &&
      r.data === data &&
      r.status !== 'recusada' &&
      (horaInicio < r.horaFim && horaFim > r.horaInicio)
    );

    if (conflito) {
      throw new Error(`Conflito de agenda: "${area.nome}" já possui reserva (${conflito.horaInicio} às ${conflito.horaFim}) nesta data.`);
    }

    const novaReserva = {
      id: Date.now(),
      areaId: Number(areaId),
      areaNome: area.nome,
      moradorNome,
      bloco,
      unidade,
      data,
      horaInicio,
      horaFim,
      status: 'pendente',
      justificativa: ''
    };

    reservas.push(novaReserva);
    localStorage.setItem('vivacondo_reservas', JSON.stringify(reservas));
    return novaReserva;
  },

  avaliarReserva(reservaId, novoStatus, justificativa = '') {
    if (!['aprovada', 'recusada'].includes(novoStatus)) {
      throw new Error('Status inválido.');
    }
    if (novoStatus === 'recusada' && !justificativa.trim()) {
      throw new Error('A recusa de uma reserva exige justificativa.');
    }

    const reservas = this.listarReservas();
    const idx = reservas.findIndex(r => r.id === Number(reservaId));
    if (idx === -1) throw new Error('Reserva não encontrada.');

    reservas[idx].status = novoStatus;
    reservas[idx].justificativa = justificativa;
    localStorage.setItem('vivacondo_reservas', JSON.stringify(reservas));
    return reservas[idx];
  },

  // --------------------------------------------------------------------------
  // SPRINT 3 (E7): OCORRÊNCIAS, PAINEL AGREGADO (GROUP BY) E ALERTAS DE PRAZO
  // --------------------------------------------------------------------------
  listarOcorrencias() {
    return JSON.parse(localStorage.getItem('vivacondo_ocorrencias') || '[]');
  },

  criarOcorrencia({ titulo, categoria, bloco, unidade, moradorNome, prazoLimite }) {
    if (!titulo || !categoria || !bloco || !unidade || !moradorNome) {
      throw new Error('Preencha todos os campos obrigatórios da ocorrência.');
    }

    const ocorrencias = this.listarOcorrencias();
    const nova = {
      id: Date.now(),
      titulo: titulo.replace(/<[^>]*>?/gm, ''), // Sanitização XSS básica (Sprint 4)
      categoria,
      bloco,
      unidade,
      moradorNome,
      dataCriacao: new Date().toISOString().split('T')[0],
      prazoLimite: prazoLimite || new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0],
      status: 'aberta',
      respostaSindico: ''
    };

    ocorrencias.push(nova);
    localStorage.setItem('vivacondo_ocorrencias', JSON.stringify(ocorrencias));
    return nova;
  },

  atualizarStatusOcorrencia(id, status, respostaSindico) {
    const ocorrencias = this.listarOcorrencias();
    const idx = ocorrencias.findIndex(o => o.id === Number(id));
    if (idx === -1) throw new Error('Ocorrência não encontrada.');

    ocorrencias[idx].status = status;
    ocorrencias[idx].respostaSindico = respostaSindico || '';
    localStorage.setItem('vivacondo_ocorrencias', JSON.stringify(ocorrencias));
    return ocorrencias[idx];
  },

  // Consulta Agregada (equivalente ao GROUP BY bloco, categoria no SQL)
  obterRelatorioAgregado() {
    const ocorrencias = this.listarOcorrencias();
    const reservas = this.listarReservas();

    const porBloco = {};
    ocorrencias.forEach(o => {
      if (!porBloco[o.bloco]) {
        porBloco[o.bloco] = { bloco: o.bloco, totalOcorrencias: 0, abertas: 0, resolvidas: 0, reservasAtivas: 0 };
      }
      porBloco[o.bloco].totalOcorrencias += 1;
      if (o.status !== 'resolvida') porBloco[o.bloco].abertas += 1;
      else porBloco[o.bloco].resolvidas += 1;
    });

    reservas.forEach(r => {
      if (!porBloco[r.bloco]) {
        porBloco[r.bloco] = { bloco: r.bloco, totalOcorrencias: 0, abertas: 0, resolvidas: 0, reservasAtivas: 0 };
      }
      if (r.status === 'aprovada' || r.status === 'pendente') {
        porBloco[r.bloco].reservasAtivas += 1;
      }
    });

    // Alertas de vencimento/prazo (<= 30 dias)
    const hoje = new Date();
    const alertas = ocorrencias.filter(o => {
      if (o.status === 'resolvida') return false;
      const prazo = new Date(o.prazoLimite);
      const diffDias = Math.ceil((prazo - hoje) / (1000 * 60 * 60 * 24));
      return diffDias <= 30;
    });

    return {
      agrupadoPorBloco: Object.values(porBloco),
      alertasCriticos: alertas,
      totais: {
        reservasPendentes: reservas.filter(r => r.status === 'pendente').length,
        ocorrenciasAbertas: ocorrencias.filter(o => o.status !== 'resolvida').length
      }
    };
  },

  // --------------------------------------------------------------------------
  // SPRINT 4 (E8): EXPORTAÇÃO DE RELATÓRIO EM CSV
  // --------------------------------------------------------------------------
  gerarCSVRelatorio() {
    const { agrupadoPorBloco } = this.obterRelatorioAgregado();
    const cabecalho = 'Bloco,Total_Ocorrencias,Ocorrencias_Abertas,Ocorrencias_Resolvidas,Reservas_Ativas\n';
    const linhas = agrupadoPorBloco.map(item =>
      `${item.bloco},${item.totalOcorrencias},${item.abertas},${item.resolvidas},${item.reservasAtivas}`
    ).join('\n');
    return cabecalho + linhas;
  }
};

// Exporta para testes em Node/Jest caso executado no ambiente de testes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VivaCondoService;
}