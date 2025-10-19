# 📅 Guia de Configuração - Google Agenda (Alternativa ao Calendly)

## Studio AEDA Digital - Sistema de Agendamento

Este guia explica como configurar o Google Agenda para agendamento de consultorias no site, como alternativa gratuita ao Calendly.

---

## 🎯 Por que usar Google Agenda?

### Vantagens
✅ **100% Gratuito** - Sem mensalidades ou taxas  
✅ **Integrado ao Gmail** - Já tem se usa Gmail  
✅ **Simples de configurar** - Menos de 10 minutos  
✅ **Notificações automáticas** - E-mail e SMS  
✅ **Sincronização** - Com todos os dispositivos  
✅ **Profissional** - Interface limpa e confiável  

### Comparação com Calendly

| Recurso | Google Agenda | Calendly |
|---------|---------------|----------|
| Custo | Gratuito | Pago (a partir de $12/mês) |
| Agendamento Online | ✅ Sim | ✅ Sim |
| Notificações | ✅ Sim | ✅ Sim |
| Integração Gmail | ✅ Nativa | ⚠️ Via API |
| Personalização | ⚠️ Limitada | ✅ Avançada |
| Lembretes automáticos | ✅ Sim | ✅ Sim |

---

## 🚀 Configuração Passo a Passo

### Método 1: Horário de Agendamento (Recomendado)

Este é o método mais simples e profissional, similar ao Calendly.

#### Passo 1: Ativar Horários de Agendamento

1. Acesse [Google Agenda](https://calendar.google.com)
2. Faça login com sua conta Gmail (s.aedadigital@gmail.com)
3. No menu lateral esquerdo, clique em **"Criar"** (botão +)
4. Selecione **"Horário de agendamento"**

#### Passo 2: Configurar Detalhes do Agendamento

1. **Título**: "Consultoria Gratuita - IA para Negócios"
2. **Duração**: 30 minutos (ou 60 minutos se preferir)
3. **Localização**: 
   - Opção 1: "Google Meet" (reunião online automática)
   - Opção 2: "WhatsApp: +55 (83) 99375-1326"
   - Opção 3: "Telefone: +55 (83) 99375-1326"

#### Passo 3: Definir Disponibilidade

1. **Horários disponíveis**:
   - Segunda a Sexta: 9h às 18h
   - Intervalo entre reuniões: 15 minutos
   - Antecedência mínima: 2 horas
   - Antecedência máxima: 30 dias

2. **Configurações adicionais**:
   - ✅ Permitir agendamento apenas em horários comerciais
   - ✅ Enviar confirmação por e-mail
   - ✅ Enviar lembrete 1 dia antes
   - ✅ Enviar lembrete 1 hora antes

#### Passo 4: Personalizar Formulário

Campos para solicitar do cliente:
- ✅ Nome completo
- ✅ E-mail
- ✅ Telefone/WhatsApp
- ✅ Nome da empresa
- ✅ Principal desafio/objetivo

#### Passo 5: Obter Link de Agendamento

1. Clique em **"Salvar"**
2. O Google gerará um link único, exemplo:
   ```
   https://calendar.google.com/calendar/appointments/schedules/AcZssZ3RjXXXXXXXXXXXXXXX
   ```
3. **Copie este link** - você vai precisar dele!

#### Passo 6: Configurar no Site

1. Abra o arquivo `contato-google-agenda.html`
2. Localize a linha 209 (seção do iframe)
3. Substitua o link placeholder pelo seu link real:

**ANTES:**
```html
<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Rj_PLACEHOLDER?gv=true"
```

**DEPOIS:**
```html
<iframe src="https://calendar.google.com/calendar/appointments/schedules/SEU_LINK_AQUI?gv=true"
```

4. Também atualize a linha 220 (botão "Abrir no Google Agenda"):

**ANTES:**
```html
<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Rj_PLACEHOLDER"
```

**DEPOIS:**
```html
<a href="https://calendar.google.com/calendar/u/0/appointments/schedules/SEU_LINK_AQUI"
```

5. Salve o arquivo
6. Renomeie `contato-google-agenda.html` para `contato.html` (substitua o arquivo antigo)
7. Faça upload no Netlify

---

### Método 2: Calendário Público (Alternativo)

Se o Método 1 não funcionar, use este método mais simples:

#### Passo 1: Criar Calendário Dedicado

1. No Google Agenda, clique em **"+"** ao lado de "Outros calendários"
2. Selecione **"Criar novo calendário"**
3. Nome: "Agendamentos Studio AEDA"
4. Descrição: "Consultorias e reuniões com clientes"
5. Clique em **"Criar calendário"**

#### Passo 2: Configurar Compartilhamento

1. Clique nos **3 pontos** ao lado do calendário criado
2. Selecione **"Configurações e compartilhamento"**
3. Role até **"Permissões de acesso"**
4. Marque: **"Disponibilizar publicamente"**
5. Escolha: **"Ver apenas livre/ocupado"** (para privacidade)

#### Passo 3: Obter Código de Incorporação

1. Na mesma página, role até **"Integrar calendário"**
2. Copie o código iframe, exemplo:
```html
<iframe src="https://calendar.google.com/calendar/embed?src=SEU_EMAIL%40gmail.com&ctz=America%2FSao_Paulo" 
        style="border: 0" 
        width="800" 
        height="600" 
        frameborder="0" 
        scrolling="no">
</iframe>
```

#### Passo 4: Inserir no Site

1. Abra `contato-google-agenda.html`
2. Substitua o iframe na linha 209 pelo código copiado
3. Ajuste width="100%" e height="600"
4. Salve e faça upload

---

## 📧 Configurar Notificações

### Para Você (Studio AEDA)

1. No Google Agenda, vá em **Configurações** (ícone de engrenagem)
2. Clique em **"Configurações de evento"**
3. Configure notificações:
   - ✅ E-mail: 1 dia antes
   - ✅ E-mail: 1 hora antes
   - ✅ Notificação: 15 minutos antes

### Para o Cliente

As notificações são enviadas automaticamente quando o cliente agenda:
- ✅ Confirmação imediata por e-mail
- ✅ Lembrete 1 dia antes
- ✅ Lembrete 1 hora antes

---

## 🎨 Personalização Avançada

### Adicionar Google Meet Automaticamente

1. Nas configurações do horário de agendamento
2. Em **"Localização"**, selecione **"Adicionar videoconferência do Google Meet"**
3. Agora toda reunião agendada terá link do Meet automático

### Cores e Aparência

O iframe do Google Agenda pode ser personalizado com parâmetros na URL:

```
?bgcolor=%235b3cc4    # Cor de fundo (roxo da marca)
&color=%23ffd600      # Cor do texto (amarelo da marca)
&ctz=America/Sao_Paulo # Fuso horário
&showTitle=0          # Ocultar título
&showNav=1            # Mostrar navegação
&showPrint=0          # Ocultar botão imprimir
&showTabs=0           # Ocultar abas
&showCalendars=0      # Ocultar lista de calendários
```

Exemplo completo:
```
https://calendar.google.com/calendar/embed?src=SEU_EMAIL&bgcolor=%235b3cc4&color=%23ffd600&ctz=America/Sao_Paulo&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0
```

---

## 🔧 Solução de Problemas

### Problema: "Calendário não encontrado"
**Solução**: Verifique se o calendário está configurado como público nas configurações de compartilhamento.

### Problema: Iframe não carrega
**Solução**: 
1. Verifique se o link está correto
2. Adicione `?gv=true` no final da URL
3. Teste o link diretamente no navegador

### Problema: Horários errados
**Solução**: Configure o fuso horário correto:
- Vá em Configurações > Fuso horário
- Selecione: "America/Sao_Paulo" (Brasília)

### Problema: Cliente não recebe confirmação
**Solução**:
1. Verifique se o e-mail do cliente está correto
2. Peça para verificar a pasta de spam
3. Ative notificações nas configurações

---

## 📱 Integração com WhatsApp

Para facilitar ainda mais, você pode criar um link direto que:
1. Abre o WhatsApp
2. Envia mensagem pré-definida solicitando agendamento

**Link WhatsApp para Agendamento**:
```
https://wa.me/5583993751326?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20sobre%20IA%20para%20meu%20negócio.%20Qual%20a%20melhor%20data%20e%20horário?
```

Este link já está incluído no arquivo `contato-google-agenda.html`.

---

## ✅ Checklist de Configuração

- [ ] Criar horário de agendamento no Google Agenda
- [ ] Configurar duração (30 ou 60 minutos)
- [ ] Definir horários disponíveis (Seg-Sex, 9h-18h)
- [ ] Adicionar Google Meet (opcional)
- [ ] Copiar link de agendamento
- [ ] Atualizar `contato-google-agenda.html` com o link
- [ ] Renomear arquivo para `contato.html`
- [ ] Fazer upload no Netlify
- [ ] Testar agendamento
- [ ] Verificar recebimento de notificações
- [ ] Testar em dispositivos móveis

---

## 🎯 Fluxo do Cliente

1. Cliente acessa **studioaeda.com.br/contato**
2. Vê 3 opções de contato (Agendar, WhatsApp, E-mail)
3. Clica em **"Agendar Agora"**
4. É levado para seção com Google Agenda
5. Escolhe data e horário disponível
6. Preenche formulário (nome, e-mail, telefone, etc)
7. Confirma agendamento
8. Recebe e-mail de confirmação com:
   - Data e hora
   - Link do Google Meet (se configurado)
   - Opção de adicionar ao calendário

---

## 💡 Dicas Profissionais

### 1. Bloqueie Horários Pessoais
- Crie eventos "Ocupado" para horários que não quer atender
- Use cores diferentes para diferenciar tipos de reunião

### 2. Configure Tempo de Preparação
- Adicione 15 minutos antes de cada reunião
- Evita agendamentos consecutivos

### 3. Limite Agendamentos por Dia
- Defina máximo de consultorias por dia
- Evita sobrecarga

### 4. Use Descrições Claras
- Explique o que será discutido na consultoria
- Mencione duração e formato (online/presencial)

### 5. Peça Informações Relevantes
- Adicione campos personalizados no formulário
- Pergunte sobre desafios específicos
- Isso ajuda a preparar a reunião

---

## 📞 Suporte

Se tiver dúvidas sobre a configuração:

**Google Agenda Help**:
- https://support.google.com/calendar

**Studio AEDA Digital**:
- 📧 E-mail: s.aedadigital@gmail.com
- 📱 WhatsApp: +55 (83) 99375-1326

---

## 🎉 Pronto!

Agora você tem um sistema de agendamento profissional, gratuito e totalmente integrado ao seu site!

**Vantagens desta solução**:
- ✅ Zero custo mensal
- ✅ Integração nativa com Gmail
- ✅ Notificações automáticas
- ✅ Google Meet incluído
- ✅ Sincronização em tempo real
- ✅ Interface profissional

---

**Última atualização**: Outubro 2025  
**Versão**: 1.0

