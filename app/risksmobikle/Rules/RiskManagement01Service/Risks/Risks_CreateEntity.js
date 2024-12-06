export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobikle/Services/RiskManagement01Service.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobikle/Actions/RiskManagement01Service/Risks/Risks_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/risksmobikle/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobikle/Actions/RiskManagement01Service/Risks/Risks_CreateEntity.action');
    }
}