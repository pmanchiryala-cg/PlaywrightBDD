Feature: Validate SF EAPI Health Check Endpoint

  Scenario: Successful response for Health check endpoint
    Given User have access to SF_EAPI
    When User send GET request to SF_EAPI "https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io" endpoint "/health"
    Then SF_EAPI should return a 200 OK response