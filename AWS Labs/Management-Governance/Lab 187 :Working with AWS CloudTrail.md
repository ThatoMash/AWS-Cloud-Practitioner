# AWS CloudTrail Lab: Investigating a Security Incident

## Project Overview
In this lab, you simulate a security incident on a **Café website** hosted on an **EC2 instance**. Using **AWS CloudTrail**, you audit actions in your account, analyze logs, and identify the user responsible for compromising the security of the EC2 instance. Finally, you secure the environment and prevent future unauthorized access.  

![Architecture Diagram](screenshots/architecture_diagram.png)  
*Figure 1: Lab architecture diagram*

## Objectives
- Configure a CloudTrail trail for auditing AWS account activity  
- Analyze CloudTrail logs using Linux tools (`grep`, `cat`) and AWS CLI  
- Import CloudTrail logs into Amazon Athena and run SQL queries  
- Identify unauthorized changes to the EC2 security group  
- Investigate OS-level logins and remove unauthorized users  
- Secure the AWS account and EC2 instance  

## Duration
Approximately **75 minutes**

## Architecture Overview
- **Café Web Server**: EC2 instance hosting the website  
- **Security Group**: Manages inbound access rules (HTTP, SSH)  
- **CloudTrail**: Audits API calls and changes to AWS resources  
- **Athena**: SQL-based analysis of CloudTrail logs  

## Tools and Services Used
- AWS CloudTrail  
- Amazon EC2  
- Security Groups  
- AWS CLI  
- Linux utilities (`grep`, `cat`, `gunzip`)  
- Amazon Athena  

## Implementation Details

### Task 1: Modify Security Group
1. Open EC2 > Café Web Server instance  
2. Security > Inbound rules  
3. Add SSH access (Port 22) for your IP only (/32)  
4. Verify website works: `http://<WebServerIP>/cafe`  

![Café Website Before Hack](screenshots/cafe_website_before.png)  
*Figure 2: Café website before hack*

### Task 2: Create CloudTrail Trail
1. Console > CloudTrail > Trails > Create Trail  
2. Name: `monitor`  
3. Create new S3 bucket: `monitoring####`  
4. AWS KMS alias: `<initials>-KMS`  
5. Log all events, create trail  
6. Refresh Café website to observe hack  

![Café Website After Hack](screenshots/cafe_website_hacked.png)  
*Figure 3: Café website after hack*

### Task 3: Analyze Logs (Linux + AWS CLI)
```bash
# SSH into EC2 instance
ssh -i labsuser.pem ec2-user@<public-ip>

# Create directory for logs
mkdir ctraillogs
cd ctraillogs

# Download logs from S3
aws s3 cp s3://<monitoring####>/ . --recursive

# Extract logs
gunzip *.gz

# Use grep to filter events
for i in $(ls); do echo $i && cat $i | python -m json.tool | grep sourceIPAddress ; done
for i in $(ls); do echo $i && cat $i | python -m json.tool | grep eventName ; done

# AWS CLI CloudTrail commands
aws cloudtrail lookup-events --lookup-attributes AttributeKey=Re

