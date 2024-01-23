const fs = require("fs-extra");
const concat = require("concat");

const build = async () => {
  const files = [
    "./dist/booking-web-component/browser/polyfills.js",
    "./dist/booking-web-component/browser/main.js",
  ];

  try {
    // Ensure the directory exists before concatenating files
    await fs.ensureDir("widget");

    // Concatenate files after ensuring the directory is created
    await concat(files, "widget/news-widget.js");

    console.log("Concatenation successful!");
  } catch (err) {
    console.error("Error during concatenation:", err);
  }
};

// Call the build function
build();
