# # build image
# FROM registry.shdocker.tuya-inc.top/fe-base/deploy/node:14.4

# WORKDIR /code
# COPY package.json yarn.lock .npmrc /code/

# # RUN yarn install --production && cp -R node_modules /tmp/prod_node_modules
# # RUN yarn

# COPY . /code

# # ARG APP_VERSION=v1.0.0
# # ENV APP_VERSION $APP_VERSION

# # RUN yarn build --releaseVersion $APP_VERSION

# FROM registry.shdocker.tuya-inc.top/mirror/nginx:1.15.0

# ADD .docker/nginx.conf /etc/nginx/conf.d/default.conf
# ADD .docker /www

# COPY ./build /

# RUN chmod -R 755 /www

# CMD [ "sh", "/entrypoint.sh" ]


FROM registry.shdocker.tuya-inc.top/mirror/nginx:1.15.0

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./build /www
RUN chmod -R 755 /www