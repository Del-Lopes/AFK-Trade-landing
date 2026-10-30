# Roadmap: novo posicionamento da landing Trader AFK

> **Como usar:** abra o Claude Code na raiz da landing (`afk-landing`) e diga:
> `Leia LANDING_ROADMAP.md e execute a Fase 0.`
> Ao fim de cada fase, pare, mostre o resultado e espere o OK antes de seguir.

## Objetivo

Hoje a landing vende **robôs e automação** (título "Plataforma de Trading Algorítmico com Robôs
Forex e MT5", seções Comparativo Manual vs Automatizado, Robôs, AlgoEngine, Licenças). O app
cresceu e virou outra coisa. A landing precisa apresentar o app como ele é hoje, apoiado em
**três pilares**:

1. **Aprender:** Trilha Gain, Biblioteca de cursos e artigos, Comece Aqui.
2. **Ferramentas de IA:** análise por IA, painel de tendência, calendário econômico interpretado, inteligência cripto, assistente e análise de resultados.
3. **Comunidade e operação:** Sala ao Vivo com a equipe, sinais da equipe, Diário de Operações, Live Portfólio.

**Robôs, Hand Bot e licenças MT5 continuam existindo**, mas como **subproduto**: uma seção
compacta ("para quem quer automatizar"), no fim da página, e não como promessa central.

A mensagem central passa a ser: *aprenda o mercado, analise com IA e opere com método,
acompanhado de quem opera junto com você.*

## Ponto de partida (levantado em 2026-10-30)

Confirme no início, porque o código pode ter mudado.

**Landing (`afk-landing`):** Vite 7, React 19, Tailwind v4, framer-motion, react-router.
Último commit `b51b746`. O redesign Osher já está aplicado. Reaproveite:
- `src/index.css`: tokens `@theme` e utilitários (`eyebrow`, `glass-card`, `hairline`, `text-gradient-brand`, `bg-grid-fade`).
- `src/components/ui/`: `Button`, `Eyebrow`, `SectionHeader`, `Reveal`, `Backdrop`, `BrokerDisclaimer`, `SparklesCore`.
- `src/components/blocks/TradingJournal.tsx` e `AIAssistant.tsx`: já são do novo estilo e já falam de features não ligadas a robôs. Servem de modelo de "painel de produto".

Ordem atual em `src/App.tsx`: Hero → SocialProof → Manifesto → Comparison → Robots →
AlgoEngine → Licensing → Onboarding → TradingJournal → Ecosystem → Downloads → AIAssistant →
Partners → Profiles → FeatureGrid → Pricing → FAQ → FinalCTA. Navbar: Robôs, Licenças,
Biblioteca, Parceiros, Preços, FAQ. Páginas extras: `/hfm`, `/hantec`, `/vantage`,
`/roboforex`, `/start`, `/mission`, `/partners`.

**App (`../WebApp`):** é a fonte da verdade sobre o que existe. Não anuncie nada que não esteja lá.

## Inventário de features do app

Para conferir detalhes, abra o arquivo indicado (caminhos relativos a `../WebApp`).

### Pilar 1: Aprender

| Feature | O que faz | Onde ver |
|---|---|---|
| **Trilha Gain** | Trilha do zero ao avançado, em lições curtas e interativas: conceito, leitura de gráfico, montar ordem, quiz, verdadeiro ou falso. Mapa de unidades, sequência de dias, Coins por lição concluída. Há unidades premium. | `components/TrilhaGain/` |
| **Biblioteca** | Cursos em vídeo com player e material de apoio, mais artigos e análises. | `components/Education.tsx`, `Education/CoursePlayer.tsx` |
| **Artigos e análises** | Blog interno, com artigos produzidos pela equipe com apoio de IA. | `Dashboard/ArticleView.tsx`, `supabase/functions/generate-articles` |
| **Comece Aqui (Jornada)** | Guia que explica cada sessão da plataforma. | `components/Journey.tsx` |
| **Tour de boas-vindas** | Tour com ilustrações do novo design. As artes podem virar imagens da landing. | `components/PlatformTour.tsx`, `TourArt.tsx` |

### Pilar 2: Ferramentas de IA

| Feature | O que faz | Onde ver |
|---|---|---|
| **Análise por IA (Sinais)** | Análise do XAU/USD sob demanda: candles, EMA 9/21/50, ATR, manchetes do dia e um parecer escrito pela IA. Paga em Coins. | `Signals/Signals.tsx`, `functions/signals-generate` |
| **Painel de tendência multi-timeframe** | Até 5 timeframes por ativo, do curto ao longo prazo, com medidores de tendência. | `Signals/TrendPanel.tsx`, `TFGauge.tsx` |
| **Calendário Econômico interpretado** | Eventos de média e alta importância (fonte: TradingView), com a IA explicando cada cenário e o efeito por ativo (XAUUSD, NAS100, US30, WIN, WDO, BTC). | `EconCalendar/`, `functions/econ-calendar-sync` |
| **Crypto** | Termômetro do mercado, maiores altas, trending, narrativas por setor, DeFi, calendário de unlocks, watchlist e relatório de narrativa escrito por IA (pago em Coins). | `Crypto/`, `functions/crypto-narrative` |
| **Assistente de IA** | Chat de suporte que conhece a plataforma (base de conhecimento curada), guarda o histórico e tem limite diário de mensagens. | `Chat/`, `functions/chat-assistant` |
| **Análise de Resultados** | O usuário envia o relatório HTML do MT5 e recebe curva de capital, resultado por par e por dia da semana, taxa de acerto em compras e vendas e drawdown. | `Analysis/`, `functions/parse-mt5-report` |

### Pilar 3: Comunidade e operação

| Feature | O que faz | Onde ver |
|---|---|---|
| **Sala ao Vivo** | Sessões ao vivo com a equipe: leitura do gráfico e do contexto do dia, raciocínio explicado, perguntas durante a sessão, conceitos da Trilha aplicados ao mercado. Mostra o status ao vivo. Exclusiva para assinantes. | `LiveRoom/LiveRoom.tsx` |
| **Sinais da equipe** | Setups publicados manualmente pelo time. | `Signals/` (aba setup) |
| **Diário de Operações** | Registro de cada trade com motivo, emocional, aprendizado e nota de 1 a 5, com busca e filtros. | `Journal/` |
| **Live Portfólio** | Contas MT5 conectadas, com telemetria em tempo real. | `LivePortfolio/` |
| **Market** | Cursos, ebooks, indicadores e robôs selecionados. | `components/Market.tsx` |
| **Programa de Parceiros** | Kit de divulgação e formulário de candidatura (`partner-apply` → `partner_applications`). | `Marketing.tsx`, landing `/partners` |

### Transversal: Coins e gamificação

Coins são a moeda da plataforma. O usuário **ganha** Coins concluindo lições e mantendo a
sequência na Trilha Gain, e **gasta** em análises de IA, relatórios cripto e unidades premium.
Isso fecha um ciclo que a landing deve contar: *aprender rende acesso às ferramentas*.

### Subproduto: automação

| Feature | O que faz | Onde ver |
|---|---|---|
| **Robôs (Estratégias)** | Catálogo de EAs com perfil de risco. | `Strategies.tsx`, `RobotDetails.tsx` |
| **Hand Bot** | Ajuste dos parâmetros do EA pela plataforma, sem abrir o MetaTrader. | `HandBot/` |
| **Licenças MT5** | Vínculo de contas MT5 e controle da validade das licenças. | `Licenses.tsx`, `Mt5Connection/` |
| **Downloads** | MetaTrader, indicadores e setups. | `Downloads.tsx` |

### Lacuna: comunidade entre usuários

O app **não tem** feed, fórum ou chat entre usuários. A sessão de postagens está planejada,
mas ainda não existe. Até lá, a landing apresenta **o ecossistema inteiro como uma comunidade
de aprendizado e troca mútua**: Trilha Gain, Sala ao Vivo, sinais e artigos da equipe,
Assistente e Parceiros. A landing **não** cita fórum, feed, postagens nem "converse com outros
traders".

## Decisões já tomadas (2026-10-30)

1. **Comunidade:** apresentar o ecossistema como um todo como *comunidade de aprendizado e troca mútua*. Sem prometer postagens, feed ou grupo externo. Quando a sessão de postagens existir no app, a landing ganha uma seção própria (ver "Fora do escopo").
2. **Preços:**
   - **Remover** o card "Membro Trader AFK" (valor padrão, renovação anual etc.).
   - **Manter** a "Condição de Lançamento", com acesso gratuito.
   - **Acrescentar tokens de boas-vindas para a IA de trading exclusiva**, grátis para novos membros. Exemplos de texto: *"Tokens de boas-vindas para usar nossa IA exclusiva de trading"*, *"Comece com tokens grátis na IA de trading da Trader AFK"*.
   - **Termo na landing: "tokens de IA"**, nunca "Coins de boas-vindas". O apelo é a IA, não a moeda.
   - **No app, esses tokens são as Coins** (é com elas que se pagam a Análise por IA, o relatório cripto e o painel de tendência). A landing faz a ponte numa linha, no FAQ e no `CoinsLoop`, algo como "os tokens chegam como Coins na sua conta". Assim o usuário não estranha ao entrar. Se o usuário preferir renomear a moeda no app, isso é outra tarefa, no WebApp.
3. **Nome e Manifesto:** o `Manifesto.tsx` **fica como está**, sem mudar texto nem layout.

**Fase 0 concluída em 2026-10-30.** Decisões:
4. **Hero:** linha "Jornada do iniciante", com o título *"Do primeiro candle à sua própria leitura de mercado."*
5. **Bônus:** sem número por ora. A landing escreve "tokens de boas-vindas para a IA".
6. **Sala ao Vivo:** fica **à parte, para assinantes**. A condição gratuita inclui Trilha, Biblioteca, ferramentas de IA (com os tokens) e as ferramentas de operação. A Sala aparece com o selo "para assinantes".
7. **Prova social:** sem números e sem depoimentos. A faixa de estatísticas vira uma faixa de **fatos do produto escritos sem números** (ex.: "Calendário interpretado por ativo"). Os 3 depoimentos saem.
8. **Páginas de corretora:** ficam como estão. Só os links internos que apontarem para âncoras removidas são corrigidos.
9. **Screenshots "antes":** capturados em 1440px e 390px (20 seções, sem rolagem horizontal), na pasta de rascunho da sessão.

> **Dependência do bônus de tokens:** o app ainda **não** dá Coins de boas-vindas
> (`trilha_stats.total_xp` nasce com `DEFAULT 0`, em `../WebApp/supabase/migrations/20260630_trilha_gain.sql`).
> O bônus precisa ser implementado no WebApp **antes** do deploy da landing. Faça um crédito
> server-side no cadastro, via RPC `SECURITY DEFINER` ou trigger, nunca no client. Pergunte ao
> usuário o valor do bônus e se ele vale só durante o lançamento. Até o valor ser definido, a
> landing escreve "tokens de boas-vindas para a IA", sem número.

## Ajuste de estrutura pedido pelo usuário (2026-10-30, depois da Fase 2)

Cinco **seções dedicadas** substituem a ideia de agrupar as ferramentas em abas (`AIToolkit`) e a seção "Para quem é":

| Seção | Bloco | Âncora | Posição |
|---|---|---|---|
| Trilha Gain | `TrilhaGain.tsx` | `#aprender` | **logo após os depoimentos** (`SocialProof`) |
| Calendário Econômico com análise por IA | `EconCalendar.tsx` | `#ia` | após a Trilha |
| Crypto | `CryptoIntel.tsx` | `#crypto` | após o Calendário |
| Artigos e Análises + Biblioteca | `Articles.tsx` | `#artigos` | após Crypto; **substitui `Ecosystem`** |
| Análise de Resultados (relatórios MT5) | `ResultsAnalysis.tsx` | `#resultados` | **no lugar de "Para quem é" (`Profiles`)** |

Todas usam o layout compartilhado `src/components/ui/FeatureShowcase.tsx` (texto + destaques + mock em `MockFrame`).
Menu atual: Trilha Gain, Calendário IA, Crypto, Resultados, Preços, FAQ. "Comunidade" volta ao menu quando a seção dela existir.

**Efeito nas fases seguintes:**
- **Fase 3:** a seção Aprender já está pronta. Faltam `Pillars` e `CoinsLoop`.
- **Fase 4:** `AIToolkit` não será criado. Calendário e Crypto já estão prontos. A Análise por IA do XAU/USD e o painel multi-timeframe ainda precisam de lugar, por exemplo uma seção dedicada no mesmo padrão. O ajuste do `AIAssistant` continua pendente.
- **Fase 5:** a Análise de Resultados já está pronta. Faltam `LiveCommunity`, o Live Portfólio e o novo `Onboarding`.
- **Fase 6:** `Profiles` sai, então não precisa ser reescrito.
- **Fase 7:** `Ecosystem.tsx` e `Profiles.tsx` entram na lista de limpeza.

## Regras para todas as fases

1. **Só anuncie o que existe no app.** Na dúvida, abra o componente em `../WebApp`. Nada de "em breve" sem aprovação.
2. **Compliance (ver commit `e702312`):** nada de promessa de ganho, rentabilidade, "renda passiva" ou "lucre enquanto dorme". Sinais e análises de IA são **conteúdo informativo, não recomendação de investimento**, e isso aparece perto deles. Mantenha o `BrokerDisclaimer` onde há corretora, e o aviso de que rentabilidade passada não garante resultados futuros onde há robôs.
3. **Sem e-mail de contato e sem `mailto:`.** Contato de parceiros é só pelo formulário (`PartnerFormModal`).
4. **Use o design system atual.** Use os tokens e componentes de `src/components/ui/`. Nenhuma cor nova além do verde da marca e das cores semânticas.
5. **Imagens de produto sem dados reais de usuários.** Use uma conta de demonstração ou dados fictícios. Quando o print mostrar números de conta, nomes ou e-mails, troque ou desfoque.
6. **Mobile first:** nada de rolagem horizontal em 375px. Mantenha `prefers-reduced-motion` e contraste AA.
7. **Branch `feat/landing-reposicionamento`**, um commit por fase, e `npm run build` (inclui `tsc -b`) passando ao fim de cada uma.
8. **Verifique vendo a tela:** screenshots em 1440px e 390px, por viewport (rolando), não `fullPage`. O puppeteer-core funciona com `C:/Program Files/Google/Chrome/Application/chrome.exe`.
9. **Não apague blocos antigos na mesma fase em que cria os novos.** Primeiro tire o bloco do `App.tsx`. Os arquivos sem uso só saem na Fase 7, depois de confirmar que nenhuma página extra os importa.

## Fase 0: reconhecimento e decisões (sem mexer em código)

1. Leia `src/App.tsx`, `Navbar.tsx`, `Hero.tsx`, `Pricing.tsx`, `FAQ.tsx`, `Profiles.tsx` e `Manifesto.tsx`. No app, leia `PlatformTour.tsx` e passe os olhos nas pastas do inventário.
2. Rode a landing (`npm run dev`) e tire screenshots de "antes" de cada seção.
3. **Pergunte ao usuário e espere as respostas:**
   1. **Promessa do Hero.** Proponha 3 opções de título e subtítulo no tom "aprender, analisar com IA, operar com método". Exemplo: *"Aprenda a operar com método. Analise com IA. Nunca opere sozinho."*
   2. **Valor do bônus de Coins** para novos membros, e se vale só durante o lançamento (ver "Decisões já tomadas").
   3. **Sala ao Vivo na condição de lançamento.** Hoje ela é exclusiva de assinantes. Entra na gratuidade ou continua à parte? A landing precisa dizer isso com clareza.
   4. **Números de prova social.** Quais métricas reais podem aparecer (usuários, lições concluídas, horas de Sala ao Vivo, análises geradas)? Números sem fonte saem.
   5. **Páginas de corretora** (`/hfm`, `/hantec`, `/vantage`, `/roboforex`). Ficam como estão, já que são focadas em automação, ou ganham um parágrafo sobre a plataforma de aprendizado?

   Comunidade, preços e Manifesto já estão decididos (ver "Decisões já tomadas"). Não pergunte de novo.
4. Entregue a lista final de seções (abaixo) ajustada às respostas.

## Fase 1: arquitetura da página e copy (texto antes de código)

1. Escreva `COPY.md` na raiz da landing com o texto de todas as seções, na ordem final: eyebrow, título, subtítulo, bullets e CTAs. Nada de código ainda.
2. Ordem proposta:

   | # | Seção | Bloco | Origem |
   |---|---|---|---|
   | 1 | Hero | `Hero.tsx` | reescrever |
   | 2 | Prova social | `SocialProof.tsx` | ajustar números |
   | 3 | Manifesto | `Manifesto.tsx` | **manter como está** |
   | 4 | Três pilares (visão geral) | `Pillars.tsx` | **novo** |
   | 5 | Aprender: Trilha Gain + Biblioteca | `LearnTrack.tsx` | **novo**, absorve `Ecosystem.tsx` |
   | 6 | Coins: aprender rende ferramentas | `CoinsLoop.tsx` | **novo** |
   | 7 | IA: análise, tendência, calendário, crypto | `AIToolkit.tsx` | **novo** |
   | 8 | Assistente de IA | `AIAssistant.tsx` | ajustar copy |
   | 9 | Comunidade de aprendizado e troca mútua | `LiveCommunity.tsx` | **novo** |
   | 10 | Sua operação: Diário + Resultados + Live Portfólio | `TradingJournal.tsx` | ampliar |
   | 11 | Como começar (passos) | `Onboarding.tsx` | reescrever sem corretora como passo obrigatório |
   | 12 | Para quem é | `Profiles.tsx` | reescrever |
   | 13 | Para quem quer automatizar | `Automation.tsx` | **novo**, condensa Robots, AlgoEngine, Licensing e Downloads |
   | 14 | Parceiros | `Partners.tsx` | encurtar, link para `/partners` |
   | 15 | Preços | `Pricing.tsx` | só Condição de Lançamento + tokens de IA de boas-vindas |
   | 16 | FAQ | `FAQ.tsx` | reescrever |
   | 17 | CTA final | `FinalCTA.tsx` | reescrever |

   **Saem da home:** `Comparison` (Manual vs Automatizado contradiz o novo posicionamento), `Robots`, `AlgoEngine`, `Licensing`, `Downloads`, `FeatureGrid`, `PlatformTour` (landing) e `Ecosystem`. O conteúdo útil vai para os blocos novos.
3. **Perfis sugeridos** para "Para quem é": quem está começando do zero; quem estuda sozinho e quer método; quem já opera e quer ferramentas e disciplina; quem quer automatizar (aponta para a seção 13).
4. **FAQ sugerido:** "Preciso saber operar para começar?", "A IA me diz quando comprar e vender?" (resposta: não, é análise informativa), "O que são os tokens de IA e como ganho mais?" (tokens de boas-vindas no cadastro, que chegam como Coins, e mais Coins concluindo lições), "Como funciona a Sala ao Vivo?", "Existe uma comunidade?" (o ecossistema como comunidade de aprendizado, sem citar postagens), "Preciso ter conta em corretora?", "Preciso usar robôs?", "Quais mercados vocês cobrem?" (forex, ouro, índices, B3 e cripto, conforme o calendário e o painel), "Quanto custa?", e os riscos do mercado.
5. **Aceite:** o usuário aprova o `COPY.md`.

## Fase 2: Hero, Navbar e SEO

1. **Hero:** novo título e subtítulo. A imagem principal deixa de ser "EA conectado" e passa a ser o app, por exemplo um mosaico da Trilha Gain, da análise de IA e da Sala ao Vivo. Até ter prints (Fase 7), use um painel montado em JSX no estilo de `TradingJournal.tsx`. Atualize o `preload` de imagem no `index.html`.
2. **CTAs:** principal "Começar grátis", apontando para a plataforma, com um selo pequeno "+ tokens grátis para a IA de trading". Secundário "Ver como funciona", com âncora para os pilares.
3. **Navbar:** Aprender, IA, Comunidade, Preços, FAQ. "Robôs" sai do menu principal (pode ir para o rodapé).
4. **SEO (`App.tsx` → `Helmet`):** novos `title`, `description`, `keywords`, `og:*` e `twitter:*`, com foco em educação para traders, análise de mercado com IA, calendário econômico interpretado e comunidade de traders. Mantenha os termos de MT5 só como secundários. Gere um novo `og-image.png` (1200×630) com o novo posicionamento.
5. **Aceite:** screenshots do Hero em 1440px e 390px, e build passando.

## Fase 3: pilar Aprender + Coins

1. **`Pillars.tsx`:** três cards (Aprender, IA, Comunidade), cada um com ícone, uma frase e uma âncora para a seção.
2. **`LearnTrack.tsx`:**
   - Uma réplica visual de uma lição da Trilha Gain: mapa de unidades com o candle de progresso e uma etapa de quiz ou de "montar a ordem". Tome como base `TrilhaGain/TrackMap.tsx` e `steps/`, mas reconstrua com dados estáticos. **Não importe código do app.**
   - Os tipos de lição: conceito, gráfico, ordem, quiz, verdadeiro ou falso.
   - A sequência de dias e as Coins por lição.
   - A Biblioteca: cursos em vídeo e artigos. Reaproveite os cards de `Ecosystem.tsx`, atualizando os títulos para cursos que existem.
3. **`CoinsLoop.tsx`:** um diagrama simples, *entre e receba tokens para a IA de trading → conclua lições e ganhe mais → use em análises de IA e conteúdos premium*, com a linha-ponte "os tokens chegam como Coins na sua conta", com 2 ou 3 exemplos de custo, se o usuário autorizar mostrar valores.
4. **Aceite:** screenshots, build e animações respeitando `prefers-reduced-motion`.

## Fase 4: pilar Ferramentas de IA

1. **`AIToolkit.tsx`:** abas ou grade com 4 ferramentas, cada uma com um mock visual:
   - **Análise por IA:** card com medidores de tendência, EMAs e um trecho de parecer fictício.
   - **Painel multi-timeframe:** linha de 5 timeframes com setas e medidores (base em `TFGauge.tsx`).
   - **Calendário interpretado:** um evento (ex.: Payroll) com cenários "acima / em linha / abaixo do esperado" e o efeito por ativo.
   - **Crypto:** termômetro, narrativas em alta e trecho de relatório.
2. Selo visível junto da seção: **"Conteúdo informativo. Não é recomendação de investimento."**
3. **`AIAssistant.tsx`:** ajuste a copy para "tire dúvidas sobre a plataforma a qualquer hora". **O assistente só responde sobre o uso da plataforma** e recusa perguntas de mercado, análise ou previsão (escopo em `../WebApp/supabase/functions/chat-assistant`). Nunca o apresente como "IA que analisa o mercado". Tire o foco em "apoio na instalação dos robôs" (pode virar um item menor).
4. **Análise de Resultados:** entra na Fase 5, junto com o Diário (é ferramenta da operação, não de IA).
5. **Aceite:** screenshots, conferindo que nenhum texto promete acerto ou lucro.

## Fase 5: Comunidade e operação

1. **`LiveCommunity.tsx`: "uma comunidade de aprendizado e troca mútua".**
   - **Mensagem:** o ecossistema inteiro é a comunidade. Quem aprende na Trilha leva dúvidas para a Sala ao Vivo, a equipe compartilha leituras, sinais e artigos, e os parceiros levam a plataforma adiante.
   - **Destaque visual:** a Sala ao Vivo, com um mock de "ao vivo agora" (o app já tem esse status) e os três benefícios descritos em `LiveRoom.tsx` (leitura do dia com raciocínio explicado, dúvidas durante a sessão, Trilha aplicada ao mercado).
   - **Itens de apoio:** sinais e artigos da equipe (com o aviso informativo), Assistente de IA e Parceiros.
   - Mostre o acesso à Sala conforme a decisão 3 da Fase 0.
   - **Não** cite postagens, feed, fórum ou grupo externo.
2. **`TradingJournal.tsx` → "Sua operação":** mantenha o Diário e acrescente:
   - **Análise de Resultados:** "envie o relatório do MT5 e veja curva de capital, resultado por par e por dia da semana, drawdown".
   - **Live Portfólio:** "acompanhe suas contas MT5 em tempo real".
3. **`Onboarding.tsx`:** novos passos, por exemplo: criar conta → fazer o tour → primeira lição da Trilha → explorar o calendário e a análise de IA → entrar na Sala ao Vivo → (opcional) conectar MT5 ou robôs. A corretora deixa de ser passo obrigatório.
4. **Aceite:** screenshots e build.

## Fase 6: automação como subproduto, perfis, preços, FAQ, CTA

1. **`Automation.tsx`:** uma seção, uma tela de altura no desktop:
   - Título no tom "Quer automatizar? Também está aqui."
   - Três itens: catálogo de robôs com perfil de risco, Hand Bot (ajuste pela plataforma), licenças e downloads MT5.
   - Link para as páginas de corretora e o `BrokerDisclaimer`.
   - Aviso de risco e de que rentabilidade passada não garante resultados futuros.
2. **`Pricing.tsx`:**
   - **Remova** o card "Membro Trader AFK": "Valor padrão após o período de lançamento", "Renovação anual grátis" e afins.
   - **Mantenha** a "Condição de Lançamento" com acesso gratuito, agora como card único e centralizado.
   - **Acrescente** o benefício "Tokens de boas-vindas para a IA exclusiva de trading", grátis para novos membros, com o valor da decisão 2 da Fase 0 ou, sem ele, sem número.
   - Atualize a lista do que está incluído para os três pilares: Trilha Gain, Biblioteca, ferramentas de IA e Sala ao Vivo (conforme a decisão 3).
   - Revise o asterisco de "vitalício*" para que a nota de rodapé continue verdadeira.
   - **Não publique** a landing com o bônus antes de ele existir no app (ver "Decisões já tomadas").
3. **`Profiles.tsx`, `FAQ.tsx`, `FinalCTA.tsx`:** aplique o `COPY.md` aprovado. O FinalCTA repete a condição de lançamento e os tokens de IA de boas-vindas.
4. **`Partners.tsx`:** encurte para um bloco com link para `/partners`.
5. **Footer:** links para Robôs, Corretoras, Parceiros e documentos legais (`src/lib/legal.ts`).
6. **Aceite:** página completa navegável e build passando.

## Fase 7: imagens reais, limpeza e QA

1. **Prints do app:** com uma conta de demonstração no WebApp (pergunte as credenciais ao usuário), capture Trilha Gain, Análise de IA, Calendário, Crypto, Sala ao Vivo, Diário e Resultados em 1440px e 390px. Exporte em `.webp` para `public/images/app/`. Substitua os mocks onde o print real for melhor. Verifique que nenhum print tem dado pessoal.
2. **Artes do tour:** avalie reaproveitar as ilustrações de `../WebApp/components/TourArt.tsx` (são JSX/SVG, então copie e adapte).
3. **Limpeza:** remova os blocos sem uso (`Comparison`, `Robots`, `AlgoEngine`, `Licensing`, `Downloads`, `FeatureGrid`, `PlatformTour`, `Ecosystem`), depois de um `grep` confirmar que nenhuma página os importa.
4. **Páginas de corretora e `/start` e `/mission`:** aplique a decisão 6 e confira que os links internos (`#robots`, `#licensing`, `#academy`) não apontam para âncoras que sumiram.
5. **QA:**
   - 375px, 390px, 768px, 1440px, sem rolagem horizontal.
   - Lighthouse mobile: Performance ≥ 85, Acessibilidade ≥ 95, SEO ≥ 95. Imagens com `loading="lazy"`, exceto a do Hero.
   - Teclado: navbar, abas do AIToolkit, FAQ e modal de parceiros.
   - Revisão de compliance: procure no texto "lucro", "ganho", "renda", "garant", "automático", "sinal" e revise cada ocorrência.
6. **Antes do deploy:** confirme que o bônus de boas-vindas (tokens de IA, creditados como Coins) já está em produção no WebApp.
7. **Aceite:** o usuário aprova. Merge e deploy na Vercel feitos **pelo usuário** ou com autorização explícita.

## Fora do escopo (anotar como ideia, não fazer)

- Depoimentos em vídeo de alunos (depende de material real).
- Página dedicada por pilar (`/aprender`, `/ia`, `/comunidade`) para SEO de cauda longa.
- Blog público espelhando os artigos do app.
- Sessão de postagens no app (planejada). Quando estiver no ar, a landing ganha uma seção de comunidade entre traders e o FAQ é atualizado.
