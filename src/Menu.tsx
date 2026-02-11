import { useEffect } from 'react';

export default function Menu() {
  useEffect(() => {
    //Script menu
    let diagonal: boolean = false;
    const menuIcon = document.getElementById('menu_icon') as HTMLElement | null;
    const menu = document.getElementById('menu') as HTMLElement | null;
    let menuTitle: SVGTitleElement | null = null;
    const body = document.body;

    if (menuIcon) {
      // For SVG, use <title> element for tooltip
      menuTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      menuTitle.textContent = "Open Menu";
      menuIcon.appendChild(menuTitle);

      menuIcon.onclick = () => {
        const line1 = document.getElementById('line1') as HTMLElement | null;
        const line2 = document.getElementById('line2') as HTMLElement | null;
        const line3 = document.getElementById('line3') as HTMLElement | null;

        if (!line1 || !line2 || !line3 || !menu) return;

        if (!diagonal) {
          line1.style.transform = ' translateX(36px) translateY(-8px) rotate(45deg)';
          line2.style.opacity = '0';
          line3.style.transform = ' translateX(-36px) translateY(34px) rotate(-45deg)';
          menu.style.display = 'block';
          menu.style.transform = 'translateX(0)';
          body.style.overflow = 'hidden';
          if (menuTitle) menuTitle.textContent = "Close Menu";
          diagonal = true;
        } else {
          line1.style.transform = ' translateX(0px) translateY(0px) rotate(0deg)';
          line2.style.opacity = '1';
          line3.style.transform = ' translateX(0px) translateY(-0px) rotate(0deg)';
          menu.style.transform = 'translateX(0px)';
          menu.style.display = 'none';
          body.style.overflow = 'auto';
          if (menuTitle) menuTitle.textContent = "Open Menu";
          diagonal = false;
        }
      };
    }

    //Script Full screen button
    const boton1 = document.getElementById('fullScreenButton') as HTMLElement | null;
    const arIzq = document.getElementById('arIzq') as unknown as SVGPolygonElement | null;
    const arDer = document.getElementById('arDer') as unknown as SVGPolygonElement | null;
    const abIzq = document.getElementById('abIzq') as unknown as SVGPolygonElement | null;
    const abDer = document.getElementById('abDer') as unknown as SVGPolygonElement | null;
    const naranja = document.getElementById('naranja') as HTMLElement | null;
    const CLContent = document.getElementById('CL_content') as HTMLElement | null;

    const originalStyles = {
      position: '',
      top: '',
      height: '',
      borderRadius: '',
    };

    let incompleta = true;

    if (boton1 && naranja && CLContent) {
      boton1.title = "Open Cover Letter";
      boton1.addEventListener('click', (e) => {
        e.preventDefault();

        if (incompleta) {
          originalStyles.position = naranja.style.position || getComputedStyle(naranja).position;
          originalStyles.top = naranja.style.top || getComputedStyle(naranja).top;
          originalStyles.height = naranja.style.height || getComputedStyle(naranja).height;
          originalStyles.borderRadius = naranja.style.borderRadius || getComputedStyle(naranja).borderRadius;

          requestAnimationFrame(() => {
            naranja.style.position = 'fixed';
            naranja.style.top = '0px';
            naranja.style.left = '0px';
            naranja.style.width = '100%';
            naranja.style.height = '100vh';
            naranja.style.borderRadius = '0px';

            if (arIzq && arDer && abIzq && abDer) {
              arIzq.setAttribute('points', '10,70 70,70 70,10');
              arDer.setAttribute('points', '130,10 130,70 190,70');
              abIzq.setAttribute('points', '10,130 70,130 70,190');
              abDer.setAttribute('points', '130,190 130,130 190,130');
            }

            body.style.overflow = 'hidden';

            CLContent.style.animation = 'muestraParrafo 0.3s ease-in-out forwards';
            boton1.title = "Close Cover Letter";
            incompleta = false;
          });
        } else {
          requestAnimationFrame(() => {
            naranja.style.position = originalStyles.position;
            naranja.style.top = originalStyles.top;
            naranja.style.height = originalStyles.height;
            naranja.style.borderRadius = originalStyles.borderRadius;
            naranja.style.width = '';
            naranja.style.left = '';

            if (arIzq && arDer && abIzq && abDer) {
              arIzq.setAttribute('points', '10,70 10,10 70,10');
              arDer.setAttribute('points', '130,10 190,10 190,70');
              abIzq.setAttribute('points', '10,130 10,190 70,190');
              abDer.setAttribute('points', '130,190 190,190 190,130');
            }

            body.style.overflow = 'auto';

            CLContent.style.animation = 'ocultaParrafo 0.3s ease-in-out forwards';
            boton1.title = "Open Cover Letter";
            incompleta = true;
          });
        }
      });
    }

    //Script parallax effect on load
    const boxes = document.querySelectorAll<HTMLElement>('.box');
    boxes.forEach((box) => {
      box.style.transform = 'translateY(100px)';
      box.style.opacity = '0';
    });

    const animateBoxes = () => {
      boxes.forEach((box, index) => {
        setTimeout(() => {
          box.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
          box.style.transform = 'translateY(0)';
          box.style.opacity = '1';
        }, index * 200);
      });
    };

    const timeoutId = setTimeout(animateBoxes, 100);


    return () => {
      clearTimeout(timeoutId);
      if (boton1) boton1.onclick = null;
      if (menuIcon) menuIcon.onclick = null;
    };
  }, []);

  return null;
}
