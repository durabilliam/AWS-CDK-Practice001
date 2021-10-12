import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

export class CdkWorkshop2Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,      //execution environment
      code: lambda.Code.fromAsset('lambda'),    //code loaded from "lambda" directory
      handler: 'hello.handler'                  //file is "hello", function is "hander"
    });

    //defines an API Gateway REST resource backed by the "hello" function
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });
  }
}
