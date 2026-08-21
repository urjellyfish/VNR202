// src/utils/exportToPptx.js
import pptxgen from "pptxgenjs";
import { slides, presentationInfo } from "../data/slidesData";

export const exportToPptx = () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9"; // Widescreen format (10 x 5.625 inches)

  // Colors (hex format, without prefix #)
  const BG_COLOR = "F5EFE6"; // Warm parchment beige
  const RED_ACCENT = "851C1C"; // Dark red
  const AMBER_ACCENT = "D97706"; // Dark amber
  const DARK_TEXT = "292524"; // Dark stone text
  const MUTED_TEXT = "57534E"; // Muted stone text
  const WHITE = "FFFFFF";
  const RED_LIGHT = "FEF2F2";
  const AMBER_LIGHT = "FEF3C7";
  const STONE_LIGHT = "F5F5F4";

  // Fonts
  const FONT_TITLE = "Georgia";
  const FONT_BODY = "Arial";

  // Process slides
  slides.forEach((slide) => {
    const s = pres.addSlide();
    s.background = { fill: BG_COLOR };

    // 1. Top Header Info Bar
    // Slide index badge
    s.addShape(pres.ShapeType.rect, {
      x: 0.5,
      y: 0.3,
      w: 0.9,
      h: 0.28,
      fill: { color: RED_ACCENT },
      rectRadius: 0.1
    });
    s.addText(`SLIDE ${slide.slideNumber}`, {
      x: 0.5,
      y: 0.3,
      w: 0.9,
      h: 0.28,
      fontSize: 8.5,
      fontFace: FONT_BODY,
      bold: true,
      color: "FFFFFF",
      align: "center",
      valign: "middle"
    });

    // Badge text
    s.addText(slide.badge.toUpperCase(), {
      x: 1.5,
      y: 0.3,
      w: 4.5,
      h: 0.28,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      bold: true,
      color: AMBER_ACCENT,
      valign: "middle"
    });

    // Period text
    s.addText(`GIAI ĐOẠN: ${slide.period}`, {
      x: 6.0,
      y: 0.3,
      w: 3.5,
      h: 0.28,
      fontSize: 9.5,
      fontFace: FONT_BODY,
      bold: true,
      color: MUTED_TEXT,
      align: "right",
      valign: "middle"
    });

    // Border line under header
    s.addShape(pres.ShapeType.line, {
      x: 0.5,
      y: 0.65,
      w: 9.0,
      h: 0.0,
      line: { color: "D7C5B0", width: 1 }
    });

    // 2. Title & Subtitle
    s.addText(slide.title, {
      x: 0.5,
      y: 0.75,
      w: 9.0,
      h: 0.45,
      fontSize: 18,
      fontFace: FONT_TITLE,
      bold: true,
      color: RED_ACCENT,
      valign: "middle"
    });
    s.addText(slide.subtitle, {
      x: 0.5,
      y: 1.15,
      w: 9.0,
      h: 0.25,
      fontSize: 10,
      fontFace: FONT_BODY,
      italic: true,
      color: DARK_TEXT,
      valign: "middle"
    });

    // 3. Historical Quote Box at the Bottom
    s.addShape(pres.ShapeType.rect, {
      x: 0.5,
      y: 4.6,
      w: 9.0,
      h: 0.75,
      fill: { color: WHITE },
      line: { color: "E7E2D8", width: 1 }
    });
    // Left border stripe (red)
    s.addShape(pres.ShapeType.rect, {
      x: 0.5,
      y: 4.6,
      w: 0.08,
      h: 0.75,
      fill: { color: RED_ACCENT }
    });
    // Quote Text
    s.addText(`"${slide.historicalQuote.quote}"`, {
      x: 0.7,
      y: 4.62,
      w: 8.6,
      h: 0.45,
      fontSize: 9,
      fontFace: FONT_TITLE,
      italic: true,
      color: DARK_TEXT,
      valign: "top"
    });
    // Quote Speaker
    s.addText(`— ${slide.historicalQuote.speaker}`, {
      x: 0.7,
      y: 5.08,
      w: 8.6,
      h: 0.22,
      fontSize: 8.5,
      fontFace: FONT_BODY,
      bold: true,
      color: RED_ACCENT,
      align: "right",
      valign: "bottom"
    });

    // 4. Layout Content (Placed in y: 1.55 to 4.45)
    switch (slide.layoutType) {
      case "hero": {
        // 3 Metric Cards at top: y: 1.55, h: 0.8
        slide.heroMetrics.forEach((m, idx) => {
          const cardX = 0.5 + idx * 3.1;
          s.addShape(pres.ShapeType.rect, {
            x: cardX,
            y: 1.55,
            w: 2.8,
            h: 0.8,
            fill: { color: WHITE },
            line: { color: "E7E2D8", width: 1 }
          });
          // Mini Badge
          s.addShape(pres.ShapeType.rect, {
            x: cardX + 0.15,
            y: 1.63,
            w: 0.9,
            h: 0.18,
            fill: { color: RED_LIGHT },
            line: { color: "FCA5A5", width: 0.5 }
          });
          s.addText(m.label, {
            x: cardX + 0.15,
            y: 1.63,
            w: 0.9,
            h: 0.18,
            fontSize: 7.5,
            fontFace: FONT_BODY,
            bold: true,
            color: RED_ACCENT,
            align: "center",
            valign: "middle"
          });
          // Value
          s.addText(m.value, {
            x: cardX + 0.15,
            y: 1.83,
            w: 2.5,
            h: 0.25,
            fontSize: 9.5,
            fontFace: FONT_TITLE,
            bold: true,
            color: DARK_TEXT,
            valign: "middle"
          });
          // Desc
          s.addText(m.desc, {
            x: cardX + 0.15,
            y: 2.08,
            w: 2.5,
            h: 0.22,
            fontSize: 8,
            fontFace: FONT_BODY,
            color: MUTED_TEXT,
            valign: "top"
          });
        });

        // 2 Columns below: y: 2.45, h: 2.0
        // Left Column
        const leftX = 0.5;
        const colW = 4.35;
        s.addShape(pres.ShapeType.rect, {
          x: leftX,
          y: 2.45,
          w: colW,
          h: 2.0,
          fill: { color: WHITE },
          line: { color: "E7E2D8", width: 1 }
        });
        s.addText(slide.content.leftPillar.title, {
          x: leftX + 0.2,
          y: 2.5,
          w: colW - 0.4,
          h: 0.3,
          fontSize: 10.5,
          fontFace: FONT_TITLE,
          bold: true,
          color: RED_ACCENT,
          valign: "middle"
        });
        let leftBullets = slide.content.leftPillar.points.map(pt => ({
          text: pt,
          options: { fontSize: 8.5, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "number" } }
        }));
        s.addText(leftBullets, {
          x: leftX + 0.2,
          y: 2.85,
          w: colW - 0.4,
          h: 1.5,
          valign: "top"
        });

        // Right Column
        const rightX = 5.15;
        s.addShape(pres.ShapeType.rect, {
          x: rightX,
          y: 2.45,
          w: colW,
          h: 2.0,
          fill: { color: WHITE },
          line: { color: "E7E2D8", width: 1 }
        });
        s.addText(slide.content.rightPillar.title, {
          x: rightX + 0.2,
          y: 2.5,
          w: colW - 0.4,
          h: 0.3,
          fontSize: 10.5,
          fontFace: FONT_TITLE,
          bold: true,
          color: AMBER_ACCENT,
          valign: "middle"
        });
        let rightBullets = slide.content.rightPillar.points.map(pt => ({
          text: pt,
          options: { fontSize: 8.5, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "number" } }
        }));
        s.addText(rightBullets, {
          x: rightX + 0.2,
          y: 2.85,
          w: colW - 0.4,
          h: 1.5,
          valign: "top"
        });
        break;
      }

      case "timeline-stepper": {
        const numSteps = slide.steps.length;
        const stepW = (9.0 / numSteps) - 0.2;
        const gap = 0.2;

        slide.steps.forEach((st, idx) => {
          const stepX = 0.5 + idx * (stepW + gap);
          s.addShape(pres.ShapeType.rect, {
            x: stepX,
            y: 1.55,
            w: stepW,
            h: 2.9,
            fill: { color: WHITE },
            line: { color: "E7E2D8", width: 1 }
          });
          // Step number header & Time badge
          s.addText(`STEP ${st.stepNumber}`, {
            x: stepX + 0.15,
            y: 1.65,
            w: stepW * 0.5,
            h: 0.3,
            fontSize: 11,
            fontFace: FONT_BODY,
            bold: true,
            color: "CCCCCC",
            valign: "middle"
          });
          s.addShape(pres.ShapeType.rect, {
            x: stepX + stepW - 1.15,
            y: 1.67,
            w: 1.0,
            h: 0.25,
            fill: { color: AMBER_LIGHT },
            rectRadius: 0.05
          });
          s.addText(st.time, {
            x: stepX + stepW - 1.15,
            y: 1.67,
            w: 1.0,
            h: 0.25,
            fontSize: 8,
            fontFace: FONT_BODY,
            bold: true,
            color: AMBER_ACCENT,
            align: "center",
            valign: "middle"
          });

          // Title
          s.addText(st.title, {
            x: stepX + 0.15,
            y: 2.0,
            w: stepW - 0.3,
            h: 0.35,
            fontSize: 10,
            fontFace: FONT_TITLE,
            bold: true,
            color: DARK_TEXT,
            valign: "middle"
          });

          // Location
          if (st.location) {
            s.addText(`📍 ${st.location}`, {
              x: stepX + 0.15,
              y: 2.35,
              w: stepW - 0.3,
              h: 0.2,
              fontSize: 7.5,
              fontFace: FONT_BODY,
              bold: true,
              color: RED_ACCENT,
              valign: "middle"
            });
          }

          // Points
          const ptBullets = st.points.map(p => ({
            text: p,
            options: { fontSize: 8, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "bullet" } }
          }));
          s.addText(ptBullets, {
            x: stepX + 0.15,
            y: st.location ? 2.6 : 2.4,
            w: stepW - 0.3,
            h: 1.7,
            valign: "top"
          });
        });
        break;
      }

      case "split-feature": {
        // Left gradient/dark card: x: 0.5, y: 1.55, w: 3.5, h: 2.9
        const leftX = 0.5;
        const leftW = 3.5;
        s.addShape(pres.ShapeType.rect, {
          x: leftX,
          y: 1.55,
          w: leftW,
          h: 2.9,
          fill: { color: RED_ACCENT }
        });
        // Tag
        s.addShape(pres.ShapeType.rect, {
          x: leftX + 0.2,
          y: 1.7,
          w: 2.2,
          h: 0.22,
          fill: { color: "000000" },
          opacity: 30
        });
        s.addText(slide.featureCard.tag, {
          x: leftX + 0.2,
          y: 1.7,
          w: 2.2,
          h: 0.22,
          fontSize: 7,
          fontFace: FONT_BODY,
          bold: true,
          color: "FFFFFF",
          align: "center",
          valign: "middle"
        });
        // Date
        s.addText(slide.featureCard.date, {
          x: leftX + 0.2,
          y: 2.0,
          w: 3.1,
          h: 0.2,
          fontSize: 8.5,
          fontFace: FONT_BODY,
          color: "D7C5B0",
          valign: "middle"
        });
        // Title
        s.addText(slide.featureCard.title, {
          x: leftX + 0.2,
          y: 2.25,
          w: 3.1,
          h: 0.5,
          fontSize: 12,
          fontFace: FONT_TITLE,
          bold: true,
          color: "FFFFFF",
          valign: "middle"
        });
        // Desc
        s.addText(slide.featureCard.desc, {
          x: leftX + 0.2,
          y: 2.85,
          w: 3.1,
          h: 1.1,
          fontSize: 8.5,
          fontFace: FONT_BODY,
          color: "FFFFFF",
          valign: "top"
        });
        // Footer text
        s.addText("Pắc Bó, Cao Bằng (1941)", {
          x: leftX + 0.2,
          y: 4.1,
          w: 3.1,
          h: 0.2,
          fontSize: 7.5,
          fontFace: FONT_BODY,
          italic: true,
          color: "D7C5B0",
          valign: "middle"
        });

        // Right side: 3 mini-cards stacked: x: 4.2, y: 1.55, w: 5.3, h: 2.9
        const rightX = 4.2;
        const rightW = 5.3;
        slide.decisions.forEach((dec, idx) => {
          const cardY = 1.55 + idx * 0.98;
          s.addShape(pres.ShapeType.rect, {
            x: rightX,
            y: cardY,
            w: rightW,
            h: 0.88,
            fill: { color: WHITE },
            line: { color: "E7E2D8", width: 1 }
          });
          // Icon placeholder block
          s.addShape(pres.ShapeType.rect, {
            x: rightX + 0.15,
            y: cardY + 0.14,
            w: 0.6,
            h: 0.6,
            fill: { color: AMBER_LIGHT }
          });
          s.addText("★", {
            x: rightX + 0.15,
            y: cardY + 0.14,
            w: 0.6,
            h: 0.6,
            fontSize: 16,
            fontFace: FONT_BODY,
            color: RED_ACCENT,
            align: "center",
            valign: "middle"
          });
          // Decision Title & Desc
          s.addText(dec.title, {
            x: rightX + 0.9,
            y: cardY + 0.1,
            w: rightW - 1.05,
            h: 0.25,
            fontSize: 9.5,
            fontFace: FONT_TITLE,
            bold: true,
            color: DARK_TEXT,
            valign: "middle"
          });
          s.addText(dec.desc, {
            x: rightX + 0.9,
            y: cardY + 0.35,
            w: rightW - 1.05,
            h: 0.45,
            fontSize: 8,
            fontFace: FONT_BODY,
            color: MUTED_TEXT,
            valign: "top"
          });
        });
        break;
      }

      case "comparison": {
        // Left comparison box
        const leftX = 0.5;
        const boxW = 4.35;
        s.addShape(pres.ShapeType.rect, {
          x: leftX,
          y: 1.55,
          w: boxW,
          h: 2.9,
          fill: { color: STONE_LIGHT },
          line: { color: "CCCCCC", width: 1 }
        });
        s.addText(slide.comparison.leftBox.tag, {
          x: leftX + 0.2,
          y: 1.65,
          w: 2.5,
          h: 0.2,
          fontSize: 7.5,
          fontFace: FONT_BODY,
          bold: true,
          color: MUTED_TEXT,
          valign: "middle"
        });
        s.addText(slide.comparison.leftBox.title, {
          x: leftX + 0.2,
          y: 1.85,
          w: boxW - 0.4,
          h: 0.35,
          fontSize: 10.5,
          fontFace: FONT_TITLE,
          bold: true,
          color: DARK_TEXT,
          valign: "middle"
        });
        s.addShape(pres.ShapeType.line, {
          x: leftX + 0.2,
          y: 2.25,
          w: boxW - 0.4,
          h: 0.0,
          line: { color: "CCCCCC", width: 0.5 }
        });
        const leftPts = slide.comparison.leftBox.points.map(p => ({
          text: p,
          options: { fontSize: 8, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "bullet" } }
        }));
        s.addText(leftPts, {
          x: leftX + 0.2,
          y: 2.35,
          w: boxW - 0.4,
          h: 2.0,
          valign: "top"
        });

        // Right comparison box
        const rightX = 5.15;
        s.addShape(pres.ShapeType.rect, {
          x: rightX,
          y: 1.55,
          w: boxW,
          h: 2.9,
          fill: { color: WHITE },
          line: { color: RED_ACCENT, width: 2 }
        });
        s.addShape(pres.ShapeType.rect, {
          x: rightX + 0.2,
          y: 1.63,
          w: 2.0,
          h: 0.2,
          fill: { color: RED_LIGHT }
        });
        s.addText(slide.comparison.rightBox.tag, {
          x: rightX + 0.2,
          y: 1.63,
          w: 2.0,
          h: 0.2,
          fontSize: 7.5,
          fontFace: FONT_BODY,
          bold: true,
          color: RED_ACCENT,
          align: "center",
          valign: "middle"
        });
        s.addText(slide.comparison.rightBox.title, {
          x: rightX + 0.2,
          y: 1.85,
          w: boxW - 0.4,
          h: 0.35,
          fontSize: 11,
          fontFace: FONT_TITLE,
          bold: true,
          color: RED_ACCENT,
          valign: "middle"
        });
        s.addShape(pres.ShapeType.line, {
          x: rightX + 0.2,
          y: 2.25,
          w: boxW - 0.4,
          h: 0.0,
          line: { color: RED_LIGHT, width: 0.5 }
        });
        const rightPts = slide.comparison.rightBox.points.map(p => ({
          text: p,
          options: { fontSize: 8, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "bullet" } }
        }));
        s.addText(rightPts, {
          x: rightX + 0.2,
          y: 2.35,
          w: boxW - 0.4,
          h: 2.0,
          valign: "top"
        });
        break;
      }

      case "cards-3col": {
        // 3 Columns: x: 0.5, 3.6, 6.7. Width: 2.8, h: 2.9
        slide.cards.forEach((card, idx) => {
          const cardX = 0.5 + idx * 3.1;
          s.addShape(pres.ShapeType.rect, {
            x: cardX,
            y: 1.55,
            w: 2.8,
            h: 2.9,
            fill: { color: WHITE },
            line: { color: "E7E2D8", width: 1 }
          });
          // Tag/Time
          s.addText(card.time, {
            x: cardX + 0.15,
            y: 1.65,
            w: 2.5,
            h: 0.25,
            fontSize: 8.5,
            fontFace: FONT_BODY,
            bold: true,
            color: RED_ACCENT,
            valign: "middle"
          });
          // Title
          s.addText(card.title, {
            x: cardX + 0.15,
            y: 1.95,
            w: 2.5,
            h: 0.35,
            fontSize: 9.5,
            fontFace: FONT_TITLE,
            bold: true,
            color: DARK_TEXT,
            valign: "middle"
          });
          // Location
          if (card.location) {
            s.addText(`📍 ${card.location}`, {
              x: cardX + 0.15,
              y: 2.3,
              w: 2.5,
              h: 0.2,
              fontSize: 7.5,
              fontFace: FONT_BODY,
              bold: true,
              color: MUTED_TEXT,
              valign: "middle"
            });
          }
          // Line separator
          s.addShape(pres.ShapeType.line, {
            x: cardX + 0.15,
            y: 2.55,
            w: 2.5,
            h: 0.0,
            line: { color: "E7E2D8", width: 0.5 }
          });
          // Description
          s.addText(card.desc, {
            x: cardX + 0.15,
            y: 2.65,
            w: 2.5,
            h: 1.7,
            fontSize: 8,
            fontFace: FONT_BODY,
            color: DARK_TEXT,
            valign: "top"
          });
        });
        break;
      }

      case "tribute-grid": {
        // 4 leaders in 2x2 grid. Row 1: y: 1.55, Row 2: y: 3.0. Card height: 1.35. Width: 4.35.
        slide.tributes.forEach((tr, idx) => {
          const row = Math.floor(idx / 2);
          const col = idx % 2;
          const cardX = col === 0 ? 0.5 : 5.15;
          const cardY = 1.55 + row * 1.45;
          const cardW = 4.35;
          const cardH = 1.35;

          s.addShape(pres.ShapeType.rect, {
            x: cardX,
            y: cardY,
            w: cardW,
            h: cardH,
            fill: { color: WHITE },
            line: { color: "E7E2D8", width: 1 }
          });
          // Name
          s.addText(tr.name, {
            x: cardX + 0.2,
            y: cardY + 0.1,
            w: cardW - 0.4,
            h: 0.28,
            fontSize: 10.5,
            fontFace: FONT_TITLE,
            bold: true,
            color: RED_ACCENT,
            valign: "middle"
          });
          // Role
          s.addText(tr.role, {
            x: cardX + 0.2,
            y: cardY + 0.38,
            w: cardW - 0.4,
            h: 0.2,
            fontSize: 7.5,
            fontFace: FONT_BODY,
            bold: true,
            color: AMBER_ACCENT,
            valign: "middle"
          });
          // Desc
          s.addText(tr.desc, {
            x: cardX + 0.2,
            y: cardY + 0.62,
            w: cardW - 0.4,
            h: 0.65,
            fontSize: 8,
            fontFace: FONT_BODY,
            color: DARK_TEXT,
            valign: "top"
          });
        });
        break;
      }

      case "document-banner": {
        // Document banner: x: 0.5, y: 1.55, w: 9.0, h: 0.8
        s.addShape(pres.ShapeType.rect, {
          x: 0.5,
          y: 1.55,
          w: 9.0,
          h: 0.8,
          fill: { color: RED_ACCENT }
        });
        s.addText(slide.documentHeader.title, {
          x: 0.7,
          y: 1.6,
          w: 8.6,
          h: 0.25,
          fontSize: 10.5,
          fontFace: FONT_TITLE,
          bold: true,
          color: "FFFFFF",
          align: "center",
          valign: "middle"
        });
        s.addText(slide.documentHeader.author, {
          x: 0.7,
          y: 1.85,
          w: 8.6,
          h: 0.2,
          fontSize: 8,
          fontFace: FONT_BODY,
          bold: true,
          color: "D7C5B0",
          align: "center",
          valign: "middle"
        });
        s.addText(slide.documentHeader.sub, {
          x: 0.7,
          y: 2.05,
          w: 8.6,
          h: 0.25,
          fontSize: 8.5,
          fontFace: FONT_BODY,
          italic: true,
          color: "FFFFFF",
          align: "center",
          valign: "middle"
        });

        // 3 principles below: x: 0.5, 3.6, 6.7. W: 2.8, h: 1.9. y: 2.55
        slide.principles.forEach((pr, idx) => {
          const colX = 0.5 + idx * 3.1;
          s.addShape(pres.ShapeType.rect, {
            x: colX,
            y: 2.55,
            w: 2.8,
            h: 1.9,
            fill: { color: WHITE },
            line: { color: "E7E2D8", width: 1 }
          });
          // Number
          s.addText(pr.num, {
            x: colX + 0.15,
            y: 2.6,
            w: 0.6,
            h: 0.25,
            fontSize: 11,
            fontFace: FONT_BODY,
            bold: true,
            color: "CCCCCC",
            valign: "middle"
          });
          // Title
          s.addText(pr.title, {
            x: colX + 0.15,
            y: 2.85,
            w: 2.5,
            h: 0.3,
            fontSize: 9.5,
            fontFace: FONT_TITLE,
            bold: true,
            color: RED_ACCENT,
            valign: "middle"
          });
          // Desc
          s.addText(pr.desc, {
            x: colX + 0.15,
            y: 3.2,
            w: 2.5,
            h: 1.15,
            fontSize: 8,
            fontFace: FONT_BODY,
            color: DARK_TEXT,
            valign: "top"
          });
        });
        break;
      }

      case "stat-callout": {
        // 3 columns: x: 0.5, 3.6, 6.7. Width: 2.8, h: 2.9
        slide.statBoxes.forEach((box, idx) => {
          const colX = 0.5 + idx * 3.1;
          s.addShape(pres.ShapeType.rect, {
            x: colX,
            y: 1.55,
            w: 2.8,
            h: 2.9,
            fill: { color: WHITE },
            line: { color: "E7E2D8", width: 1 }
          });
          // Big number & Unit
          s.addText(box.bigNum, {
            x: colX + 0.15,
            y: 1.6,
            w: 1.5,
            h: 0.6,
            fontSize: 24,
            fontFace: FONT_TITLE,
            bold: true,
            color: AMBER_ACCENT,
            valign: "middle"
          });
          s.addText(box.unit, {
            x: colX + 1.6,
            y: 1.8,
            w: 1.05,
            h: 0.35,
            fontSize: 9.5,
            fontFace: FONT_BODY,
            bold: true,
            color: MUTED_TEXT,
            valign: "bottom"
          });
          // Divider
          s.addShape(pres.ShapeType.line, {
            x: colX + 0.15,
            y: 2.25,
            w: 2.5,
            h: 0.0,
            line: { color: AMBER_LIGHT, width: 1.5 }
          });
          // Label
          s.addText(box.label, {
            x: colX + 0.15,
            y: 2.35,
            w: 2.5,
            h: 0.3,
            fontSize: 10,
            fontFace: FONT_TITLE,
            bold: true,
            color: DARK_TEXT,
            valign: "middle"
          });
          // Desc
          s.addText(box.desc, {
            x: colX + 0.15,
            y: 2.7,
            w: 2.5,
            h: 1.6,
            fontSize: 8,
            fontFace: FONT_BODY,
            color: MUTED_TEXT,
            valign: "top"
          });
        });
        break;
      }

      case "triumphant-hero": {
        // 4 Milestones: x: 0.5 + idx * 2.3. Width: 2.1, h: 2.0. y: 1.55
        slide.victoryMilestones.forEach((vm, idx) => {
          const colX = 0.5 + idx * 2.3;
          const isSpecial = idx === 3;
          s.addShape(pres.ShapeType.rect, {
            x: colX,
            y: 1.55,
            w: 2.1,
            h: 2.0,
            fill: { color: isSpecial ? RED_ACCENT : WHITE },
            line: { color: isSpecial ? AMBER_ACCENT : "E7E2D8", width: isSpecial ? 1.5 : 1 }
          });
          // Date
          s.addShape(pres.ShapeType.rect, {
            x: colX + 0.15,
            y: 1.65,
            w: 0.8,
            h: 0.22,
            fill: { color: isSpecial ? AMBER_LIGHT : RED_LIGHT }
          });
          s.addText(vm.date, {
            x: colX + 0.15,
            y: 1.65,
            w: 0.8,
            h: 0.22,
            fontSize: 7.5,
            fontFace: FONT_BODY,
            bold: true,
            color: isSpecial ? "000000" : RED_ACCENT,
            align: "center",
            valign: "middle"
          });
          // City
          s.addText(vm.city, {
            x: colX + 0.15,
            y: 1.95,
            w: 1.8,
            h: 0.35,
            fontSize: 11,
            fontFace: FONT_TITLE,
            bold: true,
            color: isSpecial ? "FFFFFF" : DARK_TEXT,
            valign: "middle"
          });
          // Detail
          s.addText(vm.detail, {
            x: colX + 0.15,
            y: 2.35,
            w: 1.8,
            h: 1.1,
            fontSize: 8,
            fontFace: FONT_BODY,
            color: isSpecial ? "FFFFFF" : MUTED_TEXT,
            valign: "top"
          });
        });

        // Summary banner below: x: 0.5, y: 3.7, w: 9.0, h: 0.7
        s.addShape(pres.ShapeType.rect, {
          x: 0.5,
          y: 3.7,
          w: 9.0,
          h: 0.75,
          fill: { color: AMBER_LIGHT },
          line: { color: "F59E0B", width: 1 }
        });
        s.addText("CỘT MỐC LỊCH SỬ KHÔNG BAO GIỜ PHAI", {
          x: 0.7,
          y: 3.73,
          w: 8.6,
          h: 0.2,
          fontSize: 7,
          fontFace: FONT_BODY,
          bold: true,
          color: RED_ACCENT,
          align: "center",
          valign: "middle"
        });
        s.addText("Chỉ trong 15 ngày (14 - 28/8/1945), Tổng khởi nghĩa đã hoàn toàn thắng lợi trong toàn quốc, dẫn tới Ngày 2/9/1945 Tuyên ngôn Độc lập tại Ba Đình.", {
          x: 0.7,
          y: 3.93,
          w: 8.6,
          h: 0.45,
          fontSize: 8.5,
          fontFace: FONT_TITLE,
          bold: true,
          color: DARK_TEXT,
          align: "center",
          valign: "middle"
        });
        break;
      }

      case "matrix-4grid": {
        // 4 pillars in 2x2 grid. Row 1: y: 1.55, Row 2: y: 3.0. Card height: 1.35. Width: 4.35.
        slide.matrixPillars.forEach((mp, idx) => {
          const row = Math.floor(idx / 2);
          const col = idx % 2;
          const cardX = col === 0 ? 0.5 : 5.15;
          const cardY = 1.55 + row * 1.45;
          const cardW = 4.35;
          const cardH = 1.35;

          s.addShape(pres.ShapeType.rect, {
            x: cardX,
            y: cardY,
            w: cardW,
            h: cardH,
            fill: { color: WHITE },
            line: { color: "E7E2D8", width: 1 }
          });
          // Number square
          s.addShape(pres.ShapeType.rect, {
            x: cardX + 0.15,
            y: cardY + 0.15,
            w: 0.5,
            h: 0.5,
            fill: { color: RED_ACCENT }
          });
          s.addText(mp.number, {
            x: cardX + 0.15,
            y: cardY + 0.15,
            w: 0.5,
            h: 0.5,
            fontSize: 13,
            fontFace: FONT_BODY,
            bold: true,
            color: "FFFFFF",
            align: "center",
            valign: "middle"
          });
          // Title
          s.addText(mp.title, {
            x: cardX + 0.8,
            y: cardY + 0.1,
            w: cardW - 0.95,
            h: 0.28,
            fontSize: 9.5,
            fontFace: FONT_TITLE,
            bold: true,
            color: DARK_TEXT,
            valign: "middle"
          });
          // Desc
          s.addText(mp.desc, {
            x: cardX + 0.8,
            y: cardY + 0.42,
            w: cardW - 0.95,
            h: 0.8,
            fontSize: 8,
            fontFace: FONT_BODY,
            color: MUTED_TEXT,
            valign: "top"
          });
        });
        break;
      }

      case "impact-dual": {
        // Left Column (National): x: 0.5, y: 1.55, w: 4.35, h: 2.9
        const leftX = 0.5;
        const boxW = 4.35;
        s.addShape(pres.ShapeType.rect, {
          x: leftX,
          y: 1.55,
          w: boxW,
          h: 2.9,
          fill: { color: WHITE },
          line: { color: RED_ACCENT, width: 2 }
        });
        s.addText(slide.impactColumns.national.title, {
          x: leftX + 0.2,
          y: 1.65,
          w: boxW - 0.4,
          h: 0.35,
          fontSize: 10.5,
          fontFace: FONT_TITLE,
          bold: true,
          color: RED_ACCENT,
          valign: "middle"
        });
        s.addShape(pres.ShapeType.line, {
          x: leftX + 0.2,
          y: 2.05,
          w: boxW - 0.4,
          h: 0.0,
          line: { color: RED_LIGHT, width: 0.5 }
        });
        const natPts = slide.impactColumns.national.points.map(p => ({
          text: p,
          options: { fontSize: 8, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "bullet" } }
        }));
        s.addText(natPts, {
          x: leftX + 0.2,
          y: 2.15,
          w: boxW - 0.4,
          h: 2.2,
          valign: "top"
        });

        // Right Column (International): x: 5.15, y: 1.55, w: 4.35, h: 2.9
        const rightX = 5.15;
        s.addShape(pres.ShapeType.rect, {
          x: rightX,
          y: 1.55,
          w: boxW,
          h: 2.9,
          fill: { color: WHITE },
          line: { color: "E7E2D8", width: 1 }
        });
        s.addText(slide.impactColumns.international.title, {
          x: rightX + 0.2,
          y: 1.65,
          w: boxW - 0.4,
          h: 0.35,
          fontSize: 10.5,
          fontFace: FONT_TITLE,
          bold: true,
          color: AMBER_ACCENT,
          valign: "middle"
        });
        s.addShape(pres.ShapeType.line, {
          x: rightX + 0.2,
          y: 2.05,
          w: boxW - 0.4,
          h: 0.0,
          line: { color: "E7E2D8", width: 0.5 }
        });
        const intPts = slide.impactColumns.international.points.map(p => ({
          text: p,
          options: { fontSize: 8, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "bullet" } }
        }));
        s.addText(intPts, {
          x: rightX + 0.2,
          y: 2.15,
          w: boxW - 0.4,
          h: 2.2,
          valign: "top"
        });
        break;
      }

      default: {
        // Fallback 2-column layout
        const leftX = 0.5;
        const colW = 4.35;
        s.addShape(pres.ShapeType.rect, {
          x: leftX,
          y: 1.55,
          w: colW,
          h: 2.9,
          fill: { color: WHITE },
          line: { color: "E7E2D8", width: 1 }
        });
        if (slide.content?.leftPillar) {
          s.addText(slide.content.leftPillar.title, {
            x: leftX + 0.2,
            y: 1.65,
            w: colW - 0.4,
            h: 0.3,
            fontSize: 10.5,
            fontFace: FONT_TITLE,
            bold: true,
            color: RED_ACCENT,
            valign: "middle"
          });
          const bullets = slide.content.leftPillar.points.map(p => ({
            text: p,
            options: { fontSize: 8, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "bullet" } }
          }));
          s.addText(bullets, {
            x: leftX + 0.2,
            y: 2.0,
            w: colW - 0.4,
            h: 2.3,
            valign: "top"
          });
        }

        const rightX = 5.15;
        s.addShape(pres.ShapeType.rect, {
          x: rightX,
          y: 1.55,
          w: colW,
          h: 2.9,
          fill: { color: WHITE },
          line: { color: "E7E2D8", width: 1 }
        });
        if (slide.content?.rightPillar) {
          s.addText(slide.content.rightPillar.title, {
            x: rightX + 0.2,
            y: 1.65,
            w: colW - 0.4,
            h: 0.3,
            fontSize: 10.5,
            fontFace: FONT_TITLE,
            bold: true,
            color: AMBER_ACCENT,
            valign: "middle"
          });
          const bullets = slide.content.rightPillar.points.map(p => ({
            text: p,
            options: { fontSize: 8, fontFace: FONT_BODY, color: DARK_TEXT, bullet: { type: "bullet" } }
          }));
          s.addText(bullets, {
            x: rightX + 0.2,
            y: 2.0,
            w: colW - 0.4,
            h: 2.3,
            valign: "top"
          });
        }
        break;
      }
    }
  });

  // Save/Download presentation file
  const fileName = `${presentationInfo.title.replace(/[\s–—]+/g, "_")}_${presentationInfo.period.replace(/[\s–—]+/g, "")}.pptx`;
  pres.writeFile({ fileName });
};
