#!/bin/bash

# usage: contains ARRAY SEARCH_STR
str_array_contains() {
    for item in $1; do
        if [ "$item" == "$2" ]; then
            echo "0"
            return 0
        fi
    done
    echo "1"
    return 1
}

# usage: env_file_value VAR_NAME
env_file_value() {
    local var_name=$1
    local file_var_name="${1}_FILE"

    if [ "${!var_name:-}" ] && [ ${!file_var_name:-} ]; then
        echo "Both ${var_name} and ${file_var_name} are set. They are exclusive" >&2
        exit 1
    fi

    if [ "${!var_name:-}" ]; then
        value="${!var_name}"
    elif [ "${!file_var_name:-}" ]; then
        value=$(< ${!file_var_name})
    fi

    export "${var_name}=${value}"
    unset "${file_var_name}"
}

supported_file_vars=('DB_USER_PASSWORD')
start_cmd=$1

for env_var in "${supported_file_vars}"; do
    env_file_value $env_var
done

npm --prefix /usr/src/app run "${start_cmd}"
