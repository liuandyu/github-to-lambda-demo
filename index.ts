import {APIGatewayProxyEvent, APIGatewayProxyCallbackV2, Handler} from "aws-lambda";
import * as _ from 'lodash';


export const handler = async (event: APIGatewayProxyEvent) => {
    const max = 10;
    const val = _.random(max);

    const response = {
        statusCode: 200,
        body: `The random value (max ${max}) is ${val}`
    };
    return response;
};