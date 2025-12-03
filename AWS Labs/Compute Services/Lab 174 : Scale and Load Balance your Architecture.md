# Scaling and Load Balancing Your Architecture Lab

## Introduction
This lab shows how I designed a scalable and fault-tolerant architecture using Amazon EC2, an Elastic Load Balancer (ELB), and Auto Scaling. Throughout the lab, I worked step-by-step to build an environment that can automatically handle traffic changes, maintain availability, and recover from failures.

During this activity, I learned how to:

Launch EC2 instances and create a reusable AMI for consistent deployments.
Deploy an Application Load Balancer (ALB) to distribute incoming traffic evenly across instances.
Configure Launch Templates and Auto Scaling Groups so new instances can be created automatically whenever demand increases or decreases.
Monitor the system’s performance by setting up CloudWatch alarms, which trigger scaling actions when needed.
This lab is ideal for understanding how AWS handles **dynamic workloads** and ensures **high availability**.

## Overview

In this lab, I learned how to distribute traffic across multiple EC2 instances and automatically scale my infrastructure using an Elastic Load Balancer (ELB) and Auto Scaling. This helped me understand how to keep applications highly available, responsive, and able to handle changes in demand without manual intervention.

**Key Benefits:**
- **ELB** provides fault tolerance by distributing traffic across multiple instances.
- **Auto Scaling** ensures your application **scales with demand**, reducing costs during low traffic.

---

## Architecture

### Starting Architecture
<img width="759" height="437" alt="image" src="https://github.com/user-attachments/assets/5fb9d30b-8855-4923-a931-f3226f303816" />

*Web Server 1 in a public subnet.*

### Final Architecture
<img width="775" height="472" alt="image" src="https://github.com/user-attachments/assets/e2575fb6-0164-4560-a11c-947ba45b790d" />

*Load balancer and Auto Scaling group in private subnets across 2 Availability Zones.*

---

## Lab Objectives
After completing this lab, you will be able to:
1. Create an **AMI** from an EC2 instance.
2. Deploy an **Application Load Balancer (ALB)**.
3. Configure a **Launch Template** and **Auto Scaling Group**.
4. Launch EC2 instances in **private subnets** automatically.
5. Monitor your infrastructure using **CloudWatch alarms**.

---

## Lab Steps

### 1. Create an AMI
1. Navigate to **EC2 → Instances** in AWS Management Console.
2. Select **Web Server 1**.
3. Actions → Image and templates → Create image:
   - Name: `Web Server AMI`
   - Description: `Lab AMI for Web Server` (optional)
4. Save the **AMI ID** for later use.

<img width="1360" height="576" alt="image" src="https://github.com/user-attachments/assets/6ecf03c9-1349-468f-a948-9584ed7a9493" />

<img width="1353" height="574" alt="image" src="https://github.com/user-attachments/assets/6854a89d-ab5f-449c-88e1-c5d533046775" />

<img width="1363" height="564" alt="image" src="https://github.com/user-attachments/assets/33849625-4e2a-4ad8-b3c5-e75cb34f91c0" />

<img width="1365" height="566" alt="image" src="https://github.com/user-attachments/assets/1e6ec813-fccd-479d-953d-25bf72a75621" />


### 2. Create a Load Balancer
1. Load Balancers → Create Load Balancer → Application Load Balancer.
2. Configure:
   - Name: `LabELB`
   - VPC: `Lab VPC`
   - Subnets: `Public Subnet 1` and `Public Subnet 2`
   - Security Group: `Web Security Group`
3. Create Target Group:
   - Name: `lab-target-group`
   - Target type: Instances
4. Attach Target Group to Load Balancer.
5. Copy the **DNS name** for later testing.

<img width="1362" height="571" alt="image" src="https://github.com/user-attachments/assets/0043cd9c-b9ab-456b-b6f9-7af77e1ab5b4" />

<img width="818" height="533" alt="image" src="https://github.com/user-attachments/assets/97379d8e-8df0-4b1c-9535-1cfbd7cad4ec" />

<img width="1365" height="583" alt="image" src="https://github.com/user-attachments/assets/b9139e71-55f0-458a-9bd9-77eb08a593e8" />

<img width="1359" height="575" alt="image" src="https://github.com/user-attachments/assets/67c81571-64f7-410b-9be8-04210857173f" />

<img width="1360" height="457" alt="image" src="https://github.com/user-attachments/assets/5a32bb8d-12a1-48d6-9e57-e4993a35dae6" />

<img width="1365" height="566" alt="image" src="https://github.com/user-attachments/assets/0b415018-a653-45f3-87ea-d336a5c71950" />

<img width="1361" height="574" alt="image" src="https://github.com/user-attachments/assets/3e24a6ae-1544-4fbe-ab8c-fc7aa345f86d" />

<img width="1365" height="572" alt="image" src="https://github.com/user-attachments/assets/dd7b62ed-d4eb-45f5-9d2d-417136f86e96" />

<img width="1364" height="564" alt="image" src="https://github.com/user-attachments/assets/c55fbb67-e9da-45f2-a9de-74f99e3ef2c0" />
<img width="1365" height="564" alt="image" src="https://github.com/user-attachments/assets/40b422cc-e0d0-4cfc-a129-98e8e1162698" />

<img width="1365" height="565" alt="image" src="https://github.com/user-attachments/assets/9f93b780-2d86-42be-8dc2-254e249e8279" />


### 3. Create a Launch Template
1. Launch Templates → Create launch template.
2. Configure:
   - Name: `lab-app-launch-template`
   - AMI: `Web Server AMI`
   - Instance type: `t3.micro`
   - Security group: `Web Security Group`
3. Click **Create launch template**.

<img width="1365" height="575" alt="image" src="https://github.com/user-attachments/assets/75ab00f2-811f-47f6-b5c0-759c1ef5bbcc" />

<img width="1356" height="568" alt="image" src="https://github.com/user-attachments/assets/75495761-683d-492e-a3a5-3b23d84e5586" />

<img width="1355" height="560" alt="image" src="https://github.com/user-attachments/assets/b0d6f574-5f43-447a-8375-3928052ddbb5" />

<img width="1365" height="569" alt="image" src="https://github.com/user-attachments/assets/e632f11c-b73f-47f1-9915-4af1f1f72c8c" />

<img width="1365" height="575" alt="image" src="https://github.com/user-attachments/assets/ece8e5eb-eb01-4869-b78d-3d8242d61dea" />

<img width="1365" height="579" alt="image" src="https://github.com/user-attachments/assets/5af35a01-919e-4148-ab0d-2260f07965c0" />

<img width="1365" height="571" alt="image" src="https://github.com/user-attachments/assets/93fb1e8b-70e7-41c3-91f5-2f9223f356d1" />

<img width="1364" height="573" alt="image" src="https://github.com/user-attachments/assets/775ffb5f-d211-4414-ab95-4de845b8c332" />








---

### 4. Create an Auto Scaling Group
1. Select launch template → Actions → Create Auto Scaling Group.
2. Configure:
   - Name: `Lab Auto Scaling Group`
   - Subnets: `Private Subnet 1` and `Private Subnet 2`
   - Load Balancer: `lab-target-group`
   - Health check: `ELB`
   - Desired capacity: 2, Min: 2, Max: 4
   - Scaling policy: Target tracking, CPU 50%
   - Tag: `Name = Lab Instance`
3. Click **Create Auto Scaling group**.

<img width="1362" height="576" alt="image" src="https://github.com/user-attachments/assets/dc6fc0d4-d113-4e9a-a02f-d6b2eaae86fe" />

<img width="1365" height="598" alt="image" src="https://github.com/user-attachments/assets/e7cd9dfd-c00a-4958-8a33-bbf3765206cb" />

<img width="1354" height="576" alt="image" src="https://github.com/user-attachments/assets/d8bee8b2-fb4c-4740-aa7f-6bcf9810e742" />

<img width="1359" height="577" alt="image" src="https://github.com/user-attachments/assets/bed1f938-80dd-4623-a507-ac350903db87" />

<img width="1363" height="574" alt="image" src="https://github.com/user-attachments/assets/b30775a6-e331-4660-87d0-af0f59383d24" />

<img width="1365" height="563" alt="image" src="https://github.com/user-attachments/assets/1c75171b-0737-4b2e-895a-bccde62b325f" />

<img width="1365" height="569" alt="image" src="https://github.com/user-attachments/assets/b89525f4-2d2f-46a7-b45d-82c1eea2c4c2" />

<img width="1363" height="575" alt="image" src="https://github.com/user-attachments/assets/19d11fab-0344-4aea-a522-be99690289ab" />

<img width="1358" height="573" alt="image" src="https://github.com/user-attachments/assets/ff774ca6-9ceb-473e-be1c-1a3f0664ca4c" />

<img width="1352" height="226" alt="image" src="https://github.com/user-attachments/assets/ef21bc60-58f0-4bb7-bc7c-80168b3592ef" />

### 5. Verify Load Balancing
1. Check that **Lab Instances** are running in EC2 → Instances.
2. Go to **Target Groups → lab-target-group → Registered targets**.
3. Ensure **Health status** is `healthy`.
4. Open the **Load Balancer DNS** in browser to see the Load Test application.

<img width="1365" height="567" alt="image" src="https://github.com/user-attachments/assets/78757c3a-93d0-432a-b695-afb111c57f87" />

<img width="1361" height="570" alt="image" src="https://github.com/user-attachments/assets/4cd09f1e-6295-46dc-9d3c-8d8b0f8f0922" />

<img width="1363" height="568" alt="image" src="https://github.com/user-attachments/assets/79870d52-0abc-4cff-99b3-c988f3e02bf3" />

<img width="1152" height="218" alt="image" src="https://github.com/user-attachments/assets/fb8c84b9-3fd3-47a5-8b11-82224312d6fe" />

<img width="1139" height="400" alt="image" src="https://github.com/user-attachments/assets/a94fa6ca-48ff-402c-9dd9-0c62c6c00b30" />


### 6. Test Auto Scaling
1. Open **CloudWatch → Alarms**.
2. Locate **AlarmHigh** and **AlarmLow** for CPU utilization.
3. Generate load in the Load Test application to trigger Auto Scaling.
4. Confirm new instances in **EC2 → Instances**.

<img width="1360" height="570" alt="image" src="https://github.com/user-attachments/assets/9ce7aae8-2f91-4a9e-9ca4-200b25a255da" />

<img width="1365" height="579" alt="image" src="https://github.com/user-attachments/assets/5914d530-09e6-4808-9d33-a32d65b58d40" />

<img width="1365" height="572" alt="image" src="https://github.com/user-attachments/assets/9538daa9-84a2-43f2-8b7a-dbc396b4b111" />
<img width="1365" height="569" alt="image" src="https://github.com/user-attachments/assets/3351815e-6ee1-430c-9e07-b37c4d4d7442" />
<img width="1147" height="298" alt="image" src="https://github.com/user-attachments/assets/d04b08f2-cdaa-4bb7-a220-17399cc90078" />

<img width="1355" height="566" alt="image" src="https://github.com/user-attachments/assets/aa1622cf-d8f8-4376-8bb9-5b224665c1b9" />
<img width="1191" height="297" alt="image" src="https://github.com/user-attachments/assets/63d6d612-612f-4cc7-95d3-95440311c18c" />


### 7. Terminate Web Server 1
1. Select **Web Server 1** → Instance State → Terminate instance.

<img width="1363" height="577" alt="image" src="https://github.com/user-attachments/assets/a4b92cf3-0f61-459a-aa00-72de7887926c" />

<img width="1361" height="573" alt="image" src="https://github.com/user-attachments/assets/fa6a564c-bba2-43e2-b9b8-3aaeea07eccd" />

<img width="615" height="297" alt="image" src="https://github.com/user-attachments/assets/8024087e-4cba-48bd-86e9-2e36c0e960de" />

<img width="1185" height="351" alt="image" src="https://github.com/user-attachments/assets/fa010a84-8356-4f2f-9e4c-44366a6172e5" />







## Conclusion
Congratulations! You have successfully:  
- Created an AMI from an EC2 instance.  
- Deployed a Load Balancer.  
- Configured a Launch Template and Auto Scaling Group.  
- Launched EC2 instances in private subnets automatically.  
- Monitored infrastructure performance using CloudWatch alarms.  

This lab provides practical experience in **building resilient, scalable architectures** on AWS, which is a critical skill for cloud deployments.
