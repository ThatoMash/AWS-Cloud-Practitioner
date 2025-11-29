# Scaling and Load Balancing Your Architecture Lab

## Introduction
This lab demonstrates how to **design a scalable and fault-tolerant architecture** using **Amazon EC2, Elastic Load Balancing (ELB), and Auto Scaling**.  
You will learn how to:  
- Launch EC2 instances and create a reusable **AMI**.  
- Deploy an **Application Load Balancer** to distribute traffic.  
- Configure **Launch Templates** and **Auto Scaling Groups** for automated scaling.  
- Monitor performance using **CloudWatch alarms**.  

This lab is ideal for understanding how AWS handles **dynamic workloads** and ensures **high availability**.

---

## Overview
In this lab, you will learn how to **distribute traffic** across multiple EC2 instances and **automatically scale** your infrastructure using ELB and Auto Scaling.

**Key Benefits:**
- **ELB** provides fault tolerance by distributing traffic across multiple instances.
- **Auto Scaling** ensures your application **scales with demand**, reducing costs during low traffic.

---

## Architecture

### Starting Architecture
![Starting Architecture](./images/starting-architecture.png)
*Web Server 1 in a public subnet.*

### Final Architecture
![Final Architecture](./images/final-architecture.png)
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

![Create AMI](./images/create-ami.png)

---

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

![Create Load Balancer](./images/create-load-balancer.png)

---

### 3. Create a Launch Template
1. Launch Templates → Create launch template.
2. Configure:
   - Name: `lab-app-launch-template`
   - AMI: `Web Server AMI`
   - Instance type: `t3.micro`
   - Security group: `Web Security Group`
3. Click **Create launch template**.

![Create Launch Template](./images/create-launch-template.png)

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

![Create Auto Scaling Group](./images/create-auto-scaling-group.png)

---

### 5. Verify Load Balancing
1. Check that **Lab Instances** are running in EC2 → Instances.
2. Go to **Target Groups → lab-target-group → Registered targets**.
3. Ensure **Health status** is `healthy`.
4. Open the **Load Balancer DNS** in browser to see the Load Test application.

![Verify Load Balancing](./images/verify-load-balancing.png)

---

### 6. Test Auto Scaling
1. Open **CloudWatch → Alarms**.
2. Locate **AlarmHigh** and **AlarmLow** for CPU utilization.
3. Generate load in the Load Test application to trigger Auto Scaling.
4. Confirm new instances in **EC2 → Instances**.

![Testing Auto Scaling](./images/testing-auto-scaling.png)

---

### 7. Terminate Web Server 1
1. Select **Web Server 1** → Instance State → Terminate instance.

![Terminate Web Server](./images/terminate-web-server.png)

---

### Optional: Create an AMI using AWS CLI
- Connect via **EC2 Instance Connect**.
- Configure AWS CLI credentials.
- Use CLI commands to create a new AMI from your instance.

---

## Conclusion
Congratulations! You have successfully:  
- Created an AMI from an EC2 instance.  
- Deployed a Load Balancer.  
- Configured a Launch Template and Auto Scaling Group.  
- Launched EC2 instances in private subnets automatically.  
- Monitored infrastructure performance using CloudWatch alarms.  

This lab provides practical experience in **building resilient, scalable architectures** on AWS, which is a critical skill for cloud deployments.
