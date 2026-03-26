# STRAHL — Site Protótipo

Site de plugues e tomadas industriais da linha **Cekton**.  
Estrutura local para edição e futura hospedagem em servidor público.

---

## Como rodar localmente

Abra o arquivo `index.html` diretamente no navegador:

```
strahl-site/index.html
```

> ⚠️ **Não é necessário servidor web.** Basta abrir o arquivo localmente.  
> A navegação entre páginas funciona por JavaScript (sem recarregamento).

---

## Estrutura de pastas

```
strahl-site/
├── index.html               ← Página principal (todas as seções)
├── README.md                ← Este arquivo
├── assets/
│   ├── css/
│   │   └── main.css         ← Todos os estilos do site
│   ├── js/
│   │   └── main.js          ← Funções de navegação e galeria de imagens
│   ├── images/
│   │   ├── banner_cekton.jpg
│   │   ├── produto_3076ck_principal.jpg
│   │   ├── produto_3076ck_principal_thumb.jpg
│   │   ├── produto_3076ck_frente_thumb.jpg
│   │   ├── produto_3076ck_lateral_thumb.jpg
│   │   ├── produto_3076ck_traseira_thumb.jpg
│   │   ├── produto_4079ck_principal.jpg
│   │   ├── produto_4079ck_principal_thumb.jpg
│   │   ├── produto_4079ck_frente_thumb.jpg
│   │   ├── produto_4079ck_lateral_thumb.jpg
│   │   └── produto_4079ck_traseira_thumb.jpg
│   └── svg/                 ← Pasta para SVGs futuros (decorativos)
└── pages/                   ← Pasta reservada para páginas separadas futuras
```

---

## Como editar cada tipo de conteúdo

### 🖼️ Trocar uma imagem

1. Prepare a nova imagem (JPG recomendado)
2. Salve na pasta `assets/images/` com o mesmo nome do arquivo original  
   — ou use um nome novo e atualize o `src=` no `index.html`

**Exemplos de nomes:**
| Arquivo | Onde aparece |
|---|---|
| `banner_cekton.jpg` | Banner da seção Linha Cekton |
| `produto_3076ck_principal.jpg` | Foto principal do datasheet 3076/CK |
| `produto_4079ck_principal.jpg` | Foto principal do datasheet 4079/CK |
| `produto_*_thumb.jpg` | Miniaturas clicáveis da galeria |

---

### ✏️ Editar texto ou códigos

Abra `index.html` em qualquer editor de texto (VS Code recomendado) e busque o trecho desejado:

- **Tabelas de SKU / códigos** → busque por `<table` dentro das seções `page-cekton`
- **Especificações técnicas** → busque pelo código, ex: `3076/CK`
- **Textos descritivos** → estão nos `<p>` e `<h2>` de cada seção

---

### 🎨 Editar estilos (cores, fontes, layout)

Abra `assets/css/main.css`. As principais variáveis de cor e espaçamento ficam no início do arquivo.

---

### ⚙️ Editar comportamentos (navegação, galeria)

Abra `assets/js/main.js`. As funções principais são:

| Função | O que faz |
|---|---|
| `goTo(page)` | Navega entre as 4 páginas do site |
| `dsSetImg(thumb, src)` | Troca a foto principal no datasheet 3076/CK |
| `ds4079SetImg(thumb, src)` | Troca a foto principal no datasheet 4079/CK |
| `toggleDropdown(e)` | Abre/fecha o menu dropdown de navegação |

---

### 📐 Editar ou adicionar desenhos SVG (vista técnica)

Os desenhos técnicos (pinos, dimensões) estão como `<svg>` inline dentro do `index.html`.  
Para adicionar um SVG externo, salve-o em `assets/svg/` e referencie com `<img src="assets/svg/nome.svg">`.

---

## Páginas do site

| ID | Seção |
|---|---|
| `page-home` | Página inicial |
| `page-cekton` | Linha Cekton — tabelas de produtos |
| `page-datasheet` | Datasheet 3076/CK |
| `page-datasheet-4079` | Datasheet 4079/CK |

---

## Hospedagem futura

Para hospedar, basta fazer upload de **toda a pasta `strahl-site/`** para qualquer servidor web estático (Apache, Nginx, GitHub Pages, Netlify etc.).

O arquivo de entrada é `index.html`.

---

*Protótipo STRAHL — versão local para edição*
