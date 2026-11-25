# 🏨 Reserva Fácil

Aplicação web front-end desenvolvida com **Vue 3** que oferece uma experiência ágil e intuitiva para viajantes buscarem hospedagens e validarem endereços em tempo real através da integração com API externa.

---

## 📋 Sobre o Projeto

O **Reserva Fácil** foi criado para eliminar o atrito na pesquisa de hospedagens, unindo em uma única Single Page Application (SPA):
- **Catálogo interativo de hotéis** com filtragem dinâmica em tempo real (por cidade/nome e faixa de preço).
- **Consulta automatizada de CEP** integrada a uma API externa (ViaCEP) para validação rápida de localização.
- **Navegação fluida** sem recarregamento de página, incluindo tratamento de rotas inválidas (Página 404).

---

## 🚀 Tecnologias Utilizadas

- **[Vue.js 3](https://vuejs.org/)** (Composition API com `<script setup>`, `ref`, `computed`, `props` e `emits`)
- **[Vite](https://vitejs.dev/)** (Ferramenta de build e servidor de desenvolvimento rápido)
- **[Vue Router](https://router.vuejs.org/)** (Gerenciamento de rotas SPA e fallback 404)
- **[Bootstrap 5](https://getbootstrap.com/)** (Estilização responsiva, sistema de grid e componentes visuais)
- **[ViaCEP API](https://viacep.com.br/)** (Consumo assíncrono de dados de endereçamento via `fetch` / `async-await`)

---

## 📂 Estrutura do Projeto

```text
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis (Cabecalho, Rodape, HotelFiltro, CatalogoHoteis, HotelCard)
├── router/          # Configuração das rotas e rota coringa 404 (index.js)
├── services/        # Camada de comunicação com APIs externas (api.js)
├── views/           # Páginas principais da aplicação (HomeView, HoteisView, ConsultarCepView, SobreView, NaoEncontradaView)
├── App.vue          # Componente raiz com estrutura global fixa
└── main.js          # Ponto de entrada da aplicação
```

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o **[Node.js](https://nodejs.org/)** (versão 18 ou superior) instalado em sua máquina.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/reserva-facil.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd reserva-facil
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 👥 Integrantes do Grupo

- **Asafe Piedade Gonçalves**
- **Jose Guilherme Pinheiro**
- **Kayck Dos Santos Bezerra**
- **Lohan Fonseca Batista**
- **Manoel Henrique Farias dos Santos**
- **Pedro Manoel Da Silva**