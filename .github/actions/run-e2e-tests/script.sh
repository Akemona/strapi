## disable EE if options not set
if [[ -z "$RUN_EE" ]]; then
  export STRAPI_DISABLE_EE=true
fi

opts=($DB_OPTIONS)

yarn run --silent test:generate-app "${opts[@]}" $@
yarn run --silent test:e2e
