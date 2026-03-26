# STRAHL — Site Institucional

## Stack
HTML/CSS/JS puro, SPA sem framework, sem build step.
Abrir index.html diretamente no browser para testar.

## Estrutura de pastas
```
strahl-site/
├── index.html          ← todas as páginas em um único arquivo
├── assets/
│   ├── css/main.css    ← todos os estilos
│   ├── js/main.js      ← navegação e galeria
│   └── images/         ← todas as imagens
└── CLAUDE.md           ← este arquivo
```

## Páginas (seções dentro do index.html)
| ID | Conteúdo |
|---|---|
| page-home | Home — hero, setores, quem somos, categorias |
| page-cekton | Linha Cekton — tabelas de SKUs e produtos |
| page-datasheet | Datasheet 3076/CK |
| page-datasheet-4079 | Datasheet 4079/CK |

## Navegação
Feita por JS puro via `goTo('nome-da-pagina')`.
Novas páginas devem:
1. Adicionar `<div class="page" id="page-NOME">...</div>` no index.html
2. Adicionar link no menu de navegação com `onclick="goTo('NOME')"`
3. Não precisam de arquivo separado — tudo fica no index.html

## Imagens disponíveis em assets/images/
- banner_cekton.jpg — banner da seção Linha Cekton
- alta_corrente_frente.jpg — plugues série Alta Corrente (4746/4776)
- fachada_strahl.jpg — fachada da sede STRAHL
- tomadas_plugues.jpg — foto geral de tomadas e plugues
- centros_medicao.jpg — CMAs (Centros de Medição e Automação)
- quadros_distribuicao.jpg — QDs (Quadros de Distribuição)
- industria.jpg — card setor Indústria
- construcao_civil.jpg — card setor Construção Civil
- residencial.jpg — card setor Comercial/Residencial
- produto_3076ck_*.jpg — fotos e thumbs do datasheet 3076/CK
- produto_4079ck_*.jpg — fotos e thumbs do datasheet 4079/CK

## Padrão visual
- Cores principais: vermelho (#c0392b), azul-marinho (#1a2744), branco
- Fonte: Barlow + Barlow Condensed (Google Fonts)
- Ícones: Material Symbols Outlined (Google)
- Sem framework CSS — estilos todos em main.css

## Convenções
- Todo conteúdo em português brasileiro
- Sem dependências externas de imagem (tudo local em assets/images/)
- Sem servidor necessário — abrir index.html direto no browser
- Manter zero referências a URLs externas para imagens

## Contexto do produto
STRAHL é fabricante brasileiro de materiais elétricos industriais.
Linha Cekton = plugues e tomadas industriais (principal linha do site).
3076/CK = plugue 16A 2P+T / 4079/CK = plugue 125A 3P+T Alta Corrente.
