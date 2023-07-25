import React from "react";

import { Outlet } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Outlet />

      <Sidebar>
        <Menu>
          <SubMenu label="Introducción a QA">
            <MenuItem>Introducción al Testing</MenuItem>
            <SubMenu label="Ciclo de desarrollo de software I">
              <MenuItem>Bases de la programacion</MenuItem>
              <MenuItem>Ciclo de desarrollo de software I</MenuItem>
            </SubMenu>
            <MenuItem>Ciclo de desarrollo de software II</MenuItem>
            <SubMenu label="Introducción a las pruebas">
              <MenuItem>Ejercicio de la video-clase Plan de pruebas</MenuItem>
              <MenuItem>Plantilla de errores</MenuItem>
              <MenuItem>Introducci¢n a la pruebas ANSWER KEY</MenuItem>
              <MenuItem>Introducci¢n a la pruebas</MenuItem>
            </SubMenu>
            <SubMenu label="Casos de estudio">
              <MenuItem>Casos de estudio</MenuItem>
              <MenuItem>Causas de defectos</MenuItem>
              <MenuItem>Reportar defectos</MenuItem>
              <MenuItem>Transacciones</MenuItem>
              <MenuItem>Transacciones (soluciones)</MenuItem>
            </SubMenu>
            <SubMenu label="Proyecto integrador 1">
              <MenuItem>Entrada en calor</MenuItem>
              <MenuItem>Pregunta bonus</MenuItem>
              <MenuItem>Puntos de vista de calidad (ANSWER KEY)</MenuItem>
              <MenuItem>RCA (ANSWER KEY)</MenuItem>
              <MenuItem>Integrador M¢dulo 1</MenuItem>
            </SubMenu>
            <MenuItem>Plan de Prueba I</MenuItem>
            <MenuItem>Plan de Prueba II</MenuItem>
            <SubMenu label="Historias de usuario">
              <MenuItem>Historias de usuario I</MenuItem>
              <MenuItem>Historias de usuario II</MenuItem>
            </SubMenu>
            <SubMenu label="Casos de prueba I">
              <MenuItem>Casos de prueba I</MenuItem>
              <MenuItem>Casos de prueba ejercicio</MenuItem>
            </SubMenu>
            <MenuItem>Casos de prueba 2</MenuItem>
            <MenuItem>Formularios HTML</MenuItem>
            <SubMenu label="Proyecto integrador 2">
              <MenuItem>Casos de prueba</MenuItem>
              <MenuItem>Entrada en calor</MenuItem>
              <MenuItem>Plan de pruebas</MenuItem>
              <MenuItem>Plantilla inputs</MenuItem>
              <MenuItem>Integrador Módulo 2</MenuItem>
            </SubMenu>
            <SubMenu label="Herramientas para gestión de pruebas">
              <MenuItem>Funcionalidades de TestLink</MenuItem>
              <MenuItem>Instalación de TestLink</MenuItem>
              <MenuItem>Particularidades TestLink</MenuItem>
              <MenuItem>Herramientas para gestión de pruebas</MenuItem>
            </SubMenu>
            <SubMenu label="Ejecución de pruebas">
              <MenuItem>Ejemplo informe de errores</MenuItem>
              <MenuItem>Ejecución de pruebas</MenuItem>
              <MenuItem>Resumen etapas STLC</MenuItem>
            </SubMenu>
            <SubMenu label="Reporte de errores">
              <MenuItem>Ejemplo Reporte de error</MenuItem>
              <MenuItem>Plantilla Reporte de errores</MenuItem>
              <MenuItem>Reporte de errores</MenuItem>
              <MenuItem>Reporte de errores Ejercicio #2</MenuItem>
            </SubMenu>
            <MenuItem>Proyecto integrador final</MenuItem>
          </SubMenu>
          <SubMenu label="Testing Manual">
            <SubMenu label="Principios y ciclos">
              <MenuItem></MenuItem>
            </SubMenu>
            <SubMenu label="Clasificación de pruebas">
              <MenuItem></MenuItem>
            </SubMenu>
            <SubMenu label="Análisis, planificación y ejecución de pruebas">
              <MenuItem></MenuItem>
            </SubMenu>
            <SubMenu label="Base de d Datos">
              <MenuItem></MenuItem>
            </SubMenu>
            <SubMenu label="Metodologías">
              <MenuItem></MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label="Testing Automation Y Performance">
            <SubMenu label="Introducción al Desarrollo Web">
              <SubMenu label="Introducción al Desarrollo Web & HTML">
                <MenuItem>¡Te damos la bienvenida!</MenuItem>
                <MenuItem>¿Qué es el desarrollo web?</MenuItem>
                <MenuItem>Principios básicos del desarrollo web</MenuItem>
                <MenuItem>Editores de código</MenuItem>
                <MenuItem>Estructura del HTML</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Valida tus conocimientos</MenuItem>
                <MenuItem>Mapa de conceptos vistos y encuesta final</MenuItem>
              </SubMenu>
              <SubMenu label="Introducción a CSS">
                <MenuItem>Introducción a CSS</MenuItem>
                <MenuItem>Sintaxis del CSS</MenuItem>
                <MenuItem>Propiedades básicas de CSS</MenuItem>
                <MenuItem>Selectores de CSS</MenuItem>
                <MenuItem>Reglas de especificidad</MenuItem>
                <MenuItem>Tipos de CSS</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Valida tus conocimientos</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Maquetación y diseño en CSS">
                <MenuItem>Introducción a diseño y maquetación con CSS</MenuItem>
                <MenuItem>Modelo de cajas</MenuItem>
                <MenuItem>Actividad de Box Model</MenuItem>
                <MenuItem>Display y Position</MenuItem>
                <MenuItem>Flexbox y Grid</MenuItem>
                <MenuItem>Diseño responsivo</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Valida tus conocimientos</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Introducción a JavaScript">
                <MenuItem>Introducción a JavaScript</MenuItem>
                <MenuItem>¿Qué es JavaScript?</MenuItem>
                <MenuItem>Características de JavaScript</MenuItem>
                <MenuItem>Sintaxis de JavaScript</MenuItem>
                <MenuItem>Variables y constantes</MenuItem>
                <MenuItem>Tipos de datos</MenuItem>
                <MenuItem>Operadores</MenuItem>
                <MenuItem>Funciones</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Valida tus conocimientos</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Integrando JavaScript en el sitio web">
                <MenuItem>
                  Introducción a Integrando Javascript en el sitio web
                </MenuItem>
                <MenuItem>Estructuras de control de flujo</MenuItem>
                <MenuItem>Manipulación del DOM</MenuItem>
                <MenuItem>Eventos</MenuItem>
                <MenuItem>Manejo de eventos</MenuItem>
                <MenuItem>Formularios</MenuItem>
                <MenuItem>Manejo y validación de formularios</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Valida tus conocimientos</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="A practicar">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Ejercicio 01</MenuItem>
                <MenuItem>Ejercicio 02</MenuItem>
                <MenuItem>Ejercicio 03</MenuItem>
                <MenuItem>Ejercicio 04</MenuItem>
                <MenuItem>Ejercicio 05</MenuItem>
                <MenuItem>Ejercicio 06</MenuItem>
                <MenuItem>Ejercicio 07</MenuItem>
                <MenuItem>Ejercicio 08</MenuItem>
                <MenuItem>Resolución de ejercicios</MenuItem>
              </SubMenu>
              <SubMenu label="Creación de una barra de navegación responsive">
                <MenuItem>
                  Introducción a creación de una barra de navegación responsive
                </MenuItem>
                <MenuItem>Estructura de la barra de navegación</MenuItem>
                <MenuItem>HTML para la barra de navegación</MenuItem>
                <MenuItem>CSS para la barra de navegación</MenuItem>
                <MenuItem>Barra de navegación responsiva</MenuItem>
                <MenuItem>JavaScript para interactividad</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Valida tus conocimientos</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Optimización del contenido y estructura del sitio">
                <MenuItem>
                  Introducción a optimización del contenido y estructura del
                  sitio
                </MenuItem>
                <MenuItem>Actividad 1</MenuItem>
                <MenuItem>Actividad 2</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Etiquetas semánticas</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Creación de portfolio en Github y subida del sitio a Github Pages">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Creando una cuenta de GitHub</MenuItem>
                <MenuItem>Instalando Github Desktop</MenuItem>
                <MenuItem>Subiendo la página web a Internet</MenuItem>
                <MenuItem>Actualizando tu página web</MenuItem>
                <MenuItem>Actividad grupal</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="A practicar">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Ejercicio 1</MenuItem>
                <MenuItem>Ejercicio 2</MenuItem>
                <MenuItem>Ejercicio 3</MenuItem>
                <MenuItem>Fin de la clase</MenuItem>
              </SubMenu>
              <SubMenu label="Evaluación general">
                <MenuItem>Evaluación Integradora</MenuItem>
              </SubMenu>
              <SubMenu label="Creación de una barra de navegación responsive">
                <MenuItem>
                  Introducción a creación de una barra de navegación responsive
                </MenuItem>
                <MenuItem>Estructura de la barra de navegación</MenuItem>
                <MenuItem>HTML para la barra de navegación</MenuItem>
                <MenuItem>CSS para la barra de navegación</MenuItem>
                <MenuItem>Barra de navegación responsiva</MenuItem>
                <MenuItem>JavaScript para interactividad</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Valida tus conocimientos</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Optimización del contenido y estructura del sitio">
                <MenuItem>
                  Introducción a optimización del contenido y estructura del
                  sitio
                </MenuItem>
                <MenuItem>Actividad 1</MenuItem>
                <MenuItem>Actividad 2</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Etiquetas semánticas</MenuItem>
                <MenuItem>Resolución del desafío</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Creación de portfolio en Github y subida del sitio a Github Pages">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Creando una cuenta de GitHub</MenuItem>
                <MenuItem>Instalando Github Desktop</MenuItem>
                <MenuItem>Subiendo la página web a Internet</MenuItem>
                <MenuItem>Actualizando tu página web</MenuItem>
                <MenuItem>Actividad grupal</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="A practicar">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Ejercicio 1</MenuItem>
                <MenuItem>Ejercicio 2</MenuItem>
                <MenuItem>Ejercicio 3</MenuItem>
                <MenuItem>Fin de la clase</MenuItem>
              </SubMenu>
              <SubMenu label="Evaluación general">
                <MenuItem>Evaluación Integradora</MenuItem>
              </SubMenu>
              <SubMenu label="Introducción a versiones de un sitio con ChatGPT">
                <MenuItem>
                  Introducción a versiones de un sitio con ChatGPT
                </MenuItem>
                <MenuItem>ChatGPT como herramienta de optimización</MenuItem>
                <MenuItem>ChatGPT para la página principal</MenuItem>
                <MenuItem>ChatGPT para la página de “servicios”</MenuItem>
                <MenuItem>ChatGPT para mejorar el CSS</MenuItem>
                <MenuItem>Desafío del día</MenuItem>
                <MenuItem>Recuperatorio</MenuItem>
                <MenuItem>Despedida</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label="Sistema de control de versiones">
              <SubMenu label="Introducción a Git.">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>La importancia de Git</MenuItem>
                <MenuItem>Instalación de Git</MenuItem>
                <MenuItem>Repositorio de Git local</MenuItem>
                <MenuItem>Conceptos esenciales de Git</MenuItem>
                <MenuItem>Desafío de Git</MenuItem>
                <MenuItem>Ramas o “branches” en Git</MenuItem>
                <MenuItem>Git Merge</MenuItem>
                <MenuItem>Mapa de conceptos</MenuItem>
              </SubMenu>
              <SubMenu label="Resolución de conflictos">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Conflictos de fusión</MenuItem>
                <MenuItem>Git stash</MenuItem>
                <MenuItem>Git cherry-pick</MenuItem>
                <MenuItem>Git reset & Git revert</MenuItem>
                <MenuItem>Git restore</MenuItem>
                <MenuItem>Desafío</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Git & GitHub: Repositorios y colaboración en proyectos">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>GitHub & Git</MenuItem>
                <MenuItem>Subir repositorio local a Github</MenuItem>
                <MenuItem>Descargar un repositorio remoto de GitHub</MenuItem>
                <MenuItem>
                  Descargar cambios remotos a repositorio local
                </MenuItem>
                <MenuItem>Desafío</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <SubMenu label="Colaboración y buenas prácticas">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Pull requests</MenuItem>
                <MenuItem>Pull request colaborativo</MenuItem>
                <MenuItem>Eliminar repositorios en GitHub</MenuItem>
                <MenuItem>Git ignore</MenuItem>
                <MenuItem>Git Workflow</MenuItem>
                <MenuItem>Visual Studio Code & Git</MenuItem>
                <MenuItem>Mapa de conceptos vistos</MenuItem>
              </SubMenu>
              <MenuItem>Evaluación integradora</MenuItem>
            </SubMenu>
            <MenuItem>Recuperatorio sistema de control de versiones</MenuItem>
            <SubMenu label="JAVA">
              <SubMenu label="1.1 Primeros pasos con Java">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>
                  Instalación de Java y setear el ambiente de trabajo en visual
                </MenuItem>
                <MenuItem>Programas y tipos de datos</MenuItem>
              </SubMenu>
              <SubMenu label="1.2 Primeros pasos con Java">
                <MenuItem>Scanner, operaciones y operadores</MenuItem>
              </SubMenu>
              <SubMenu label="1.3 Primeros Pasos con Java - Desafíos">
                <MenuItem>Desafíos en Java</MenuItem>
              </SubMenu>
              <SubMenu label="2.1 Estructuras de control">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>
                  Estructuras de control: If, If-else y Switch
                </MenuItem>
              </SubMenu>
              <SubMenu label="2.2 Estructuras de control">
                <MenuItem>
                  Estructura de control: Try-catch || Clase String & Math
                </MenuItem>
              </SubMenu>
              <SubMenu label="2.3 Estructuras de control - Desafíos">
                <MenuItem>Desafíos</MenuItem>
              </SubMenu>
              <SubMenu label="3.1 Bucles y Arrays">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Arrays</MenuItem>
                <MenuItem>Bucles</MenuItem>
              </SubMenu>
              <SubMenu label="3.2 Bucles y Arrays">
                <MenuItem>Recorrer Arrays</MenuItem>
                <MenuItem>While / Do While</MenuItem>
              </SubMenu>
              <SubMenu label="3.3 Bucles y Arrays - Desafíos">
                <MenuItem>Clase Arrays</MenuItem>
                <MenuItem>Envoltura Wrappers</MenuItem>
                <MenuItem>Desafíos</MenuItem>
              </SubMenu>
              <SubMenu label="4.1 Repaso estructuras y bucles">
                <MenuItem>Ejercicios I</MenuItem>
              </SubMenu>
              <SubMenu label="4.2 Repaso estructuras y bucles">
                <MenuItem>Ejercicios II</MenuItem>
              </SubMenu>
              <SubMenu label="4.3 Repaso estructuras y bucles">
                <MenuItem>Ejercicios III</MenuItem>
              </SubMenu>
              <SubMenu label="5.1 Matrices">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Matrices</MenuItem>
              </SubMenu>
              <SubMenu label="5.2 Práctica Matrices">
                <MenuItem>Ejercicios Matrices I</MenuItem>
              </SubMenu>
              <SubMenu label="5.3 Práctica Matrices">
                <MenuItem>Ejercicios Matrices II</MenuItem>
              </SubMenu>
              <SubMenu label="5.4 Practica Matrices">
                <MenuItem>Ejercicios Matrices III</MenuItem>
              </SubMenu>
              <SubMenu label="5.5 Práctica Matrices">
                <MenuItem>Ejercicios Matrices IV</MenuItem>
              </SubMenu>
              <SubMenu label="5.6 Práctica Matrices">
                <MenuItem>Ejercicios Matrices V</MenuItem>
              </SubMenu>
              <SubMenu label="6.1 Métodos">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Ejercicios Métodos I</MenuItem>
              </SubMenu>
              <SubMenu label="6.2 Práctica Métodos">
                <MenuItem>Ejercicios Métodos II</MenuItem>
              </SubMenu>
              <SubMenu label="6.3 Práctica Métodos">
                <MenuItem>Ejercicios Métodos III</MenuItem>
              </SubMenu>
              <SubMenu label="6.4 Práctica Métodos">
                <MenuItem>Debugger</MenuItem>
                <MenuItem>Ejercicios Métodos IV</MenuItem>
              </SubMenu>
              <SubMenu label="6.5 Práctica Métodos">
                <MenuItem>Ejercicios Métodos V</MenuItem>
              </SubMenu>
              <SubMenu label="6.6 Práctica Métodos">
                <MenuItem>Ejercicios Métodos VI</MenuItem>
              </SubMenu>
              <SubMenu label="6.7 Práctica Métodos">
                <MenuItem>Ejercicios Métodos VII</MenuItem>
              </SubMenu>
              <SubMenu label="6.8 Práctica Métodos">
                <MenuItem>Ejercicios Métodos VIII</MenuItem>
              </SubMenu>
              <SubMenu label="6.9 Práctica Métodos">
                <MenuItem>Ejercicios Métodos IX</MenuItem>
              </SubMenu>
              <SubMenu label="7.1 Testing">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Configuración para crear una clase Test</MenuItem>
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="7.2 Práctica Testing">
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="7.3 Práctica Testing">
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="7.4 Práctica Testing">
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="7.5 Práctica Testing">
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="7.6 Práctica Testing">
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="7.7 Práctica Testing">
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="7.8 Práctica Testing">
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="7.9 Práctica Testing">
                <MenuItem>Ejercicios Testing</MenuItem>
              </SubMenu>
              <SubMenu label="8.1 Maven">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Instalación y configuración</MenuItem>
                <MenuItem>Práctica Maven</MenuItem>
              </SubMenu>
              <SubMenu label="8.2 Práctica Maven">
                <MenuItem>Práctica Maven</MenuItem>
              </SubMenu>
              <SubMenu label="8.3 Práctica Maven">
                <MenuItem>Práctica Maven</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label="JAVA POO">
              <SubMenu label="Programación orientada a objetos">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Objetos personalizados</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica - POO">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Práctica POO</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica - POO">
                <MenuItem>Práctica POO</MenuItem>
              </SubMenu>
              <SubMenu label="Asociación de objetos">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Práctica - Asociación de objetos</MenuItem>
              </SubMenu>
              <SubMenu label="Principios SOLID I">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Patrón experto</MenuItem>
              </SubMenu>
              <SubMenu label="Principios SOLID II">
                <MenuItem>Patrón experto</MenuItem>
              </SubMenu>
              <SubMenu label="Principios SOLID III">
                <MenuItem>Patrón experto</MenuItem>
              </SubMenu>
              <SubMenu label="Enums">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Práctica Enums</MenuItem>
              </SubMenu>
              <SubMenu label="Mockito">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Práctica Mockito</MenuItem>
              </SubMenu>
              <SubMenu label="Herencia">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Práctica Herencia</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Herencia I">
                <MenuItem>Ejercicios Herencia I</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Herencia II">
                <MenuItem>Ejercicios herencia II</MenuItem>
              </SubMenu>
              <SubMenu label="Interfaces">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Ejercicio interfaces</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica interfaces I">
                <MenuItem>Ejercicio interfaces I</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica interfaces II">
                <MenuItem>Ejercicio interfaces II</MenuItem>
              </SubMenu>
              <SubMenu label="Excepciones">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Práctica excepciones</MenuItem>
              </SubMenu>
              <SubMenu label="Genéricos I">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Práctica Genéricos</MenuItem>
              </SubMenu>
              <SubMenu label="Genéricos II">
                <MenuItem>Práctica Genéricos II</MenuItem>
              </SubMenu>
              <SubMenu label="Time API">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Ejercicios Time API</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Time API I">
                <MenuItem>Práctica Time API I</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Time API II">
                <MenuItem>Práctica Time API II</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Time API III">
                <MenuItem>Práctica Time API III</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Time API IV">
                <MenuItem>Práctica Time API IV</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Time API V">
                <MenuItem>Práctica Time API V</MenuItem>
              </SubMenu>
              <SubMenu label="Java Collections Framework">
                <MenuItem>Introducción</MenuItem>
                <MenuItem>Ejercicio Collections</MenuItem>
                <MenuItem>Soluciones</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Java Collections Framework I">
                <MenuItem>Ejercicios Collections</MenuItem>
                <MenuItem>Soluciones</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Java Collections Framework II">
                <MenuItem>Ejercicios Collections</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Java Collections Framework III">
                <MenuItem>Ejercicios Collections</MenuItem>
                <MenuItem>Estructuras de datos</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Java Collections Framework IV">
                <MenuItem>Ejercicios Collections</MenuItem>
                <MenuItem>Estructuras de datos</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Java Collections Framework V">
                <MenuItem>Ejercicios Collections</MenuItem>
                <MenuItem>Estructuras de datos</MenuItem>
              </SubMenu>
              <SubMenu label="Evaluación Integradora Java POO">
                <MenuItem>¡Conquista el último desafío!</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label="Principios de Testing Automation">
              <SubMenu label="Introducción a Automation">
                <MenuItem>Encuesta</MenuItem>
                <MenuItem>Bienvenida</MenuItem>
                <MenuItem>Objetivos del encuentro</MenuItem>
                <MenuItem>Debate I</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Automation I - Fundamental">
                <MenuItem>Desafío I - Fundamental</MenuItem>
              </SubMenu>
              <SubMenu label="Práctica Automation II - Perfeccionamiento">
                <MenuItem>Desafío II - Perfeccionamiento</MenuItem>
                <MenuItem>Desafío III – Perfeccionamiento</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label="Web Automation: Fundamentos">
              <SubMenu label="Introducción a Web Automation I">
                <MenuItem>Objetivo</MenuItem>
                <MenuItem>
                  Configuración de Selenium en Visual Studio Code
                </MenuItem>
              </SubMenu>
              <SubMenu label="Introducción a Web Automation II">
                <MenuItem>Introducción a Selenium</MenuItem>
                <MenuItem>Práctica I - Fundamental</MenuItem>
                <MenuItem>Práctica II - Fundamental</MenuItem>
                <MenuItem>Práctica III - Perfeccionamiento</MenuItem>
              </SubMenu>
              <SubMenu label="Introducción a Web Automation III">
                <MenuItem>Práctica Integradora - Perfeccionamiento</MenuItem>
              </SubMenu>
              <SubMenu label="Web Locators & Elementos Web I">
                <MenuItem>Objetivos del encuentro</MenuItem>
                <MenuItem>Inspección de páginas web</MenuItem>
                <MenuItem>Elementos Web</MenuItem>
                <MenuItem>Identificación por ID</MenuItem>
                <MenuItem>Identificar por Name</MenuItem>
                <MenuItem>Identificar por LinkText</MenuItem>
                <MenuItem>Integración</MenuItem>
              </SubMenu>
              <SubMenu label="Driver Actions & Waits"></SubMenu>
              <SubMenu label="Assertions"> </SubMenu>
              <SubMenu label="POM / Page Factory"></SubMenu>
              <SubMenu label="Alertas, Iframes & Dropdowns"></SubMenu>
            </SubMenu>
            <SubMenu label="Automation en Mobile"></SubMenu>
            <SubMenu label="Testing Automatizado de API"></SubMenu>
            <SubMenu label="Serenity + Screenplay"></SubMenu>
            <SubMenu label="Testing Automation con Cypress"></SubMenu>
          </SubMenu>
          <SubMenu label="Introducción a Web Automation II">
            <MenuItem>Introducción a Selenium</MenuItem>
            <MenuItem>Práctica I - Fundamental</MenuItem>
            <MenuItem>Práctica II - Fundamental</MenuItem>
            <MenuItem>Práctica III - Perfeccionamiento</MenuItem>
          </SubMenu>
          <SubMenu label="Introducción a Web Automation II">
            <MenuItem>Introducción a Selenium</MenuItem>
            <MenuItem>Práctica I - Fundamental</MenuItem>
            <MenuItem>Práctica II - Fundamental</MenuItem>
            <MenuItem>Práctica III - Perfeccionamiento</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>

      <Footer />
    </div>
  );
}
