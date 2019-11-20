FROM webdevops/nginx

ENV WEB_DOCUMENT_INDEX index.html

COPY dist/ /app


