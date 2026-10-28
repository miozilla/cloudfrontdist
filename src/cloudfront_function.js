// 
// Lightweight JavaScript functions for simple request/response manipulation at the edge.
// Runs at CloudFront edge locations
//

function handler(event) {
    var request = event.request;

    if (request.headers["x-forwarded-proto"].value === "http") {
        return {
            statusCode: 301,
            statusDescription: "Moved Permanently",
            headers: {
                location: {
                    value: "https://" + request.headers.host.value +
                           request.uri
                }
            }
        };
    }

    return request;
}