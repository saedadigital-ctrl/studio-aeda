#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para aplicar correções ortográficas e gramaticais no site Studio AEDA
"""

import re
from pathlib import Path

def apply_corrections_index():
    """Aplica correções no index.html"""
    file_path = Path("index.html")
    content = file_path.read_text(encoding='utf-8')
    
    # Correção 1: Adicionar ponto final em "transformando o atendimento..."
    content = content.replace(
        'transformando o atendimento e as vendas da sua empresa\n            </p>',
        'transformando o atendimento e as vendas da sua empresa.\n            </p>'
    )
    
    # Correção 2: "respondendo dúvidas" -> "respondendo a dúvidas"
    content = content.replace(
        'respondendo dúvidas',
        'respondendo a dúvidas'
    )
    
    # Correção 3: "com tom de voz" -> "com o tom de voz"
    content = content.replace(
        'com ton de voz da sua marca',
        'com o tom de voz da sua marca'
    )
    
    # Correção 4: Adicionar ponto final em "Automatize tarefas repetitivas..."
    content = content.replace(
        '<p>Automatize tarefas repetitivas e foque no crescimento estratégico do seu negócio</p>',
        '<p>Automatize tarefas repetitivas e foque no crescimento estratégico do seu negócio.</p>'
    )
    
    # Correção 5: Adicionar ponto final em "Otimize processos..."
    content = content.replace(
        '<p>Otimize processos e reduza até 40% dos custos operacionais com automação inteligente</p>',
        '<p>Otimize processos e reduza até 40% dos custos operacionais com automação inteligente.</p>'
    )
    
    # Correção 6: Adicionar ponto final em "Qualifique leads automaticamente..."
    content = content.replace(
        '<p>Qualifique leads automaticamente e aumente sua taxa de conversão em vendas</p>',
        '<p>Qualifique leads automaticamente e aumente sua taxa de conversão em vendas.</p>'
    )
    
    # Correção 7: Adicionar ponto final em "Dados e insights..."
    content = content.replace(
        '<p>Dados e insights acionáveis em relatórios visuais que você realmente entende</p>',
        '<p>Dados e insights acionáveis em relatórios visuais que você realmente entende.</p>'
    )
    
    # Correção 8: "Conversamos sobre seus desafios e identificamos oportunidades de IA"
    content = content.replace(
        '<p>Conversamos sobre seus desafios e identificamos oportunidades de IA</p>',
        '<p>Conversamos sobre seus desafios e identificamos oportunidades de IA.</p>'
    )
    
    # Correção 9: "Enviamos proposta com escopo..."
    content = content.replace(
        '<p>Enviamos proposta com escopo, prazos e ROI esperado em 24 horas</p>',
        '<p>Enviamos a proposta com escopo, prazos e ROI esperado em até 24 horas.</p>'
    )
    
    # Correção 10: "Desenvolvemos e implementamos em 2-4 semanas..."
    content = content.replace(
        '<p>Desenvolvemos e implementamos em 2-4 semanas com treinamento</p>',
        '<p>Desenvolvemos e implementamos em 2 a 4 semanas, com treinamento.</p>'
    )
    
    # Correção 11: "Acompanhamos resultados..."
    content = content.replace(
        '<p>Acompanhamos resultados e oferecemos suporte contínuo</p>',
        '<p>Acompanhamos os resultados e oferecemos suporte contínuo.</p>'
    )
    
    # Correção 12: Adicionar ponto final em cards de indústria
    content = content.replace(
        '<p>Atendimento automatizado, recomendações personalizadas e gestão de estoque</p>',
        '<p>Atendimento automatizado, recomendações personalizadas e gestão de estoque.</p>'
    )
    
    # Correção 13: Trocar hífen por travessão em "Não vendemos promessas"
    content = content.replace(
        'Não vendemos pacotes prontos - desenvolvemos',
        'Não vendemos pacotes prontos — desenvolvemos'
    )
    
    file_path.write_text(content, encoding='utf-8')
    print(f"✅ {file_path}: Correções aplicadas")

def apply_corrections_sobre():
    """Aplica correções no sobre.html"""
    file_path = Path("sobre.html")
    if not file_path.exists():
        print(f"⚠️  {file_path}: Arquivo não encontrado")
        return
        
    content = file_path.read_text(encoding='utf-8')
    
    # Trocar hífen por travessão
    content = content.replace(
        'Não vendemos promessas - entregamos',
        'Não vendemos promessas — entregamos'
    )
    
    # "por que" -> "por quê" (no final da frase)
    content = re.sub(
        r'o que está sendo feito, por que e que resultados',
        'o que está sendo feito, por quê e quais resultados',
        content
    )
    
    file_path.write_text(content, encoding='utf-8')
    print(f"✅ {file_path}: Correções aplicadas")

def apply_corrections_servicos():
    """Aplica correções no servicos.html"""
    file_path = Path("servicos.html")
    if not file_path.exists():
        print(f"⚠️  {file_path}: Arquivo não encontrado")
        return
        
    content = file_path.read_text(encoding='utf-8')
    
    # "respondendo dúvidas" -> "respondendo a dúvidas"
    content = content.replace(
        'respondendo dúvidas',
        'respondendo a dúvidas'
    )
    
    # Adicionar pontos finais
    content = re.sub(
        r'identificar oportunidades de IA</p>',
        'identificar oportunidades de IA.</p>',
        content
    )
    
    content = re.sub(
        r'com escopo, prazos, investimento e ROI esperado</p>',
        'com escopo, prazos, investimento e ROI esperado.</p>',
        content
    )
    
    content = re.sub(
        r'sua solução com acompanhamento próximo</p>',
        'sua solução com acompanhamento próximo.</p>',
        content
    )
    
    content = re.sub(
        r'fazemos ajustes e oferecemos suporte contínuo</p>',
        'fazemos ajustes e oferecemos suporte contínuo.</p>',
        content
    )
    
    file_path.write_text(content, encoding='utf-8')
    print(f"✅ {file_path}: Correções aplicadas")

def apply_corrections_contato():
    """Aplica correções no contato.html"""
    file_path = Path("contato.html")
    if not file_path.exists():
        print(f"⚠️  {file_path}: Arquivo não encontrado")
        return
        
    content = file_path.read_text(encoding='utf-8')
    
    # Adicionar ponto final
    content = content.replace(
        'você concorda com nossa Política de Privacidade</small>',
        'você concorda com nossa Política de Privacidade.</small>'
    )
    
    # "Seg-Sex" -> "Segunda a sexta"
    content = content.replace(
        'Seg-Sex: 9h às 18h',
        'Segunda a sexta: 9h às 18h'
    )
    
    file_path.write_text(content, encoding='utf-8')
    print(f"✅ {file_path}: Correções aplicadas")

def apply_corrections_privacidade():
    """Aplica correções no privacidade.html"""
    file_path = Path("privacidade.html")
    if not file_path.exists():
        print(f"⚠️  {file_path}: Arquivo não encontrado")
        return
        
    content = file_path.read_text(encoding='utf-8')
    
    # "através de" -> "por meio de"
    content = content.replace(
        'através de formulários',
        'por meio de formulários'
    )
    
    # "Responder suas solicitações" -> "Responder às suas solicitações"
    content = content.replace(
        'Responder suas solicitações',
        'Responder às suas solicitações'
    )
    
    file_path.write_text(content, encoding='utf-8')
    print(f"✅ {file_path}: Correções aplicadas")

if __name__ == "__main__":
    print("🔧 Aplicando correções ortográficas e gramaticais...\n")
    
    apply_corrections_index()
    apply_corrections_sobre()
    apply_corrections_servicos()
    apply_corrections_contato()
    apply_corrections_privacidade()
    
    print("\n✅ Todas as correções foram aplicadas com sucesso!")
