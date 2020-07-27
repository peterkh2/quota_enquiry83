var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

// Original API
app.get('/api-endpoint', function(request, response) {
    var nameString = request.query.name;
    var historyString = request.query.history;
    
    var jsonContent = 
          [
            {
                quoteId: '2198372-0',
                issueDateTime: '03/05/2020 12:36',
                issuedBy: 'Ricky So 01702893',
                price: '3,790',
                expiryDate: '10/05/2020',
                channel: 'Retail - MKK',
                service: [
                    {
                        servicePlan: '$198 4G 21Mbps 5GB Service Plan',
                        servicePlanCount: 1,
                        mobileData: '5GB (4G 21Mbps, thereafter capped at 128kbps)',
                        mobileDataCount: 1,
                        commitmentPeriod: '24 months',
                    }
                ],
                options: 
                    [
                        {
                            name: 'PlayStation 4 "Just Dance 2020"'
                        },
                        {
                            name: 'Liquidnano Mobile Steri-Wipe premium offer (4 packs) (1 pc)'
                        },
                        {
                            name: 'The Club 1000 Clubpoints (Online Offer)'
                        },
                        {
                            name: '"86-Easy" service', 
                            price: '18/mo'
                        },
                        {
                            name: 'Mainland China Roaming Data', 
                            price: '49/mo'
                        }
                    ],
            }, 
            {
                quoteId: '2132172-0',
                issueDateTime: '23/04/2020 09:35',
                issuedBy: 'Miu Chan 01703293',
                price: '9,370',
                expiryDate: '10/05/2020',
                channel: 'Retail - MKK',
                service: [
                    {
                        servicePlan: '$198 4G 21Mbps 5GB Service Plan',
                        servicePlanCount: 1,
                        mobileData: '5GB (4G 21Mbps, thereafter capped at 128kbps)',
                        mobileDataCount: 1,
                        commitmentPeriod: '24 months',
                    }
                ],
                options: 
                    [
                        {
                            name: 'PlayStation 4 "Just Dance 2020"'
                        },
                        {
                            name: 'Liquidnano Mobile Steri-Wipe premium offer (4 packs) (1 pc)'
                        },
                        {
                            name: 'The Club 1000 Clubpoints (Online Offer)'
                        },
                        {
                            name: '"86-Easy" service', 
                            price: '18/mo'
                        },
                        {
                            name: 'Mainland China Roaming Data', 
                            price: '49/mo'
                        }
                    ],
            },
            {
                quoteId: '5678372-1',
                issueDateTime: '10/04/2020 17:36',
                issuedBy: 'Don Chan 01702893',
                price: '290',
                expiryDate: '10/05/2020',
                channel: 'Retail - MKK',
                service: [
                    {
                        servicePlan: '$198 4G 21Mbps 5GB Service Plan',
                        servicePlanCount: 1,
                        mobileData: '5GB (4G 21Mbps, thereafter capped at 128kbps)',
                        mobileDataCount: 1,
                        commitmentPeriod: '24 months',
                    }
                ],
                options: 
                    [
                        {
                            name: 'PlayStation 4 "Just Dance 2020"'
                        },
                        {
                            name: 'Liquidnano Mobile Steri-Wipe premium offer (4 packs) (1 pc)'
                        },
                        {
                            name: 'The Club 1000 Clubpoints (Online Offer)'
                        },
                        {
                            name: '"86-Easy" service', 
                            price: '18/mo'
                        },
                        {
                            name: 'Mainland China Roaming Data', 
                            price: '49/mo'
                        }
                    ],
            }
        ]
      ;
    
    var outputResult = jsonContent;
    
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send(JSON.parse(JSON.stringify(outputResult)));
    
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
