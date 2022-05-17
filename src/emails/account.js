const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "42d909cd8803121b641f7f9377ceacd6-us18",
  server: "us18",
});

async function run() {
    const response = await mailchimp.ping.get();
    console.log(response);
  }
  
  run();