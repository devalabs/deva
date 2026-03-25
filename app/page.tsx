"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const isScrollingRef = useRef(false);
  const touchStartRef = useRef(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrollingRef.current) return;

      // Normalize delta (some touchpads use deltaX, others deltaY)
      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const threshold = 15; // Minimum scroll amount to trigger page change

      if (Math.abs(delta) < threshold) return;

      e.preventDefault();
      isScrollingRef.current = true;

      if (delta > 0) {
        setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1));
      } else {
        setCurrentPage((prev) => Math.max(0, prev - 1));
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    };

    const handleTouchStart = (e) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrollingRef.current) return;

      const touchEnd = e.changedTouches[0].clientY;
      const diff = touchStartRef.current - touchEnd;

      if (Math.abs(diff) > 50) {
        isScrollingRef.current = true;

        if (diff > 0) {
          setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1));
        } else {
          setCurrentPage((prev) => Math.max(0, prev - 1));
        }

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    const handleKeydown = (e) => {
      if (isScrollingRef.current) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        isScrollingRef.current = true;
        setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1));
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        isScrollingRef.current = true;
        setCurrentPage((prev) => Math.max(0, prev - 1));
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const pages = [
    // Page 0: Cover Page
    {
      type: "cover",
      content: {
        name: "DEVA",
        subtitle: "Instituto Politécnico do Cávado e do Ave",
      },
    },
    // Page 1: Achievements
    {
      type: "achievements",
      content: {
        name: "TIAGO VILELA B. TEIXEIRA",
        title: "Interdisciplinary Fashion Designer",
        location: "Porto, Portugal",
        contact: {
          phone: "+351 91 294 5743",
          email: "tiagojosevilelatexeira@outlook.pt",
          website: "www.deva.com",
        },
        achievements: [
          {
            year: "2022",
            title:
              "Coleção Primavera/Verão S022, iniciativa para jovens empreendedores na área da moda",
            detail: "",
            award: "",
          },
          {
            year: "2024",
            title:
              "Coleção Primavera/Verão S024, iniciativa para jovens empreendedores na área da moda",
            detail: "",
            award: "",
          },
        ],
      },
    },
    // Page 1: Project Map
    {
      type: "map",
      content: {
        title: "PROJETOS SELECIONADOS",
        projects: [
          { name: "Projecto", x: 57, y: 18, number: "1", region: "Portugal" },
          { name: "Modelação", x: 57, y: 18, number: "1", region: "Portugal" },
          { name: "Fografia", x: 57, y: 18, number: "1", region: "Portugal" },
          { name: "CAD", x: 57, y: 18, number: "1", region: "Portugal" },
          {
            name: "Illustração",
            x: 57,
            y: 18,
            number: "1",
            region: "Portugal",
          },
          { name: "Estágio", x: 57, y: 18, number: "1", region: "Portugal" },
        ],
      },
    },
    {
      type: "project-hero",
      content: {
        title: "PROJECTO",
        subtitle:
          "Nesta unidade curricular baseada em projetos, desenvolvi uma coleção de moda completa, do conceito à apresentação final, aprofundando minha compreensão sobre identidade, significado do produto, funcionalidade, sustentabilidade e o processo criativo. Ao longo do curso, explorei e defini minha própria identidade como designer, construindo uma coleção que refletisse minha estética pessoal, meus valores e meu universo criativo. Trabalhei com metodologias de design profissionais, percorrendo todas as etapas do desenvolvimento de uma coleção: pesquisa conceitual, estudos visuais, seleção de cores e materiais, exploração de silhuetas, design técnico e criação de protótipos. Aprendi a traduzir desenhos técnicos bidimensionais em peças tridimensionais, integrando conhecimentos de modelagem e fabricação às minhas decisões criativas. O projeto incentivou a consciência crítica, ética e ambiental, levando-me a considerar todo o ciclo de vida de uma peça de roupa — do conceito e produção à usabilidade e ao significado cultural mais amplo. Também aprimorei minhas habilidades em organização, comunicação, gestão do tempo e trabalho em equipe, simulando o fluxo de trabalho de um estúdio de moda profissional. Ao final da unidade curricular, fui capaz de criar, desenvolver e comunicar uma coleção coerente, adequada para estúdios de moda, escritórios de design ou empresas do setor têxtil e da moda.",
        details: [
          "PROJETO DE DESIGN DE MODA I / II",
          "PROFESSORAS: CARLA PONTES, TÂNIA NICOLE",
          "DURAÇÃO: 300H",
          "ANO: 2020/2024",
        ],
        image: "",
      },
    },
    {
      type: "project-hero",
      content: {
        title: "HANAKI",
        subtitle: "Hanaki",
        details: [
          "PROJETO DE DESIGN DE MODA I / II",
          "PROFESSORAS: CARLA PONTES, TÂNIA NICOLE",
          "DURAÇÃO: 300H",
          "ANO: 2020/2024",
        ],
        image: "",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image:
          "./portfolio/images/collection1/Artboard 4.png?w=1200&h=800&fit=crop",
        rightImageLabel: "Página | 1",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image:
          "./portfolio/images/collection1/Artboard 6.png?w=1200&h=800&fit=crop",
        rightImageLabel: "Página | 2",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image:
          "./portfolio/images/collection1/Artboard 7.png?w=1200&h=800&fit=crop",
        rightImageLabel: "Página | 3",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image:
          "./portfolio/images/collection1/Artboard 8.png?w=1200&h=800&fit=crop",
        rightImageLabel: "Página | 4",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image: "./portfolio/images/collection1/Artboard 9.png",
        rightImageLabel: "Página | 5",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image: "./portfolio/images/collection1/Artboard 10.png",
        rightImageLabel: "Página | 6",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image:
          "./portfolio/images/collection1/Artboard 11.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 7",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image:
          "./portfolio/images/collection1/Artboard 12.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 8",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "Hanaki",
        partName: "Coleção",
        part: "1",
        image:
          "./portfolio/images/collection1/Artboard 13.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 9",
      },
    },
    {
      type: "project-hero",
      content: {
        title: "DOURO",
        subtitle: "douro",
        details: [
          "PROJETO DE DESIGN DE MODA I / II",
          "PROFESSORAS: CARLA PONTES, TÂNIA NICOLE",
          "DURAÇÃO: 300H",
          "ANO: 2020/2024",
        ],
        image: "",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 1.png?w=1200&h=800&fit=crop",
        rightImageLabel: "Página | 1",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 2.png?w=1200&h=800&fit=crop",
        rightImageLabel: "Página | 2",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 3.png?w=1200&h=800&fit=crop",
        rightImageLabel: "Página | 3",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 4.png?w=1200&h=800&fit=crop",
        rightImageLabel: "Página | 4",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 5.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 5",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 6.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 6",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 7.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 7",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 8.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 8",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 9.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 9",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 10.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 10",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 11.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 11",
      },
    },

    {
      type: "project-detail",
      content: {
        projectName: "douro",
        partName: "Coleção",
        part: "2",
        image:
          "./portfolio/images/collection2/Artboard 15.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 15",
      },
    },

    // Page 5: Modelação é Prototipo
    {
      type: "project-hero",
      content: {
        title: "MODELAÇÃO E PROTOTIPO",
        subtitle:
          "Nesta unidade, desenvolvi minha capacidade de transformar conceitos de design em protótipos funcionais de vestuário. Aprendi a interpretar desenhos técnicos, analisar arquivos técnicos e converter ideias de moldes 2D em formas 3D. Ao longo do processo, aprimorei minha criatividade, autonomia e capacidade de tomada de decisões críticas, abordando cada projeto como designer ou técnico, respondendo às necessidades do cliente. Trabalhando diretamente na oficina de costura, familiarizei-me com os equipamentos e técnicas necessários para a construção de protótipos. Selecionei as matérias-primas adequadas, preparei e cortei os tecidos, montei os componentes da peça e refinei os detalhes de acabamento. Essa experiência me permitiu avaliar a qualidade em cada etapa da produção e dar vida a protótipos completos e bem-executados.",
        details: [
          "ATELIER IN FASHION DESIGN / PATTERN MODELING",
          "TEACHER'S : ANA SILVA, DAVID CATALAN",
          "DURATION : 250H",
          "YEAR : 2020/2024",
        ],
        image: "",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 1.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página| 1",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 2.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 2",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 3.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página| 3",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 4.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 4",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 5.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 5",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 6.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página| 6",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 7.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página| 7",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 8.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página| 8",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "modelaçãoprototipo",
        partName: "Modelação e Prototipo",
        part: "1",
        image: "./portfolio/images/pecas/Artboard 9.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página| 9",
      },
    },

    {
      type: "project-hero",
      content: {
        title: "FOTOGRAFIA",
        subtitle:
          "EM fotografia de moda, explorei a relação entre vestuário, identidade e narrativa visual. Desenvolvi conceitos, dirijo modelos, escolho locações e trabalho com iluminação para criar imagens fortes e expressivas que comunicam humor, narrativa e identidade da marca. Minha abordagem combina direção criativa com habilidades técnicas em composição, edição de fotos e comunicação visual.",
        details: [
          "FOTOGRAFIA DE MODA",
          "PROFESSOR : RUI FERREIRA",
          "DURAÇÃO : 50H",
          "ANO : 2020/2021",
        ],
        image: "",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "fotografia",
        partName: "Fotografia",
        part: "1",
        image: "./portfolio/images/photography/Asset1.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 1",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "fotografia",
        partName: "Fotografia",
        part: "1",
        image: "./portfolio/images/photography/Asset2.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 2",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "fotografia",
        partName: "Fotografia",
        part: "1",
        image: "./portfolio/images/photography/Asset3.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 3",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "fotografia",
        partName: "Fotografia",
        part: "1",
        image: "./portfolio/images/photography/fotoshot1.png",
        rightImageLabel: "Página | 4",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "fotografia",
        partName: "Fotografia",
        part: "1",
        image: "./portfolio/images/photography/fotoshot2.png",
        rightImageLabel: "Página | 5",
      },
    },

    {
      type: "project-hero",
      content: {
        title: "LABORATÓRIO CAD",
        subtitle:
          "Nesta unidade, desenvolvi habilidades essenciais em modelagem CAD 2D e 3D aplicada ao design de moda. Utilizando softwares como o CLO3D e ferramentas vetoriais contemporâneas, aprendi a criar desenhos técnicos, moldes de vestuário e protótipos virtuais tridimensionais que dão suporte aos processos criativos e de produção na moda. Ao longo do curso, explorei o uso da modelagem digital para visualizar silhuetas, testar construções e simular materiais, permitindo uma tomada de decisão mais rápida e um desenvolvimento mais eficiente das peças. Pratiquei a transformação de arquivos técnicos 2D em modelos 3D, a preparação de arquivos para corte digital e a manipulação de gráficos para uso em estampas, aviamentos e desenvolvimento de moldes. Essa experiência fortaleceu minha capacidade de analisar e interpretar modelos digitais, compreender o papel dos sistemas CAD nos fluxos de trabalho industriais e criativos e aplicar essas ferramentas no contexto real da criação de uma coleção de moda. Ao final da unidade, fui capaz de criar e apresentar um projeto completo de vestuário em 3D, integrando todas as competências técnicas e criativas adquiridas.",
        details: [
          "LABORATÓRIO CAD",
          "PROFESSOR : SÉRGIO OLIVEIRA",
          "DURAÇÃO : 60H",
          "ANO : 2021/2022",
        ],
        image: "",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 1.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 1",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 2.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 2",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 3.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 3",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 4.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 4",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 5.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 5",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 6.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 6",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 7.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 7",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 8.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 8",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 9.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 9",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 10.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 10",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "cad",
        partName: "Laboratório CAD",
        part: "1",
        image: "./portfolio/images/clo3d/Artboard 11.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 11",
      },
    },

    // Page 12: Tower of Natural Selection Hero
    {
      type: "project-hero",
      content: {
        title: "ILUSTRAÇÃO DIGITAL, COMUNICAÇÃO GRÁFICA E AUDIOVISUAL",
        subtitle:
          "In this unit, I developed essential skills in visual communication, focusing on how graphic design supports brand creation. I worked with image editing, typography, color systems, and layout to build clear and impactful visual identities. Using digital tools, I created web layouts and graphic materials that communicate a brand’s concept consistently across different media. This experience strengthened my ability to design, analyze, and present visual content that aligns with a brand’s message and identity and I developed my skills in digital illustration, learning to use vector and bitmap software to create impactful visual representations for fashion design. I worked with color, form, and composition in a two-dimensional space, applying digital techniques to produce drawings, graphics, and fashion illustrations. Throughout the course, I became confident using tools like Illustrator and Photoshop, creating digital libraries, exploring shortcuts and commands, and building illustrations that support my design projects creatively and professionally.",
        details: [
          "ILUSTRAÇÃO DIGITAL, COMUNICAÇÃO GRÁFICA E AUDIOVISUAL",
          "PROFESSORES : LURDES MOREIRA, FÀBIO RODRIGUES",
          "DURAÇÃO : 150H",
          "ANO : 2020 /2024",
        ],
        image: "",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "illus",
        partName: "Illustração Digital, Comunicação Gráfica e Audiovisual",
        part: "1",
        image:
          "./portfolio/images/illustration/Artboard 1.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 1",
      },
    },
    // Page 13: Intership Selection Hero
    {
      type: "project-hero",
      content: {
        title: "ESTÁGIO CURRICULAR",
        subtitle: "CARLA PONTES",
        details: [
          "PLANO: EXPERIMENTAÇÃO CRIATIVA EM MODELAGEM, CONFECÇÃO DE AMOSTRAS, LOOKBOOK, STYLING, SHOW DE COLEÇÃO E PRODUÇÃO DE CONTEÚDO PARA MÍDIAS SOCIAIS.",
          "ANO: 2024",
          "LOCALIZAÇÃO: PORTO",
          "TAGS: UPCYLING, PRODUCTION, DESIGN, STYLE, SHOOTING, COMMUNICATION.",
        ],
        image: "",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 1.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 1",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 2.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 2",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 3.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 3",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 4.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 4",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 5.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 5",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 6.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 6",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 7.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 7",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 8.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 8",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image: "./portfolio/images/estagio/Artboard 9.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 9",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/Artboard 10.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 10",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/Artboard 11.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 11",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 1.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 12",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 2.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 13",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 3.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 14",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 4.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 15",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 5.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 16",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 6.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 17",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 7.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 18",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 8.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 19",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 9.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 20",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 10.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 21",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 11.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 22",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 12.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 23",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 13.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 24",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 14.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 25",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 15.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 26",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 16.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 27",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 17.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 28",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 18.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 29",
      },
    },
    {
      type: "project-detail",
      content: {
        projectName: "intership",
        partName: "Estágio",
        part: "1",
        image:
          "./portfolio/images/estagio/editorial/Artboard 19.png?w=600&h=500&fit=crop",
        rightImageLabel: "Página | 30",
      },
    },

    // Page 15: Closing Page
    {
      type: "closing",
      content: {
        signature: "Tiago Vilela",
        end: "end .",
      },
    },
  ];

  const currentPageData = pages[currentPage];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between p-2">
        <div>
          <h1 className="font-serif text-sm tracking-wider">DEVA</h1>
          <p className="text-xs text-zinc-500 mt-1">Porto, Portugal</p>
        </div>
      </header>
      {/* Navigation */}
      <nav className="fixed bottom-8 left-2 z-50 flex items-center gap-6 text-xs tracking-wider">
        <a href="/" className="hover:text-zinc-400 transition-colors">
          [ HOME ]
        </a>
        <a
          href="/about"
          className="text-xs tracking-wider hover:text-zinc-400 transition-colors"
        >
          [ SOBRE ]
        </a>
      </nav>

      {/* Page Indicator */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-1">
        <div className="flex items-end gap-1">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-1 transition-all duration-300 hover:bg-white cursor-pointer ${
                index === currentPage
                  ? "h-8 bg-white"
                  : index < currentPage
                    ? "h-4 bg-gray-400"
                    : "h-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="min-h-screen flex items-center justify-center p-8 transition-all duration-700">
        {/* Cover Page */}
        {currentPageData.type === "cover" && (
          <div className="text-center">
            <h1 className="text-6xl tracking-[0.3em] font-light mb-4 text-zinc-300">
              {currentPageData.content.name}
            </h1>
            <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
              {currentPageData.content.subtitle}
            </p>
          </div>
        )}

        {/* Achievements Page */}
        {currentPageData.type === "achievements" && (
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h1 className="font-serif text-4xl tracking-wider mb-2">
                    {currentPageData.content.name}
                  </h1>
                  <p className="text-sm text-zinc-400">
                    {currentPageData.content.title}
                  </p>
                </div>
                <div className="text-xs text-zinc-500 space-y-1">
                  <p>{currentPageData.content.location}</p>
                  <p>{currentPageData.content.contact.phone}</p>
                  <p>{currentPageData.content.contact.email}</p>
                  <p>{currentPageData.content.contact.website}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm tracking-wider mb-8 border-b border-zinc-800 pb-2">
                CONQUISTAS
              </h2>
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
                {currentPageData.content.achievements.map(
                  (achievement, index) => (
                    <div key={index} className="flex gap-6 text-xs">
                      <span className="text-zinc-600 w-12 flex-shrink-0">
                        {achievement.year}
                      </span>
                      <div className="flex-1">
                        <p className="text-white mb-1">+ {achievement.title}</p>
                        {achievement.detail && (
                          <p className="text-zinc-500 text-[10px] leading-relaxed">
                            {achievement.detail}
                          </p>
                        )}
                      </div>
                      {achievement.award && (
                        <span className="text-zinc-400 text-right w-32 flex-shrink-0">
                          {achievement.award}
                        </span>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        )}

        {/* Project Map Page */}
        {currentPageData.type === "map" && (
          <div className="max-w-[95vw] w-full h-[85vh] relative">
            <h2 className="absolute top-20 right-0 text-sm tracking-wider z-10">
              SELECTED <span className="text-zinc-600">PROJECTS</span>
            </h2>

            {/* Map visualization */}
            <svg
              className="w-full h-full"
              viewBox="0 0 100 70"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* World map dots pattern */}
              <g opacity="0.2">
                {/* North America */}
                {[
                  [8, 18],
                  [9, 18],
                  [10, 18],
                  [11, 18],
                  [12, 17],
                  [13, 17],
                  [14, 16],
                  [15, 16],
                  [16, 16],
                  [17, 16],
                  [18, 16],
                  [7, 19],
                  [8, 19],
                  [9, 19],
                  [10, 19],
                  [11, 19],
                  [12, 19],
                  [13, 19],
                  [14, 18],
                  [15, 18],
                  [16, 18],
                  [17, 18],
                  [18, 18],
                  [19, 18],
                  [6, 20],
                  [7, 20],
                  [8, 20],
                  [9, 20],
                  [10, 20],
                  [11, 20],
                  [12, 20],
                  [13, 20],
                  [14, 20],
                  [15, 20],
                  [16, 20],
                  [17, 20],
                  [18, 20],
                  [19, 20],
                  [20, 19],
                  [5, 21],
                  [6, 21],
                  [7, 21],
                  [8, 21],
                  [9, 21],
                  [10, 21],
                  [11, 21],
                  [12, 21],
                  [13, 21],
                  [14, 21],
                  [15, 21],
                  [16, 21],
                  [17, 21],
                  [18, 21],
                  [19, 21],
                  [20, 21],
                  [21, 20],
                  [4, 22],
                  [5, 22],
                  [6, 22],
                  [7, 22],
                  [8, 22],
                  [9, 22],
                  [10, 22],
                  [11, 22],
                  [12, 22],
                  [13, 22],
                  [14, 22],
                  [15, 22],
                  [16, 22],
                  [17, 22],
                  [18, 22],
                  [19, 22],
                  [20, 22],
                  [21, 22],
                  [4, 23],
                  [5, 23],
                  [6, 23],
                  [7, 23],
                  [8, 23],
                  [9, 23],
                  [10, 23],
                  [11, 23],
                  [12, 23],
                  [13, 23],
                  [14, 23],
                  [15, 23],
                  [16, 23],
                  [17, 23],
                  [18, 23],
                  [19, 23],
                  [20, 23],
                  [21, 23],
                  [4, 24],
                  [5, 24],
                  [6, 24],
                  [7, 24],
                  [8, 24],
                  [9, 24],
                  [10, 24],
                  [11, 24],
                  [12, 24],
                  [13, 24],
                  [14, 24],
                  [15, 24],
                  [16, 24],
                  [17, 24],
                  [18, 24],
                  [19, 24],
                  [20, 24],
                  [21, 24],
                  [5, 25],
                  [6, 25],
                  [7, 25],
                  [8, 25],
                  [9, 25],
                  [10, 25],
                  [11, 25],
                  [12, 25],
                  [13, 25],
                  [14, 25],
                  [15, 25],
                  [16, 25],
                  [17, 25],
                  [18, 25],
                  [19, 25],
                  [20, 25],
                  [21, 25],
                  [6, 26],
                  [7, 26],
                  [8, 26],
                  [9, 26],
                  [10, 26],
                  [11, 26],
                  [12, 26],
                  [13, 26],
                  [14, 26],
                  [15, 26],
                  [16, 26],
                  [17, 26],
                  [18, 26],
                  [19, 26],
                  [20, 26],
                  [7, 27],
                  [8, 27],
                  [9, 27],
                  [10, 27],
                  [11, 27],
                  [12, 27],
                  [13, 27],
                  [14, 27],
                  [15, 27],
                  [16, 27],
                  [17, 27],
                  [18, 27],
                  [19, 27],
                  [8, 28],
                  [9, 28],
                  [10, 28],
                  [11, 28],
                  [12, 28],
                  [13, 28],
                  [14, 28],
                  [15, 28],
                  [16, 28],
                  [17, 28],
                  [18, 28],
                  [9, 29],
                  [10, 29],
                  [11, 29],
                  [12, 29],
                  [13, 29],
                  [14, 29],
                  [15, 29],
                  [16, 29],
                  [17, 29],
                ].map(([x, y], i) => (
                  <circle key={`na-${i}`} cx={x} cy={y} r="0.15" fill="white" />
                ))}

                {/* South America */}
                {[
                  [15, 30],
                  [16, 30],
                  [17, 30],
                  [14, 31],
                  [15, 31],
                  [16, 31],
                  [17, 31],
                  [18, 31],
                  [14, 32],
                  [15, 32],
                  [16, 32],
                  [17, 32],
                  [18, 32],
                  [15, 33],
                  [16, 33],
                  [17, 33],
                  [18, 33],
                  [19, 33],
                  [15, 34],
                  [16, 34],
                  [17, 34],
                  [18, 34],
                  [19, 34],
                  [16, 35],
                  [17, 35],
                  [18, 35],
                  [19, 35],
                  [16, 36],
                  [17, 36],
                  [18, 36],
                  [19, 36],
                  [17, 37],
                  [18, 37],
                  [19, 37],
                  [17, 38],
                  [18, 38],
                  [19, 38],
                  [18, 39],
                  [19, 39],
                  [18, 40],
                  [19, 40],
                  [19, 41],
                ].map(([x, y], i) => (
                  <circle
                    key={`sa-${i}`}
                    cx={x}
                    cy={y}
                    r="0.15"
                    fill="white"
                    opacity="0.7"
                  />
                ))}

                {/* Europe */}
                {[
                  [42, 16],
                  [43, 16],
                  [44, 16],
                  [45, 16],
                  [46, 16],
                  [47, 16],
                  [48, 16],
                  [41, 17],
                  [42, 17],
                  [43, 17],
                  [44, 17],
                  [45, 17],
                  [46, 17],
                  [47, 17],
                  [48, 17],
                  [49, 17],
                  [41, 18],
                  [42, 18],
                  [43, 18],
                  [44, 18],
                  [45, 18],
                  [46, 18],
                  [47, 18],
                  [48, 18],
                  [49, 18],
                  [50, 18],
                  [41, 19],
                  [42, 19],
                  [43, 19],
                  [44, 19],
                  [45, 19],
                  [46, 19],
                  [47, 19],
                  [48, 19],
                  [49, 19],
                  [50, 19],
                  [51, 19],
                  [42, 20],
                  [43, 20],
                  [44, 20],
                  [45, 20],
                  [46, 20],
                  [47, 20],
                  [48, 20],
                  [49, 20],
                  [50, 20],
                  [51, 20],
                  [43, 21],
                  [44, 21],
                  [45, 21],
                  [46, 21],
                  [47, 21],
                  [48, 21],
                  [49, 21],
                  [50, 21],
                  [51, 21],
                  [44, 22],
                  [45, 22],
                  [46, 22],
                  [47, 22],
                  [48, 22],
                  [49, 22],
                  [50, 22],
                  [51, 22],
                ].map(([x, y], i) => (
                  <circle key={`eu-${i}`} cx={x} cy={y} r="0.15" fill="white" />
                ))}

                {/* Africa */}
                {[
                  [44, 23],
                  [45, 23],
                  [46, 23],
                  [47, 23],
                  [48, 23],
                  [49, 23],
                  [50, 23],
                  [44, 24],
                  [45, 24],
                  [46, 24],
                  [47, 24],
                  [48, 24],
                  [49, 24],
                  [50, 24],
                  [51, 24],
                  [44, 25],
                  [45, 25],
                  [46, 25],
                  [47, 25],
                  [48, 25],
                  [49, 25],
                  [50, 25],
                  [51, 25],
                  [52, 25],
                  [45, 26],
                  [46, 26],
                  [47, 26],
                  [48, 26],
                  [49, 26],
                  [50, 26],
                  [51, 26],
                  [52, 26],
                  [45, 27],
                  [46, 27],
                  [47, 27],
                  [48, 27],
                  [49, 27],
                  [50, 27],
                  [51, 27],
                  [52, 27],
                  [46, 28],
                  [47, 28],
                  [48, 28],
                  [49, 28],
                  [50, 28],
                  [51, 28],
                  [52, 28],
                  [46, 29],
                  [47, 29],
                  [48, 29],
                  [49, 29],
                  [50, 29],
                  [51, 29],
                  [52, 29],
                  [47, 30],
                  [48, 30],
                  [49, 30],
                  [50, 30],
                  [51, 30],
                  [52, 30],
                  [47, 31],
                  [48, 31],
                  [49, 31],
                  [50, 31],
                  [51, 31],
                  [52, 31],
                  [48, 32],
                  [49, 32],
                  [50, 32],
                  [51, 32],
                  [48, 33],
                  [49, 33],
                  [50, 33],
                  [51, 33],
                  [49, 34],
                  [50, 34],
                  [51, 34],
                  [49, 35],
                  [50, 35],
                ].map(([x, y], i) => (
                  <circle
                    key={`af-${i}`}
                    cx={x}
                    cy={y}
                    r="0.15"
                    fill="white"
                    opacity="0.7"
                  />
                ))}

                {/* Asia */}
                {[
                  [52, 17],
                  [53, 17],
                  [54, 17],
                  [55, 17],
                  [56, 17],
                  [57, 17],
                  [58, 17],
                  [59, 17],
                  [60, 17],
                  [61, 17],
                  [62, 17],
                  [63, 17],
                  [64, 17],
                  [52, 18],
                  [53, 18],
                  [54, 18],
                  [55, 18],
                  [56, 18],
                  [57, 18],
                  [58, 18],
                  [59, 18],
                  [60, 18],
                  [61, 18],
                  [62, 18],
                  [63, 18],
                  [64, 18],
                  [65, 18],
                  [66, 18],
                  [52, 19],
                  [53, 19],
                  [54, 19],
                  [55, 19],
                  [56, 19],
                  [57, 19],
                  [58, 19],
                  [59, 19],
                  [60, 19],
                  [61, 19],
                  [62, 19],
                  [63, 19],
                  [64, 19],
                  [65, 19],
                  [66, 19],
                  [67, 19],
                  [68, 19],
                  [52, 20],
                  [53, 20],
                  [54, 20],
                  [55, 20],
                  [56, 20],
                  [57, 20],
                  [58, 20],
                  [59, 20],
                  [60, 20],
                  [61, 20],
                  [62, 20],
                  [63, 20],
                  [64, 20],
                  [65, 20],
                  [66, 20],
                  [67, 20],
                  [68, 20],
                  [69, 20],
                  [70, 20],
                  [53, 21],
                  [54, 21],
                  [55, 21],
                  [56, 21],
                  [57, 21],
                  [58, 21],
                  [59, 21],
                  [60, 21],
                  [61, 21],
                  [62, 21],
                  [63, 21],
                  [64, 21],
                  [65, 21],
                  [66, 21],
                  [67, 21],
                  [68, 21],
                  [69, 21],
                  [70, 21],
                  [71, 21],
                  [72, 21],
                  [54, 22],
                  [55, 22],
                  [56, 22],
                  [57, 22],
                  [58, 22],
                  [59, 22],
                  [60, 22],
                  [61, 22],
                  [62, 22],
                  [63, 22],
                  [64, 22],
                  [65, 22],
                  [66, 22],
                  [67, 22],
                  [68, 22],
                  [69, 22],
                  [70, 22],
                  [71, 22],
                  [72, 22],
                  [73, 22],
                  [74, 22],
                  [55, 23],
                  [56, 23],
                  [57, 23],
                  [58, 23],
                  [59, 23],
                  [60, 23],
                  [61, 23],
                  [62, 23],
                  [63, 23],
                  [64, 23],
                  [65, 23],
                  [66, 23],
                  [67, 23],
                  [68, 23],
                  [69, 23],
                  [70, 23],
                  [71, 23],
                  [72, 23],
                  [73, 23],
                  [74, 23],
                  [75, 23],
                  [76, 23],
                  [56, 24],
                  [57, 24],
                  [58, 24],
                  [59, 24],
                  [60, 24],
                  [61, 24],
                  [62, 24],
                  [63, 24],
                  [64, 24],
                  [65, 24],
                  [66, 24],
                  [67, 24],
                  [68, 24],
                  [69, 24],
                  [70, 24],
                  [71, 24],
                  [72, 24],
                  [73, 24],
                  [74, 24],
                  [75, 24],
                  [76, 24],
                  [77, 24],
                  [78, 24],
                  [57, 25],
                  [58, 25],
                  [59, 25],
                  [60, 25],
                  [61, 25],
                  [62, 25],
                  [63, 25],
                  [64, 25],
                  [65, 25],
                  [66, 25],
                  [67, 25],
                  [68, 25],
                  [69, 25],
                  [70, 25],
                  [71, 25],
                  [72, 25],
                  [73, 25],
                  [74, 25],
                  [75, 25],
                  [76, 25],
                  [77, 25],
                  [78, 25],
                  [79, 25],
                  [58, 26],
                  [59, 26],
                  [60, 26],
                  [61, 26],
                  [62, 26],
                  [63, 26],
                  [64, 26],
                  [65, 26],
                  [66, 26],
                  [67, 26],
                  [68, 26],
                  [69, 26],
                  [70, 26],
                  [71, 26],
                  [72, 26],
                  [73, 26],
                  [74, 26],
                  [75, 26],
                  [76, 26],
                  [77, 26],
                  [78, 26],
                  [79, 26],
                  [80, 26],
                  [59, 27],
                  [60, 27],
                  [61, 27],
                  [62, 27],
                  [63, 27],
                  [64, 27],
                  [65, 27],
                  [66, 27],
                  [67, 27],
                  [68, 27],
                  [69, 27],
                  [70, 27],
                  [71, 27],
                  [72, 27],
                  [73, 27],
                  [74, 27],
                  [75, 27],
                  [76, 27],
                  [77, 27],
                  [78, 27],
                  [79, 27],
                  [80, 27],
                  [60, 28],
                  [61, 28],
                  [62, 28],
                  [63, 28],
                  [64, 28],
                  [65, 28],
                  [66, 28],
                  [67, 28],
                  [68, 28],
                  [69, 28],
                  [70, 28],
                  [71, 28],
                  [72, 28],
                  [73, 28],
                  [74, 28],
                  [75, 28],
                  [76, 28],
                  [77, 28],
                  [78, 28],
                  [79, 28],
                  [80, 28],
                  [61, 29],
                  [62, 29],
                  [63, 29],
                  [64, 29],
                  [65, 29],
                  [66, 29],
                  [67, 29],
                  [68, 29],
                  [69, 29],
                  [70, 29],
                  [71, 29],
                  [72, 29],
                  [73, 29],
                  [74, 29],
                  [75, 29],
                  [76, 29],
                  [77, 29],
                  [78, 29],
                  [79, 29],
                  [62, 30],
                  [63, 30],
                  [64, 30],
                  [65, 30],
                  [66, 30],
                  [67, 30],
                  [68, 30],
                  [69, 30],
                  [70, 30],
                  [71, 30],
                  [72, 30],
                  [73, 30],
                  [74, 30],
                  [75, 30],
                  [76, 30],
                  [77, 30],
                  [78, 30],
                  [63, 31],
                  [64, 31],
                  [65, 31],
                  [66, 31],
                  [67, 31],
                  [68, 31],
                  [69, 31],
                  [70, 31],
                  [71, 31],
                  [72, 31],
                  [73, 31],
                  [74, 31],
                  [75, 31],
                  [76, 31],
                  [77, 31],
                  [64, 32],
                  [65, 32],
                  [66, 32],
                  [67, 32],
                  [68, 32],
                  [69, 32],
                  [70, 32],
                  [71, 32],
                  [72, 32],
                  [73, 32],
                  [74, 32],
                  [75, 32],
                  [76, 32],
                  [65, 33],
                  [66, 33],
                  [67, 33],
                  [68, 33],
                  [69, 33],
                  [70, 33],
                  [71, 33],
                  [72, 33],
                  [73, 33],
                  [74, 33],
                  [75, 33],
                ].map(([x, y], i) => (
                  <circle key={`as-${i}`} cx={x} cy={y} r="0.15" fill="white" />
                ))}

                {/* Australia */}
                {[
                  [72, 36],
                  [73, 36],
                  [74, 36],
                  [75, 36],
                  [76, 36],
                  [77, 36],
                  [71, 37],
                  [72, 37],
                  [73, 37],
                  [74, 37],
                  [75, 37],
                  [76, 37],
                  [77, 37],
                  [78, 37],
                  [71, 38],
                  [72, 38],
                  [73, 38],
                  [74, 38],
                  [75, 38],
                  [76, 38],
                  [77, 38],
                  [78, 38],
                  [72, 39],
                  [73, 39],
                  [74, 39],
                  [75, 39],
                  [76, 39],
                  [77, 39],
                  [78, 39],
                  [72, 40],
                  [73, 40],
                  [74, 40],
                  [75, 40],
                  [76, 40],
                  [77, 40],
                  [78, 40],
                  [73, 41],
                  [74, 41],
                  [75, 41],
                  [76, 41],
                  [77, 41],
                ].map(([x, y], i) => (
                  <circle
                    key={`au-${i}`}
                    cx={x}
                    cy={y}
                    r="0.15"
                    fill="white"
                    opacity="0.7"
                  />
                ))}
              </g>

              {/* Connection lines from all projects to list */}
              {currentPageData.content.projects.map((project, i) => (
                <line
                  key={`line-${i}`}
                  x1={project.x}
                  y1={project.y}
                  x2="92"
                  y2={12 + i * 1.35}
                  stroke="currentColor"
                  strokeWidth="0.03"
                  className={
                    hoveredProject === i ? "text-white" : "text-zinc-600"
                  }
                  opacity={
                    hoveredProject === null
                      ? "0.4"
                      : hoveredProject === i
                        ? "0.8"
                        : "0.15"
                  }
                />
              ))}

              {/* Project nodes */}
              {currentPageData.content.projects.map((project, i) => (
                <g key={i}>
                  <circle
                    cx={project.x}
                    cy={project.y}
                    r={hoveredProject === i ? "0.6" : "0.4"}
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="0.15"
                    className={
                      hoveredProject === i ? "text-white" : "text-zinc-300"
                    }
                    style={{ cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                  />
                </g>
              ))}
            </svg>

            {/* Project list on the right */}
            <div className="absolute right-0 top-30 text-[9px] space-y-[0.35rem] leading-tight">
              {currentPageData.content.projects.map((project, i) => (
                <div
                  key={i}
                  className={`transition-colors cursor-pointer flex items-center gap-2 ${
                    hoveredProject === i ? "text-white" : "text-zinc-400"
                  }`}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <span className="text-[8px] text-zinc-600">—</span>
                  <span>{project.name}</span>
                  <span className="text-zinc-600">· {project.number}</span>
                </div>
              ))}
            </div>

            <p className="absolute bottom-0 right-0 text-[9px] text-zinc-600">
              Online
              <br />
              www.deva.com
            </p>
          </div>
        )}

        {/* Project Hero Page */}
        {currentPageData.type === "project-hero" && (
          <div className="max-w-[95vw] w-full h-[85vh] relative">
            <div className="absolute bottom-12 left-12 text-white">
              <h1 className="font-serif text-6xl tracking-wider mb-2">
                {currentPageData.content.title}
              </h1>
              <p className="text-sm tracking-wider mb-4">
                {currentPageData.content.subtitle}
              </p>
              <div className="text-[10px] space-y-1 text-neutral-200">
                {currentPageData.content.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project Detail Page */}
        {currentPageData.type === "project-detail" && (
          <div className="max-w-[95vw] w-full h-[85vh] grid grid-cols-1 gap-8 bg-white text-black p-8">
            <div className="flex flex-col">
              {/* Labels container */}
              <div className="w-full flex justify-between mb-4">
                {/* Left label */}
                <p className="text-[10px] text-neutral-400">
                  {currentPageData.content.partName} |{" "}
                  {currentPageData.content.part}
                </p>

                {/* Right label */}
                <p className="text-[10px] text-neutral-400">
                  {currentPageData.content.rightImageLabel}
                </p>
              </div>
              {/* IMAGE TOP */}
              <div className="flex justify-center w-full">
                <div className="bg-white w-[60%] flex items-center justify-center overflow-hidden">
                  <img
                    src={currentPageData.content.image}
                    alt={`${currentPageData.content.projectName} detail`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Detail Page */}
        {currentPageData.type === "project-intership" && (
          <div className="max-w-[95vw] w-full h-[85vh] grid grid-cols-2 gap-8 bg-white text-black p-8">
            <div className="border-r border-neutral-300 pr-8 flex flex-col">
              <p className="text-[10px] text-neutral-400 mb-4">
                {currentPageData.content.part} |{" "}
                {currentPageData.content.partName}
              </p>

              <div className="mb-4 bg-neutral-200 aspect-[4/3] max-h-[35vh] flex items-center justify-center overflow-hidden">
                {currentPageData.content.leftImage ? (
                  <img
                    src={currentPageData.content.leftImage}
                    alt={currentPageData.content.projectName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-12 h-12 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>

              <div className="mb-4">
                <div className="bg-black text-white px-2 py-1 inline-block text-[10px] mb-2">
                  {currentPageData.content.concept.title}
                </div>
                <p className="text-[11px] leading-relaxed text-justify">
                  {currentPageData.content.concept.text}
                </p>
              </div>

              <div className="mt-2">
                <div className="bg-black text-white px-2 py-1 inline-block text-[10px] mb-2">
                  {currentPageData.content.strategy.title}
                </div>
                <p className="text-[10px] leading-relaxed text-justify">
                  {currentPageData.content.strategy.text}
                </p>
              </div>
            </div>

            <div className="pl-8 flex flex-col relative">
              <p className="text-[10px] text-neutral-400 mb-6 text-right">
                {currentPageData.content.rightImageLabel}
              </p>

              <div className="flex-1 relative bg-white flex items-center justify-center">
                <img
                  src={currentPageData.content.rightImage}
                  alt={`${currentPageData.content.projectName} detail`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Closing Page */}
        {currentPageData.type === "closing" && (
          <div className="text-center">
            <div
              className="text-8xl font-light text-zinc-300 italic"
              style={{ fontFamily: "var(--font1)" }}
            >
              {currentPageData.content.signature}
              <br></br>
              {currentPageData.content.end}
            </div>
          </div>
        )}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
        disabled={currentPage === 0}
        className="fixed left-6 top-1/2 -translate-y-1/2 text-2xl text-zinc-600 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
      >
        ←
      </button>
      <button
        onClick={() =>
          setCurrentPage(Math.min(pages.length - 1, currentPage + 1))
        }
        disabled={currentPage === pages.length - 1}
        className="fixed right-6 top-1/2 -translate-y-1/2 text-2xl text-zinc-600 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
      >
        →
      </button>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #27272a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #52525b;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #71717a;
        }
      `}</style>
    </main>
  );
}
