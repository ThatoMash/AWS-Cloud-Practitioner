# Configuring a VPC Lab

## Introduction
This lab demonstrates how to **create a Virtual Private Cloud (VPC) in AWS** and configure its networking components for secure and efficient communication.  
You will learn how to:  
- Create a **VPC** with public and private subnets.  
- Configure **Internet Gateway (IGW)** and **NAT Gateway** for connectivity.  
- Launch a **bastion server** in a public subnet.  
- Connect to resources in a private subnet via the bastion server.  

This lab is designed to provide practical experience in building **isolated, secure, and internet-connected networks** on AWS.

---

## Overview
Amazon VPC allows you to provision a logically isolated section of the AWS Cloud. You control your **IP ranges, subnets, route tables, and gateways**.  
In this lab, you will build a VPC, subnets, route tables, and gateways, and then deploy EC2 instances to test connectivity.

---

## Architecture

### Final Lab Architecture
<img width="759" height="468" alt="image" src="https://github.com/user-attachments/assets/255530c3-659f-4a38-a67c-551b6e051db2" />

*VPC with public and private subnets, EC2 instances in each subnet, NAT gateway in the public subnet, and associated route tables.*

---

## Lab Objectives
After completing this lab, you will be able to:
1. Create a VPC with public and private subnets, an Internet Gateway, and a NAT Gateway.  
2. Configure route tables for internet-bound and local traffic.  
3. Launch a bastion server in the public subnet.  
4. Connect to instances in the private subnet using the bastion server.  
5. (Optional) Test NAT Gateway connectivity from a private instance.

---

## Lab Steps

### 1. Create a VPC
1. Open **VPC → Your VPCs** in the AWS Management Console.  
2. Click **Create VPC**:
   - Name: `Lab VPC`  
   - IPv4 CIDR: `10.0.0.0/16`  
   - IPv6 CIDR: `No IPv6 CIDR block`  
   - Tenancy: `Default`  
3. After creating the VPC, edit **VPC settings** and **enable DNS hostnames**.

<img width="1364" height="566" alt="image" src="https://github.com/user-attachments/assets/f07cc049-e72a-4e9e-bc6e-209092b63acf" />

<img width="859" height="530" alt="image" src="https://github.com/user-attachments/assets/9e8c252e-5e4f-46cf-9503-8b8c7a7c9b1d" />

<img width="1365" height="593" alt="image" src="https://github.com/user-attachments/assets/bf08771b-b970-4e04-b949-e7e238b33397" />

<img width="1327" height="578" alt="image" src="https://github.com/user-attachments/assets/e8b2d931-0b45-45ac-9729-10b05d2661cf" />

<img width="1365" height="601" alt="image" src="https://github.com/user-attachments/assets/cc1c9386-81ae-4d29-ac9d-d7335c52dd03" />


### 2. Create Subnets

#### 2.1 Public Subnet
1. Open **Subnets → Create subnet**:
   - Name: `Public Subnet`  
   - VPC: `Lab VPC`  
   - Availability Zone: First AZ  
   - CIDR: `10.0.0.0/24`  
2. Enable **auto-assign public IPv4 addresses**.

#### 2.2 Private Subnet
1. Create a second subnet:
   - Name: `Private Subnet`  
   - VPC: `Lab VPC`  
   - Availability Zone: First AZ  
   - CIDR: `10.0.2.0/23`  

<img width="1365" height="600" alt="image" src="https://github.com/user-attachments/assets/315f31b9-8c73-44a1-bc8b-7dc047819d36" />

<img width="1355" height="571" alt="image" src="https://github.com/user-attachments/assets/8e18ff2c-6244-4cb9-85b6-42e3d0ee0292" />

<img width="1362" height="575" alt="image" src="https://github.com/user-attachments/assets/01f20023-558c-43d5-93c0-34a745f329bd" />

<img width="1180" height="281" alt="image" src="https://github.com/user-attachments/assets/9b3848ae-332a-4256-b917-7fdc61bed5b7" />

<img width="1365" height="579" alt="image" src="https://github.com/user-attachments/assets/0c2653e1-118d-4c06-9373-b17193e94644" />

<img width="1364" height="555" alt="image" src="https://github.com/user-attachments/assets/76101ce9-7176-4405-84be-af2bd92e55e8" />

<img width="1361" height="575" alt="image" src="https://github.com/user-attachments/assets/9b155d95-03b5-4dc8-ab94-1c8080a1eaad" />

<img width="1191" height="256" alt="image" src="https://github.com/user-attachments/assets/fce526dc-0c7a-4224-9794-ffb323639614" />



### 3. Create an Internet Gateway
1. Open **Internet Gateways → Create Internet Gateway**:
   - Name: `Lab IGW`  
2. Attach the Internet Gateway to `Lab VPC`.

<img width="1361" height="234" alt="image" src="https://github.com/user-attachments/assets/31afdbcf-7795-49ed-82ad-11e7811d477b" />

<img width="1363" height="427" alt="image" src="https://github.com/user-attachments/assets/84307696-6a5b-4e18-ab2a-d99d2418aa78" />

<img width="1365" height="344" alt="image" src="https://github.com/user-attachments/assets/4ecc0f7a-150b-42df-ac8c-fbf2f811cf5d" />

<img width="1365" height="331" alt="image" src="https://github.com/user-attachments/assets/5fdb9a66-defe-468e-9fcb-e893ba0e0d29" />


### 4. Configure Route Tables

#### 4.1 Public Route Table
1. Open **Route Tables → Create route table**:
   - Name: `Public Route Table`  
   - VPC: `Lab VPC`  
2. Edit routes:
   - Destination: `0.0.0.0/0` → Target: `Lab IGW`  
3. Associate **Public Subnet** with this route table.

#### 4.2 Private Route Table
1. Name the default route table: `Private Route Table`.

<img width="1356" height="494" alt="image" src="https://github.com/user-attachments/assets/988e30f1-4f34-4da8-8bb5-17ed27dd4910" />

<img width="1362" height="585" alt="image" src="https://github.com/user-attachments/assets/791ab113-d9b9-4776-8ec4-9b9a672301c4" />

<img width="1359" height="342" alt="image" src="https://github.com/user-attachments/assets/94a4e07c-c459-4683-81ed-1c5a27835604" />

<img width="1173" height="490" alt="image" src="https://github.com/user-attachments/assets/df6607b5-d82b-4b90-bbbd-6f3ca625274a" />

<img width="1198" height="342" alt="image" src="https://github.com/user-attachments/assets/e61b69f1-f265-4d15-9e24-60ff9b3c3bb3" />

<img width="1365" height="570" alt="image" src="https://github.com/user-attachments/assets/f4fc31c2-e136-4ea8-8c89-494dbab510d3" />

<img width="1362" height="394" alt="image" src="https://github.com/user-attachments/assets/2c833ab5-d309-448b-92d7-95ae06122f99" />

<img width="1365" height="580" alt="image" src="https://github.com/user-attachments/assets/2266ca57-a500-44b5-98d9-c4141c3b1f98" />



### 5. Launch a Bastion Server
1. Open **EC2 → Launch Instance**:
   - Name: `Bastion Server`  
   - AMI: `Amazon Linux 2023`  
   - Instance type: `t3.micro`  
   - VPC: `Lab VPC`, Subnet: `Public Subnet`  
   - Auto-assign public IP: Enabled  
   - Security Group: `Bastion Security Group` allowing SSH from anywhere  
2. Launch the instance.
<img width="1362" height="560" alt="image" src="https://github.com/user-attachments/assets/fd00de5f-c743-451a-a0fa-a7e54fe17d8e" />

<img width="1365" height="259" alt="image" src="https://github.com/user-attachments/assets/f8b2059f-494b-458f-8454-2f6f77e9139b" />

<img width="1363" height="572" alt="image" src="https://github.com/user-attachments/assets/8bdc6a9d-c239-4330-b5b1-ee522c7384c5" />
<img width="1353" height="488" alt="image" src="https://github.com/user-attachments/assets/aa28ae36-2e2c-483f-bd7a-82e580a45fcc" />

<img width="1294" height="417" alt="image" src="https://github.com/user-attachments/assets/e3dab767-3b99-4c22-a36a-b98e0ba67940" />

<img width="1360" height="572" alt="image" src="https://github.com/user-attachments/assets/f07d0239-3d08-47b3-ab50-9893880004f6" />

<img width="1365" height="338" alt="image" src="https://github.com/user-attachments/assets/3af82df5-b26a-4e92-a072-3b79dd1ed216" />
<img width="1359" height="205" alt="image" src="https://github.com/user-attachments/assets/63fb72ab-e25e-42c5-addd-2cd5b9096211" />

### 6. Create a NAT Gateway
1. Open **NAT Gateways → Create NAT Gateway**:
   - Name: `Lab NAT Gateway`  
   - Subnet: `Public Subnet`  
   - Allocate an Elastic IP  
2. Update **Private Route Table**:
   - Add route: `0.0.0.0/0` → Target: NAT Gateway
  
 <img width="1359" height="292" alt="image" src="https://github.com/user-attachments/assets/3f435688-fc4e-4394-b79b-f286f3b6d5f1" />
 <img width="1351" height="567" alt="image" src="https://github.com/user-attachments/assets/04d6a23d-b51c-47c4-91c5-ff1ac8994f95" />
<img width="1140" height="192" alt="image" src="https://github.com/user-attachments/assets/a7a2f0e3-685e-449e-8fbc-8d63b9913994" />

<img width="1365" height="588" alt="image" src="https://github.com/user-attachments/assets/00de19ac-c661-4ee4-8409-b0c7abdac2ef" />



  
