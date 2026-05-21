Feature: Validate SF EAPI POST EPC Request

  Scenario: Successful response for EPC request
    Given User have access to SF_EAPI API
    When User send POST request to SF_EAPI "https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io" endpoint "/api/epc-requests"
    Then SF_EAPI should return a 201 Created response
	