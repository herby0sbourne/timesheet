/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(ellipse farthest-side at bottom center, #ffe977 0%, #da991c 245%)"
            }
        }
    },
    plugins: []
};
