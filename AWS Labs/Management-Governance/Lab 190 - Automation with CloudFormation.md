# Lab: Automation with CloudFormation
In this lab, I learned how to deploy and manage AWS infrastructure using CloudFormation templates. I practiced creating resources like a VPC, Security Group, S3 bucket, and EC2 instance through a template, and then I learned how to update and delete the stack, giving me hands-on experience with infrastructure as code.
---

##  Lab Objectives

- Deploy a CloudFormation stack with a **VPC** and **Security Group**  
- Add an **S3 bucket** to an existing stack  
- Add an **EC2 instance** to an existing stack  
- Delete the CloudFormation stack and all associated resources

---

## Lab Steps

### Task 1: Deploy a CloudFormation Stack

1. Download `task1.yaml` and open it in a text editor.
2. In the CloudFormation console, click **Create stack** → **Upload a template file** → upload the YAML file.
3. Specify stack name, confirm parameters, and click **Create stack**.
4. Monitor the **Events** and **Resources** tabs until `CREATE_COMPLETE`.

**📷 Screenshot Placeholder:**  
![Task 1 - Stack Creation](path/to/task1_screenshot.png)

---

### Task 2: Add an S3 Bucket

1. Edit `task1.yaml` to add an S3 bucket under `Resources:`  

```yaml
  MyS3Bucket:
    Type: AWS::S3::Bucket
````


Update the stack in the CloudFormation console.

Monitor until UPDATE_COMPLETE.

📷 Screenshot Placeholder:


Task 3: Add an EC2 Instance

Add the following parameter to the Parameters: section:

  AmazonLinuxAMIID:
    Type: AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>
    Default: /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2


Add the EC2 instance under Resources::

  AppServer:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: !Ref AmazonLinuxAMIID
      InstanceType: t3.micro
      SecurityGroupIds:
        - !Ref AppSecurityGroup
      SubnetId: !Ref PublicSubnet
      Tags:
        - Key: Name
          Value: App Server


Update the stack and monitor until UPDATE_COMPLETE.

📷 Screenshot Placeholder:


Task 4: Delete the Stack

In the CloudFormation console, select the stack and click Delete Stack.

Confirm deletion and verify that all resources are removed.

📷 Screenshot Placeholder:


📝 Notes

YAML formatting is crucial; incorrect indentation will break the template.

Use !Ref to reference other resources within the template.

Using parameters for AMI IDs allows the stack to work in any AWS region.
