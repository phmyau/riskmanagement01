export default function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobikle/Services/RiskManagement01Service.service').isDraftEnabled('Mitigations')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/risksmobikle/Actions/RiskManagement01Service/Mitigations/Mitigations_CreateRisks.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risksmobikle/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobikle/Actions/RiskManagement01Service/Mitigations/Mitigations_CreateRisks.action');
    }
}