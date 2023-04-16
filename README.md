**Arcana**\
The app is live at https://arcana-hackathon.vercel.app/ \
**Local Installation**\
If needed the app can be locally installed by:
1. git clone https://github.com/GaneshDev2003/arcana-hackathon.git
2. yarn install
3. npm start

Visualisation of stock prices:

First we created a new dashboard in Tableau. A dashboard is a collection of visualizations that can be arranged on a single page. The most important part of our dashboard will be the visualizations of stock prices. we created links such that we can visualize 6 months, 1 year, 3 yrs, 5yrs data.


Key Metrics:

In addition to stock prices, we have also added visualizations of key metrics that are important to our analysis like, bollinger plots, simple moving average, exponential moving average and Bollinger plots. We have made the dashboard very interactive.


Sentiment Analysis:

We utilized NLP architecture based on BERT and we also used NLTK library.The process involved breaking down the interview into smaller text segments, such as sentences or paragraphs, and then analyzing each segment to determine its sentiment. The sentiment was then assigned a polarity score ranging from 0 to 1.


Forecasting:

We collected historical stock data from various sources and preprocessed it to remove outliers, missing values, and redundant features. Then, we used the LSTM model, a type of artificial neural network that can process and forecast time-series data, to train our dataset. The model was designed to identify patterns and trends in the historical stock data, and then use that information to make predictions about future stock prices. Our model performed exceptionally well, with an accuracy rate of 99%. We tested our model on a set of validation data, and the predicted stock prices closely matched the actual stock prices. Our model was also able to forecast stock prices for up to a year into the future, providing valuable insights for investors and traders.

News:

We integrated News API, an application programming interface (API) that provides access to news articles from a variety of sources. We also created a user-friendly website with a dropdown menu where users can select their desired stock. Once a stock is selected, our program uses the News API to fetch news articles related to that stock from various sources. The articles are then displayed on the website in a visually appealing and easy-to-read format.
