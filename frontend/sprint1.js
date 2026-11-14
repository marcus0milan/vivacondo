// ============================================================================
// VIVACONDO — CÓDIGO COMPLETO SPRINTS 1, 2, 3 E 4 (E5, E6, E7, E8)
// ============================================================================

const VivaCondoService = {
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
          prazoLimite: '2026-11-25',
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
          prazoLimite: '2026-11-18',
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
          respostaSindico: 'Substituída pela manutenção.'
        }
      ];
      localStorage.setItem('vivacondo_ocorrencias', JSON.stringify(ocorrencias));
    }
  },

  listarAreasAtivas() {
    const areas = JSON.parse(localStorage.getItem('vivacondo_areas') || '[]');
    return areas.filter(a => a.ativa);
  },

  adicionarArea({ nome, capacidade, taxa }) {
    if (!nome || capacidade <= 0 || taxa < 0) {
      throw new Error('Dados inválidos para cadastro de área comum.');
    }
    const areas = JSON.parse(localStorage.getItem('vivacondo_areas') || '[]');
    const nova = { id: Date.now(), nome: nome.trim(), capacidade: Number(capacidade), taxa: Number(taxa), ativa: true };
    areas.push(nova);
    localStorage.setItem('vivacondo_areas', JSON.stringify(areas));
    return nova;
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

    const reservas = this.listarReservas();
    const areas = this.listarAreasAtivas();
    const area = areas.find(a => a.id === Number(areaId));
    if (!area) throw new Error('Área comum inválida ou inativa.');

    // REGRA DE NEGÓCIO NÃO TRIVIAL (Sprint 2): Bloqueio de conflito de horário na mesma área e data
    const conflito = reservas.find(r =>
      r.areaId === Number(areaId) &&
      r.data === data &&
      r.status !== 'recusada' &&
      (horaInicio < r.horaFim && horaFim > r.horaInicio)
    );

    if (conflito) {
      throw new Error(`Conflito de agenda: "${area.nome}" já possui reserva (${conflito.horaInicio} às ${conflito.horaFim}) no dia ${data}.`);
    }

    const novaReserva = {
      id: Date.now(),
      areaId: Number(areaId),
      areaNome: area.nome,
      moradorNome: moradorNome.replace(/<[^>]*>?/gm, ''),
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
      throw new Error('A recusa de uma reserva exige justificativa obrigatória.');
    }

    const reservas = this.listarReservas();
    const idx = reservas.findIndex(r => r.id === Number(reservaId));
    if (idx === -1) throw new Error('Reserva não encontrada.');

    reservas[idx].status = novoStatus;
    reservas[idx].justificativa = justificativa.trim();
    localStorage.setItem('vivacondo_reservas', JSON.stringify(reservas));
    return reservas[idx];
  },

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
      titulo: titulo.replace(/<[^>]*>?/gm, ''),
      categoria,
      bloco,
      unidade,
      moradorNome,
      dataCriacao: new Date().toISOString().split('T')[0],
      prazoLimite: prazoLimite || '2026-11-30',
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

  obterRelatorioAgregado() {
    const ocorrencias = this.listarOcorrencias();
    const reservas = this.listarReservas();
    const porBloco = {};

    ['Bloco A', 'Bloco B', 'Bloco C'].forEach(b => {
      porBloco[b] = { bloco: b, totalOcorrencias: 0, abertas: 0, resolvidas: 0, reservasAtivas: 0 };
    });

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

    const hoje = new Date('2026-11-01');
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
        totalAreas: this.listarAreasAtivas().length,
        reservasPendentes: reservas.filter(r => r.status === 'pendente').length,
        ocorrenciasAbertas: ocorrencias.filter(o => o.status !== 'resolvida').length
      }
    };
  },

  gerarCSVRelatorio() {
    const { agrupadoPorBloco } = this.obterRelatorioAgregado();
    const cabecalho = 'Bloco,Total_Ocorrencias,Ocorrencias_Abertas,Ocorrencias_Resolvidas,Reservas_Ativas\n';
    const linhas = agrupadoPorBloco.map(item =>
      `${item.bloco},${item.totalOcorrencias},${item.abertas},${item.resolvidas},${item.reservasAtivas}`
    ).join('\n');
    return cabecalho + linhas;
  }
};

// ============================================================================
// CONTROLADOR DE INTERFACE (DOM) — NAVERADOR
// ============================================================================
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    VivaCondoService.initSeed();

    const perfilSelect = document.getElementById('perfilAtivo');
    const feedbackMsg = document.getElementById('feedbackMsg');

    function exibirMensagem(texto, tipo = 'sucesso') {
      feedbackMsg.textContent = texto;
      feedbackMsg.className = `feedback ${tipo}`;
      setTimeout(() => feedbackMsg.classList.add('hidden'), 4500);
    }

    // Controle de Abas
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        renderizarTudo();
      });
    });

    perfilSelect.addEventListener('change', renderizarTudo);

    function renderizarAreas() {
      const areas = VivaCondoService.listarAreasAtivas();
      const tbody = document.querySelector('#tabelaAreas tbody');
      const selectArea = document.getElementById('resAreaId');

      tbody.innerHTML = areas.map(a => `
        <tr>
          <td><strong>${a.nome}</strong></td>
          <td>${a.capacidade} pessoas</td>
          <td>R$ ${a.taxa.toFixed(2)}</td>
          <td><span class="status-pill aprovada">Ativa</span></td>
        </tr>
      `).join('');

      selectArea.innerHTML = areas.map(a =>
        `<option value="${a.id}">${a.nome} (Cap: ${a.capacidade} | R$ ${a.taxa.toFixed(2)})</option>`
      ).join('');
    }

    function renderizarReservas() {
      const isSindico = perfilSelect.value === 'sindico';
      const reservas = VivaCondoService.listarReservas();
      const tbody = document.querySelector('#tabelaReservas tbody');

      tbody.innerHTML = reservas.map(r => {
        let acoes = '<span class="muted">Apenas visualização</span>';
        if (isSindico && r.status === 'pendente') {
          acoes = `
            <button class="btn-sm btn-ok" onclick="window.acaoReserva(${r.id}, 'aprovada')">Aprovar</button>
            <button class="btn-sm btn-danger" onclick="window.acaoReserva(${r.id}, 'recusada')">Recusar</button>
          `;
        } else if (r.justificativa) {
          acoes = `<small>Motivo: ${r.justificativa}</small>`;
        }

        return `
          <tr>
            <td><strong>${r.areaNome}</strong></td>
            <td>${r.bloco} - ${r.unidade}<br><small>${r.moradorNome}</small></td>
            <td>${r.data}<br><small>${r.horaInicio} às ${r.horaFim}</small></td>
            <td><span class="status-pill ${r.status}">${r.status.toUpperCase()}</span></td>
            <td>${acoes}</td>
          </tr>
        `;
      }).join('');
    }

    function renderizarOcorrencias() {
      const isSindico = perfilSelect.value === 'sindico';
      const ocorrencias = VivaCondoService.listarOcorrencias();
      const tbody = document.querySelector('#tabelaOcorrencias tbody');

      tbody.innerHTML = ocorrencias.map(o => {
        let acoes = '<span class="muted">—</span>';
        if (isSindico && o.status !== 'resolvida') {
          acoes = `
            <button class="btn-sm btn-ok" onclick="window.resolverOcorrencia(${o.id})">Marcar Resolvida</button>
          `;
        }
        return `
          <tr>
            <td><strong>${o.titulo}</strong><br><small>Categoria: ${o.categoria}</small></td>
            <td>${o.bloco} / ${o.unidade}<br><small>${o.moradorNome}</small></td>
            <td>${o.prazoLimite}</td>
            <td>
              <span class="status-pill ${o.status}">${o.status.toUpperCase()}</span>
              ${o.respostaSindico ? `<br><small>Resp: ${o.respostaSindico}</small>` : ''}
            </td>
            <td>${acoes}</td>
          </tr>
        `;
      }).join('');
    }

    function renderizarPainel() {
      const rel = VivaCondoService.obterRelatorioAgregado();
      const listaAlertas = document.getElementById('listaAlertas');
      const kpiContainer = document.getElementById('kpiContainer');
      const tbody = document.querySelector('#tabelaAgregada tbody');

      listaAlertas.innerHTML = rel.alertasCriticos.length
        ? rel.alertasCriticos.map(a => `<li><strong>[${a.bloco} - Unid. ${a.unidade}]</strong> ${a.titulo} — Prazo limite: <strong>${a.prazoLimite}</strong> (Status: ${a.status})</li>`).join('')
        : '<li>Nenhum alerta crítico pendente para os próximos 30 dias.</li>';

      kpiContainer.innerHTML = `
        <div class="kpi-card"><span>Áreas Ativas</span><strong>${rel.totais.totalAreas}</strong></div>
        <div class="kpi-card"><span>Reservas Pendentes</span><strong>${rel.totais.reservasPendentes}</strong></div>
        <div class="kpi-card"><span>Ocorrências em Aberto</span><strong>${rel.totais.ocorrenciasAbertas}</strong></div>
      `;

      tbody.innerHTML = rel.agrupadoPorBloco.map(b => `
        <tr>
          <td><strong>${b.bloco}</strong></td>
          <td>${b.totalOcorrencias}</td>
          <td>${b.abertas}</td>
          <td>${b.resolvidas}</td>
          <td><strong>${b.reservasAtivas}</strong></td>
        </tr>
      `).join('');
    }

    function renderizarTudo() {
      const isSindico = perfilSelect.value === 'sindico';
      document.querySelectorAll('.sindico-only').forEach(el => {
        el.style.display = isSindico ? 'block' : 'none';
      });
      renderizarAreas();
      renderizarReservas();
      renderizarOcorrencias();
      renderizarPainel();
    }

    // Eventos de Formulários
    document.getElementById('formNovaArea').addEventListener('submit', (e) => {
      e.preventDefault();
      try {
        VivaCondoService.adicionarArea({
          nome: document.getElementById('areaNome').value,
          capacidade: document.getElementById('areaCapacidade').value,
          taxa: document.getElementById('areaTaxa').value
        });
        e.target.reset();
        exibirMensagem('Nova área comum cadastrada com sucesso!');
        renderizarTudo();
      } catch (err) {
        exibirMensagem(err.message, 'erro');
      }
    });

    document.getElementById('formNovaReserva').addEventListener('submit', (e) => {
      e.preventDefault();
      try {
        VivaCondoService.criarReserva({
          areaId: document.getElementById('resAreaId').value,
          bloco: document.getElementById('resBloco').value,
          unidade: document.getElementById('resUnidade').value,
          moradorNome: document.getElementById('resMorador').value,
          data: document.getElementById('resData').value,
          horaInicio: document.getElementById('resHoraInicio').value,
          horaFim: document.getElementById('resHoraFim').value
        });
        exibirMensagem('Reserva solicitada com sucesso! Status: Pendente.');
        renderizarTudo();
      } catch (err) {
        exibirMensagem(err.message, 'erro');
      }
    });

    document.getElementById('formNovaOcorrencia').addEventListener('submit', (e) => {
      e.preventDefault();
      try {
        VivaCondoService.criarOcorrencia({
          titulo: document.getElementById('ocTitulo').value,
          categoria: document.getElementById('ocCategoria').value,
          prazoLimite: document.getElementById('ocPrazo').value,
          bloco: document.getElementById('ocBloco').value,
          unidade: document.getElementById('ocUnidade').value,
          moradorNome: document.getElementById('ocMorador').value
        });
        document.getElementById('ocTitulo').value = '';
        exibirMensagem('Ocorrência registrada com sucesso!');
        renderizarTudo();
      } catch (err) {
        exibirMensagem(err.message, 'erro');
      }
    });

    document.getElementById('btnExportarCSV').addEventListener('click', () => {
      const csv = VivaCondoService.gerarCSVRelatorio();
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'relatorio-vivacondo-por-bloco.csv';
      a.click();
      exibirMensagem('Relatório CSV exportado com sucesso!');
    });

    // Ações globais de tabela (Síndico)
    window.acaoReserva = (id, status) => {
      try {
        let just = '';
        if (status === 'recusada') {
          just = prompt('Informe a justificativa para recusar a reserva:') || '';
        }
        VivaCondoService.avaliarReserva(id, status, just);
        exibirMensagem(`Reserva ${status} com sucesso!`);
        renderizarTudo();
      } catch (err) {
        exibirMensagem(err.message, 'erro');
      }
    };

    window.resolverOcorrencia = (id) => {
      const resp = prompt('Informe a providência/resposta do síndico:', 'Manutenção realizada.');
      if (resp !== null) {
        VivaCondoService.atualizarStatusOcorrencia(id, 'resolvida', resp);
        exibirMensagem('Ocorrência marcada como resolvida!');
        renderizarTudo();
      }
    };

    renderizarTudo();
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VivaCondoService;
}