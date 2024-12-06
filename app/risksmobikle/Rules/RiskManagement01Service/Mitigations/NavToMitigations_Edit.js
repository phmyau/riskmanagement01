export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobikle/Services/RiskManagement01Service.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobikle/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/risksmobikle/Actions/RiskManagement01Service/Mitigations/NavToMitigations_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobikle/Actions/RiskManagement01Service/Mitigations/NavToMitigations_Edit.action');
    }
}