import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Routes from '../client/Routes';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes />
    </StaticRouter>
  );

  return `
    <html>
      <head>
        <title>React SSR App</title>
      </head>
      <body>
        <div id="root">
          ${content}
        </div>
        <script src="bundle.js"></script>
      <body>
    </html>
  `;
};
