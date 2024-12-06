export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobikle/Services/RiskManagement01Service.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobikle/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/risksmobikle/Actions/RiskManagement01Service/Risks/NavToRisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobikle/Actions/RiskManagement01Service/Risks/NavToRisks_Edit.action');
    }
}