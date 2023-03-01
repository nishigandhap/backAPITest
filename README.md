
# API testing

Mock the API request which are run successfully.

## Table of Contents

* Site reference
* Scenarios
* Installation
* Running Tests
* Git repo link
* Screenshot


## Link Reference

API link with credentails

```
https://qa-task.backbasecloud.com.
```

Username: candidatex

Password: qa-is-cool




## Scenarios


**API Test**
1. Create new article and verify article is created.
2. Check for tags are filtered and exist on page.
3. Get article dynamically with favourite counts.
4. Select tags as per article






## Installation

Before you start installing Cypress and Node, make sure that you have the following installed on your computer:

```
Node.js
VS code
```
## Installing Node.js

Node.js is a JavaScript runtime environment that is used to run JavaScript code outside of a web browser. To install Node.js, follow these steps:

  1. Go to the Node.js official website: https://nodejs.org/
  2. Click on the “Download” button for the latest version of Node.js.
  3. Follow the instructions for your operating system to install Node.js.
  4. Verify that Node.js has been installed successfully by opening a terminal or command prompt and running the following command:

```
node -v
```
## Installing Cypress

Cypress is a JavaScript-based end-to-end testing framework. To install Cypress, follow these steps:

Open a terminal or command prompt and navigate to the root directory of your project.
Run the following command to install Cypress as a development dependency:

```
npm install --save-dev cypress
```
Verify that Cypress has been installed successfully by running the following command:
```
npx cypress open
```
This should open the Cypress Test Runner in your default web browser.

With these steps, you should have both Node.js and Cypress installed on your computer and ready to use. If you encounter any issues during the installation process, refer to the official documentation for Node.js and Cypress(https://docs.cypress.io/) for more information and support.


For APi test, the allure report was created since it is API testing. Well, the allure reporting is covered in Web testing.








## How to run test

```
npm run test
```


## Git clone
```
git clone https://github.com/nishigandhap/backWebTest
```
## Screenshot
<img width="739" alt="BackBase API" src="https://user-images.githubusercontent.com/58659856/222151631-46068993-e896-4c52-b6a0-0bf10ee3bbdf.png">
