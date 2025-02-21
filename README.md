**För att köra Cypress på localhost i windows miljö:**
- Öppna Liveserver
- Kontrollera att porten är 5502 alternativt ändra port i cypress.config.js fil
- I terminalen skriv: npx cypress open

**För att köra cypress på GitHub Pages:**
- I terminalen skriv: $env:CYPRESS_BASE_URL="https://johnnyastrom.github.io/UXUI-Task-Escape-Rooms" ; npx cypress open
