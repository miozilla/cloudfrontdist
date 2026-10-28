// 
// Lambda@Edge : full serverless compute service integrated with CloudFront 
// perform more complex processing, interact with AWS services, 
// and modify requests or responses in deeper ways.
//

exports.handler = async (event) => {
    const response = event.Records[0].cf.response;

    response.headers['x-frame-options'] = [{
        key: 'X-Frame-Options',
        value: 'DENY'
    }];

    return response;
};