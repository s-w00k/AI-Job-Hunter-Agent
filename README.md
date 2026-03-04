AI Job Agent

A Node.js automation tool that scans remote developer jobs and filters relevant opportunities from the RemoteOK job API.
The script automatically collects job listings, filters relevant developer roles, and saves them into a CSV file for easy review.

---------------------------------------------------------------------------------------------------------------------------------------------------
Features
* Fetches job listings from the RemoteOK API
* Filters developer-related jobs using keywords
* Saves results into a CSV file
* Simple automation script that can be expanded into a full AI job-hunting agent

---------------------------------------------------------------------------------------------------------------------------------------------------
Tech Stack
* Node.js
* Axios
* CSV Writer
* RemoteOK API

---------------------------------------------------------------------------------------------------------------------------------------------------
Installation
1. Clone or download the repository.
2. Open a terminal inside the project folder.
3. Initialize Node.js (if package.json does not exist):

npm init -y

4. Install the required dependencies:

npm install axios csv-writer node-cron

---------------------------------------------------------------------------------------------------------------------------------------------------
How to Run
* Run the scraper using Node.js:

node scraper.js

* After running the script, a file named jobs.csv will be generated containing the filtered job listings.
  Example output:

Filtered jobs saved: 12

* The CSV file will contain columns:

TITLE | COMPANY | LINK

---------------------------------------------------------------------------------------------------------------------------------------------------
Project Structure
ai-job-agent
│
├── scraper.js
├── package.json
├── package-lock.json
├── jobs.csv (generated after running)
└── README.md

---------------------------------------------------------------------------------------------------------------------------------------------------
Future Improvements

Planned upgrades include:
* AI job relevance scoring
* Automatic cover letter generation
* Daily automated job alerts
* Job analytics dashboard
* Multi-site job scraping

---------------------------------------------------------------------------------------------------------------------------------------------------
Purpose

This project is part of a learning portfolio exploring:
* automation
* job market data collection
* Node.js scripting
* AI-assisted workflows
* The long-term goal is to develop an autonomous AI job-hunting agent that can identify opportunities, evaluate relevance, and assist with the application process.
