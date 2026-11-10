Instituto Pilates — Status do Projeto e Próximas Etapas
Atualizado em: 09/11/2026
Projeto: instituto-pilates-web
Ambiente: macOS, VS Code, Git e GitHub
Direção visual: A — Premium e sofisticado
Este documento consolida o que foi relatado e validado na conversa. Não é uma auditoria automática do repositório local. Itens sem confirmação explícita estão identificados como pendentes de verificação.

1. Objetivo
Desenvolver um site institucional moderno, responsivo e orientado à captação de novos alunos, com animações suaves ao rolar a tela, conteúdo institucional, provas sociais e contatos por unidade. A Home apresenta as duas unidades; cada uma terá uma página própria, com informações e serviços específicos.
Unidades e serviços
Unidade	Serviços confirmados
Aldeota	Somente Pilates
Parquelândia	Pilates e Laboratório de Força


Laboratório de Força (Parquelândia): serviço complementar ao Pilates, orientado e acompanhado por fisioterapeutas, com exercícios individualizados e progressão de cargas. Proposta voltada ao desenvolvimento e manutenção da força muscular, resistência, equilíbrio, estabilidade, autonomia funcional e envelhecimento saudável. Evitar descrevê-lo como academia convencional ou atribuí-lo à Aldeota. As alegações de benefícios em textos comerciais devem ser redigidas com cuidado e sem garantia de resultados individuais.
2. Tecnologias e decisões
- Next.js 16.4.5 (App Router), React e TypeScript.
- Tailwind CSS 4, com paleta extraída aproximadamente da identidade visual da marca.
- Motion for React (motion) para animações de entrada e ao rolar.
- Manrope como fonte principal; interface responsiva.
- Git + GitHub, repositório planejado: instituto-pilates-web (privado durante desenvolvimento).
- Hospedagem futura: Vercel (ainda não publicada).
- Banco de dados / backend próprio: não necessários para o MVP institucional; reconsiderar se houver agendamento interno, CRM ou painel administrativo.
Paleta inicial
Uso	Cor
Azul-marinho principal	#030B36
Vermelho de destaque/CTA	#E52D16
Fundo claro	#F7F8FA
Branco	#FFFFFF
Texto secundário	#69758B


Os códigos são aproximações iniciais da logo, não um manual oficial de marca.
3. Etapas concluídas e validadas pelo usuário
Etapa	Entrega	Situação
01	Configuração do Next.js no Mac e execução local	Concluída
03	Design System: cores, fonte, estilos globais e página de teste	Concluída
04	Header premium responsivo com menu dropdown “Unidades”	Concluída; checklist aprovado
05	Hero dividido (texto à esquerda, imagem à direita), CTAs e animações	Concluída; checklist aprovado
06	Seção Nossa História, Missão, Visão e Valores	Concluída; checklist aprovado
06 (complemento)	Player de vídeo de depoimento	Relatado como incluído e funcionando
07	Cards premium das duas unidades e destaque do Laboratório de Força	Concluída; 9 testes aprovados


Etapa 02 — estrutura/Git: foi adiada a pedido do usuário; a preparação do repositório foi retomada posteriormente. Sua conclusão no GitHub ainda precisa de confirmação.
Comportamentos já validados
- Navegação da Home e dropdown para Aldeota e Parquelândia.
- Layout responsivo básico, inclusive mobile, conforme checklists relatados.
- Botões/âncoras do Hero para história e unidades.
- Animações de entrada e whileInView nas seções construídas.
- Distinção correta: Aldeota = Pilates; Parquelândia = Pilates + Laboratório de Força.
- Fotografia no Hero e vídeo de depoimento local adicionados.
4. Organização do código na fase atual
Caminho local informado: /Users/setorbi/Documents/instituto-pilates-web
instituto-pilates-web/
├── public/
│   ├── images/
│   │   └── hero-pilates.jpg
│   └── videos/
│       └── depoimento-aluno-01.mp4   # arquivo local, removido do índice Git
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── aldeota/page.tsx           # rota provisória atualmente
│   │   └── parquelandia/page.tsx      # rota provisória atualmente
│   └── components/
│       ├── layout/Header.tsx
│       └── home/
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Units.tsx
│           └── Testimonials.tsx
├── .gitignore
├── package.json
└── package-lock.json
A estrutura reflete o desenvolvimento descrito na conversa; conferir com o VS Code caso tenham ocorrido alterações locais não informadas.
5. Situação do GitHub — ponto de atenção imediato
Nome do repositório: instituto-pilates-web.
Histórico recente
1. Foi criado um commit local com mensagem feat: implementa home institucional do Instituto Pilates.
2. O primeiro git push -u origin main falhou com RPC failed; HTTP 400 após tentativa de envio de aproximadamente 53,53 MiB.
3. git ls-remote origin refs/heads/main não retornou referência; portanto não havia confirmação de publicação da branch main.
4. O arquivo public/videos/depoimento-aluno-01.mp4 tinha cerca de 53–54 MB, e foi identificado como principal responsável pelo tamanho.
5. O comando git rm --cached public/videos/depoimento-aluno-01.mp4 foi executado com sucesso: o vídeo continuou no Mac e passou a constar como remoção no índice Git.
6. O .gitignore foi modificado para ignorar vídeos MP4 em /public/videos/.
7. Foi recomendado executar git add .gitignore, git commit --amend --no-edit, verificar os arquivos rastreados e refazer o push. Não recebemos confirmação de que esses passos finais foram executados ou de que o push foi concluído.
Próximos comandos (após verificar a situação atual)
cd ~/Documents/instituto-pilates-web
git status -sb
git log -1 --format="%H %s"
git ls-files public/videos/
git ls-remote origin refs/heads/main
Se o amend ainda estiver pendente e o vídeo realmente estiver fora do índice:
git add .gitignore
git commit --amend --no-edit
git push -u origin main
Confirmar sincronização comparando os hashes de:
git rev-parse HEAD
git ls-remote origin refs/heads/main
Importante: não executar git push --force sem verificar o histórico remoto. Não apagar a pasta de vídeo: o arquivo é utilizado localmente, mas não estará disponível no deploy enquanto não houver uma estratégia de hospedagem/publicação da mídia.
6. Próximas etapas de desenvolvimento
Etapa 08 — Página Aldeota (próxima implementação)
Ainda não validada / não confirmada como implementada. O código foi proposto na conversa, mas a execução foi interrompida para cuidar do GitHub.
- Hero exclusivo Aldeota, imagem public/images/aldeota-studio.jpg (se disponível).
- Apresentação do Pilates e diferenciais.
- Galeria com fotos da estrutura.
- Profissionais da unidade, quando houver conteúdo.
- Contato, Instagram, Google Maps, avaliações e WhatsApp (dados reais pendentes).
- CTA de agendamento e SEO local da Aldeota.
- Testar responsividade, âncoras e ausência de Laboratório de Força nessa página.
Etapa 09 — Página Parquelândia
- Hero próprio, galeria e professores.
- Seção de Pilates.
- Laboratório de Força em destaque: conceito, acompanhamento fisioterapêutico, individualização, benefícios descritos com precisão e CTA.
- Contato, Instagram, Maps, avaliações e WhatsApp próprios.
- SEO local da Parquelândia.
Etapa 10 — Conteúdo real e identidade institucional
- Receber e editar história oficial, missão, visão e valores.
- Substituir textos genéricos e imagens provisórias.
- Incorporar fotos de professores e ambientes com autorização de uso.
- Organizar depoimentos reais, obter autorizações e inserir legendas nos vídeos.
- Revisar nomes, credenciais e informações profissionais antes de publicar.
Etapa 11 — Conversão, SEO e integrações
- WhatsApp separado por unidade com mensagens pré-preenchidas.
- Instagram e endereço individual de cada estúdio.
- Link do perfil do Google, avaliações verificadas e rota no Google Maps.
- Títulos, descrições, canonical, sitemap, Open Graph e dados estruturados LocalBusiness por unidade.
- Analytics 4, Search Console e eventos de clique (WhatsApp, agendamento, rotas).
- Política de Privacidade e tratamento adequado de dados pessoais.
- Rodapé global e eventuais perguntas frequentes.
Etapa 12 — Qualidade e publicação
- Testes desktop/mobile e nos principais navegadores.
- Acessibilidade: navegação por teclado, contraste, foco, redução de movimento e legendas.
- Performance: imagens otimizadas, carregamento de vídeos sob demanda, métricas Core Web Vitals.
- Preparar hospedagem dos vídeos (não dependente de arquivo ignorado no Git).
- Publicação na Vercel, domínio e HTTPS.
- Testar formulários/links de contato e conversões reais.
7. Materiais ainda necessários
Material / dado	Estado
Logo do Instituto Pilates	Fornecida como imagem de referência; avaliar arquivo vetorial/transparente
História oficial	Aguardando
Missão, visão e valores oficiais	Aguardando
Foto do Hero	Incluída localmente
Vídeo de depoimento	Incluído localmente, publicação futura pendente
Fotos específicas da Aldeota	Aguardando/confirmar
Fotos específicas da Parquelândia	Aguardando/confirmar
Fotos e vídeos dos profissionais	Aguardando
Mais relatos e autorizações de alunos	Aguardando
WhatsApp, Instagram, endereço, horários por unidade	Aguardando
Links dos perfis e avaliações do Google	Aguardando
Domínio definitivo	A definir


8. Critérios para considerar o MVP pronto
- [ ] main publicada no GitHub e sincronizada com o projeto local.
- [ ] Home completa, com conteúdos reais ou explicitamente revisados para publicação.
- [ ] Página Aldeota com informações corretas de Pilates.
- [ ] Página Parquelândia com Pilates e Laboratório de Força.
- [ ] Contatos e localização corretos, com botões testados.
- [ ] Depoimentos e mídia autorizados e disponíveis na versão hospedada.
- [ ] SEO, acessibilidade e privacidade revisados.
- [ ] Site responsivo, performático e publicado sob domínio aprovado.
9. Próxima ação recomendada
Concluir a sincronização com o GitHub, verificando se o commit foi atualizado sem o vídeo e se a branch main está presente no repositório remoto. Em seguida, implementar e validar a Etapa 08 — Aldeota. Essa sequência cria um ponto de recuperação confiável antes das próximas mudanças de código.
Observação de manutenção: atualizar este arquivo ao finalizar cada etapa, registrando data, alterações, testes realizados e pendências. Ele pode ser incluído no repositório com o nome STATUS_PROJETO_INSTITUTO_PILATES.md.