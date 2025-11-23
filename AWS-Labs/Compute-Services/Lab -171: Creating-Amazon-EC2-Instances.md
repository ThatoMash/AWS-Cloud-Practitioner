# Lab: Creating Amazon EC2 Instances

This lab demonstrates launching and managing **Amazon EC2 instances** using the AWS Management Console and AWS CLI. You will create a **bastion host** and a **web server** in a VPC.

---

## 📋 Lab Objectives

- Launch an EC2 instance using the **AWS Management Console**  
- Connect to an EC2 instance using **EC2 Instance Connect**  
- Launch an EC2 instance using the **AWS CLI**  
- Test the web server deployment  

---

## 🛠️ Lab Architecture

**Final architecture: Bastion host + Web Server**  

**📷 Architecture Placeholder:**  
![EC2 Architecture](path/to/ec2_architecture.png)

---

## Lab Steps

### Task 1: Launch EC2 Instance via Console (Bastion Host)

1. Open the **EC2 Management Console** and click **Launch Instance**.  
2. **Name and tags:** Enter `Bastion host` for the instance name.  
3. **Choose AMI:** Select **Amazon Linux 2**.  
4. **Instance Type:** Select `t3.micro`.  
5. **Key Pair:** Choose **Proceed without key pair**.  
6. **Network Settings:**  
   - VPC: `Lab VPC`  
   - Subnet: `Public Subnet`  
   - Auto-assign Public IP: **Enable**  
   - Security Group: `Bastion security group` (Permit SSH connections)  
7. **Storage:** Keep default (8 GiB root volume).  
8. **Advanced Details:** IAM role: `Bastion-Role`.  
9. Review and **Launch instance**.

**📷 Screenshot Placeholder:**  
![Task 1 - Launch Bastion Host](path/to/task1_bastion.png)

---

### Task 2: Connect to Bastion Host

1. In the EC2 console, select the bastion host instance.  
2. Click **Connect** → **EC2 Instance Connect**.  
3. You can now run AWS CLI commands from the bastion host.

**📷 Screenshot Placeholder:**  
![Task 2 - Connect Bastion Host](path/to/task2_connect.png)

---

### Task 3: Launch EC2 Instance via AWS CLI (Web Server)

1. **Retrieve latest Amazon Linux 2 AMI:**

```bash
AZ=$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone)
export AWS_DEFAULT_REGION=${AZ::-1}
AMI=$(aws ssm get-parameters --names /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 --query 'Parameters[0].[Value]' --output text)
echo $AMI
````

## Retrieve Security Group ID:

SG=$(aws ec2 describe-security-groups --filters Name=group-name,Values=WebSecurityGroup --query SecurityGroups[].GroupId --output text)
echo $SG


## Download user data script:

wget https://aws-tc-largeobjects.s3.us-west-2.amazonaws.com/CUR-TF-100-RSJAWS-1-23732/171-lab-JAWS-create-ec2/s3/UserData.txt
cat UserData.txt


## Launch web server instance:

INSTANCE=$(aws ec2 run-instances \
--image-id $AMI \
--subnet-id $SUBNET \
--security-group-ids $SG \
--user-data file:///home/ec2-user/UserData.txt \
--instance-type t3.micro \
--tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=Web Server}]' \
--query 'Instances[*].InstanceId' \
--output text)
echo $INSTANCE


## Wait for instance to be running:

aws ec2 describe-instances --instance-ids $INSTANCE --query 'Reservations[].Instances[].State.Name' --output text


## Test the web server:

aws ec2 describe-instances --instance-ids $INSTANCE --query Reservations[].Instances[].PublicDnsName --output text


Open the DNS in a browser. You should see the web application running.

📷 Screenshot Placeholder:




📝 Notes

Use EC2 Instance Connect for secure connections without a key pair.

Use AWS CLI for automated, repeatable instance launches.

Use CloudFormation if deploying multiple related resources together.
