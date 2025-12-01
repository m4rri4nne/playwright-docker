# 🧪 Playwright Test Automation Project

This project aims to provide a **front-end automated testing setup** using **[Playwright](https://playwright.dev/)**, fully containerized with **Docker**, integrated with **GitHub Actions** for CI/CD, and featuring **[Allure Report](https://docs.qameta.io/allure/)** for test reporting.  
A future integration with **Cucumber/Gherkin** may also be added to support BDD-style test writing.


![Playwright Tests](https://github.com/m4rri4nne/playwright-docker/actions/workflows/run-playwright-tests-in-docker.yml/badge.svg)

[Allure Report](https://m4rri4nne.github.io/playwright-docker/)

---

## 🚀 Tech Stack

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://github.com/features/actions)
- [Allure Report](https://docs.qameta.io/allure/)
- *(Optional / Future)* [Cucumber.js](https://github.com/cucumber/cucumber-js)

---

## 📁 Project Structure

```
📦 playwright-docker
├── 📁 src/
│   ├──📁 tests/               # Test cases
│   │     ├── example.spec.ts
│   │     └── ...
│   ├── 📁 pages/               # Page Objects
│   ├── 📁 docs/                # Test cases description
│   ├── 📁 fixtures/           
│   ├── 📁 config/              # Config and report configuration
│   ├── 📁 helpers/             # Helpers and utilitie
├── 📄 package.json
├── 📄 playwright.config.ts
├── 📄 Dockerfile
├── 📄 docker-compose.yml
├── 📄 .github/workflows/playwright.yml
└── 📄 README.md
```
You can check the tests planned for this project [here](docs)

---

## 🧱 Overview

The main goals of this project are:
- ✅ Build a **scalable and maintainable** Playwright test framework.
- 🐳 Run tests consistently across environments using **Docker**.
- ⚙️ Automate execution through **GitHub Actions** CI workflows.
- 📊 Generate detailed reports with **Allure Report**.
- 🥒 Optionally integrate **Cucumber/Gherkin** for behavior-driven testing.

---

## 🧩 Future Roadmap

| Feature | Status | Description |
|----------|---------|-------------|
| Playwright base setup | ✅ | Core testing framework using Playwright. |
| Docker integration | ✅  | Containerized environment for consistent execution. |
| GitHub Actions workflow | ✅  | CI pipeline for test automation. |
| Allure reporting | 🚧 | Test result visualization and trend analysis. |
| Cucumber/Gherkin support | 🔜 | BDD syntax for more readable test scenarios. |

---

## 💡 Example: Cucumber/Gherkin Scenario (Future)

```gherkin
Feature: Login
  Scenario: Successful login with valid credentials
    Given the user navigates to the login page
    When they enter valid username and password
    Then they should be redirected to the main dashboard
```

---

## 🧾 Best Practices

- Follow the **Page Object Model (POM)** design pattern for better scalability.
- Keep tests **independent and deterministic**.
- Avoid hard-coded values; prefer **environment variables**.
- Use **Allure Report** to monitor test results, performance, and failure trends.
- Keep CI/CD pipelines fast, isolated, and reproducible.

---

## 🧠 Contribution Guidelines

Contributions are welcome!  
To contribute:
1. Create a feature branch (`git checkout -b feature/your-feature-name`)
2. Commit your changes (`git commit -m "Add new feature"`)
3. Push the branch (`git push origin feature/your-feature-name`)
4. Open a Pull Request 🚀

---

## 📜 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for more information.

---

> 💡 *Modern, scalable, and CI/CD-ready end-to-end test automation powered by Playwright, Docker, and Allure.*
