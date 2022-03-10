#! /bin/bash

ISERT_FILE=/insert.${TUYA_ENV}.tpl

if [ -f $ISERT_FILE ]; then
  sed -i "/<head>/r $ISERT_FILE" /www/index.html
fi


nginx -g "daemon off;"