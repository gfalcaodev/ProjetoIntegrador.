# Projeto Integrador - Premier Moto Parts

**Pontifícia Universidade Católica de Goiás**  
**Escola Politécnica e de Artes**  
**Curso Tecnológico em Análise e Desenvolvimento de Sistemas**  
**Ano:** 2025  

---

## Aluno
**Gabriel Brito Falcão**

**Professores:**  
Anibal Santos Jukemura • Joriver Rodrigues Canedo • Juliana Paula Felix • Rafael Leal Martins

---

## 1. Problema / Oportunidade

Motociclistas enfrentam dificuldades em encontrar peças originais compatíveis com o modelo exato de suas motos, além da ausência de plataformas seguras, rápidas e organizadas que centralizem vendas, eventos e promoções do setor motociclístico.  

A oportunidade está em criar um **e-commerce inteligente**, com busca otimizada, recomendações automáticas e foco em segurança e desempenho, unindo **comércio, comunidade e informação**.

---

## 2. Descrição da Aplicação

O **Premier Moto Parts** será uma plataforma web responsiva voltada à venda de peças originais de motocicletas, oferecendo um **catálogo de produtos com busca filtrada** por modelo e marca, **login e cadastro de usuários**, além de **integração com redes sociais e blog de notícias**.  
Haverá também um **painel administrativo** para controle de estoque e pedidos.

A plataforma integrará um módulo de **Inteligência Artificial**, desenvolvido em **Python**, utilizando as bibliotecas **Scikit-learn** e **OpenCV**.  

Esse módulo será responsável por:
- Gerar **recomendações personalizadas de produtos** com base no comportamento e preferências do usuário;
- Realizar **edições automáticas de imagens**, ajustando brilho, contraste e removendo o fundo das fotos das peças cadastradas;
- Garantir **padronização visual** e melhor apresentação do catálogo.

---

## 3. Tecnologias Principais

| Área | Tecnologias |
|------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript (Bootstrap ou React) |
| **Backend** | Java (Spring Boot) – API RESTful para produtos, usuários e pedidos |
| **Banco de Dados** | PostgreSQL (JPA/Hibernate) |
| **IA** | Python – Scikit-learn (recomendação) e OpenCV (edição de imagens) |
| **DevOps** | GitLab CI/CD (`.gitlab-ci.yml`) |
| **Segurança** | Validação de inputs, hashing com BCrypt, autenticação JWT, uso de Prepared Statements |

---

## 4. Escopo Técnico

| **Pilar** | **Implementação** | **Justificativa** |
|------------|------------------|-------------------|
| **Estrutura de Dados OO** | Tabela Hash para busca rápida de peças por código ou nome. | Acelera consultas e melhora o desempenho das pesquisas no catálogo. |
| **Inteligência Artificial (IA)** | Sistema híbrido desenvolvido em **Python**, utilizando **Scikit-learn** para modelos de **Árvore de Decisão** e **Random Forest** na recomendação de produtos, e **OpenCV** para edição automática de imagens (ajuste de brilho, contraste e remoção de fundo). | Melhora a experiência do usuário com recomendações inteligentes e garante padronização visual no catálogo de produtos. |
| **Código Seguro** | Autenticação JWT, validação de inputs e hashing de senhas com BCrypt. | Garante integridade, segurança e privacidade dos dados dos usuários. |

---

## 5. Pipeline CI/CD (GitLab)

O repositório conterá um arquivo **`.gitlab-ci.yml`** com três estágios principais:

1️⃣ **Build** – Compilação do código Java com Maven/Gradle  
2️⃣ **Test** – Execução de testes unitários (JUnit)  
3️⃣ **Deploy** – Publicação opcional em ambiente de homologação (Render, AWS ou Heroku)

---

## 6. Público-Alvo

Motociclistas adultos (18+), mecânicos e entusiastas que buscam **praticidade, autenticidade e segurança** ao comprar peças originais de moto online.

---

## 7. Design e Referências

Design **moderno e interativo**, inspirado em:  
- [https://chapamotoparts.com.br](https://chapamotoparts.com.br)  
- [https://webermotoparts.com.br](https://webermotoparts.com.br)  

Com integração a redes sociais como **Instagram** e **YouTube**, além de seções visuais ricas em **vídeos e imagens de produtos**.

---

## 8. Equipe

**Integrante:** Gabriel Brito Falcão  

---

## 9. Conclusão

O projeto **Premier Moto Parts** propõe a criação de uma plataforma moderna, segura e inteligente voltada à venda de peças originais de motocicletas.  

Por meio da integração entre **Java (Spring Boot)** no backend e **Python** para os módulos de **Inteligência Artificial**, o sistema busca oferecer uma experiência de compra personalizada e eficiente.

A aplicação de IA neste projeto ocorre em dois eixos principais:

1. **Sistema de recomendação inteligente**, desenvolvido com a biblioteca **Scikit-learn**, utilizando modelos de **Árvore de Decisão** e **Random Forest** para analisar o comportamento e as preferências dos usuários, sugerindo produtos de acordo com seus interesses e histórico de navegação.  
2. **Edição automática de imagens**, implementada com **OpenCV**, que realiza o ajuste de brilho, contraste e remoção de fundo das fotos dos produtos, assegurando padronização visual e melhor apresentação no catálogo.

Com essa abordagem, o **Premier Moto Parts** combina **tecnologia, segurança e inteligência artificial** para oferecer uma solução completa e inovadora ao público motociclístico, unindo **comércio eletrônico, comunidade e inovação digital**.
