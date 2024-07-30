Project instructions

Running the Express server

1. cd BE
2. run yarn to install node modules and packages
3. run 'nodemon index.ts' to start express server

Running the Nuxt Frontend

1. cd FE
2. run yarn to install node modules and packages
3. run yarn dev to view the frontend

Task Given

Frontend

- Develop a responsive single-page application using NUXT framework. (Simple UI)

- Implement the TradingView Advanced Real-Time Chart widget for at least three different cryptocurrencies. You can implement a drop-down for user selection input of Cryptocurrency.
  (Not fully developed yet.)

- Create a customizable crypto [watchlist](https://www.tradingview.com/charting-library-docs/latest/api/interfaces/Charting_Library.IWatchListApi/) where users can add or remove symbols. (Did not complete)

- Integrate [Transak's](https://docs.transak.com/docs/integration-options) widget or SDK to allow users to purchase cryptocurrencies directly from the dashboard. (Transak KYC roadblock)

Backend

- Develop a RESTful API using Node.js (Express). (Auth service done. Remaining Watchlist service)
- Implement user authentication and authorization. (Simple Authentication)
- Create endpoints to save and retrieve user watchlists and transaction history. (Did not complete)
- Implement a simple mechanism to calculate and store basic technical indicator of your choice for crypto assets in the watchlist. (Did not complete)

Transak Integration (Transak KYC Roadblock)

4. Database:
   - Use a database of your choice (SQL or NoSQL) to store user data, watchlists, and transaction history. (MongoDB, stored user data only)
