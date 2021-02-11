#!/bin/bash
export COMPOSE_PROJECT_NAME=buserti_${CI_COMMIT_SHA}
docker-compose -f docker/compose/test.yml run buserti unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode
