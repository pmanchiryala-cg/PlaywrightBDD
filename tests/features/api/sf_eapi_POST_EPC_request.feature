Feature: Validate SF EAPI1 POST EPC Request

  Scenario: Successful response for EPC request
    Given User have access to SF_EAPI1 API
    When User send POST request to SF_EAPI1 "https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io" endpoint "/api/epc-requests"
    Then SF_EAPI1 should return a 201 Created response
	