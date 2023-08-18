# Clean Architecture React ⚛️🧼

Implementação de uma UI para minha aplicação backend [jrmsrs/ms-equipamento](https://github.com/jrmsrs/microsservico) - que basicamente gerencia equipamentos de um bicicletário. Para estudo de Clean Architecture em front-end. 

Primeiramente está sendo desenvolvido em React, mas com fim de testar a possibilidade de utilizar a mesma arquitetura em outro framework como Vue.js, Svelte, ou mobile.

## CI
<p align="center">
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white" alt="Conventional Commits" />
  </a>
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=alert_status" alt="Alert Status" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=sqale_index" alt="Maintainability Rating" /><br />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=coverage" alt="Coverage" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=ncloc" alt="Lines of Code" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=code_smells" alt="Code Smells" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=sqale_rating" alt="Technical Debt" /><br />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=security_rating" alt="Security Rating" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=bugs" alt="Bugs" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=vulnerabilities" alt="Vulnerabilities" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=duplicated_lines_density" alt="Duplicated Lines (%)" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=jrmsrs_clarch-front-js&metric=reliability_rating" alt="Reliability Rating" />
</p>

## Tecnologias
<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite/Vitest-2A1F3D?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React" />
  
</p>

## Benchmark/Página
<p align="center">
<table>
  <tr>
    <th>Página</th>
    <th>Mobile</th>
    <th>Desktop</th>
  </tr>
  <tr>
    <td>
      <a href="https://clarch-front-js.vercel.app">
        /
      </a>
    </td>
    <td>
      <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclarch-front-js.vercel.app%2F&tab=mobile">
        <img src="https://temporary-psibadges-jrmsrs.vercel.app/api/v2?url=clarch-front-js.vercel.app&showStratLabel=true" alt="main/mobile" />
      </a>
    </td>
    <td>
      <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclarch-front-js.vercel.app%2F&tab=desktop">
        <img src="https://temporary-psibadges-jrmsrs.vercel.app/api/v2?url=clarch-front-js.vercel.app&showStratLabel=true&strat=desktop" alt="main/desktop" />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://clarch-front-js.vercel.app">
        /hello-world
      </a>
    </td>
    <td>
      <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclarch-front-js.vercel.app%2Fhello-world&tab=mobile">
        <img src="https://temporary-psibadges-jrmsrs.vercel.app/api/v2?url=clarch-front-js.vercel.app/hello-world&showStratLabel=true" alt="helloWorld/mobile" />
      </a>
    </td>
    <td>
      <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclarch-front-js.vercel.app%2Fhello-world&tab=desktop">
        <img src="https://temporary-psibadges-jrmsrs.vercel.app/api/v2?url=clarch-front-js.vercel.app/hello-world&showStratLabel=true&strat=desktop" alt="helloWorld/desktop" />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://clarch-front-js.vercel.app">
        /bicicletas
      </a>
    </td>
    <td>
      <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclarch-front-js.vercel.app%2Fbicicletas&tab=mobile">
        <img src="https://temporary-psibadges-jrmsrs.vercel.app/api/v2?url=clarch-front-js.vercel.app/bicicletas&showStratLabel=true" alt="bicicletas/mobile" />
      </a>
    </td>
    <td>
      <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclarch-front-js.vercel.app%2Fbicicletas&tab=desktop">
        <img src="https://temporary-psibadges-jrmsrs.vercel.app/api/v2?url=clarch-front-js.vercel.app/bicicletas&showStratLabel=true&strat=desktop" alt="bicicletas/desktop" />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://clarch-front-js.vercel.app">
        /bicicletas/{:id}
      </a>
    </td>
    <td>
      <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclarch-front-js.vercel.app%2Fbicicletas%2F1&tab=mobile">
        <img src="https://temporary-psibadges-jrmsrs.vercel.app/api/v2?url=clarch-front-js.vercel.app/bicicletas/1&showStratLabel=true" alt="bicicletasId/mobile" />
      </a>
    </td>
    <td>
      <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclarch-front-js.vercel.app%2Fbicicletas%2F1&tab=desktop">
        <img src="https://temporary-psibadges-jrmsrs.vercel.app/api/v2?url=clarch-front-js.vercel.app/bicicletas/1&showStratLabel=true&strat=desktop" alt="bicicletasId/desktop" />
      </a>
    </td>
  </tr>
</table>
</p>
