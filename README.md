# 🔄 Conversor de Arquivos - Extensão do Chrome

O **Conversor de Arquivos** é uma extensão para Google Chrome que permite converter rapidamente arquivos entre vários formatos, como PDF, DOC, JPG, PNG, MP4, entre outros. 🚀 A extensão facilita o upload e a conversão diretamente pelo navegador, oferecendo uma experiência simples e intuitiva.

## 🌟 Funcionalidades

- 📁 **Suporte a múltiplos formatos**: Converta arquivos PDF, DOC, JPG, PNG, MP4, entre outros.
- 🖱️ **Arrastar e soltar**: Basta arrastar o arquivo para a área de conversão.
- 📤 **Upload de arquivos do dispositivo ou nuvem**: Integração com Google Drive e Dropbox.
- 📊 **Conversão em lote**: Converta múltiplos arquivos de uma só vez.
- 🔗 **Download fácil**: Link direto para baixar o arquivo convertido.
- 🚀 **Interface intuitiva**: Rápida e fácil de usar, com barra de progresso visível durante a conversão.

## 📂 Estrutura do Projeto

```bash
file-converter-extension/
│
├── assets/             # Pasta contendo os ícones e outros recursos visuais
│   ├── icon128.png
│   ├── icon48.png
│   └── icon16.png
│
├── manifest.json       # Configuração da extensão do Chrome
├── popup.html          # HTML da interface do popup
├── script.js           # Lógica da conversão de arquivos em JavaScript
├── styles.css          # Estilos da interface em CSS
├── background.js       # Script que controla a comunicação com APIs externas
└── README.md           # Este arquivo de documentação
```

## 🚀 Como Instalar Localmente

1. Faça o download ou clone este repositório no seu computador.
2. Abra o Google Chrome e navegue até `chrome://extensions/`.
3. Ative o **Modo do Desenvolvedor** (localizado no canto superior direito).
4. Clique em **Carregar sem compactação** e selecione a pasta onde o projeto da extensão está localizado.
5. A extensão será carregada e aparecerá na lista de extensões do Chrome.

## 🎯 Como Usar

1. Clique no ícone do **Conversor de Arquivos** na barra de ferramentas do Chrome.
2. **Arraste e solte** um arquivo ou faça o **upload** de um arquivo do seu dispositivo ou de uma nuvem (Google Drive ou Dropbox).
3. Selecione o formato de **conversão** desejado.
4. Pressione o botão **Converter** para iniciar a conversão.
5. Após a conversão, faça o **download** do arquivo convertido.

## 💡 Dica

Use a conversão em lote para converter vários arquivos de uma vez e economizar tempo. Para manter uma boa performance, utilize arquivos de tamanho médio e evite grandes quantidades de conversões simultâneas.

## 🚧 Melhorias Futuras

- Adicionar suporte a mais formatos de arquivos.
- Implementar notificações ao concluir a conversão.
- Adicionar opções de personalização para formatos de saída.
- Melhorar a integração com mais serviços de armazenamento em nuvem, além do Google Drive e Dropbox.
