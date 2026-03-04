const axios = require("axios");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

async function scrapeJobs() {

    const url = "https://remoteok.com/api";

    const { data } = await axios.get(url);

    const keywords = [
        "javascript",
        "react",
        "node",
        "full stack",
        "frontend",
        "backend",
        "developer"
    ];

    const jobs = data.slice(1)
        .filter(job => {

            const title = job.position.toLowerCase();

            return keywords.some(keyword =>
                title.includes(keyword)
            );

        })
        .map(job => ({
            title: job.position,
            company: job.company,
            link: job.url
        }));


    const csvWriter = createCsvWriter({
        path: "jobs.csv",
        header: [
            { id: "title", title: "TITLE" },
            { id: "company", title: "COMPANY" },
            { id: "link", title: "LINK" }
        ]
    });

    await csvWriter.writeRecords(jobs);

    console.log("Filtered jobs saved:", jobs.length);
}

scrapeJobs();