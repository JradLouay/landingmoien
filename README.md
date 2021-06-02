

for developement, use the complete tailwind.css 
Run: npx tailwindcss-cli@latest build -c ./css/tailwind.config.js -o ./css/dist/tailwind.css



for Production, purge tailwind css using NODE_ENV=production
Run: NODE_ENV=production npx tailwindcss-cli@latest build -c ./css/tailwind.config.js -o ./css/dist/tailwind.css