Feature: Validate Homesearch Addresses Endpoint

  Scenario: Successful response for Addresses endpoint
    Given User have access to Homesearch API
    When User send GET request to Homesearch API "https://hamptons-homesearch-sapi-sit.uk-e1.cloudhub.io:443" endpoint "/api/addresses?postcode=W2%201DG"
    Then Homesearch API should return a 200 OK response
