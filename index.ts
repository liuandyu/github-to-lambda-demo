import {APIGatewayProxyEvent, APIGatewayProxyCallbackV2, Handler} from "aws-lambda";
import * as _ from 'lodash';


export const handler = async (event: APIGatewayProxyEvent) => {
    const max = 99;
    const val = _.random(max);

    const response = {
        statusCode: 300,
        body: `The random value (max ${max}) is ${val}. max increased again`
    };
    return response;
};
