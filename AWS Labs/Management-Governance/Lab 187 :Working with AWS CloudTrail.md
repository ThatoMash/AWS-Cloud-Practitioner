# AWS CloudTrail Lab – Café Website Security Investigation

## Overview
In this activity, you create an AWS CloudTrail trail to audit actions in your account and investigate modifications to the Café website. The lab starts with an EC2 instance named **Café Web Server**, hosting a web application for the Café website. You will observe, investigate, analyze logs, and secure the system after identifying a hacker.

---

## Architectural Diagram

![Placeholder for Architectural Diagram](./images/architectural-diagram.png)

---

## Duration
Approximately **75 minutes**.

---

## Objectives
After completing this activity, you will be able to:
- Configure a CloudTrail trail.
- Analyze CloudTrail logs using Linux utilities, AWS CLI, and Athena.
- Import CloudTrail log data into Athena and query it.
- Identify security issues and remediate them on AWS and EC2.

---

## Business Case
The Café website was hacked. Martha and Frank rely on you to identify the hacker and ensure the system is secure. Faythe, Frank, Martha, and others often make changes to the website, and sometimes mistakes occur. Your role is to act as a detective and uncover the culprit using AWS CloudTrail and Athena.

---

## Activity Steps

### Launching the Lab
1. Click **Start Lab** and wait for **Lab status: ready**.
2. Open the AWS Management Console in a new tab.
3. Arrange the Console alongside these instructions for easy reference.

---

### Task 1: Modifying a Security Group & Observing the Website
1. Open **EC2 > Instances** and select **Café Web Server (WebSecurityGroup)**.
2. Go to the **Security tab** > **Inbound rules**.
3. Add a rule:
   - Type: SSH
   - Port Range: 22
   - Source: My IP (/32)
4. Save rules.
5. Navigate to `http://<WebServerIP>/cafe/` and confirm the website appears normal.

---

### Task 2: Creating a CloudTrail Log & Observing the Hack

#### Task 2.1: Create CloudTrail Trail
1. Go to **Management & Governance > CloudTrail > Trails > Create trail**.
2. Configure:
   - Trail name: `monitor`
   - Create new S3 bucket: `monitoring####`
   - AWS KMS alias: `<your-initials>-KMS`
3. Choose **Next**, then **Create trail**.

#### Task 2.2: Observe the Hack
1. Refresh `http://<WebServerIP>/cafe/`.
2. Notice unauthorized changes (SSH rule open to 0.0.0.0/0).

---

### Task 3: Analyzing CloudTrail Logs with `grep` & AWS CLI

#### 3.1: Connect via SSH
- **Windows**: Use PuTTY with `labsuser.ppk`.
- **macOS/Linux**: Use `ssh -i labsuser.pem ec2-user@<public-ip>`.

#### 3.2: Download & Extract Logs
```bash
mkdir ctraillogs
cd ctraillogs
aws s3 cp s3://<monitoring####>/ . --recursive
gunzip *.gz
```

#### 3.3: Analyze Logs with `grep`
- Filter by IP:
```bash
ip=<WebServerIP>
for i in $(ls); do echo $i && cat $i | python -m json.tool | grep sourceIPAddress ; done
```
- Filter event names:
```bash
for i in $(ls); do echo $i && cat $i | python -m json.tool | grep eventName ; done
```

#### 3.4: Analyze Logs with AWS CLI
```bash
region=$(curl http://169.254.169.254/latest/dynamic/instance-identity/document|grep region | cut -d '"' -f4)
sgId=$(aws ec2 describe-instances --filters "Name=tag:Name,Values='Cafe Web Server'" --query 'Reservations[*].Instances[*].SecurityGroups[*].[GroupId]' --region $region --output text)
aws cloudtrail lookup-events --lookup-attributes AttributeKey=ResourceType,AttributeValue=AWS::EC2::SecurityGroup --region $region --output text | grep $sgId
```

---

### Task 4: Analyzing Logs with Athena

#### 4.1: Create Athena Table
1. Go to **CloudTrail > Event History > Create Athena Table**.
2. Set the storage location to `s3://monitoring####/`.
3. Review **CREATE TABLE** statement and create table.

#### 4.2: Query Logs
- Basic query (first 5 rows):
```sql
SELECT * FROM cloudtrail_logs_monitoring#### LIMIT 5;
```
- User-focused query:
```sql
SELECT useridentity.userName, eventtime, eventsource, eventname, requestparameters
FROM cloudtrail_logs_monitoring####
LIMIT 30;
```

#### Challenge: Identify the Hacker
- Filter by security events, EC2 events, or suspicious actions.
- Example query:
```sql
SELECT DISTINCT useridentity.userName, eventName, eventSource
FROM cloudtrail_logs_monitoring####
WHERE from_iso8601_timestamp(eventtime) > date_add('day', -1, now())
ORDER BY eventSource;
```
- Determine:
  - Hacker AWS username
  - Time of hack
  - IP address
  - Access method (console/programmatic)

![Placeholder for Athena Query Screenshot](./images/athena-query.png)

---

### Task 5: Remediate & Secure

#### 5.1: Check OS Users
```bash
sudo aureport --auth
who
sudo userdel -r chaos-user
sudo kill -9 <ProcNum>
```

#### 5.2: Update SSH Security
```bash
sudo vi /etc/ssh/sshd_config
# Comment out PasswordAuthentication yes
# Uncomment PasswordAuthentication no
sudo service sshd restart
```
- Remove the unauthorized inbound SSH rule in EC2 security group.

#### 5.3: Restore Website
```bash
cd /var/www/html/cafe/images/
sudo mv Coffee-and-Pastries.backup Coffee-and-Pastries.jpg
```
- Refresh the website to confirm restoration.

#### 5.4: Delete AWS Hacker User
- Go to **IAM > Users**, select **chaos**, choose **Delete**.

![Placeholder for Security Fix Screenshot](./images/security-fix.png)

---

## Summary
- Successfully created CloudTrail trail.
- Identified and removed the hacker.
- Analyzed logs via Linux `grep`, AWS CLI, and Athena.
- Restored website and updated security.

![Placeholder for Final Result Screenshot](./images/final-result.png)
