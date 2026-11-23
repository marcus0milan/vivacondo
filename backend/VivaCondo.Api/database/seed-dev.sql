-- VivaCondo — dados fictícios para desenvolvimento local.
-- Execute somente depois de criar o banco, iniciar a API e concluir /api/setup.
-- Equipe: Guilherme Rastelli Fernandes (RA 2840482421047),
-- Felipe Savegnago Pires (RA 2840482421034),
-- Marcus Vinicius Milan (RA 2840482421001).

BEGIN;

INSERT INTO unidade (condominio_id, bloco, numero)
SELECT c.id, 'A', '101'
FROM condominio c
WHERE NOT EXISTS (
  SELECT 1 FROM unidade u
  WHERE u.condominio_id = c.id AND lower(u.bloco) = 'a' AND lower(u.numero) = '101'
);

INSERT INTO area_comum (condominio_id, nome, capacidade_maxima, horario_limite_uso)
SELECT c.id, 'Salão de festas (demonstração)', 40, TIME '22:00'
FROM condominio c
WHERE NOT EXISTS (
  SELECT 1 FROM area_comum a
  WHERE a.condominio_id = c.id AND lower(a.nome) = lower('Salão de festas (demonstração)')
);

COMMIT;
