# Monitoring Infrastructure Lab

## Lab Overview
Monitoring your applications and infrastructure is critical for delivering reliable IT services. This lab demonstrates how to use **Amazon CloudWatch** and **AWS Config** to monitor EC2 instances, application logs, system metrics, real-time notifications, and infrastructure compliance.

**Objectives:**
- Install the CloudWatch agent on EC2 instances.
- Monitor application logs using CloudWatch Logs.
- Monitor system metrics using CloudWatch Metrics.
- Create real-time notifications using CloudWatch Events.
- Track infrastructure compliance using AWS Config.
<img width="668" height="202" alt="image" src="https://github.com/user-attachments/assets/d22d6bf3-f37d-4f45-9012-ce68237db78f" />


---

## Task 1: Installing the CloudWatch Agent
**Steps:**
1. Open **AWS Systems Manager** → **Run Command** → **AWS-ConfigureAWSPackage**.  
2. Configure the command:
   - **Action:** Install  
   - **Name:** AmazonCloudWatchAgent  
   - **Version:** latest  
   - **Target Instance:** Web Server
  
     <img width="1353" height="566" alt="image" src="https://github.com/user-attachments/assets/75e5856e-4b09-4793-89c0-897c3f67ab54" />

     <img width="1359" height="559" alt="image" src="https://github.com/user-attachments/assets/33e6e27a-92de-4bc5-b0d9-2b5b0f6ba2b4" />


3. Verify installation output: `Successfully installed arn:aws:ssm:::package/AmazonCloudWatchAgent`.  
4. Store CloudWatch agent configuration in **Parameter Store**:
   - **Name:** Monitor-Web-Server  
   - **Description:** Collect web logs and system metrics  
   - **Value:** JSON configuration for logs and metrics.  
5. Start CloudWatch agent using **Run Command**:
   - **Document:** AmazonCloudWatch-ManageAgent  
   - **Action:** configure  
   - **Mode:** ec2  
   - **Optional Configuration Source:** ssm  
   - **Optional Configuration Location:** Monitor-Web-Server  
   - **Optional Restart:** yes  
6. Verify CloudWatch agent is running.

**Screenshot Placeholder:**
<img width="1359" height="570" alt="image" src="https://github.com/user-attachments/assets/b0bbbcc2-218a-4a33-b0d3-933103867ad4" />


---

## Task 2: Monitoring Application Logs Using CloudWatch Logs

<img width="713" height="160" alt="image" src="https://github.com/user-attachments/assets/a1315173-3ab6-4d36-9785-863da4744da7" />

**Steps:**
1. Access **Web Server** IP and open a browser.
2. Trigger a 404 error by requesting a non-existent page, e.g., `/start`.  
3. Open **CloudWatch** → **Log groups** → `HttpAccessLog` and `HttpErrorLog`.  
4. Create a **metric filter** for 404 errors:
   - **Filter pattern:** `[ip, id, user, timestamp, request, status_code=404, size]`  
   - **Metric namespace:** LogMetrics  
   - **Metric name:** 404Errors  
   - **Metric value:** 1  
5. Create an **alarm**:
   - **Period:** 1 minute  
   - **Condition:** Greater/Equal than 5  
   - **Notification:** SNS Topic with your email  
6. Generate additional 404 errors to trigger alarm and check email.

**Screenshot Placeholder:**
<img width="1358" height="559" alt="image" src="https://github.com/user-attachments/assets/50a457db-c2aa-4cfc-8ea9-382654fa7f14" />

<img width="1354" height="513" alt="image" src="https://github.com/user-attachments/assets/9c06115a-7cb5-4d15-b077-107b89574a39" />

<img width="1360" height="559" alt="image" src="https://github.com/user-attachments/assets/a659f86b-4580-47cf-b8ff-93637fd57ea7" />




---

## Task 3: Monitoring Instance Metrics Using CloudWatch
**Steps:**
1. Open **EC2** → select **Web Server** → **Monitoring tab**.
2. Examine CPU, disk, and network metrics.  
3. Open **CloudWatch** → **Metrics** → **All metrics** → `CWAgent`.
4. View collected metrics:
   - Disk space (`device`, `fstype`, `host`, `path`)  
   - Memory usage (`host`)  
5. Explore additional metrics captured by the CloudWatch agent.

**Screenshot Placeholder:**
![Task 3: CloudWatch Metrics](path/to/task3_screenshot.png)

---

## Task 4: Creating Real-Time Notifications
**Steps:**
1. Open **CloudWatch** → **Events** → **Rules** → **Create rule**.
2. Configure rule:
   - **Name:** Instance_Stopped_Terminated  
   - **Event source:** AWS Services → EC2 → EC2 Instance State-change Notification  
   - **Specific states:** stopped, terminated  
   - **Target:** SNS Topic → Default_CloudWatch_Alarms_Topic  
3. Stop the **Web Server** instance to test notifications.
4. Verify that email is received with JSON details.

**Screenshot Placeholder:**
![Task 4: CloudWatch Event Notifications](path/to/task4_screenshot.png)

---

## Task 5: Monitoring for Infrastructure Compliance
**Steps:**
1. Open **AWS Config** → **Rules** → **Add rule**.  
2. Add **required-tags** rule:
   - **Tag key:** project  
3. Add **ec2-volume-inuse-check** rule to identify unattached EBS volumes.  
4. Wait for rules to evaluate compliance.  
5. Review results:
   - `required-tags`: Compliant EC2 instances and non-compliant resources  
   - `ec2-volume-inuse-check`: Compliant attached volumes and non-compliant unattached volumes  

**Screenshot Placeholder:**
![Task 5: AWS Config Compliance](path/to/task5_screenshot.png)

---

## Summary
This lab demonstrates:

- Installing and configuring the CloudWatch agent to collect system and application metrics.
- Monitoring logs and creating metric filters for real-time alarms.
- Viewing and analyzing CloudWatch Metrics for instance performance.
- Creating real-time notifications for EC2 instance state changes.
- Evaluating infrastructure compliance using AWS Config rules.

**Replace the screenshot placeholders with your own images for a complete documentation.**
