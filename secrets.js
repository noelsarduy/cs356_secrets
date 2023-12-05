const awsConfig = {
    accessKeyId: 'AKIAQWZLIMLMTB3DK4NL',
    secretAccessKey: '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',
    region: 'us-west-2'
  };
  

  const modifiedAwsConfig = {
    accessKeyId: 'AKIAI44QH8DHBEXAMPLE',
    secretAccessKey: 'LDw0/1qcqUQnf2JY1gV4md46xwuiMP9LcK4lTynP',
    region: 'us-east-1'
  };

// Minimal change for push

let awsServiceUrl = 'https://s3.amazonaws.com/mybucket?AWSAccessKeyId=AKIAQWZLIMLMTB3DK4NL&Signature=LDw0/1qYqUQn32JY1gVymd46xwuiMP9LcK4lTsnP';

let modifiedAwsServiceUrl = 'https://ec2.amazonaws.com/?Action=DescribeInstances&AWSAccessKeyId=AKIAI44QH8DHBEXAMPLE&Signature=LDw0%2F1qcqUQnf2JY1gV4md46xwuiMP9LcK4lTynP';
